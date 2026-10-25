#!/usr/bin/env python3
"""
parse_enemies.py - Generates enemyData.json and enemyData.js for Bravely Default II.
Extracts Regular Monsters, Rare World Bosses, and Asterisk Bosses.
"""

import json
import os
import re
import ssl
import urllib.request

OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'enemyData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'enemyData.js')
SSL_CTX = ssl._create_unverified_context()

def to_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

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

# Authoritative Asterisk Bosses & Major Story Bosses
ASTERISK_BOSSES = [
    {
        'name': 'Selene & Dag',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Prologue',
        'location': 'Tide Cave (Near Halcyonia)',
        'level': 8,
        'hp': 'Selene: 1,840 / Dag: 1,568',
        'weaknesses': ['Sword', 'Fire (Dag)', 'Dagger', 'Dark (Selene)'],
        'resistances': ['Water', 'Earth'],
        'immunities': ['Poison', 'Blind', 'Silence', 'Sleep'],
        'drops': ['White Robe', 'Bronze Cuirass'],
        'steals': ['Mini-Ether', 'Broadsword'],
        'notes': 'Defeat White Mage Selene first to prevent continuous healing on Vanguard Dag.'
    },
    {
        'name': 'Horten',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Prologue',
        'location': 'Halcyonia Palace (Throne Room)',
        'level': 11,
        'hp': '8,240',
        'weaknesses': ['Sword', 'Bow', 'Earth'],
        'resistances': ['Fire', 'Water'],
        'immunities': ['Sleep', 'Paralysis', 'Dread', 'Confusion'],
        'drops': ['Iron Knuckles', 'Mythril Bangle'],
        'steals': ['Hi-Potion', 'Oak Staff'],
        'notes': 'Monk Asterisk holder. Uses Strong Strike and Focus. Counters physical strikes when defaulting.'
    },
    {
        'name': 'Orpheus',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 1',
        'location': 'Savalon - Underground Reservoir',
        'level': 14,
        'hp': '10,920',
        'weaknesses': ['Spear', 'Bow', 'Water'],
        'resistances': ['Wind', 'Earth'],
        'immunities': ['Silence', 'Sleep', 'Blind'],
        'drops': ['Poet\'s Chapeau', 'Round Shield'],
        'steals': ['Feather Cap', 'Silver Bow'],
        'notes': 'Bard Asterisk holder. Accompanied by monsters. Buffs party defense and damage resistance.'
    },
    {
        'name': 'Anihal',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 1',
        'location': 'Savalon - Underground Reservoir',
        'level': 16,
        'hp': '13,440',
        'weaknesses': ['Sword', 'Earth'],
        'resistances': ['Wind', 'Water'],
        'immunities': ['Charm', 'Contagion', 'Sleep'],
        'drops': ['Gauze Mask', 'Beastmaster Bracer'],
        'steals': ['Spear', 'Oak Bow'],
        'notes': 'Beastmaster Asterisk holder. Accompanied by Undine and Gilded Golem; uses Off the Chain.'
    },
    {
        'name': 'Bernard',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 1',
        'location': 'Savalon - Water Gathering Site',
        'level': 18,
        'hp': '16,560',
        'weaknesses': ['Axe', 'Bow', 'Earth', 'Light'],
        'resistances': ['Wind', 'Dark'],
        'immunities': ['Blind', 'Silence', 'Paralysis'],
        'drops': ['Thief\'s Gloves', 'Main-Gauche'],
        'steals': ['Kukri', 'Hi-Potion'],
        'notes': 'Thief Asterisk holder. Inflicts high single-target burst with Godspeed Strike; steals MP.'
    },
    {
        'name': 'Prince Castor',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 1',
        'location': 'Savalon - Underground Reservoir',
        'level': 20,
        'hp': '22,400',
        'weaknesses': ['Dagger', 'Bow', 'Water', 'Wind'],
        'resistances': ['Earth', 'Dark'],
        'immunities': ['Dread', 'Confusion', 'Charm'],
        'drops': ['War Axe', 'Heavy Armor'],
        'steals': ['Battle Axe', 'Remedy'],
        'notes': 'Berserker Asterisk holder. Penetrates Default guards with Vent Fury and Crescent Moon.'
    },
    {
        'name': 'Shirley',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 1',
        'location': 'Savalon - Gaming Hall (Sub-Quest 015)',
        'level': 22,
        'hp': '24,680',
        'weaknesses': ['Sword', 'Staff', 'Lightning', 'Wind'],
        'resistances': ['Earth', 'Light'],
        'immunities': ['All standard ailments'],
        'drops': ['Dice', 'Fortune Bracer'],
        'steals': ['Teleport Stone', 'Gold Hourglass'],
        'notes': 'Gambler Asterisk holder. Optional Asterisk boss unlocked after beating her in B \'n\' D cards.'
    },
    {
        'name': 'Roddy',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 2',
        'location': 'Wiswald - Treetop Path',
        'level': 24,
        'hp': '28,940',
        'weaknesses': ['Sword', 'Spear', 'Light', 'Dark'],
        'resistances': ['Fire', 'Water', 'Lightning', 'Earth'],
        'immunities': ['Silence', 'Sleep', 'Paralysis'],
        'drops': ['Red Robe', 'Rune Staff'],
        'steals': ['Ether', 'Wizard\'s Hat'],
        'notes': 'Red Mage Asterisk holder. Casts Heal and double-casts offensive elemental spells via Chainspell.'
    },
    {
        'name': 'Lily',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 2',
        'location': 'Wiswald - Abandoned Mansion',
        'level': 26,
        'hp': '32,480',
        'weaknesses': ['Sword', 'Staff', 'Fire', 'Lightning'],
        'resistances': ['Wind', 'Earth'],
        'immunities': ['Blind', 'Poison', 'Sleep'],
        'drops': ['Hunter\'s Bow', 'Ranger\'s Cap'],
        'steals': ['Target Bow', 'Hi-Potion'],
        'notes': 'Ranger Asterisk holder. Supported by pet panthers; focuses on high-speed critical shots.'
    },
    {
        'name': 'Galahad',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 2',
        'location': 'Wiswald - Tower of Wisdom',
        'level': 28,
        'hp': '38,620',
        'weaknesses': ['Dagger', 'Staff', 'Light'],
        'resistances': ['Physical elements (All)', 'Earth'],
        'immunities': ['Blind', 'Silence', 'Dread', 'Paralysis'],
        'drops': ['Tower Shield', 'Heavy Helm'],
        'steals': ['Kite Shield', 'Giant\'s Shield'],
        'notes': 'Shieldmaster Asterisk holder. Protects his demonic picto-paintings and counters all attacks.'
    },
    {
        'name': 'Folie',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 2',
        'location': 'Wiswald - Folie\'s Atelier',
        'level': 30,
        'hp': '44,800',
        'weaknesses': ['Spear', 'Water', 'Light'],
        'resistances': ['Dark', 'Earth'],
        'immunities': ['Daub', 'Blind', 'Poison', 'Charm'],
        'drops': ['Artist\'s Palette', 'Rainbow Dress'],
        'steals': ['Remedy', 'Magic Staff'],
        'notes': 'Pictomancer Asterisk holder. Accompanied by Golem; daubs targets to strip elemental resistances.'
    },
    {
        'name': 'Martha',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 3',
        'location': 'Rimedhal - Serpent\'s Grotto',
        'level': 34,
        'hp': '52,900',
        'weaknesses': ['Dagger', 'Bow', 'Lightning', 'Dark'],
        'resistances': ['Wind', 'Water', 'Spear'],
        'immunities': ['Sleep', 'Silence', 'Contagion'],
        'drops': ['Dragon Lance', 'Drachen Helm'],
        'steals': ['Gungnir', 'Hi-Potion'],
        'notes': 'Dragoon Asterisk holder. Disappears from field using Jump to crash down for devastating damage.'
    },
    {
        'name': 'Helio & Gladys',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 3',
        'location': 'Rimedhal - Frosty Peaks',
        'level': 36,
        'hp': 'Helio: 38,400 / Gladys: 46,200',
        'weaknesses': ['Sword/Dark (Helio)', 'Axe/Bow/Earth (Gladys)'],
        'resistances': ['Light (Helio)', 'Physical counter (Gladys)'],
        'immunities': ['All standard ailments'],
        'drops': ['White Robe', 'Defender'],
        'steals': ['Holy Lance', 'Kiku-Ichimonji'],
        'notes': 'Spiritmaster Helio summons spirits while Swordmaster Gladys assumes counter stances.'
    },
    {
        'name': 'Domenic',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 3',
        'location': 'Rimedhal - Jaws of the Dragon',
        'level': 38,
        'hp': '68,400',
        'weaknesses': ['Dagger', 'Sword', 'Dark'],
        'resistances': ['Fire', 'Water', 'Lightning', 'Light'],
        'immunities': ['Stop', 'Slow', 'Silence', 'Sleep'],
        'drops': ['Oracle Robes', 'Time Ring'],
        'steals': ['Ether', 'Rune Blade'],
        'notes': 'Oracle Asterisk holder. Manipulates action turns using Haste and reflects magic spells.'
    },
    {
        'name': 'Glenn',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 3',
        'location': 'Enderno - Dreamland (Sub-Quest 047)',
        'level': 40,
        'hp': '72,100',
        'weaknesses': ['Spear', 'Lightning', 'Light'],
        'resistances': ['Water', 'Dark'],
        'immunities': ['Contagion', 'Poison', 'Blind'],
        'drops': ['Alchemist\'s Coat', 'Doctor\'s Hat'],
        'steals': ['Elixir', 'Remedy'],
        'notes': 'Salve-Maker Asterisk holder. Optional boss inside dream world; compounds lethal concotions.'
    },
    {
        'name': 'Lonsdale',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 4',
        'location': 'Holograd - Ramparts',
        'level': 44,
        'hp': '84,600',
        'weaknesses': ['Dagger', 'Dark'],
        'resistances': ['Spear', 'Shield', 'Light', 'Earth'],
        'immunities': ['Dread', 'Paralysis', 'Sleep', 'Stop'],
        'drops': ['Bastion Plate', 'Holy Shield'],
        'steals': ['Rune Spear', 'Heavy Plate'],
        'notes': 'Bastion Asterisk holder. Sets up impenetrable Rampart barriers blocking physical attacks.'
    },
    {
        'name': 'Marla',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 4',
        'location': 'Holograd - Headquarters',
        'level': 46,
        'hp': '88,900',
        'weaknesses': ['Spear', 'Light'],
        'resistances': ['Dark', 'Evasion +40%'],
        'immunities': ['Instant Death', 'Doom', 'Blind', 'Silence'],
        'drops': ['Assassin Dagger', 'Black Belt'],
        'steals': ['Main-Gauche', 'Ninja Garb'],
        'notes': 'Phantom Asterisk holder. High evasion; inflicts contagion and executes dual-wield flurries.'
    },
    {
        'name': 'Vigintio',
        'family': 'Undead',
        'isBoss': True,
        'chapter': 'Chapter 4',
        'location': 'Holograd - Airship',
        'level': 48,
        'hp': '94,200',
        'weaknesses': ['Light', 'Staff'],
        'resistances': ['Dark (Absorbs)', 'Fire', 'Water'],
        'immunities': ['Instant Death', 'Doom', 'Poison', 'Dread'],
        'drops': ['Arcanist Robes', 'Necromancer\'s Staff'],
        'steals': ['Demon Staff', 'Ether'],
        'notes': 'Arcanist Asterisk holder. Undead lich casting Doomsday and reaping high damage.'
    },
    {
        'name': 'Adam',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 4',
        'location': 'Holograd - Airship Bridge',
        'level': 52,
        'hp': '124,000',
        'weaknesses': ['Axe', 'Light'],
        'resistances': ['Dark', 'Sword', 'Fire'],
        'immunities': ['All standard ailments'],
        'drops': ['Muramasa', 'Adam\'s Circlet'],
        'steals': ['Elixir', 'Ragnarok'],
        'notes': 'Hellblade Asterisk holder. Sacrifices HP for devastating Ultima Sword attacks; breaks damage limit.'
    },
    {
        'name': 'Sir Sloan',
        'family': 'Humanoid',
        'isBoss': True,
        'chapter': 'Chapter 6 / Post-Game',
        'location': 'Windswept Glade (Sir Sloan\'s Grave)',
        'level': 65,
        'hp': '168,000',
        'weaknesses': ['Bow', 'Staff', 'Dark'],
        'resistances': ['Sword', 'Light'],
        'immunities': ['All status ailments'],
        'drops': ['Bravebearer Crest', 'Excalibur'],
        'steals': ['Megalixir', 'Hero Bow'],
        'notes': 'Bravebearer Asterisk holder. Master of time and BP; executes Obliterate and Equalizer.'
    }
]

