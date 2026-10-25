#!/usr/bin/env python3
"""
parse_abilities.py - Generates abilityData.json and abilityData.js for Bravely Default II.
Authoritative source: Community Databook Google Sheet (Tables61)
Covers all 24 Asterisk jobs across Prologue through Chapters 1-4+,
extracting complete Active Command skills and Passive Support abilities (Levels 1-15).
"""

import csv
import json
import os
import re

BASE_DIR = os.path.dirname(__file__)
SOURCE_DIR = os.path.join(BASE_DIR, 'source')
SHEET_TABS_DIR = os.path.join(SOURCE_DIR, 'sheet_tabs')
OUTPUT_JSON = os.path.join(BASE_DIR, 'abilityData.json')
OUTPUT_JS = os.path.join(BASE_DIR, 'abilityData.js')

JOB_NAME_MAP = {
    'Salve Maker': 'Salve-Maker',
}

TAB_FILES = [
    'prologue_jobs.csv',
    'ch_1_jobs.csv',
    'ch_2_jobs.csv',
    'ch_3_jobs.csv',
    'ch_4plus_jobs.csv'
]

def to_slug(name):
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    return slug

def parse_sheet_tabs():
    abilities = []
    seen_ids = set()

    for tab_file in TAB_FILES:
        tab_path = os.path.join(SHEET_TABS_DIR, tab_file)
        if not os.path.exists(tab_path):
            print(f"Warning: Tab file {tab_path} not found. Skipping.")
            continue

        with open(tab_path, 'r', encoding='utf-8-sig', errors='ignore') as f:
            reader = csv.reader(f)
            current_job = None

            for row_idx, row in enumerate(reader):
                if not row or not any(row):
                    continue
                if row_idx == 0:
                    continue

                v0 = row[0].strip() if len(row) > 0 else ""
                v1 = row[1].strip() if len(row) > 1 else ""
                v2 = row[2].strip() if len(row) > 2 else ""

                # Detect job header (col 0 == col 2, or row[0] is set and row[1] empty)
                if v0 and (v0 == v2 or (not v1 and (len(row) <= 2 or not v2))):
                    job_name = JOB_NAME_MAP.get(v0, v0)
                    current_job = job_name
                    continue

                if not current_job:
                    continue

                # We only parse standard Lv 1 to 15 abilities (ignore Sp1, Sp2, SpA in this codex table)
                if not v1.isdigit():
                    continue

                level_num = int(v1)
                ability_name = v0
                effect = row[4].strip() if len(row) > 4 else ""
                cat = row[5].strip() if len(row) > 5 else ""
                target = row[6].strip() if len(row) > 6 else ""
                modifier = row[7].strip() if len(row) > 7 else ""
                notes = row[10].strip() if len(row) > 10 else ""
                c2 = row[2].strip() if len(row) > 2 else ""
                c3 = row[3].strip() if len(row) > 3 else ""

                # Determine if Passive Support or Active Command
                is_passive = (cat.lower() == 'passive') or ('sp' in c3.lower()) or ('sp' in c2.lower())

                if is_passive:
                    type_str = 'Support'
                    if c2 == '1':
                        cost_str = '1 Slot'
                    elif c2 == '2':
                        cost_str = '2 Slots'
                    elif c2:
                        cost_str = f"{c2} Slots"
                    else:
                        cost_str = '1 Slot'
                    category_str = 'Passive'
                else:
                    type_str = 'Command'
                    if c2 == '0' or not c2:
                        cost_str = 'Free'
                    elif c3:
                        cost_str = f"{c2} {c3}".strip()
                    else:
                        cost_str = c2

                    if 'magic' in cat.lower():
                        category_str = 'Magic'
                    elif 'phys' in cat.lower():
                        category_str = 'Physical'
                    else:
                        category_str = 'Support'

                # Clean modifier and notes
                if modifier.upper() in ['N/A', 'NONE', '—', '-']:
                    modifier = None
                if notes.upper() in ['N/A', 'NONE', '—', '-']:
                    notes = None

                slug = f"{to_slug(current_job)}-{to_slug(ability_name)}"
                if slug in seen_ids:
                    # disambiguate if duplicate
                    slug = f"{slug}-lv{level_num}"
                seen_ids.add(slug)

                entry = {
                    "id": slug,
                    "name": ability_name,
                    "job": current_job,
                    "jobId": to_slug(current_job),
                    "level": level_num,
                    "type": type_str,
                    "isPassive": is_passive,
                    "category": category_str,
                    "cost": cost_str,
                    "target": target if target and target.upper() != 'N/A' else None,
                    "effect": effect if effect else "No description available.",
                    "description": effect if effect else "No description available."
                }
                if modifier:
                    entry["modifier"] = modifier
                if notes:
                    entry["notes"] = notes

                abilities.append(entry)

    # Sort abilities deterministically by Job Name then Level
    abilities.sort(key=lambda a: (a["job"], a["level"]))
    return abilities

def main():
    abilities = parse_sheet_tabs()
    print(f"Parsed {len(abilities)} total abilities across all jobs.")

    # Validation
    jobs_represented = {a["job"] for a in abilities}
    print(f"Jobs represented: {len(jobs_represented)}")
    passives = [a for a in abilities if a["type"] == "Support"]
    commands = [a for a in abilities if a["type"] == "Command"]
    print(f"  Command abilities: {len(commands)}")
    print(f"  Support (Passive) abilities: {len(passives)}")

    # Check that every job has at least one passive skill
    jobs_with_passives = {a["job"] for a in passives}
    missing_passives = jobs_represented - jobs_with_passives
    if missing_passives:
        print(f"ERROR: Jobs missing passive abilities: {missing_passives}")
        raise ValueError(f"Jobs missing passives: {missing_passives}")
    else:
        print("PASS: Every single job has at least one passive support ability!")

    # Write JSON
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(abilities, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(abilities)} abilities to {OUTPUT_JSON}")

    # Write JS global
    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write("/**\n * Bravely Default II — Ability Dataset\n * Generated automatically by parse_abilities.py\n */\n")
        f.write("const abilityData = ")
        json.dump(abilities, f, indent=2, ensure_ascii=False)
        f.write(";\n\nif (typeof window !== 'undefined') {\n  window.abilityData = abilityData;\n}\n")
    print(f"Wrote browser global to {OUTPUT_JS}")

if __name__ == '__main__':
    main()
