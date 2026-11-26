# Bravely Default II Codex — Changelog

All notable changes to the Bravely Default II Codex module are documented here.

## [1.3.1] - 2026-11-26

### Cross-Codex Uniformity & Design-Engineering Polish
- **Uniform Rail Semantics, Hero Emblems, Theme Toggle Initial State & Footers (`index.html`, `ability.html`, `equipment.html`, `enemy.html`, `quest.html`, `shop.html`, `bnd.html`, `styles.css`)**:
  - Added `aria-label="Back to World Index"` on `.site-rail` World links and `aria-hidden="true"` on `.site-rail-divider` + `.search-icon` SVGs across all 7 pages.
  - Standardized all `.hero-emblem` icons to `56x56` (`ability`, `equipment`, `enemy`, `quest`, `shop`, `bnd` matched `index.html`), aligned initial static theme toggle button text (`☀️ Light`) with dark default to prevent flash, and added a matching `<footer class="site-footer">` across all 7 pages.
  - Gated `.codex-card:hover` and `.site-rail-link:hover` transforms inside `@media (hover: hover) and (pointer: fine)` and added `.site-rail-link:active` to tactile `:active { transform: scale(0.97); }` press feedback.
- **Verification (`tests/theme_and_responsive.test.js`)**:
  - Expanded page and responsive CSS checks (**32/32 BD2 tests passing**, `tsc --noEmit` 0 errors).

## [1.3.0] - 2026-11-19

### Bug Fixes & Functional Restoration
- **Bestiary Codex (`parse_enemies.py`, `enemyData.json`, `enemyData.js`, `enemyApp.js`)**:
  - Fixed `HP: NaN` on all 292 enemies (formatted strings such as `"76,500"`, `"1,200–6,500"`, and split boss HP `"Selene: 1,840 / Dag: 1,568"` were previously coerced with `Number(enemy.hp)`). Added `formatHp()` to display numeric and range/split HP strings verbatim.
  - Emitted explicit `classification` (`Asterisk Boss`, `Rare Monster`, `Monster`) across all 292 enemy records (plus an offline fallback guard in `parse_enemies.py` so regular monsters are preserved if wiki fetch fails). Fixed `Asterisk Bosses` (20), `Rare Bosses` (7), and `Regular` (265) filter pills in `enemyApp.js`.
  - Fixed weakness icon matching on parenthesized boss hints (e.g., `Fire (Dag)` → `fire.svg`), and surfaced `Resistances`, `Status Immunities`, `Chapter`, and `Strategy & Field Notes` in the Bestiary modal while hiding empty placeholder `0 EXP/JP/pg` reward cards when absent.
- **Shops Codex (`shop.html`, `shopApp.js`)**:
  - Updated shop category filter pills from stale singular keys (`Weapon`/`Armor`/`Accessory`) to exact dataset categories (`Consumable`, `Weapons`, `Shields`, `Headwear`, `Armor`, `Accessories`) with normalized matching and color-coded badges.
  - Added keyboard (`Enter`/`Space`) sorting, `aria-sort` state updates, and initial ascending sort indicators on table headers.
- **Jobs & Side Quests Codexes (`index.html`, `app.js`, `quest.html`, `questApp.js`)**:
  - Added the missing `Specialist` role filter pill to Jobs (`Freelancer`, `Gambler`, `Salve-Maker`, `Bravebearer`) and updated `Max Level` badge from `Lv. 12` to `Lv. 15`.
  - Replaced dead `Chapter 7` quest pill with active `Prologue – Ch. 6` range, added `Pending` and `✓ Completed` quest status filters, and moved quest completion visual states into CSS classes (`.quest-done`, `.quest-num-frame`) so live toggling updates card styling cleanly.
- **Abilities, Equipment, B 'n' D & Modals (`utils.js`, `abilityApp.js`, `equipmentApp.js`, `bndApp.js`)**:
  - Added modal focus restoration (`lastFocusedElement`), `aria-hidden` toggling, and `.modal-window` scroll position reset in `utils.js`.
  - Fixed `abilityApp.js` numeric cost sorting, `jobId` deep links, and keyboard/`aria-sort` table headers across Abilities, Equipment, and Shops.
  - Added B 'n' D `family` matching to card search, debounced all 7 search inputs (`140ms`), and cached `localStorage` favorite sets per render pass.

### Cross-App Theme Sync & Desktop / Mobile Optimization
- **Quad-Tier Shared Theme Sync (`themeToggle.js`, `../themeToggle.js`, `../index.html`, all 7 BD2 HTML `<head>` blocks)**:
  - Realigned `Bravely Default 2/themeToggle.js` to prioritize `game_guide_theme` before `bd2_theme`, persist across `localStorage`, cookies, and `window.name` for `file://` navigation, listen to `pageshow`/`storage`, and dynamically sync `<meta name="theme-color">`.
  - Replaced sticky inline-`onfocus` skip links across all 7 BD2 pages with clean CSS-driven `.skip-link` rules and added `meta[name="theme-color"]`, `meta[name="description"]`, and `aria-hidden="true"` on `#modal-backdrop`.
  - Added distinct sapphire crystal `.bravely` accent styling, light-mode contrast fixes, `bd2_theme` FOUC fallback, and updated Digimon copy (`301-card library`) in root `index.html`.
- **Responsive Desktop, Mobile & Desktop-on-Mobile Polish (`styles.css`)**:
  - Fixed desktop `.site-rail` (`width: 82px`) overlapping `.codex-card` / `.table-wrap` at `1100px–1180px`, and added a `@media (min-width: 1100px) and (max-width: 1280px) and (pointer: coarse)` top-nav fallback for tablets & mobile "Request Desktop Site" browsers.
  - Removed `background-attachment: fixed;` scroll jank, added `env(safe-area-inset-*)`, `touch-action: manipulation`, `content-visibility: auto`, `@media (pointer: coarse)` 44px touch targets & 16px inputs (preventing iOS auto-zoom), `@media (hover: none)`, mobile bottom-sheet modals (`90dvh`), WCAG-compliant `[data-theme="light"]` badge/grade colors, and fixed `.search-input` select left padding.

### Verification
- Expanded `tests/cross_reference.test.js`, `tests/theme_and_responsive.test.js`, and added `tests/ui_regressions.test.js` (**31/31 BD2 tests passing**, `tsc --noEmit` 0 errors).

## [1.2.1] - 2026-10-26

### Asset & Visual Alignment
- **Bravebearer Job Icon Modernization (`assets/jobs/bravebearer.png`)**:
  - Replaced the low-resolution / mismatched Bravebearer icon with the user-provided high-definition four-crystal medallion artwork.
  - Stripped fake checkerboard background artifacts using a 4x supersampled subpixel circular mask centered at `(513, 513)` with radius `476px`.
  - Normalized canvas dimensions to exactly `240x240` RGBA in true PNG format, centering the 222px medallion with a soft ambient occlusion drop-shadow matching the exact visual style of the other 23 job icons (`freelancer.png`, `vanguard.png`, etc.).
  - Preserved crystal facet sharpness with calibrated unsharp masking across downsampling.

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