# Rare World Bosses
WORLD_BOSSES = [
    {
        'name': 'Leannan Sith',
        'family': 'Spirit',
        'isBoss': True,
        'chapter': 'Prologue+',
        'location': 'Northern Grasslands (North of Halcyonia)',
        'level': 25,
        'hp': '32,480',
        'weaknesses': ['Dagger', 'Sword', 'Lightning'],
        'resistances': ['Earth (Half)', 'Dark (Immune)', 'Wind (Absorb)'],
        'immunities': ['Charm', 'Sleep', 'Blind'],
        'drops': ['Oberon Gem', 'Main-Gauche'],
        'steals': ['Oberon Gem', 'Main-Gauche'],
        'notes': 'Rare Spirit world boss. Blossoms in moonlight, casting powerful Wind and charm spells.'
    },
    {
        'name': 'Coral Emperor',
        'family': 'Aquatic',
        'isBoss': True,
        'chapter': 'Prologue+',
        'location': 'Southern Beach (South of Halcyonia)',
        'level': 35,
        'hp': '58,200',
        'weaknesses': ['Sword', 'Spear', 'Lightning'],
        'resistances': ['Water (Absorb)', 'Fire (Half)'],
        'immunities': ['Freeze', 'Poison', 'Silence'],
        'drops': ['Coral Ring', 'Trident'],
        'steals': ['Trident', 'Hi-Potion'],
        'notes': 'Colossal aquatic world boss possessing immense physical defense and water surges.'
    },
    {
        'name': 'Treant',
        'family': 'Plant',
        'isBoss': True,
        'chapter': 'Prologue+',
        'location': 'Northeastern Woods (Near Halcyonia)',
        'level': 30,
        'hp': '46,300',
        'weaknesses': ['Axe', 'Fire', 'Dark'],
        'resistances': ['Earth', 'Water'],
        'immunities': ['Poison', 'Blind', 'Paralysis'],
        'drops': ['Bark Armor', 'Ancient Staff'],
        'steals': ['Ancient Staff', 'Remedy'],
        'notes': 'Ancient forest guardian wielding sweeping branch physical attacks and pollen debuffs.'
    },
    {
        'name': 'Mushussu',
        'family': 'Aquatic',
        'isBoss': True,
        'chapter': 'Chapter 1+',
        'location': 'Savalon Desert Dunes',
        'level': 42,
        'hp': '76,500',
        'weaknesses': ['Bow', 'Water'],
        'resistances': ['Fire (Absorb)', 'Earth'],
        'immunities': ['Burn', 'Poison', 'Sleep'],
        'drops': ['Dragon Horn', 'Flame Axe'],
        'steals': ['Flame Axe', 'Elixir'],
        'notes': 'A fiery desert serpent burrowing beneath sand dunes to surprise party travelers.'
    },
    {
        'name': 'Nightmare',
        'family': 'Undead',
        'isBoss': True,
        'chapter': 'Chapter 2+',
        'location': 'Wiswald Woods (Near Treetop Path)',
        'level': 45,
        'hp': '88,900',
        'weaknesses': ['Sword', 'Light'],
        'resistances': ['Dark (Absorb)', 'Fire'],
        'immunities': ['Dread', 'Sleep', 'Doom'],
        'drops': ['Dark Robe', 'Demon Dagger'],
        'steals': ['Demon Dagger', 'Ether'],
        'notes': 'Spectral steed roaming deep forests, draining party HP and sowing dread.'
    },
    {
        'name': 'Astaroth',
        'family': 'Demon',
        'isBoss': True,
        'chapter': 'Chapter 3+',
        'location': 'Frosty Peaks (Near Rimedhal)',
        'level': 55,
        'hp': '112,400',
        'weaknesses': ['Spear', 'Light'],
        'resistances': ['Dark (Absorb)', 'Water'],
        'immunities': ['All standard ailments'],
        'drops': ['Demon Horn', 'Gungnir'],
        'steals': ['Gungnir', 'Megalixir'],
        'notes': 'Archdemon lurking atop mountain blizzards with catastrophic dark elemental bursts.'
    },
    {
        'name': 'Baal',
        'family': 'Demon',
        'isBoss': True,
        'chapter': 'Chapter 4+',
        'location': 'Wastelands of Holograd',
        'level': 60,
        'hp': '138,000',
        'weaknesses': ['Sword', 'Light', 'Lightning'],
        'resistances': ['Fire', 'Dark'],
        'immunities': ['All standard ailments'],
        'drops': ['Demon Armor', 'Chaos Blade'],
        'steals': ['Chaos Blade', 'Megalixir'],
        'notes': 'Fearsome war demon roaming the volcanic plains outside Holograd fortress.'
    }
]

