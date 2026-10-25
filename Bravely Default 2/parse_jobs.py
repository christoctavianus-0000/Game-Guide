#!/usr/bin/env python3
"""
parse_jobs.py - Generates jobData.json and jobData.js for Bravely Default II.
Reads source/bravely-default-2-jobs.csv and enriches missing values with official game data.
"""

import csv
import json
import os
import re

SOURCE_DIR = os.path.join(os.path.dirname(__file__), 'source')
JOBS_CSV = os.path.join(SOURCE_DIR, 'bravely-default-2-jobs.csv')
OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'jobData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'jobData.js')

# Official in-game weapon aptitudes fallback for jobs where CSV had '?'
OFFICIAL_APTITUDES = {
    'Freelancer': {'sword': 'C', 'dagger': 'C', 'axe': 'C', 'spear': 'C', 'bow': 'C', 'staff': 'C', 'rod': 'C', 'shield': 'B'},
    'Black Mage': {'sword': 'E', 'dagger': 'B', 'axe': 'E', 'spear': 'E', 'bow': 'D', 'staff': 'A', 'rod': 'S', 'shield': 'E'},
    'White Mage': {'sword': 'E', 'dagger': 'D', 'axe': 'E', 'spear': 'E', 'bow': 'D', 'staff': 'S', 'rod': 'A', 'shield': 'B'},
    'Vanguard': {'sword': 'A', 'dagger': 'D', 'axe': 'S', 'spear': 'B', 'bow': 'E', 'staff': 'E', 'rod': 'E', 'shield': 'A'},
    'Monk': {'sword': 'E', 'dagger': 'E', 'axe': 'D', 'spear': 'B', 'bow': 'E', 'staff': 'A', 'rod': 'D', 'shield': 'E'},
    'Bard': {'sword': 'D', 'dagger': 'B', 'axe': 'E', 'spear': 'E', 'bow': 'A', 'staff': 'A', 'rod': 'B', 'shield': 'E'},
    'Beastmaster': {'sword': 'D', 'dagger': 'D', 'axe': 'C', 'spear': 'A', 'bow': 'A', 'staff': 'C', 'rod': 'C', 'shield': 'B'},
    'Thief': {'sword': 'B', 'dagger': 'S', 'axe': 'B', 'spear': 'C', 'bow': 'B', 'staff': 'B', 'rod': 'D', 'shield': 'E'},
    'Gambler': {'sword': 'C', 'dagger': 'C', 'axe': 'C', 'spear': 'D', 'bow': 'A', 'staff': 'B', 'rod': 'B', 'shield': 'E'},
    'Berserker': {'sword': 'B', 'dagger': 'D', 'axe': 'S', 'spear': 'A', 'bow': 'E', 'staff': 'E', 'rod': 'E', 'shield': 'E'},
    'Red Mage': {'sword': 'A', 'dagger': 'B', 'axe': 'D', 'spear': 'D', 'bow': 'C', 'staff': 'A', 'rod': 'A', 'shield': 'B'},
    'Ranger': {'sword': 'E', 'dagger': 'B', 'axe': 'C', 'spear': 'C', 'bow': 'S', 'staff': 'D', 'rod': 'D', 'shield': 'E'},
    'Shieldmaster': {'sword': 'C', 'dagger': 'C', 'axe': 'B', 'spear': 'B', 'bow': 'D', 'staff': 'D', 'rod': 'E', 'shield': 'S'},
    'Pictomancer': {'sword': 'D', 'dagger': 'B', 'axe': 'E', 'spear': 'B', 'bow': 'D', 'staff': 'A', 'rod': 'B', 'shield': 'A'},
    'Dragoon': {'sword': 'A', 'dagger': 'D', 'axe': 'C', 'spear': 'S', 'bow': 'C', 'staff': 'E', 'rod': 'E', 'shield': 'C'},
    'Spiritmaster': {'sword': 'E', 'dagger': 'D', 'axe': 'E', 'spear': 'E', 'bow': 'E', 'staff': 'S', 'rod': 'A', 'shield': 'B'},
    'Swordmaster': {'sword': 'S', 'dagger': 'A', 'axe': 'C', 'spear': 'D', 'bow': 'D', 'staff': 'D', 'rod': 'E', 'shield': 'D'},
    'Oracle': {'sword': 'E', 'dagger': 'D', 'axe': 'E', 'spear': 'E', 'bow': 'B', 'staff': 'S', 'rod': 'S', 'shield': 'D'},
    'Salve-Maker': {'sword': 'C', 'dagger': 'A', 'axe': 'A', 'spear': 'E', 'bow': 'C', 'staff': 'C', 'rod': 'B', 'shield': 'E'},
    'Arcanist': {'sword': 'E', 'dagger': 'B', 'axe': 'E', 'spear': 'E', 'bow': 'D', 'staff': 'A', 'rod': 'S', 'shield': 'E'},
    'Bastion': {'sword': 'A', 'dagger': 'E', 'axe': 'B', 'spear': 'S', 'bow': 'D', 'staff': 'A', 'rod': 'D', 'shield': 'S'},
    'Phantom': {'sword': 'B', 'dagger': 'S', 'axe': 'D', 'spear': 'D', 'bow': 'A', 'staff': 'D', 'rod': 'D', 'shield': 'E'},
    'Hellblade': {'sword': 'S', 'dagger': 'B', 'axe': 'A', 'spear': 'B', 'bow': 'C', 'staff': 'D', 'rod': 'D', 'shield': 'E'},
    'Bravebearer': {'sword': 'S', 'dagger': 'A', 'axe': 'A', 'spear': 'A', 'bow': 'A', 'staff': 'A', 'rod': 'A', 'shield': 'S'},
}

