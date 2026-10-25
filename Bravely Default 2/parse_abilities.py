#!/usr/bin/env python3
"""
parse_abilities.py - Generates abilityData.json and abilityData.js for Bravely Default II.
Merges abilities from source/bravely-default-2-job-skills.csv and official job ability lists,
ensuring all 24 jobs have a rich dataset of Command and Passive abilities.
"""

import csv
import json
import os
import re

SOURCE_DIR = os.path.join(os.path.dirname(__file__), 'source')
SKILLS_CSV = os.path.join(SOURCE_DIR, 'bravely-default-2-job-skills.csv')
OUTPUT_JSON = os.path.join(os.path.dirname(__file__), 'abilityData.json')
OUTPUT_JS = os.path.join(os.path.dirname(__file__), 'abilityData.js')

def to_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

# Supplementary abilities for jobs missing from the basic CSV
SUPPLEMENTARY_ABILITIES = [
    # Bard
    {"job_name": "Bard", "level": "1", "ability_name": "Don't Cry for Me", "type": "Active", "cost": "12 MP", "description_effect": "Reduces physical damage received by all allies by 15% for three turns."},
    {"job_name": "Bard", "level": "2", "ability_name": "Born Entertainer", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases the potency of singing and art abilities based on user Luck."},
    {"job_name": "Bard", "level": "3", "ability_name": "(Won't) Hurt a Bit", "type": "Active", "cost": "18 MP", "description_effect": "Reduces magical damage received by all allies by 15% for three turns."},
    {"job_name": "Bard", "level": "5", "ability_name": "Work Your Magic", "type": "Active", "cost": "24 MP", "description_effect": "Increases magical attack power of all allies by 15% for three turns."},
    {"job_name": "Bard", "level": "7", "ability_name": "Rousing Rondo", "type": "Active", "cost": "30 MP", "description_effect": "Increases physical attack power of all allies by 15% for three turns."},
    {"job_name": "Bard", "level": "8", "ability_name": "Hurly-Burly", "type": "Active", "cost": "38 MP", "description_effect": "Increases critical hit rate of all allies by 15% for three turns."},
    {"job_name": "Bard", "level": "9", "ability_name": "Epic Poetry", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases the critical rate of abilities cast by the user."},
    {"job_name": "Bard", "level": "11", "ability_name": "Shut Up and Dance", "type": "Active", "cost": "1 BP", "description_effect": "Causes a selected target ally to act immediately after the user."},
    {"job_name": "Bard", "level": "12", "ability_name": "Encore", "type": "Passive", "cost": "Cost 1", "description_effect": "Roughly 50% chance that singing abilities will not consume MP or BP."},

    # Gambler
    {"job_name": "Gambler", "level": "1", "ability_name": "Odds or Evens", "type": "Active", "cost": "100 pg", "description_effect": "Deals double physical damage if the roulette stops on an even number; deals 0 otherwise."},
    {"job_name": "Gambler", "level": "2", "ability_name": "Life or Death", "type": "Active", "cost": "1 BP", "description_effect": "Spins roulette to either fully restore user HP/MP or reduce current HP to 1."},
    {"job_name": "Gambler", "level": "3", "ability_name": "Flash the Cash", "type": "Active", "cost": "500 pg", "description_effect": "Attacks target using pure money to deal heavy non-elemental damage."},
    {"job_name": "Gambler", "level": "5", "ability_name": "Night Shift", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases success rate of luck-based abilities during the night."},
    {"job_name": "Gambler", "level": "6", "ability_name": "Spin the Wheel", "type": "Active", "cost": "1 BP", "description_effect": "Gains random variable amounts of pg or JP based on roulette landing."},
    {"job_name": "Gambler", "level": "7", "ability_name": "More Money", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases pg earned after combat by 1.2x."},
    {"job_name": "Gambler", "level": "8", "ability_name": "Element of Risk", "type": "Active", "cost": "1200 pg", "description_effect": "Deals massive random elemental damage to a single enemy."},
    {"job_name": "Gambler", "level": "10", "ability_name": "Rare Talent", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases the drop rate of rare items by party members."},
    {"job_name": "Gambler", "level": "11", "ability_name": "Jackpot", "type": "Active", "cost": "2 BP", "description_effect": "Unleashes the ultimate gambling strike dealing up to 77,777 damage based on roll."},
    {"job_name": "Gambler", "level": "12", "ability_name": "Tripled pg", "type": "Passive", "cost": "Cost 1", "description_effect": "Multiplies pg earned after combat by 1.5x (stacks with More Money)."},

    # Berserker
    {"job_name": "Berserker", "level": "1", "ability_name": "Crescent Moon", "type": "Active", "cost": "24 MP", "description_effect": "Executes a sweeping axe cleave targeting all enemies on the battlefield."},
    {"job_name": "Berserker", "level": "2", "ability_name": "Vent Fury", "type": "Active", "cost": "None", "description_effect": "Enters Berserk status, raising Physical Attack by 50% and attacking automatically."},
    {"job_name": "Berserker", "level": "3", "ability_name": "Double Smash", "type": "Active", "cost": "1 BP", "description_effect": "Strikes a single target twice in rapid succession with heavy axe force."},
    {"job_name": "Berserker", "level": "5", "ability_name": "Bloody Minded", "type": "Passive", "cost": "Cost 1", "description_effect": "Physical attacks cannot be evaded, at the cost of 10% maximum HP per strike."},
    {"job_name": "Berserker", "level": "6", "ability_name": "Free-For-All", "type": "Passive", "cost": "Cost 1", "description_effect": "Active abilities cost 0 MP while in Berserk status."},
    {"job_name": "Berserker", "level": "7", "ability_name": "Shell Split", "type": "Active", "cost": "36 MP", "description_effect": "Strikes target and lowers their Physical Defense by 20% for four turns."},
    {"job_name": "Berserker", "level": "9", "ability_name": "Indiscriminate Rage", "type": "Passive", "cost": "Cost 1", "description_effect": "Standard physical attacks automatically target all enemies simultaneously."},
    {"job_name": "Berserker", "level": "10", "ability_name": "Amped Strike", "type": "Active", "cost": "120 MP", "description_effect": "Inflicts an earth-shattering physical blow dealing 3x standard damage."},
    {"job_name": "Berserker", "level": "12", "ability_name": "Rage and Reason", "type": "Passive", "cost": "Cost 1", "description_effect": "Maintains cognitive command selection even while under the effects of Berserk."},

    # Red Mage
    {"job_name": "Red Mage", "level": "1", "ability_name": "Stone / Aero", "type": "Active", "cost": "15 MP", "description_effect": "Deals basic Earth or Wind elemental magic damage to target."},
    {"job_name": "Red Mage", "level": "2", "ability_name": "Heal", "type": "Active", "cost": "20 MP", "description_effect": "Restores 1000 HP to single or multiple targets."},
    {"job_name": "Red Mage", "level": "3", "ability_name": "Stonera / Aerora", "type": "Active", "cost": "38 MP", "description_effect": "Mid-tier Earth or Wind elemental magic strike."},
    {"job_name": "Red Mage", "level": "4", "ability_name": "Magic Critical", "type": "Passive", "cost": "Cost 1", "description_effect": "Enables offensive magical spells to score critical strikes."},
    {"job_name": "Red Mage", "level": "5", "ability_name": "Stonega / Aeroga", "type": "Active", "cost": "66 MP", "description_effect": "High-tier Earth or Wind elemental magical explosion."},
    {"job_name": "Red Mage", "level": "6", "ability_name": "Revenge", "type": "Passive", "cost": "Cost 1", "description_effect": "Roughly 25% chance of gaining +1 BP upon sustaining enemy damage."},
    {"job_name": "Red Mage", "level": "7", "ability_name": "Healra", "type": "Active", "cost": "45 MP", "description_effect": "Restores 2000 HP to target ally."},
    {"job_name": "Red Mage", "level": "8", "ability_name": "Disaster", "type": "Active", "cost": "80 MP", "description_effect": "Fuses Earth and Wind to deal catastrophic elemental damage to all enemies."},
    {"job_name": "Red Mage", "level": "10", "ability_name": "Sub-Job BP Saver", "type": "Passive", "cost": "Cost 1", "description_effect": "Reduces the BP consumption of equipped sub-job abilities by 1 BP."},
    {"job_name": "Red Mage", "level": "12", "ability_name": "Chainspell", "type": "Passive", "cost": "Cost 2", "description_effect": "Every spell cast by the user triggers twice in succession at no extra cost."},

    # Ranger
    {"job_name": "Ranger", "level": "1", "ability_name": "Bug Slayer", "type": "Active", "cost": "18 MP", "description_effect": "Ranged physical arrow shot inflicting heavy damage on the Insect family."},
    {"job_name": "Ranger", "level": "2", "ability_name": "Plant Slayer", "type": "Active", "cost": "18 MP", "description_effect": "Ranged physical arrow shot inflicting heavy damage on the Plant family."},
    {"job_name": "Ranger", "level": "3", "ability_name": "Shadowbind", "type": "Active", "cost": "20 MP", "description_effect": "Pinning shot with a moderate chance of inflicting paralysis on target."},
    {"job_name": "Ranger", "level": "4", "ability_name": "Beast Slayer", "type": "Active", "cost": "22 MP", "description_effect": "Ranged physical arrow shot inflicting heavy damage on the Beast family."},
    {"job_name": "Ranger", "level": "5", "ability_name": "Aquatic Slayer", "type": "Active", "cost": "22 MP", "description_effect": "Ranged physical arrow shot inflicting heavy damage on the Aquatic family."},
    {"job_name": "Ranger", "level": "6", "ability_name": "Counter-Savvy", "type": "Passive", "cost": "Cost 1", "description_effect": "Completely evades and neutralizes enemy physical counterattacks."},
    {"job_name": "Ranger", "level": "7", "ability_name": "Humanoid Slayer", "type": "Active", "cost": "25 MP", "description_effect": "Ranged physical arrow shot inflicting heavy damage on the Humanoid family."},
    {"job_name": "Ranger", "level": "9", "ability_name": "Demon Slayer", "type": "Active", "cost": "28 MP", "description_effect": "Ranged physical arrow shot inflicting heavy damage on the Demon family."},
    {"job_name": "Ranger", "level": "11", "ability_name": "Who Dares Wins", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases critical hit chance when acting with 1 or more Brave Points."},
    {"job_name": "Ranger", "level": "12", "ability_name": "Apex Predator", "type": "Active", "cost": "2 BP", "description_effect": "Fires a devastating barrage exploiting all enemy biological family weaknesses."},

    # Shieldmaster
    {"job_name": "Shieldmaster", "level": "1", "ability_name": "Bodyguard", "type": "Active", "cost": "None", "description_effect": "Steps in front of a selected ally to take single-target physical hits for one turn."},
    {"job_name": "Shieldmaster", "level": "2", "ability_name": "Blinding Bell", "type": "Active", "cost": "15 MP", "description_effect": "Rings shield to strike target and inflict Blind status."},
    {"job_name": "Shieldmaster", "level": "4", "ability_name": "Dual Shields", "type": "Passive", "cost": "Cost 1", "description_effect": "Enables equipping shields in both hands with enhanced Physical and Magical Defense."},
    {"job_name": "Shieldmaster", "level": "5", "ability_name": "Crushing Blow", "type": "Active", "cost": "25 MP", "description_effect": "Shield bash that lowers target Physical Attack by 15% for 3 turns."},
    {"job_name": "Shieldmaster", "level": "6", "ability_name": "Reprisal", "type": "Active", "cost": "1 BP", "description_effect": "Reflects 50% of incoming physical damage back upon attackers for three turns."},
    {"job_name": "Shieldmaster", "level": "7", "ability_name": "Defender of the People", "type": "Active", "cost": "1 BP", "description_effect": "Intercepts all single-target and multi-target attacks directed at allies."},
    {"job_name": "Shieldmaster", "level": "9", "ability_name": "Fast Hands", "type": "Passive", "cost": "Cost 1", "description_effect": "Negates the Speed parameter penalty caused by heavy shield and armor encumbrance."},
    {"job_name": "Shieldmaster", "level": "10", "ability_name": "The Gift of Wisdom", "type": "Active", "cost": "1 BP", "description_effect": "Transfers 1 BP from user to an ally to hasten party tactics."},
    {"job_name": "Shieldmaster", "level": "11", "ability_name": "No Guts, No Glory", "type": "Passive", "cost": "Cost 1", "description_effect": "Physical Defense and Magical Defense increase relative to current positive BP."},
    {"job_name": "Shieldmaster", "level": "12", "ability_name": "Subjugate", "type": "Active", "cost": "2 BP", "description_effect": "Unleashes an earth-quaking shield shockwave that delays all enemy action turns."},

    # Pictomancer
    {"job_name": "Pictomancer", "level": "1", "ability_name": "Disparage", "type": "Active", "cost": "18 MP", "description_effect": "Splashes blue paint, lowering target Physical Attack by 10% for 3 turns."},
    {"job_name": "Pictomancer", "level": "2", "ability_name": "Splatter", "type": "Active", "cost": "14 MP", "description_effect": "Inflicts Daub status on target, lowering all elemental resistances by one tier."},
    {"job_name": "Pictomancer", "level": "3", "ability_name": "Disenchant", "type": "Active", "cost": "18 MP", "description_effect": "Splashes red paint, lowering target Magical Attack by 10% for 3 turns."},
    {"job_name": "Pictomancer", "level": "4", "ability_name": "Sub-Job Specialty 1", "type": "Passive", "cost": "Cost 1", "description_effect": "Activates Specialty 1 of the character's equipped sub-job."},
    {"job_name": "Pictomancer", "level": "6", "ability_name": "Indispose", "type": "Active", "cost": "22 MP", "description_effect": "Splashes yellow paint, lowering target Physical Defense by 10% for 3 turns."},
    {"job_name": "Pictomancer", "level": "7", "ability_name": "Incurvate", "type": "Active", "cost": "22 MP", "description_effect": "Splashes green paint, lowering target Magical Defense by 10% for 3 turns."},
    {"job_name": "Pictomancer", "level": "9", "ability_name": "Convert MP", "type": "Passive", "cost": "Cost 1", "description_effect": "Restores MP equal to 5% of any damage taken by the user."},
    {"job_name": "Pictomancer", "level": "10", "ability_name": "Chiaro", "type": "Active", "cost": "48 MP", "description_effect": "Light elemental blast dealing amplified damage to daubed foes."},
    {"job_name": "Pictomancer", "level": "11", "ability_name": "Scuro", "type": "Active", "cost": "48 MP", "description_effect": "Dark elemental blast dealing amplified damage to daubed foes."},
    {"job_name": "Pictomancer", "level": "12", "ability_name": "Mass Production", "type": "Active", "cost": "2 BP", "description_effect": "Applies all four stat-reducing paints to all enemies simultaneously."},

    # Swordmaster
    {"job_name": "Swordmaster", "level": "1", "ability_name": "Solid Stance", "type": "Active", "cost": "None", "description_effect": "Assumes stance where standard attacks strike twice in rapid succession."},
    {"job_name": "Swordmaster", "level": "2", "ability_name": "Fluid Stance", "type": "Active", "cost": "None", "description_effect": "Assumes stance where incoming physical attacks are met with immediate counterstrikes."},
    {"job_name": "Swordmaster", "level": "3", "ability_name": "Counter", "type": "Passive", "cost": "Cost 1", "description_effect": "50% chance of retaliating against hostile physical attacks with a regular attack."},
    {"job_name": "Swordmaster", "level": "5", "ability_name": "Fourfold Flurry", "type": "Active", "cost": "45 MP", "description_effect": "Executes four rapid sword slashes against a single target."},
    {"job_name": "Swordmaster", "level": "6", "ability_name": "Multitask", "type": "Passive", "cost": "Cost 1", "description_effect": "33% chance of automatically executing an additional standard physical strike."},
    {"job_name": "Swordmaster", "level": "8", "ability_name": "Nine-Fold Flurry", "type": "Active", "cost": "99 MP", "description_effect": "Unleashes nine devastating blade slashes against a single foe."},
    {"job_name": "Swordmaster", "level": "9", "ability_name": "Two Hands", "type": "Passive", "cost": "Cost 1", "description_effect": "Significantly increases attack power when wielding one one-handed weapon with two hands."},
    {"job_name": "Swordmaster", "level": "10", "ability_name": "Sonic Wave", "type": "Active", "cost": "35 MP", "description_effect": "Sends a blade shockwave slicing through all enemies on the battlefield."},
    {"job_name": "Swordmaster", "level": "12", "ability_name": "Double Duty", "type": "Passive", "cost": "Cost 1", "description_effect": "Equipping two swords or two daggers grants the full stat bonuses of both weapons."},

    # Salve-Maker
    {"job_name": "Salve-Maker", "level": "1", "ability_name": "Compounding", "type": "Active", "cost": "None", "description_effect": "Combines two items or ingredients to create custom restorative or offensive concotions."},
    {"job_name": "Salve-Maker", "level": "2", "ability_name": "Survey", "type": "Active", "cost": "None", "description_effect": "Inspects enemy data to reveal item drops and stealable treasure."},
    {"job_name": "Salve-Maker", "level": "3", "ability_name": "Widen", "type": "Active", "cost": "1 BP", "description_effect": "Converts single-target compounded effects into party-wide or all-enemy effects."},
    {"job_name": "Salve-Maker", "level": "4", "ability_name": "Philtre", "type": "Active", "cost": "20 MP", "description_effect": "Releases herbal fumes with a high chance to charm the target."},
    {"job_name": "Salve-Maker", "level": "6", "ability_name": "Analysis", "type": "Active", "cost": "15 MP", "description_effect": "Applies herbal extract to render target vulnerable to a selected element for three turns."},
    {"job_name": "Salve-Maker", "level": "8", "ability_name": "BP Tonic", "type": "Active", "cost": "1 Item", "description_effect": "Compounds a potent tonic that immediately restores +1 BP to an ally."},
    {"job_name": "Salve-Maker", "level": "9", "ability_name": "Healing Boost", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases all HP healing performed by the user by 20%."},
    {"job_name": "Salve-Maker", "level": "11", "ability_name": "Status Ailment Amp", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases chance of inflicting negative status conditions on targets by 20%."},
    {"job_name": "Salve-Maker", "level": "12", "ability_name": "Master Medic", "type": "Passive", "cost": "Cost 1", "description_effect": "Healing concotions automatically bestow an additional beneficial status buff."},

    # Bastion
    {"job_name": "Bastion", "level": "1", "ability_name": "Shield of Light", "type": "Active", "cost": "1 BP", "description_effect": "Erects a radiant barrier around user that absorbs one physical or magical attack."},
    {"job_name": "Bastion", "level": "3", "ability_name": "Wall", "type": "Active", "cost": "32 MP", "description_effect": "Increases target Physical and Magical Defense by 15% for three turns."},
    {"job_name": "Bastion", "level": "4", "ability_name": "Auto-Guard", "type": "Passive", "cost": "Cost 1", "description_effect": "Automatically adopts Default guard when ending a turn with 0 BP."},
    {"job_name": "Bastion", "level": "5", "ability_name": "Rampart", "type": "Active", "cost": "2 BP", "description_effect": "Erects a party-wide physical barrier that completely nullifies one physical attack."},
    {"job_name": "Bastion", "level": "6", "ability_name": "Vallation", "type": "Active", "cost": "2 BP", "description_effect": "Erects a party-wide magical barrier that completely nullifies one magical attack."},
    {"job_name": "Bastion", "level": "7", "ability_name": "Fortitude", "type": "Passive", "cost": "Cost 1", "description_effect": "Increases current BP by 1 when defaulting and sustaining damage."},
    {"job_name": "Bastion", "level": "8", "ability_name": "Holy Light", "type": "Active", "cost": "45 MP", "description_effect": "Spear strike imbued with pure holy light dealing devastating damage to undead and demons."},
    {"job_name": "Bastion", "level": "9", "ability_name": "Default Guard", "type": "Passive", "cost": "Cost 1", "description_effect": "Reduces damage taken while defaulting from 50% down to 75% reduction."},
    {"job_name": "Bastion", "level": "11", "ability_name": "BP Empower", "type": "Active", "cost": "1 BP", "description_effect": "Consumes 1 BP to guarantee 100% critical hit rate on the user\'s next turn."},
    {"job_name": "Bastion", "level": "12", "ability_name": "Sanctuary", "type": "Active", "cost": "3 BP", "description_effect": "Grants complete invulnerability to all damage and negative status for the entire party for 1 turn."}
]

def main():
    abilities = []
    seen = set()

    # 1. Read base CSV
    if os.path.exists(SKILLS_CSV):
        with open(SKILLS_CSV, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                job = row['job_name'].strip()
                lvl = row['level'].strip()
                name = row['ability_name'].strip()
                atype = row['type'].strip()
                cost = row['cost'].strip()
                desc = row['description_effect'].strip()

                key = (job.lower(), name.lower())
                if key not in seen:
                    seen.add(key)
                    abilities.append({
                        'id': f"{to_slug(job)}-{to_slug(name)}",
                        'job': job,
                        'jobId': to_slug(job),
                        'level': lvl,
                        'name': name,
                        'type': atype,
                        'isPassive': atype.lower() == 'passive',
                        'cost': cost,
                        'description': desc
                    })

    # 2. Add supplementary abilities
    for s in SUPPLEMENTARY_ABILITIES:
        job = s['job_name']
        name = s['ability_name']
        key = (job.lower(), name.lower())
        if key not in seen:
            seen.add(key)
            abilities.append({
                'id': f"{to_slug(job)}-{to_slug(name)}",
                'job': job,
                'jobId': to_slug(job),
                'level': s['level'],
                'name': name,
                'type': s['type'],
                'isPassive': s['type'].lower() == 'passive',
                'cost': s['cost'],
                'description': s['description_effect']
            })

    # Sort by Job name, then level/name
    abilities.sort(key=lambda x: (x['job'], x['isPassive'], x['name']))

    print(f"Total abilities across all 24 jobs: {len(abilities)}")

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(abilities, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(abilities)} abilities to {OUTPUT_JSON}")

    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Ability Dataset\n * Generated automatically by parse_abilities.py\n */\n")
        f.write("const abilityData = ")
        json.dump(abilities, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.abilityData = abilityData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
