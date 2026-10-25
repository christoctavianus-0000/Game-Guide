#!/usr/bin/env python3
"""
parse_shops.py - Generates shopData.json and shopData.js for Bravely Default II.
Combines consumable supplies with town equipment inventories extracted from equipmentData.json.
"""

import json
import os
import re

EQUIP_JSON = os.path.join(os.path.dirname(__file__), 'equipmentData.json')
OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'shopData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'shopData.js')

TOWNS = [
    {'name': 'Halcyonia', 'chapter': 'Prologue', 'region': 'Kingdom of Halcyonia', 'description': 'The peaceful coastal kingdom where Seth awakens and meets Princess Gloria.'},
    {'name': 'Savalon', 'chapter': 'Chapter 1', 'region': 'Desert Oasis of Savalon', 'description': 'A vibrant desert oasis bustling with traders, gambling halls, and palace intrigue.'},
    {'name': 'Wiswald', 'chapter': 'Chapter 2', 'region': 'Deepwood Nation of Wiswald', 'description': 'The scholar\'s sanctuary overgrown by ancient flora and towering root bridges.'},
    {'name': 'Rimedhal', 'chapter': 'Chapter 3', 'region': 'Holy Country of Rimedhal', 'description': 'A snowbound nation guided by the archbishop and guarded by wyverns.'},
    {'name': 'Holograd', 'chapter': 'Chapter 4', 'region': 'Military Empire of Holograd', 'description': 'A heavily fortified militaristic fortress commanded by Adam.'},
    {'name': 'Enderno', 'chapter': 'Chapter 3/4', 'region': 'Sub-Zero Mountain Village', 'description': 'A quiet mountain village home to Glenn and the apothecary craft.'},
    {'name': 'Mag Mell', 'chapter': 'Chapter 5+', 'region': 'Fairy Kingdom of Mag Mell', 'description': 'An ethereal haven hidden deep within the Fountain of Knowledge.'},
]

