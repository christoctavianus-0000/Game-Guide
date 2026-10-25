#!/usr/bin/env python3
"""
parse_quests.py - Generates questData.json and questData.js for Bravely Default II.
Parses subquests from the Bravely Default Fandom wiki table.
"""

import json
import os
import re
import ssl
import urllib.request

OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'questData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'questData.js')
SSL_CTX = ssl._create_unverified_context()

def clean_wiki_text(text):
    if not text:
        return ''
    text = re.sub(r'\[\[(?:[^|\]]+\|)?([^\]]+)\]\]', r'\1', text)
    text = re.sub(r"'''?", '', text)
    text = re.sub(r'<br\s*/?>', ', ', text)
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

def parse_quests(wikitext):
    quests = []
    # Quests start with ! rowspan="2" |NNN or ! rowspan=2 |NNN
    blocks = re.split(r'\|\-\s*\n!\s*rowspan=\"?2\"?[^|]*\|', wikitext)
    for b in blocks[1:]:
        parts = b.split('\n|-')
        main_part = parts[0]
        desc_part = parts[1] if len(parts) > 1 else ''

        lines = [l.strip() for l in main_part.split('\n|') if l.strip()]
        if len(lines) < 5:
            continue

        num_str = lines[0].split('\n')[0].strip()
        name = clean_wiki_text(lines[1])
        chapter = clean_wiki_text(lines[2])
        location = clean_wiki_text(lines[3])
        reward = clean_wiki_text(lines[4])
        difficulty_raw = lines[5] if len(lines) > 5 else ''
        stars = difficulty_raw.count('★')

        # Description from second row
        desc = ''
        if desc_part:
            desc_lines = desc_part.split('|')
            if len(desc_lines) > 1:
                desc = clean_wiki_text(desc_lines[-1])

        # Giver / client can often be deduced from description or location
        client = "Townsperson"
        if "King Vernon" in desc:
            client = "King Vernon / Council"
        elif "Galahad" in desc or "Galahad" in name:
            client = "Galahad"
        elif "Elvis" in desc:
            client = "Elvis"
        elif "Gloria" in desc:
            client = "Gloria"
        elif "Adelle" in desc:
            client = "Adelle"
        elif "Bernard" in desc:
            client = "Bernard"
        elif "Anihal" in desc:
            client = "Anihal"
        elif "Orpheus" in desc:
            client = "Orpheus"
        elif "Lily" in desc:
            client = "Lily"
        elif "Roddy" in desc:
            client = "Roddy"
        elif "Folie" in desc:
            client = "Folie"
        elif "Martha" in desc:
            client = "Martha"
        elif "Glenn" in desc:
            client = "Glenn"
        elif "Sir Sloan" in desc:
            client = "Sir Sloan's Memory"

        slug = f"quest-{num_str.zfill(3)}"

        obj_text = desc if desc else f"Complete request '{name}' for {client} in {location}."
        quests.append({
            'id': slug,
            'number': num_str.zfill(3),
            'name': name,
            'chapter': chapter,
            'location': location,
            'client': client,
            'reward': reward,
            'rewards': reward,
            'difficulty': stars,
            'stars': stars,
            'description': obj_text,
            'objective': obj_text
        })

    return quests

def main():
    print("Fetching Bravely Default II Sub-Quests...")
    wikitext = fetch_wikitext('Bravely_Default_II_Sub-Quests')
    if not wikitext:
        print("Failed to fetch sub-quests.")
        return

    quests = parse_quests(wikitext)
    print(f"Parsed {len(quests)} quests.")

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(quests, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(quests)} quests to {OUTPUT_JSON}")

    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Sub-Quests Dataset\n * Generated automatically by parse_quests.py\n */\n")
        f.write("const questData = ")
        json.dump(quests, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.questData = questData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
