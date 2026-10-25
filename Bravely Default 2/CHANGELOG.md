# Bravely Default II Codex — Changelog

All notable changes to the Bravely Default II Codex module are documented here.

## [1.2.0] - 2026-10-25

### Fixed & Enhanced
- **Bestiary Blur Resolution (`enemy.html`, `enemyApp.js`, `styles.css`)**:
  - Resolved default blur issue on Bestiary page: `spoilersRevealed` now defaults to `true` on initial page load, ensuring all monsters and Asterisk bosses are immediately crisp, visible, and interactive.
  - Re-architected `.spoiler-blurred` CSS so that even if the user manually engages the spoiler toggle to "Hidden", boss cards remain cleanly structured with crisp header badges and hover/focus inspection reveals, preventing broken or muddy smearing.
- **Equipment Categorization & Weapon Subcategory Restructuring (`equipment.html`, `equipmentApp.js`, `parse_equipment.py`, `equipmentData.json`, `equipmentData.js`)**:
  - Restructured equipment into the exact 5 canonical categories requested:
    1. **Weapons** (135 items)
    2. **Shields** (17 items)
    3. **Headwear** (45 items)
    4. **Armor** (45 items)
    5. **Accessories** (67 items)
  - Fixed wiki parser section matching for Staves (which had previously fallen back to Swords), correctly categorizing all weapons into the 6 weapon subcategories:
    - **Dagger** (21 items)
    - **Sword** (24 items)
    - **Spear** (22 items)
    - **Axes** (23 items)
    - **Staves** (26 items)
    - **Bows** (19 items)
  - Added dedicated Weapon Subcategory filter pill bar in `equipment.html` with instant one-tap filtering across Dagger, Sword, Spear, Axes, Staves, and Bows.
  - Fixed equipment table stat display bug where `pAtk`, `mAtk`, `pDef`, `mDef`, and `price` values rendered as "—"; all item stats now cleanly display their numerical values.
  - Updated `types/codex-types.d.ts` and `tests/cross_reference.test.js` validating the 5 categories and weapon subcategories.

## [1.1.0] - 2026-10-25

### Added & Enhanced
- **Official B 'n' D Card Images & Direct Effects Integration (Game8)**:
  - Downloaded high-resolution official in-game card PNG captures for all 105 B 'n' D cards from Game8 (`assets/cards/*.png`).
  - Updated card grid in `bnd.html` and `bndApp.js` to display card effects directly inside each card, removing the necessity of opening a modal to view card rules.
  - Removed erroneous `Power: 1` / `strength` value (B 'n' D cards operate via board placement and territorial rules, not power/attack stats).
  - Added unit test in `tests/assets_integrity.test.js` validating all 105 card PNGs exist and are non-empty.
- **Official Community Databook Integration (`Tables61` Google Sheet)**:
  - Downloaded authoritative Google Sheet tabs for Prologue, Chapter 1, Chapter 2, Chapter 3, and Chapter 4+ jobs (`source/sheet_tabs/`).
  - Implemented automated downloader `source/download_sheet_tabs.py` and completely rewrote `parse_abilities.py`.
- **Complete Active Command & Passive Support Abilities Across All 24 Jobs**:
  - Expanded dataset from 157 abilities to **360 complete abilities** (15 progression levels per job across all 24 Asterisk jobs).
  - Every single job now features its full suite of Command skills and 1–6 Passive Support abilities (84 passives, 276 command skills total).
  - Accurate support slot costs (`1 Slot`, `2 Slots`) and battle costs (`MP`, `BP`, `HP`, `Free`).
  - Added deterministic unit test in `tests/cross_reference.test.js` validating that all 24 jobs possess both Command and Passive Support abilities.

## [1.0.0] - 2026-10-25

### Initial Release
- **Jobs Codex (`index.html` + `app.js`)**:
  - Full catalog of all 24 Asterisk jobs with roles, weapon and shield aptitudes (S–E), traits/specialties, and Lv. 1–12 command/passive abilities.
  - Interactive radar grid and ability progression modals.
  - Downloaded official job icon PNGs for all 24 jobs into `assets/jobs/`.
- **Abilities Codex (`ability.html` + `abilityApp.js`)**:
  - 157 Command & Support/Passive abilities filterable by job, type, and cost.
  - Sortable table columns and detail modal linking back to parent job.
- **Equipment Codex (`equipment.html` + `equipmentApp.js`)**:
  - 309 weapons, shields, armor, and accessories with weights, stat modifiers, and acquisition sources.
  - Stat-based sorting and detail inspection modal.
- **Bestiary Codex (`enemy.html` + `enemyApp.js`)**:
  - 292 bestiary entries covering regular monsters, rare world bosses, and Asterisk holders.
  - Weakness badges for all weapon types and elements, drop/steal tables, and a spoiler blur toggle.
- **Side Quests Codex (`quest.html` + `questApp.js`)**:
  - All 69 Excillant subquests with chapter unlocks, quest givers, objectives, star ratings, and completion checkboxes.
- **Shops Codex (`shop.html` + `shopApp.js`)**:
  - 7 Town market inventories with prices in pg, consumables, and cross-references to equipment.
- **B 'n' D Card Minigame Codex (`bnd.html` + `bndApp.js`)**:
  - 105 Monster, Job, and Character cards with star ratings, strength, rules, and stylized SVG card fronts.
- **Data Pipeline (`update_data.py`)**:
  - Deterministic Python parsers for jobs, abilities, equipment, enemies, quests, shops, and cards.
  - Master pipeline synchronizing `*Data.json` and `*Data.js` browser globals.
  - Emits `source/DATA_REPORT.md` verifying data integrity and cross-references.
- **Assets & Visual System**:
  - 24 custom SVG icons in `assets/icons/ui/`.
  - 105 card SVGs in `assets/cards/`.
  - Celestial sapphire & asterisk crystal fantasy stylesheet (`styles.css`).
  - Quad-tier theme synchronization (`themeToggle.js`).
- **Tests & Typecheck**:
  - `tsconfig.json` & `types/codex-types.d.ts` achieving 0 errors on `tsc --noEmit`.
  - 23 unit tests passing in `tests/*.test.js` under native `node:test`.
