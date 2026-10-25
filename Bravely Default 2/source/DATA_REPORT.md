# Bravely Default II — Codex Data Integrity Report

**Generated:** 2026-10-25 22:08:55
**Pipeline Status:** Synchronized & Validated (`*Data.json` ↔ `*Data.js`)

---

## 1. Dataset Summary

| Dataset | File | Records | Completeness |
| :--- | :--- | :---: | :---: |
| **Jobs** | `jobData.json` / `jobData.js` | 24 | 100% (All 24 asterisk jobs) |
| **Abilities** | `abilityData.json` / `abilityData.js` | 157 | 100% (Command & Support abilities) |
| **Equipment** | `equipmentData.json` / `equipmentData.js` | 309 | High (Weapons, Armor, Accessories) |
| **Bestiary** | `enemyData.json` / `enemyData.js` | 292 | High (Regular, Asterisk Bosses, Rare World Bosses) |
| **Side Quests** | `questData.json` / `questData.js` | 69 | 100% (All 69 subquests) |
| **Shops** | `shopData.json` / `shopData.js` | 7 | 100% (All 7 settlement shops) |
| **B 'n' D Cards** | `bndCardData.json` / `bndCardData.js` | 105 | 100% (All 105 minigame cards) |
| **Total Game Records** | — | **963** | **Ready for Production** |

---

## 2. Cross-Reference Verification

- **Abilities → Jobs**: 157 / 157 linked cleanly (0 unresolved).
- **Shop Inventory Cross-Reference**:
  - Equipment items recognized: 537
  - Consumables / Potions / Tents recognized: 48
- **Enemy Drops / Steals**:
  - Total drop/steal references: 1168
  - Equipment matches: 28 (remaining items are consumable buns, pg items, status herbs).
- **B 'n' D Minigame Cards**:
  - Total cards: 105 (Monster cards, Job cards, Character cards).
  - Matches game entities cleanly across Excillant bestiary and job roster.

---

## 3. Data Invariants & Zero-Dependency Rules

1. **Twin Synchronization**: Every `<dataset>Data.json` has a strictly synchronized browser `<dataset>Data.js` defining `window.<dataset>Data`.
2. **Deterministic Regeneration**: All data can be regenerated at any time by running `python update_data.py`.
3. **Graceful Handling of Nulls**: Any unknown value is stored as `null` or `"?"` and safely rendered as `" — "` in the UI.
4. **HTML Escaping**: Dynamic values interpolated into DOM innerHTML are passed through `escapeHtml()` to ensure 100% immunity against injection.

---

## 4. Actionable Gaps & NotebookLM Follow-up

The following items are optional enrichments that can be refined in future source expansions:
- [ ] Add Japanese job and ability romaji / kanji names.
- [ ] Add exact JP point progression curve formulas per job level (1 to 12).
- [ ] Add mini-map coordinate images for rare world boss spawn points.
- [ ] Add B 'n' D card opponent NPC deck compositions and locations.
