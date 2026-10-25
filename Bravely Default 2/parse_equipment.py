#!/usr/bin/env python3
"""
parse_equipment.py - Generates equipmentData.json and equipmentData.js for Bravely Default II.
Parses Weapons, Armor, and Accessories from Bravely Default Fandom wiki tables.
"""

import json
import os
import re
import ssl
import urllib.request

OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'equipmentData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'equipmentData.js')
SSL_CTX = ssl._create_unverified_context()

def to_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

def clean_wiki_text(text):
    if not text:
        return ''
    # remove [[link|text]] -> text, [[link]] -> link
    text = re.sub(r'\[\[(?:[^|\]]+\|)?([^\]]+)\]\]', r'\1', text)
    # remove bold / italics
    text = re.sub(r"'''?", '', text)
    # replace <br /> with comma space
    text = re.sub(r'<br\s*/?>', ', ', text)
    # remove other html tags
    text = re.sub(r'<[^>]+>', '', text)
    return text.strip()

def fetch_wikitext(page_name):
    url = f"https://bravelydefault.fandom.com/api.php?action=parse&page={urllib.parse.quote(page_name)}&prop=wikitext&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=SSL_CTX, timeout=20) as r:
            data = json.loads(r.read())
            return data.get('parse', {}).get('wikitext', {}).get('*', '')
    except Exception as e:
        print(f"Error fetching {page_name}: {e}")
        return ''

def parse_weapons(wikitext):
    weapons = []
    # split by section
    sections = re.split(r'==\s*([^=]+?)\s*==', wikitext)
    for i in range(1, len(sections), 2):
        sec_name = sections[i].strip()
        sec_body = sections[i+1]
        
        # Determine category
        cat = 'Weapon'
        sub_cat = 'Sword'
        for k in ['Dagger', 'Sword', 'Axe', 'Spear', 'Bow', 'Staff', 'Rod']:
            if k.lower() in sec_name.lower():
                sub_cat = k
                break
        
        # Rows start with ! rowspan="2" class="b" |Name
        rows = re.split(r'\|\-\s*\n!', sec_body)
        for r in rows[1:]:
            parts = r.split('\n|-')
            main_row = parts[0]
            desc_row = parts[1] if len(parts) > 1 else ''

            # parse main row lines
            lines = [l.strip() for l in main_row.split('\n|') if l.strip()]
            if not lines:
                continue

            name_line = lines[0].split('|')[-1]
            name = clean_wiki_text(name_line)
            if not name or 'Name' in name:
                continue

            num = lines[1] if len(lines) > 1 else ''
            patk = lines[2] if len(lines) > 2 else '0'
            matk = lines[3] if len(lines) > 3 else '0'
            aim = lines[4] if len(lines) > 4 else '0'
            crit = lines[5] if len(lines) > 5 else '0'
            weight = lines[6] if len(lines) > 6 else '0'
            cost = lines[7] if len(lines) > 7 else '0'
            acquire = clean_wiki_text(lines[8]) if len(lines) > 8 else ''

            desc = clean_wiki_text(desc_row.split('|')[-1]) if desc_row else ''

            slug = f"{to_slug(sub_cat)}-{to_slug(name)}"

            def to_int(v, d=0):
                m = re.search(r'-?\d+', str(v))
                return int(m.group(0)) if m else d

            weapons.append({
                'id': slug,
                'name': name,
                'category': 'Weapons',
                'subCategory': sub_cat,
                'type': sub_cat,
                'number': num.strip(),
                'pAtk': to_int(patk),
                'mAtk': to_int(matk),
                'pDef': 0,
                'mDef': 0,
                'aim': to_int(aim),
                'crit': to_int(crit),
                'evasion': 0,
                'speed': 0,
                'weight': to_int(weight),
                'cost': to_int(cost),
                'acquire': acquire,
                'description': desc,
                'effect': desc,
                'isTribulation': 'Halls of Tribulation' in sec_name
            })
    return weapons

