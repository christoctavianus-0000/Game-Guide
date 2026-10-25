# Bravely Default II Codex — Changelog

All notable changes to the Bravely Default II Codex module are documented here.

## [1.1.0] - 2026-10-25

### Added & Enhanced
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
