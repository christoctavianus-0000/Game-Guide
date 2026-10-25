#!/usr/bin/env python3
"""
parse_bnd.py - Generates bndCardData.json and bndCardData.js for Bravely Default II.
Reads source/bravely-default-2-bnd-cards.csv (all 105 B 'n' D cards).
"""

import csv
import json
import os
import re

SOURCE_DIR = os.path.join(os.path.dirname(__file__), 'source')
BND_CSV = os.path.join(SOURCE_DIR, 'bravely-default-2-bnd-cards.csv')
OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'bndCardData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'bndCardData.js')

def to_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

def main():
    cards = []
    if not os.path.exists(BND_CSV):
        print(f"Error: {BND_CSV} not found.")
        return

    with open(BND_CSV, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            idx = row['card_index'].strip().zfill(3)
            name = row['card_name'].strip()
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

            slug = f"{idx}-{to_slug(name)}"

            cards.append({
                'id': slug,
                'index': idx,
                'name': name,
                'classification': classification,
                'family': family,
                'effect': effect_raw,
                'spriteAssetId': sprite_id,
                'image': f"assets/cards/{idx}_{to_slug(name)}.jpg",
                'localFallback': f"assets/cards/{sprite_id}.jpg"
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