def parse_armor(wikitext):
    armors = []
    sections = re.split(r'==\s*([^=]+?)\s*==', wikitext)
    for i in range(1, len(sections), 2):
        sec_name = sections[i].strip()
        sec_body = sections[i+1]
        
        sub_cat = 'Armor'
        if 'shield' in sec_name.lower():
            sub_cat = 'Shield'
        elif 'head' in sec_name.lower():
            sub_cat = 'Headwear'
        elif 'armour' in sec_name.lower() or 'armor' in sec_name.lower():
            sub_cat = 'Armour'

        rows = re.split(r'\|\-\s*\n!', sec_body)
        for r in rows[1:]:
            parts = r.split('\n|-')
            main_row = parts[0]
            desc_row = parts[1] if len(parts) > 1 else ''

            lines = [l.strip() for l in main_row.split('\n|') if l.strip()]
            if not lines:
                continue

            name_line = lines[0].split('|')[-1]
            name = clean_wiki_text(name_line)
            if not name or 'Name' in name:
                continue

            num = lines[1] if len(lines) > 1 else ''
            pdef = lines[2] if len(lines) > 2 else '0'
            mdef = lines[3] if len(lines) > 3 else '0'
            evasion = lines[4] if len(lines) > 4 else '0'
            weight = lines[5] if len(lines) > 5 else '0'
            cost = lines[6] if len(lines) > 6 else '0'
            acquire = clean_wiki_text(lines[7]) if len(lines) > 7 else ''

            desc = clean_wiki_text(desc_row.split('|')[-1]) if desc_row else ''

            def to_int(v, d=0):
                m = re.search(r'-?\d+', str(v))
                return int(m.group(0)) if m else d

            slug = f"{to_slug(sub_cat)}-{to_slug(name)}"

            armors.append({
                'id': slug,
                'name': name,
                'category': 'Shields' if sub_cat == 'Shield' else 'Armor',
                'subCategory': sub_cat,
                'type': sub_cat,
                'number': num.strip(),
                'pAtk': 0,
                'mAtk': 0,
                'pDef': to_int(pdef),
                'mDef': to_int(mdef),
                'aim': 0,
                'crit': 0,
                'evasion': to_int(evasion),
                'speed': 0,
                'weight': to_int(weight),
                'cost': to_int(cost),
                'acquire': acquire,
                'description': desc,
                'effect': desc,
                'isTribulation': 'Halls of Tribulation' in sec_name
            })
    return armors

def parse_accessories(wikitext):
    accessories = []
    rows = re.split(r'\|\-\s*\n!', wikitext)
    for r in rows[1:]:
        parts = r.split('\n|-')
        main_row = parts[0]
        desc_row = parts[1] if len(parts) > 1 else ''

        lines = [l.strip() for l in main_row.split('\n|') if l.strip()]
        if not lines:
            continue

        name_line = lines[0].split('|')[-1]
        name = clean_wiki_text(name_line)
        if not name or 'Name' in name:
            continue

        num = lines[1] if len(lines) > 1 else ''
        effect = clean_wiki_text(lines[2]) if len(lines) > 2 else ''
        weight = lines[3] if len(lines) > 3 else '0'
        cost = lines[4] if len(lines) > 4 else '0'
        acquire = clean_wiki_text(lines[5]) if len(lines) > 5 else ''

        desc = clean_wiki_text(desc_row.split('|')[-1]) if desc_row else effect

        def to_int(v, d=0):
            m = re.search(r'-?\d+', str(v))
            return int(m.group(0)) if m else d

        slug = f"acc-{to_slug(name)}"

        accessories.append({
            'id': slug,
            'name': name,
            'category': 'Accessories',
            'subCategory': 'Accessory',
            'type': 'Accessory',
            'number': num.strip(),
            'pAtk': 0,
            'mAtk': 0,
            'pDef': 0,
            'mDef': 0,
            'aim': 0,
            'crit': 0,
            'evasion': 0,
            'speed': 0,
            'weight': to_int(weight),
            'cost': to_int(cost),
            'acquire': acquire,
            'description': desc,
            'effect': effect or desc,
            'isTribulation': False
        })
    return accessories

def main():
    print("Fetching weapon wikitext...")
    w_wiki = fetch_wikitext('Weapons_in_Bravely_Default_II')
    weapons = parse_weapons(w_wiki) if w_wiki else []
    print(f"Parsed {len(weapons)} weapons.")

    print("Fetching armor wikitext...")
    a_wiki = fetch_wikitext('Armor_in_Bravely_Default_II')
    armors = parse_armor(a_wiki) if a_wiki else []
    print(f"Parsed {len(armors)} armors.")

    print("Fetching accessories wikitext...")
    acc_wiki = fetch_wikitext('Accessories_in_Bravely_Default_II')
    accessories = parse_accessories(acc_wiki) if acc_wiki else []
    print(f"Parsed {len(accessories)} accessories.")

    all_equipment = weapons + armors + accessories
    print(f"Total equipment items: {len(all_equipment)}")

    # Deduplicate IDs if any
    seen_ids = set()
    for item in all_equipment:
        orig_id = item['id']
        counter = 1
        while item['id'] in seen_ids:
            item['id'] = f"{orig_id}-{counter}"
            counter += 1
        seen_ids.add(item['id'])

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(all_equipment, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(all_equipment)} items to {OUTPUT_JSON}")

    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Equipment Dataset\n * Generated automatically by parse_equipment.py\n */\n")
        f.write("const equipmentData = ")
        json.dump(all_equipment, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.equipmentData = equipmentData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
