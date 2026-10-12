import os
import re
import json
from bs4 import BeautifulSoup

temp_dir = os.environ.get('TEMP', '')
base_dir = r'd:\My AI Project\Game Guide\Digimon Card Battle'

categories = [
    ('fire', 'Fire', 'fireCards.json'),
    ('ice', 'Ice', 'iceCards.json'),
    ('nature', 'Nature', 'natureCards.json'),
    ('darkness', 'Darkness', 'darknessCards.json'),
    ('rare', 'Rare', 'rareCards.json'),
    ('partner', 'Partner', 'partnerCards.json'),
    ('option', 'Option', 'optionCards.json')
]

ICON_MAP = {
    'B_c.gif': 'circle',
    'B_t.gif': 'triangle',
    'B_x.gif': 'x',
}


def clean_icon_url(url):
    if not url:
        return ''
    if '/revision/latest' in url:
        return url.split('/revision/latest')[0]
    return url


def clean_safe_filename(no, name):
    safe_name = re.sub(r'[^a-zA-Z0-9_-]', '_', name)
    return f"{no}_{safe_name}.jpg"


def extract_attack(value_el):
    """Return (text, effects[]).

    Icon images are replaced in place with ``[[token]]`` placeholders so the
    rendered order matches the wiki, e.g. ``Shining Blade (0), [[circle]] Counter``.
    ``effects`` still lists the tokens for filtering/reporting.
    """
    if value_el is None:
        return '', []

    effects = []
    for img in value_el.find_all('img'):
        key = img.get('data-image-key') or ''
        token = ICON_MAP.get(key)
        if token:
            effects.append(token)
            img.replace_with(f' [[{token}]] ')

    text = value_el.get_text(separator=' ', strip=True)
    text = re.sub(r'\s+', ' ', text).strip()
    text = re.sub(r'\s*\[\[([a-z]+)\]\]\s*', r' [[\1]] ', text)
    text = re.sub(r'\s+([,.;:])', r'\1', text).strip()
    return text, effects


def get_val(box, data_source):
    el = box.select_one(f'[data-source="{data_source}"].pi-data-value')
    if not el:
        el = box.select_one(f'.pi-smart-data-value[data-source="{data_source}"]')
    return el

for cat_key, cat_default_specialty, out_filename in categories:
    html_file = os.path.join(temp_dir, f'ddcb_{cat_key}.html')
    if not os.path.exists(html_file):
        print(f"Skipping {cat_key}: {html_file} not found")
        continue

    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'lxml')

    cards = []
    for box in soup.select('aside.portable-infobox'):
        title_el = box.select_one('h2.pi-title')
        title_text = title_el.get_text(separator=' ', strip=True) if title_el else ''

        m = re.match(r'^(\d+)\s*:\s*(.*)$', title_text)
        if m:
            no = m.group(1).zfill(3)
            name = m.group(2).strip()
        else:
            no = ''
            name = title_text

        img_el = box.select_one('figure img')
        card_icon = clean_icon_url(img_el.get('src', '')) if img_el else ''

        def text_of(data_source):
            el = get_val(box, data_source)
            return el.get_text(separator=' ', strip=True) if el else ''

        if cat_key == 'option':
            effect_el = get_val(box, 'effect')
            effect, effect_fx = extract_attack(effect_el)
            card = {
                'no': no,
                'name': name,
                'cardIcon': card_icon,
                'level': 'Option',
                'specialty': 'Option',
                'hp': '',
                'dp': '',
                'plusP': '',
                'circle': '',
                'circleEffects': [],
                'triangle': '',
                'triangleEffects': [],
                'x': '',
                'xEffects': [],
                'support': effect,
                'effect': effect,
                'effectIcons': effect_fx,
                'category': 'Option',
                'localIcon': f"assets/cards/{clean_safe_filename(no, name)}"
            }
        else:
            circle, circle_fx = extract_attack(get_val(box, 'c_attack'))
            triangle, triangle_fx = extract_attack(get_val(box, 't_attack'))
            x_att, x_fx = extract_attack(get_val(box, 'x_attack'))
            support_txt, support_fx = extract_attack(get_val(box, 'support'))

            card = {
                'no': no,
                'name': name,
                'cardIcon': card_icon,
                'level': text_of('level'),
                'specialty': text_of('specialty') or cat_default_specialty,
                'hp': text_of('hp'),
                'dp': text_of('dp'),
                'plusP': text_of('pp'),
                'circle': circle,
                'circleEffects': circle_fx,
                'triangle': triangle,
                'triangleEffects': triangle_fx,
                'x': x_att,
                'xEffects': x_fx,
                'support': support_txt,
                'supportIcons': support_fx,
                'category': cat_default_specialty,
                'localIcon': f"assets/cards/{clean_safe_filename(no, name)}"
            }

        cards.append(card)

    out_path = os.path.join(base_dir, out_filename)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(cards, f, indent=2, ensure_ascii=False)
    count_fx = sum(1 for c in cards if c.get('xEffects') or c.get('circleEffects') or c.get('triangleEffects'))
    print(f"Parsed {len(cards)} cards -> {out_filename} ({count_fx} with effect icons)")