STANDARD_SUPPLIES = {
    'Halcyonia': [
        {'name': 'Potion', 'price': 40, 'category': 'Consumable', 'effect': 'Restores 250 HP to a target.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Antidote', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of poison.'},
        {'name': 'Eye Drops', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of blindness.'},
        {'name': 'Echo Herbs', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of silence.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
        {'name': 'Mini-Ether', 'price': 1000, 'category': 'Consumable', 'effect': 'Restores 60 MP to a target.'},
        {'name': 'Ward Light', 'price': 300, 'category': 'Consumable', 'effect': 'Wards off weaker monsters for a duration.'},
    ],
    'Savalon': [
        {'name': 'Potion', 'price': 40, 'category': 'Consumable', 'effect': 'Restores 250 HP to a target.'},
        {'name': 'Hi-Potion', 'price': 150, 'category': 'Consumable', 'effect': 'Restores 1000 HP to a target.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Antidote', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of poison.'},
        {'name': 'Wakeup Bell', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of sleep.'},
        {'name': 'Animator', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of paralysis.'},
        {'name': 'Echo Herbs', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of silence.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
        {'name': 'Mini-Ether', 'price': 1000, 'category': 'Consumable', 'effect': 'Restores 60 MP to a target.'},
        {'name': 'Ward Light', 'price': 300, 'category': 'Consumable', 'effect': 'Wards off weaker monsters for a duration.'},
    ],
    'Wiswald': [
        {'name': 'Hi-Potion', 'price': 150, 'category': 'Consumable', 'effect': 'Restores 1000 HP to a target.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Antidote', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of poison.'},
        {'name': 'Balsam', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of dread.'},
        {'name': 'Smelling Salts', 'price': 50, 'category': 'Consumable', 'effect': 'Cures a single target of confusion.'},
        {'name': 'Ether', 'price': 4000, 'category': 'Consumable', 'effect': 'Restores 180 MP to a target.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
    ],
    'Rimedhal': [
        {'name': 'Hi-Potion', 'price': 150, 'category': 'Consumable', 'effect': 'Restores 1000 HP to a target.'},
        {'name': 'X-Potion', 'price': 900, 'category': 'Consumable', 'effect': 'Restores 2500 HP to a target.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Remedy', 'price': 500, 'category': 'Consumable', 'effect': 'Cures poison, blind, silence, sleep, and paralysis.'},
        {'name': 'Ether', 'price': 4000, 'category': 'Consumable', 'effect': 'Restores 180 MP to a target.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
    ],
    'Holograd': [
        {'name': 'Hi-Potion', 'price': 150, 'category': 'Consumable', 'effect': 'Restores 1000 HP to a target.'},
        {'name': 'X-Potion', 'price': 900, 'category': 'Consumable', 'effect': 'Restores 2500 HP to a target.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Remedy', 'price': 500, 'category': 'Consumable', 'effect': 'Cures multiple status ailments.'},
        {'name': 'Ether', 'price': 4000, 'category': 'Consumable', 'effect': 'Restores 180 MP to a target.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
    ],
    'Enderno': [
        {'name': 'Hi-Potion', 'price': 150, 'category': 'Consumable', 'effect': 'Restores 1000 HP to a target.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Remedy', 'price': 500, 'category': 'Consumable', 'effect': 'Cures status ailments.'},
        {'name': 'Ether', 'price': 4000, 'category': 'Consumable', 'effect': 'Restores 180 MP to a target.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
    ],
    'Mag Mell': [
        {'name': 'X-Potion', 'price': 900, 'category': 'Consumable', 'effect': 'Restores 2500 HP to a target.'},
        {'name': 'Elixir', 'price': 10000, 'category': 'Consumable', 'effect': 'Fully restores target\'s HP and MP.'},
        {'name': 'Phoenix Down', 'price': 200, 'category': 'Consumable', 'effect': 'Revives a single ally from KO and restores 300 HP.'},
        {'name': 'Remedy', 'price': 500, 'category': 'Consumable', 'effect': 'Cures all standard status ailments.'},
        {'name': 'Ether', 'price': 4000, 'category': 'Consumable', 'effect': 'Restores 180 MP to a target.'},
        {'name': 'Teleport Stone', 'price': 100, 'category': 'Consumable', 'effect': 'Allows immediate teleportation out of dungeons.'},
    ],
}

def to_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

def main():
    equip_items = []
    if os.path.exists(EQUIP_JSON):
        with open(EQUIP_JSON, 'r', encoding='utf-8') as f:
            equip_items = json.load(f)

    shops = []

    for t in TOWNS:
        town_name = t['name']
        town_slug = to_slug(town_name)
        
        # 1. Consumable items
        supplies = STANDARD_SUPPLIES.get(town_name, [])
        inventory = []
        for s in supplies:
            inventory.append({
                'id': f"{town_slug}-{to_slug(s['name'])}",
                'name': s['name'],
                'category': s['category'],
                'price': s['price'],
                'description': s['effect'],
                'isEquipment': False,
                'equipId': None
            })

        # 2. Equipment sold in this town
        for eq in equip_items:
            acq = eq.get('acquire', '')
            if f"Buy: {town_name}" in acq or f"Buy: {town_name}," in acq or f", {town_name}" in acq:
                inventory.append({
                    'id': f"{town_slug}-{eq['id']}",
                    'name': eq['name'],
                    'category': eq['category'],
                    'subCategory': eq.get('subCategory', eq['category']),
                    'price': eq.get('cost', 0),
                    'description': eq.get('description', ''),
                    'isEquipment': True,
                    'equipId': eq['id']
                })

        # Sort inventory by category, then price
        inventory.sort(key=lambda x: (x['category'] != 'Consumable', x['category'], x['price']))

        shops.append({
            'id': town_slug,
            'name': f"{town_name} Merchant & Armorer",
            'town': town_name,
            'chapter': t['chapter'],
            'region': t['region'],
            'description': t['description'],
            'itemCount': len(inventory),
            'inventory': inventory
        })

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(shops, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(shops)} town shops to {OUTPUT_JSON}")

    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Shops Dataset\n * Generated automatically by parse_shops.py\n */\n")
        f.write("const shopData = ")
        json.dump(shops, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.shopData = shopData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