OFFICIAL_LOCATIONS = {
    'Freelancer': 'Halcyonia (Prologue starting job)',
    'Black Mage': 'Vale of Sighs (Halcyonia Outskirts)',
    'White Mage': 'Vale of Sighs (Halcyonia Outskirts)',
    'Vanguard': 'Tide Cave (Near Halcyonia)',
    'Monk': 'Halcyonia Palace',
    'Bard': 'Savalon - Underground Reservoir',
    'Beastmaster': 'Savalon - Underground Reservoir',
    'Thief': 'Savalon - Water Gathering Site',
    'Gambler': 'Savalon - Gaming Hall (Sub-Quest 015)',
    'Berserker': 'Savalon - Underground Reservoir',
    'Red Mage': 'Wiswald - Treetop Path',
    'Ranger': 'Wiswald - Abandoned Mansion',
    'Shieldmaster': 'Wiswald - Tower of Wisdom',
    'Pictomancer': 'Wiswald - Folie\'s Atelier',
    'Dragoon': 'Rimedhal - Serpent\'s Grotto',
    'Spiritmaster': 'Rimedhal - Frosty Peaks',
    'Swordmaster': 'Rimedhal - Frosty Peaks',
    'Oracle': 'Rimedhal - Jaws of the Dragon',
    'Salve-Maker': 'Enderno - Dreamland (Sub-Quest 047)',
    'Arcanist': 'Holograd - Airship',
    'Bastion': 'Holograd - Ramparts',
    'Phantom': 'Holograd - Headquarters',
    'Hellblade': 'Holograd - Airship Bridge',
    'Bravebearer': 'Windswept Glade (Sir Sloan\'s Grave)',
}

JOB_DESCRIPTIONS = {
    'Freelancer': 'A versatile jack-of-all-trades base job equipped with essential survival, JP-boosting, and mimicry techniques.',
    'Black Mage': 'Offensive elemental spellcaster unleashing high-velocity Fire, Blizzard, and Thunder magic upon vulnerable foes.',
    'White Mage': 'Master of recovery and holy protection who safeguards party longevity with multi-target healing and restorative wards.',
    'Vanguard': 'A heavily armored vanguard capable of drawing hostile threat, defending allies, and cleaving enemies with shields and heavy axes.',
    'Monk': 'A fierce martial artist trading defense and health for raw unarmed devastation, critical blows, and HP-breaching strikes.',
    'Bard': 'Support virtuoso singing inspiring poetry to buff ally defenses, boost damage thresholds, and hasten turn order.',
    'Beastmaster': 'Cunning scout capable of capturing wild beasts across Excillant and unleashing their primal fury in combat.',
    'Thief': 'A lightning-fast highwayman adept at pilfering rare treasure, draining MP, and striking with blistering speed.',
    'Gambler': 'A high-stakes risk-taker turning luck into lethal coin toss assaults, wheel spins, and variable JP windfalls.',
    'Berserker': 'A ferocious frontline juggernaut wielding massive axes to shatter enemy Default guards with devastating swings.',
    'Red Mage': 'A versatile hybrid mage weaving restorative magic and offensive disaster with double-casting Chainspell aptitude.',
    'Ranger': 'A deadly marksman possessing encyclopedic knowledge of monster families, exploiting biological weaknesses with precision bows.',
    'Shieldmaster': 'The unbreakable bulwark of the party, standing before endangered allies to intercept lethal strikes and bash foes.',
    'Pictomancer': 'An eccentric artist wielding living pigments to debuff enemy parameters, strip resistances, and reshape the battlefield.',
    'Dragoon': 'A noble aerial warrior leaping beyond the clouds to crash down upon adversaries with peerless spear velocity.',
    'Spiritmaster': 'A sanctified medium summoning elemental spirits to periodically bless allies with automatic regeneration and purity.',
    'Swordmaster': 'A legendary duelist fluidly transitioning between counter-stances to retaliate against physical and magical assaults.',
    'Oracle': 'A celestial astromancer bending the laws of time, space, and speed while supplementing physical attacks with arcane elements.',
    'Salve-Maker': 'A resourceful apothecary compounding herbs and reagents on the fly to brew customized remedies and explosive concotions.',
    'Arcanist': 'A terrifying wielder of dark hexes and apocalyptic magic capable of dealing cataclysmic damage across all entities.',
    'Bastion': 'The ultimate defensive fortress guarding the party with impenetrable light barriers and fortitude in Default.',
    'Phantom': 'A lethal assassin striking from the shadows with dual blades, guaranteed ailment execution, and bonus Brave Points.',
    'Hellblade': 'A ruthless warrior dancing on the edge of death, sacrificing vitality to wield darkness and break the 9,999 damage ceiling.',
    'Bravebearer': 'The legendary secret job passed down by Sir Sloan, manipulating Brave Points (BP) directly and commanding the flow of battle.',
}

