"""Export the workbook's player-facing Weapon and Armor sheets for the web app."""

from __future__ import annotations

import json
import math
import re
from pathlib import Path

import pandas as pd


WORKBOOK = Path("Octopath traveler 0 database .xlsx")
OUTPUT_JSON = Path("equipmentData.json")
OUTPUT_JS = Path("equipmentData.js")

STAT_FIELDS = ("HP", "SP", "PATK", "PDEF", "MATK", "MDEF", "SPD", "CRT", "ACC", "EVA")

WEAPON_ICONS = {
    "Sword": "assets/icons/icon_sword.png",
    "Polearm": "assets/icons/icon_polearm.png",
    "Dagger": "assets/icons/icon_dagger.png",
    "Axe": "assets/icons/icon_axe.png",
    "Bow": "assets/icons/icon_bow.png",
    "Staff": "assets/icons/icon_staff.png",
    "Tome": "assets/icons/icon_tome.png",
    "Fan": "assets/icons/icon_fan.png",
}


def clean_text(value: object) -> str:
    if value is None or pd.isna(value):
        return ""
    return " ".join(str(value).split())


def clean_number(value: object) -> int | None:
    if value is None or pd.isna(value):
        return None
    number = float(value)
    return int(number) if number.is_integer() else number


def clean_cost(value: object) -> tuple[str, int | None]:
    """Keep multi-source prices readable while supplying a stable sort value."""
    text = clean_text(value)
    if not text:
        return "", None
    amounts = [int(amount.replace(",", "")) for amount in re.findall(r"\d[\d,]*", text)]
    return text, min(amounts) if amounts else None


def read_sheet(sheet_name: str, name_column: str, kind: str) -> list[dict]:
    # Rows 1-3 are workbook notes/spacing; row 4 contains the actual headers.
    frame = pd.read_excel(WORKBOOK, sheet_name=sheet_name, header=3)
    records: list[dict] = []

    for row_number, (_, row) in enumerate(frame.iterrows(), start=1):
        name = clean_text(row.get(name_column))
        item_type = clean_text(row.get("TYPE"))
        if not name or not item_type:
            continue

        stats = {field.lower(): clean_number(row.get(field)) or 0 for field in STAT_FIELDS}
        cost, cost_value = clean_cost(row.get("COST"))
        records.append(
            {
                "id": f"{kind.lower()}-{row_number}",
                "recordType": "equipment",
                "kind": kind,
                "name": name,
                "type": item_type,
                "icon": WEAPON_ICONS.get(item_type, "") if kind == "Weapon" else "",
                "stats": stats,
                "effect": clean_text(row.get("EFFECT")),
                "source": clean_text(row.get("SOURCE")),
                "cost": cost,
                "costValue": cost_value,
            }
        )

    return records


def main() -> None:
    weapons = read_sheet("Weapon", "WEAPON", "Weapon")
    armor = read_sheet("Armor", "Equipment", "Armor")
    equipment = weapons + armor

    serialized = json.dumps(equipment, ensure_ascii=False, indent=2)
    OUTPUT_JSON.write_text(serialized + "\n", encoding="utf-8")
    OUTPUT_JS.write_text(f"const equipmentData = {serialized};\n", encoding="utf-8")

    print(f"Exported {len(weapons)} weapons and {len(armor)} armor pieces.")


if __name__ == "__main__":
    main()
