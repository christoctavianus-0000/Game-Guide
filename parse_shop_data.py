"""Export the workbook's Shops and Wishvale Shop sheets for the web app."""

from __future__ import annotations

import json
import re
from pathlib import Path

from openpyxl import load_workbook

WORKBOOK = Path("Octopath traveler 0 database .xlsx")
OUTPUT_JSON = Path("shopData.json")
OUTPUT_JS = Path("shopData.js")


def clean(value: object) -> str:
    if value is None:
        return ""
    text = str(value).strip()
    # strip leading * or (*) used as "new equipment" marker
    text = re.sub(r"^\*\s*", "", text)
    return text


def parse_price(value: object) -> int:
    if value is None:
        return 0
    try:
        return int(float(value))
    except (ValueError, TypeError):
        return 0


WISHVALE_REMAP = {
    "Agapea", "Atlasdam", "Berecain", "Clearbrook", "Cragspear",
    "Donescu", "Emberglow", "Flamesgrace", "Grandport", "Rippletide",
    "Shepherd's Rock", "Sufrataljah", "Sunshade", "Theatropolis",
    "Valore", "Victors Hollow",
}

def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-") or "item"


def _remap_location(loc: str) -> str:
    """Locations without region suffix are Wishvale HQ shops."""
    return "Wishvale" if loc in WISHVALE_REMAP else loc


def parse_wishvale_shop(ws) -> list[dict]:
    """Parse the Wishvale Shop sheet (has header row 2, data from row 3)."""
    items: list[dict] = []
    for row in ws.iter_rows(min_row=3, values_only=False):
        name = clean(row[1].value) if len(row) > 1 else ""
        if not name:
            continue
        item_type = clean(row[2].value) if len(row) > 2 else ""
        price = parse_price(row[3].value if len(row) > 3 else None)
        rarity = clean(row[4].value) if len(row) > 4 else ""
        location = clean(row[8].value) if len(row) > 8 else "Wishvale"
        location = _remap_location(location)

        items.append({
            "id": f"wishvale-{slugify(name)}",
            "name": name,
            "type": item_type,
            "price": price,
            "rarity": rarity,
            "location": location,
            "source": "wishvale",
        })
    return items


REGION_RE = re.compile(
    r"\("
    r"(Woodlands|Frostlands|Flatlands|Coastlands|Cliftlands|"
    r"Riverlands|Sunlands|Highlands|Prologue)"
    r"\)",
    re.IGNORECASE,
)


def _is_location_header(ws, row_num: int) -> bool:
    """True when the row contains >= 2 location-style cells like 'Valore (Woodlands)'."""
    hits = 0
    for c in range(2, 30):
        v = ws.cell(row_num, c).value
        if v and REGION_RE.search(str(v)):
            hits += 1
    return hits >= 2


def parse_shops_sheet(ws) -> list[dict]:
    """Parse the Shops sheet with its multi-column layout.

    Shop name headers sit in rows 3, 9, 36, 62 at column offsets spaced 3 apart
    (cols 2,5,8,11,14,17,20,23).  Items for each shop are listed below the
    header until the next header row.
    """
    max_row = ws.max_row or 1

    # Identify header rows by matching region names in parentheses
    header_rows: list[int] = [3]  # row 3 is always Wishvale (Prologue)
    for r in range(4, max_row + 1):
        if _is_location_header(ws, r):
            header_rows.append(r)
    header_rows.sort()

    # For each header row, scan column groups
    shops: list[dict] = []
    for idx, hr in enumerate(header_rows):
        next_hr = header_rows[idx + 1] if idx + 1 < len(header_rows) else max_row + 1
        for c in range(2, 26, 3):
            shop_name = clean(ws.cell(hr, c).value)
            if not shop_name:
                continue
            items: list[dict] = []
            for r in range(hr + 1, next_hr):
                item_name = clean(ws.cell(r, c).value)
                if not item_name:
                    continue
                price = parse_price(ws.cell(r, c + 1).value)
                items.append({
                    "id": f"shop-{slugify(shop_name)}-{slugify(item_name)}",
                    "name": item_name,
                    "price": price,
                    "location": shop_name,
                    "source": "shops",
                })
            shops.append({
                "id": slugify(shop_name),
                "location": shop_name,
                "items": items,
            })
    return shops


def main() -> None:
    wb = load_workbook(WORKBOOK, data_only=True)

    # Wishvale Shop → flat item list
    wishvale_items = parse_wishvale_shop(wb["Wishvale Shop"])

    # Shops sheet → grouped by location
    shops = parse_shops_sheet(wb["Shops"])

    # Build a flat list from all shops
    all_shop_items: list[dict] = []
    for shop in shops:
        for item in shop["items"]:
            all_shop_items.append(item)

    data = {
        "wishvale": wishvale_items,
        "shops": shops,
        "allItems": all_shop_items + wishvale_items,
    }

    serialized = json.dumps(data, ensure_ascii=False, indent=2)
    OUTPUT_JSON.write_text(serialized + "\n", encoding="utf-8")
    OUTPUT_JS.write_text(f"const shopData = {serialized};\n", encoding="utf-8")
    print(f"Wrote {OUTPUT_JSON} and {OUTPUT_JS}")
    print(f"  Wishvale items: {len(wishvale_items)}")
    print(f"  Shop locations: {len(shops)}")
    print(f"  All items: {len(all_shop_items) + len(wishvale_items)}")


if __name__ == "__main__":
    main()