def to_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

def main():
    jobs = []
    if not os.path.exists(JOBS_CSV):
        print(f"Error: {JOBS_CSV} not found.")
        return

    with open(JOBS_CSV, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row['job_name'].strip()
            slug = to_slug(name)
            
            # Resolve weapon aptitudes
            official_apt = OFFICIAL_APTITUDES.get(name, {})
            aptitudes = {}
            for weapon in ['sword', 'dagger', 'axe', 'spear', 'bow', 'staff', 'rod', 'shield']:
                val = row.get(weapon, '').strip()
                if not val or val == '?':
                    val = official_apt.get(weapon, 'C')
                aptitudes[weapon] = val.upper()

            # Resolve unlock location
            loc = row.get('unlock_location', '').strip()
            if not loc or loc == '?':
                loc = OFFICIAL_LOCATIONS.get(name, 'Excillant')

            # Split job traits
            traits_raw = row.get('job_trait', '').strip()
            traits = [t.strip() for t in traits_raw.split(';') if t.strip()] if traits_raw else []

            # Asterisk holder
            holder = row.get('asterisk_holder', '').strip()
            if not holder or holder == '?':
                holder = 'None' if name == 'Freelancer' else 'Asterisk Boss'

            notes = row.get('notes', '').strip()
            if notes == '?':
                notes = ''

            # Role mapping
            JOB_ROLES = {
                'Freelancer': 'Specialist',
                'Black Mage': 'Attacker',
                'White Mage': 'Healer',
                'Vanguard': 'Defender',
                'Monk': 'Attacker',
                'Bard': 'Supporter',
                'Beastmaster': 'Specialist',
                'Thief': 'Attacker',
                'Gambler': 'Specialist',
                'Berserker': 'Attacker',
                'Red Mage': 'Attacker',
                'Ranger': 'Attacker',
                'Shieldmaster': 'Defender',
                'Pictomancer': 'Supporter',
                'Dragoon': 'Attacker',
                'Spiritmaster': 'Healer',
                'Swordmaster': 'Attacker',
                'Oracle': 'Supporter',
                'Salve-Maker': 'Healer',
                'Arcanist': 'Attacker',
                'Bastion': 'Defender',
                'Phantom': 'Attacker',
                'Hellblade': 'Attacker',
                'Bravebearer': 'Specialist',
            }

            jobs.append({
                'id': slug,
                'name': name,
                'role': JOB_ROLES.get(name, 'Specialist'),
                'unlockChapter': row.get('unlock_chapter', '').strip() or 'Prologue',
                'chapterUnlocked': row.get('unlock_chapter', '').strip() or 'Prologue',
                'unlockLocation': loc,
                'asteriskHolder': holder,
                'specialties': traits,
                'specialty1': traits[0] if len(traits) > 0 else '—',
                'specialty2': traits[1] if len(traits) > 1 else None,
                'aptitudes': aptitudes,
                'description': JOB_DESCRIPTIONS.get(name, f"The {name} job in Bravely Default II."),
                'notes': notes,
                'icon': f"assets/jobs/{slug}.png",
                'iconPath': f"assets/jobs/{slug}.png"
            })

    # Write JSON
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(jobs, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(jobs)} jobs to {OUTPUT_JSON}")

    # Write JS global
    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Job Dataset\n * Generated automatically by parse_jobs.py\n */\n")
        f.write("const jobData = ")
        json.dump(jobs, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.jobData = jobData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
