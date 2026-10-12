"""Export the workbook's Townspeople + Resident Skills sheets for the NPC Codex.

Output: npcData.js (browser) + npcData.json (inspection copy), following the
same conventions as the other codex parsers.

Record shape (flat list; Add rows nested under their leader):
{
  id, name, area, subArea, type,        # type: Fame | Power | Wealth
  level, levelText,
  inquire, invite, inviteDesc, required,
  danger, strength, helperSkill, helperType, uses, helperDesc,
  items: [...5], weaknesses: [...],
  shields, hp, exp, jp, leaf,
  obtain, dropPct, drop, enemyId, note, sort,
  isWishvale, adds: [...]
}
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from openpyxl import load_workbook

WORKBOOK = Path("Octopath traveler 0 database .xlsx")
OUTPUT_JSON = Path("npcData.json")
OUTPUT_JS = Path("npcData.js")

EMPTY_VALUES = {"", "n/a", "none", "xx", "-"}

# Column indexes (0-based) on the Townspeople sheet (headers on row 2).
COL_NAME = 0           # A
COL_SUB_AREA = 1      # B (unlabeled)
COL_TYPE = 2          # C
COL_LEVEL = 3         # D
COL_INQUIRE = 4       # E
COL_INVITE = 5        # F
COL_REQUIRED = 6      # G
COL_DANGER = 7        # H
COL_STRENGTH = 8      # I
COL_HELPER = 9        # J
COL_HELPER_TYPE = 10  # K
COL_USES = 11         # L
COL_HELPER_DESC = 12  # M
COL_ITEMS = 13        # N..R (5 cols)
COL_WEAK = 18         # S..AF (8 weapons + 6 elements)
COL_SHIELDS = 32      # AG
COL_HP = 33           # AH
COL_EXP = 34          # AI
COL_JP = 35           # AJ
COL_LEAF = 36         # AK
COL_OBTAIN = 37       # AL
COL_DROP_PCT = 38     # AM
COL_ENEMY_ID = 39     # AN
COL_NOTE = 40         # AO
COL_SORT = 41         # AP

WEAKNESS_NAMES = [
    "Sword", "Spear", "Dagger", "Axe", "Bow", "Staff", "Tome", "Fan",
    "Fire", "Ice", "Thunder", "Wind", "Light", "Dark",
]

VALID_TYPES = {"Fame", "Power", "Wealth"}
SKIP_AREAS = {"SPOILER LOCATIONS BELOW"}


def clean(value: object) -> str:
    if value is None:
        return ""
    if isinstance(value, float) and value == int(value):
        return str(int(value))
    return re.sub(r"\s+", " ", str(value)).strip()


def clean_cell(value: object) -> str:
    """Cell text, treating marker/placeholder values as empty."""
    text = clean(value)
    return "" if text.lower() in EMPTY_VALUES else text


def parse_int(value: object) -> int | None:
    if value is None:
        return None
    try:
        return int(float(value))
    except (ValueError, TypeError):
        return None


def parse_level(value: object) -> tuple[int | None, str]:
    """Return (numeric level or None, display text). Floats like 1.0 -> 1."""
    text = clean(value)
    if not text or text.lower() in EMPTY_VALUES:
        return None, ""
    number = parse_int(value)
    if number is not None:
        return number, str(number)
    return None, text


def parse_percent(value: object) -> float | None:
    if value is None:
        return None
    try:
        pct = float(value) * 100.0
    except (ValueError, TypeError):
        return None
    return round(pct, 2)


def format_percent(pct: float | None) -> str:
    if pct is None:
        return ""
    if pct == int(pct):
        return f"{int(pct)}%"
    return f"{pct:g}%"


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-") or "npc"


def parse_weaknesses(row: tuple) -> list[str]:
    """A weakness counts when the cell text equals its column header name."""
    weak: list[str] = []
    for offset, name in enumerate(WEAKNESS_NAMES):
        cell = clean_cell(row[COL_WEAK + offset])
        if cell.lower() == name.lower():
            weak.append(name)
    return weak


def parse_items(row: tuple) -> list[str]:
    return [clean_cell(row[COL_ITEMS + i]) for i in range(5)]


def build_npc(row: tuple, npc_type: str, area: str, resident_skills: dict) -> dict:
    name = clean_cell(row[COL_NAME])
    level, level_text = parse_level(row[COL_LEVEL])

    invite = clean_cell(row[COL_INVITE])
    invite_skill = resident_skills.get(invite, {})
    required = clean_cell(row[COL_REQUIRED])
    obtain = clean_cell(row[COL_OBTAIN])
    drop_pct = parse_percent(row[COL_DROP_PCT])
    items = parse_items(row)
    note = clean_cell(row[COL_NOTE])

    npc_id = f"npc-{slugify(area)}-{slugify(name)}-{parse_int(row[COL_SORT]) or 0}"

    return {
        "id": npc_id,
        "name": name,
        "area": area,
        "subArea": clean_cell(row[COL_SUB_AREA]),
        "type": npc_type,
        "level": level,
        "levelText": level_text,
        "inquire": clean_cell(row[COL_INQUIRE]),
        "invite": invite,
        "inviteDesc": invite_skill.get("description", ""),
        "inviteFacility": invite_skill.get("facility", ""),
        "required": required,
        "danger": parse_int(row[COL_DANGER]),
        "strength": clean_cell(row[COL_STRENGTH]),
        "helperSkill": clean_cell(row[COL_HELPER]),
        "helperType": clean_cell(row[COL_HELPER_TYPE]),
        "uses": clean_cell(row[COL_USES]),
        "helperDesc": clean_cell(row[COL_HELPER_DESC]),
        "items": items,
        "weaknesses": parse_weaknesses(row),
        "shields": parse_int(row[COL_SHIELDS]),
        "hp": parse_int(row[COL_HP]),
        "exp": parse_int(row[COL_EXP]),
        "jp": parse_int(row[COL_JP]),
        "leaf": parse_int(row[COL_LEAF]),
        "obtain": obtain,
        "dropPct": drop_pct,
        "drop": f"{obtain} ({format_percent(drop_pct)})" if obtain and drop_pct is not None else obtain,
        "enemyId": clean_cell(row[COL_ENEMY_ID]),
        "note": note,
        "sort": parse_int(row[COL_SORT]) or 0,
        "isWishvale": "wishvale" in area.lower(),
        "adds": [],
    }


def parse_resident_skills(ws) -> dict[str, dict]:
    """Resident Skills sheet: header row 3, data from row 4. Name -> details."""
    skills: dict[str, dict] = {}
    for row in ws.iter_rows(min_row=4, values_only=True):
        if not row or len(row) < 6:
            continue
        name = clean_cell(row[4])  # E: Resident Skill
        if not name:
            continue
        if name not in skills:
            skills[name] = {
                "description": clean_cell(row[5]),  # F: Skill Description
                "facility": clean_cell(row[3]),      # D: Facility
            }
    return skills


def parse_townspeople(ws, resident_skills: dict) -> list[dict]:
    """Header row 2, data from row 3. Area markers = name set, type empty."""
    npcs: list[dict] = []
    area = ""
    last_leader: dict | None = None

    for row in ws.iter_rows(min_row=3, values_only=True):
        if not row or len(row) < 2:
            continue
        name = clean_cell(row[COL_NAME])
        npc_type = clean_cell(row[COL_TYPE])

        # Area marker: name present, type empty.
        if name and not npc_type:
            if name not in SKIP_AREAS:
                area = name
                last_leader = None
            continue
        if not name or not area:
            continue

        if npc_type == "Add":
            # Battle-added NPC: nest under the nearest leader above it.
            if last_leader is not None:
                last_leader["adds"].append(build_npc(row, "Add", area, resident_skills))
            continue

        if npc_type not in VALID_TYPES:
            continue

        npc = build_npc(row, npc_type, area, resident_skills)
        npcs.append(npc)
        last_leader = npc

    return npcs


def main() -> None:
    wb = load_workbook(WORKBOOK, read_only=True, data_only=True)
    resident_skills = parse_resident_skills(wb["Resident Skills"])
    npcs = parse_townspeople(wb["Townspeople"], resident_skills)
    wb.close()

    OUTPUT_JSON.write_text(
        json.dumps(npcs, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    OUTPUT_JS.write_text(
        "const npcData = "
        + json.dumps(npcs, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    areas = {n["area"] for n in npcs}
    add_count = sum(len(n["adds"]) for n in npcs)
    invited = sum(1 for n in npcs if n["invite"])
    print(f"NPCs exported: {len(npcs)}")
    print(f"Areas: {len(areas)}")
    print(f"Add-type battle NPCs nested: {add_count}")
    print(f"NPCs with invite skill: {invited}")
    print(f"Resident skills indexed: {len(resident_skills)}")


if __name__ == "__main__":
    main()
