import urllib.request
import re
import json
import os
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
CARDS_DIR = os.path.join(BASE_DIR, 'assets', 'cards')
JSON_PATH = os.path.join(BASE_DIR, 'bndCardData.json')
JS_PATH = os.path.join(BASE_DIR, 'bndCardData.js')

with open(JSON_PATH, 'r', encoding='utf-8') as f:
    cards = json.load(f)

# Name normalization mapping
NAME_NORMALIZATIONS = {
    'jormungandr': 'jörmungandr',
}

urls = {
    'Monster': 'https://game8.co/games/BravelyDefault2/archives/321433',
    'Job': 'https://game8.co/games/BravelyDefault2/archives/321432',
    'Character': 'https://game8.co/games/BravelyDefault2/archives/321430'
}

game8_cards = {}
for cat, url in urls.items():
    print(f"Fetching {cat} cards from {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    
    tables = re.findall(r'<table[\s\S]*?</table>', html)
    for t in tables:
        rows = re.findall(r'<tr[\s\S]*?</tr>', t)
        if not rows: continue
        h_text = ' '.join(re.sub(r'<[^>]+>', ' ', rows[0]).split())
        if 'B & D Card' not in h_text and 'Effect' not in h_text:
            continue
        
        for r in rows[1:]:
            img_m = re.search(r'<img[^>]+(?:src|data-src)=["\']([^"\']+)["\']', r)
            img_url = img_m.group(1) if img_m else None
            
            cells = re.findall(r'<t[dh][\s\S]*?</t[dh]>', r)
            if len(cells) >= 2:
                name_text = ' '.join(re.sub(r'<[^>]+>', ' ', cells[0]).split())
                effect_text = ' '.join(re.sub(r'<[^>]+>', ' ', cells[1]).split())
                
                clean_name = name_text.strip()
                lookup_key = re.sub(r'[^a-z0-9]', '', clean_name.lower())
                game8_cards[lookup_key] = {
                    "name": clean_name,
                    "category": cat,
                    "effect": effect_text.strip(),
                    "img_url": img_url
                }

print(f"\nTotal game8 cards extracted: {len(game8_cards)}")

# Download all card images and update card objects
download_count = 0
updated_cards = []

for c in cards:
    c_name = c["name"]
    lookup_key = re.sub(r'[^a-z0-9]', '', c_name.lower())
    g8_info = game8_cards.get(lookup_key)
    
    if not g8_info:
        # Check alias
        for k, v in game8_cards.items():
            if k in lookup_key or lookup_key in k:
                g8_info = v
                break

    if not g8_info:
        print(f"WARNING: Could not find game8 data for {c_name} (key: {lookup_key})")
        updated_cards.append(c)
        continue
    
    img_url = g8_info["img_url"]
    png_filename = f"{c['id']}.png"
    png_path = os.path.join(CARDS_DIR, png_filename)
    
    # Download image if not exists or if size is 0
    if img_url and (not os.path.exists(png_path) or os.path.getsize(png_path) < 1000):
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req) as resp, open(png_path, 'wb') as out_f:
                out_f.write(resp.read())
            download_count += 1
            if download_count % 15 == 0:
                print(f"  Downloaded {download_count}/105 images...")
        except Exception as e:
            print(f"  Error downloading {c_name} from {img_url}: {e}")
    
    # Update card properties
    # Remove strength / power
    c_copy = dict(c)
    if "strength" in c_copy:
        del c_copy["strength"]
    
    # Update effect with game8 effect if game8 effect has real content
    g8_effect = g8_info["effect"]
    if g8_effect:
        # Clean up "Effect: " prefix redundancy if present
        cleaned_effect = re.sub(r'^Effect:\s*', '', g8_effect).strip()
        c_copy["effect"] = cleaned_effect
    
    c_copy["image"] = f"assets/cards/{png_filename}"
    c_copy["hasPower"] = False
    updated_cards.append(c_copy)

print(f"\nDownloaded {download_count} new card images.")
print(f"Total updated cards: {len(updated_cards)}")

# Save updated bndCardData.json
with open(JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(updated_cards, f, indent=2, ensure_ascii=False)
print(f"Updated {JSON_PATH}")

# Save updated bndCardData.js
with open(JS_PATH, 'w', encoding='utf-8') as f:
    f.write("/**\n * Bravely Default II — B 'n' D Card Dataset\n * Generated automatically from game8 card archives\n */\n")
    f.write("const bndCardData = ")
    json.dump(updated_cards, f, indent=2, ensure_ascii=False)
    f.write(";\n\nif (typeof window !== 'undefined') {\n  window.bndCardData = bndCardData;\n}\n")
print(f"Updated {JS_PATH}")