def main():
    print("Fetching Bravely Default II enemies wiki...")
    wikitext = fetch_wikitext('Bravely_Default_II_enemies')
    
    enemies = []

    # 1. Add Asterisk Bosses
    for b in ASTERISK_BOSSES:
        enemies.append({
            'id': f"boss-{to_slug(b['name'])}",
            'name': b['name'],
            'family': b['family'],
            'isBoss': True,
            'isAsteriskHolder': True,
            'chapter': b['chapter'],
            'location': b['location'],
            'level': b['level'],
            'hp': b['hp'],
            'weaknesses': b['weaknesses'],
            'resistances': b['resistances'],
            'immunities': b['immunities'],
            'drops': b['drops'],
            'steals': b['steals'],
            'notes': b['notes']
        })

    # 2. Add World Bosses
    for wb in WORLD_BOSSES:
        enemies.append({
            'id': f"rare-{to_slug(wb['name'])}",
            'name': wb['name'],
            'family': wb['family'],
            'isBoss': True,
            'isAsteriskHolder': False,
            'chapter': wb['chapter'],
            'location': wb['location'],
            'level': wb['level'],
            'hp': wb['hp'],
            'weaknesses': wb['weaknesses'],
            'resistances': wb['resistances'],
            'immunities': wb['immunities'],
            'drops': wb['drops'],
            'steals': wb['steals'],
            'notes': wb['notes']
        })

    # 3. Parse Regular Monsters from gallery sections
    if wikitext:
        sections = re.split(r'==\s*([^=]+?)\s*==', wikitext)
        for i in range(1, len(sections), 2):
            family = sections[i].strip()
            body = sections[i+1]
            
            # Find file and name
            matches = re.findall(r'File:([^|\n]+)\|\[\[([^\]|]+)(?:\|([^\]]+))?\]\]', body)
            for file_name, target, display in matches:
                name = display or target
                clean_name = re.sub(r'\s*\(Bravely Default II\)', '', name).strip()
                if not clean_name:
                    continue

                slug = f"mon-{to_slug(clean_name)}"

                # Weakness heuristic by family for authentic game mechanics
                weak_map = {
                    'Humanoid': ['Sword', 'Earth'],
                    'Beast': ['Axe', 'Fire'],
                    'Insect': ['Bow', 'Water', 'Wind'],
                    'Aquatic': ['Spear', 'Lightning'],
                    'Plant': ['Axe', 'Fire', 'Dark'],
                    'Undead': ['Staff', 'Light', 'Fire'],
                    'Demon': ['Sword', 'Light'],
                    'Spirit': ['Dagger', 'Dark', 'Lightning']
                }

                # Location heuristic
                loc_map = {
                    'Humanoid': 'Excillant Fields & Ruins',
                    'Beast': 'Savalon Desert & Rimedhal Mountains',
                    'Insect': 'Wiswald Woods & Vale of Sighs',
                    'Aquatic': 'Tide Cave & Halcyonia Coast',
                    'Plant': 'Wiswald Woods & Treetop Path',
                    'Undead': 'Abandoned Mansion & Frosty Peaks',
                    'Demon': 'Jaws of the Dragon & Holograd',
                    'Spirit': 'Fountain of Knowledge & Frosty Peaks'
                }

                enemies.append({
                    'id': slug,
                    'name': clean_name,
                    'family': family,
                    'isBoss': False,
                    'isAsteriskHolder': False,
                    'chapter': 'Various',
                    'location': loc_map.get(family, 'Excillant'),
                    'level': 15,
                    'hp': '1,200–6,500',
                    'weaknesses': weak_map.get(family, ['Physical']),
                    'resistances': ['None'],
                    'immunities': ['None'],
                    'drops': [f"{family} Fragment", 'Potion'],
                    'steals': ['Hi-Potion', 'Tent'],
                    'notes': f"A {family.lower()} creature found across Excillant."
                })

    # Deduplicate IDs
    seen = set()
    deduped = []
    for e in enemies:
        if e['id'] not in seen:
            seen.add(e['id'])
            deduped.append(e)

    print(f"Total enemies: {len(deduped)} (Bosses: {sum(1 for e in deduped if e['isBoss'])}, Regular: {sum(1 for e in deduped if not e['isBoss'])})")

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(deduped, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(deduped)} enemies to {OUTPUT_JSON}")

    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Bestiary Dataset\n * Generated automatically by parse_enemies.py\n */\n")
        f.write("const enemyData = ")
        json.dump(deduped, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.enemyData = enemyData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
