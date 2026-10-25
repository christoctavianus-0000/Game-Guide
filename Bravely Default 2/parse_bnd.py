#!/usr/bin/env python3
"""
parse_bnd.py - Generates bndCardData.json and bndCardData.js for Bravely Default II.
Authoritative sources:
- CSV roster in source/bravely-default-2-bnd-cards.csv
- Game8 B 'n' D card archives in source/game8_bnd_effects.json
Produces 105 Monster, Job, and Character cards with genuine PNG images and card effects.
Zero power/strength values as B 'n' D cards use board positioning, not power.
"""

import csv
import json
import os
import re

BASE_DIR = os.path.dirname(__file__)
SOURCE_DIR = os.path.join(BASE_DIR, 'source')
BND_CSV = os.path.join(SOURCE_DIR, 'bravely-default-2-bnd-cards.csv')
GAME8_CACHE = os.path.join(SOURCE_DIR, 'game8_bnd_effects.json')
OUTPUT_JSON = os.path.join(BASE_DIR, 'bndCardData.json')
OUTPUT_JS = os.path.join(BASE_DIR, 'bndCardData.js')

def to_slug(name):
    # Handle Jörmungandr special case preserving existing ID
    if 'j' in name.lower() and 'rmungandr' in name.lower():
        return 'j-rmungandr'
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    return slug

def main():
    cards = []
    if not os.path.exists(BND_CSV):
        print(f"Error: {BND_CSV} not found.")
        return

    # Load game8 effects cache if available
    game8_data = {}
    if os.path.exists(GAME8_CACHE):
        with open(GAME8_CACHE, 'r', encoding='utf-8') as f:
            game8_data = json.load(f)

    with open(BND_CSV, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            idx = row['card_index'].strip().zfill(3)
            name = row['card_name'].strip()
            # Clean encoding for Jörmungandr
            if idx == '021' or 'rmungandr' in name.lower():
                name = 'Jörmungandr'

            classification = row.get('classification', '').strip() or 'Monster'
            effect_raw = row.get('effect_or_family', '').strip()
            sprite_id = row.get('sprite_asset_id', '').strip() or f"Bdii-bnd-small-{idx}"
            
            # Parse family if present (e.g. "Family: Humanoid. ...")
            family = "Special"
            family_match = re.search(r'Family:\s*([^.]+)', effect_raw)
            if family_match:
                family = family_match.group(1).strip()
            elif classification == 'Job':
                family = 'Job'
            elif classification == 'Character':
                family = 'Character'

            # Look up game8 effect
            lookup_key = re.sub(r'[^a-z0-9]', '', name.lower())
            g8_info = game8_data.get(lookup_key)
            if not g8_info and 'jormungandr' in lookup_key:
                g8_info = game8_data.get('jormungandr')

            if g8_info and g8_info.get('effect'):
                effect = g8_info['effect']
            else:
                effect = effect_raw

            # Clean leading "Effect: " repetition
            effect = re.sub(r'^Effect:\s*', '', effect).strip()

            slug = f"{idx}-{to_slug(name)}"

            # Star tier mapping
            if classification == 'Character':
                tier = 5 if idx in ['083', '104', '105'] else 4
            elif classification == 'Job':
                tier = 3
            else:
                tier = 2 if 'Gains extra squares' in effect or 'Loses extra squares' in effect else 1

            cards.append({
                'id': slug,
                'index': idx,
                'name': name,
                'classification': classification,
                'family': family,
                'tier': tier,
                'effect': effect,
                'spriteAssetId': sprite_id,
                'image': f"assets/cards/{slug}.png",
                'localFallback': f"assets/cards/{slug}.svg"
            })

    # Write JSON
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(cards, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(cards)} B 'n' D cards to {OUTPUT_JSON}")

    # Write JS global
    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — B 'n' D Cards Dataset\n * Generated automatically by parse_bnd.py\n */\n")
        f.write("const bndCardData = ")
        json.dump(cards, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.bndCardData = bndCardData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
