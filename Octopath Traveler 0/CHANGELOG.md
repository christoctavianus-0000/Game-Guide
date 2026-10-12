# Change Log

This file records implementation decisions that future prompts and contributors should preserve.

## Unreleased — Project restructure

- Moved entire project into `Octopath Traveler 0/` subfolder under `Game Guide/` to support multi-game structure.
- Moved `assets/`, `tests/`, `types/` directories into the subfolder alongside all source files.
- All relative asset paths (`assets/...`) preserved; no code changes required beyond the move.
- Git history preserved via staged renames.

## Unreleased — NPC Codex

- New page `npc.html` + `npcApp.js` + `npcData.js`: area-chunk tables (click header to expand/collapse, same `.shop-chunk` pattern as the shop codex), type tabs (All/Fame/Power/Wealth), search + area filter + sort (story order, name, level, danger). Table columns: Name, Type, Level, Invite, Danger, Helper Skill, Items.
- Data pipeline: workbook sheets `Townspeople` + `Resident Skills` parsed by `parse_npc_data.py`, registered as `npcData/parse_npc_data` in `update_data.py`. 741 NPCs. `Add`-type rows are folded into their leader NPC's `adds[]` (leader = sort number directly above) and are never rendered as table rows; search still covers add names/items.
- Modal per spec: Inquire; path-action items (Purchase/Contend/Entreat chosen by type); Invite (skill name, description, requires, facility); Hire/Impress/Recruit helper table (danger, strength, helper skill, type icon, uses, description); enemy-style stat table + weakness grid + drop with percentage; battle-adds table; Notes (col AO) shown only for Wishvale NPCs. All dataset strings escaped via `escapeHtml()`.
- NPC nav + rail links added to `index.html`, `equipment.html`, `character.html`, `enemy.html`; shared styles appended to `styles.css` (`npc-table`, badges, helper chips, modal lists). `tests/npcCodex.test.js` covers metrics, chunk rows, area filter, type counts, and data-shape invariants.

## Unreleased — Floating left codex selector

- Added a fixed `.site-rail` selector on the left edge of both pages (`index.html`, `equipment.html`): vertically centered, 82px wide, with Skills/Gear links, a `Codex` caption, the active page marked with `aria-current="page"`, and gold active/hover states matching the top nav.
- On viewports `>= 1100px`, the rail replaces the top-bar codex links (only the brand stays centered there) and the wrapper gains 116px of left padding so no centered content slides under the rail. Below 1100px the rail is `display: none` and the existing top nav is unchanged.
- Kept the new CSS next to the shared-nav block in `styles.css` so both pages inherit it; no JavaScript, IDs, datasets, bookmarks, or filters were changed.

## 2026-09-19 — Escaping hardening, type layer, and test suite

### Closed the HTML-escaping gap in the skill codex

- The equipment codex had always escaped dataset values with `escapeHtml()`, but `app.js` interpolated skill names, descriptions, subtypes, targets, icon paths, and ailment fields directly into `innerHTML` markup (18 unescaped insertion points). A workbook cell containing `"><script>` in any of those fields could break out into live markup.
- Added an identical `escapeHtml()` to `app.js` and routed every dataset-derived string and attribute value through it in the card builder, the modal icon badge, the ailments list, and the specs grid. Values written with `textContent` were already safe and are unchanged.
- The escaping tests also caught and fixed the one place the equipment codex was still interpolating raw: `iconMarkup()` used `item.icon` unescaped in the `src` attribute. All equipment icons are now escaped there and in the modal badge.

### Type layer: JSDoc typedefs + `tsc --noEmit`

- New `types/codex-types.d.ts` pins the data contracts (`SkillRecord` with 4 `ratios` / 4 `hits`, `EquipmentRecord` with all ten `stats` keys), the global dataset declarations, the `SubtypeChip` config shape, and per-page element-id maps (`SkillCodexElements`, `EquipmentCodexElements`).
- `app.js` and `equipmentApp.js` gained JSDoc annotations: typed `elements` maps, `Set<string>` favorites, typed subtype configs, an `EquipmentItem` enrichment typedef, and `@type` casts where the DOM API returns the base type (e.g. `EventTarget.closest`).
- New `tsconfig.json` (`allowJs` + `checkJs` + `noEmit`, DOM + ES2021 libs) covering only the two app files and `types/`. TypeScript 5.6 currently reports zero errors.
- The `stats` enrichment and the modal display intentionally type loosely (`Record<string, number>` and plain strings) because workbook data is dict-shaped; the declarations exist to catch renames and missing fields, not to mimic the spreadsheet schema.

### Test suite: `tests/` on built-in `node --test`

- `tests/helpers/dom-stub.js` provides the minimal DOM surface the apps use (elements by id, classList, style, addEventListener + dispatch, localStorage, `.cat-tab`/`.sortable th` queries) and loads the real scripts in a fresh `vm` context per page.
- `tests/skillCodex.test.js` (11 tests) covers metrics/tab badges, paging, tab switching, subtype chips, SP filtering, SP/potency sorting against the loaded dataset, debounced search, modal population, skill bookmarks, and reset.
- `tests/equipmentCodex.test.js` (13 tests) covers metrics, paging, tabs, both tier groupings, stat thresholds, the table view, header sorting sync, attack-power sorting, unpriced-items-last, bookmarks, stat tiles vs. the empty branch, and reset.
- `tests/escaping.test.js` (4 tests) feeds hostile records through both real apps and asserts each raw payload is absent while its escaped form is present, per rendered region — plus verbatim rendering of safe literals and the `textContent` paths.
- 28/28 tests pass. Run with `npm test`, or via `npm run check` together with `npm run typecheck`.
- One suite quirk worth knowing: number formatting is locale-dependent. In the `vm` sandbox `1080.toLocaleString()` renders as `1.080`, so the price assertions match any non-dash cell instead of assuming a separator.

### Tooling notes

- `package.json` exists purely for scripts (`typecheck`, `test`, `check`) and carries **no runtime dependencies**. TypeScript runs on demand via `npx -y -p typescript@5.6.3` so nothing needs to be installed; the pages remain openable from `file://` and deployable as plain static files.
- `.gitignore` excludes `node_modules/` and logs.
- `PROJECT_GUIDE.md` gained the new files in its file table, an escaping/type-checking rule in the editing guidance, and a "Verification" section documenting both checks.

## 2026-09-19 — Equipment Codex page

### New page: `equipment.html` + `equipmentApp.js`

- Added a second codex for the `equipmentData` contract (610 records: 348 weapons, 126 armor, 136 accessories) that was previously generated but unused by any page.
- Structure mirrors the skill codex: same IIFE state → filter/sort → render shape, same shared `styles.css` tokens and components, same modal and pagination patterns. Skill logic in `app.js` was not modified.
- Added a shared `.site-nav` bar to **both** pages so the two codexes link to each other; `index.html` otherwise keeps its original markup and behaviour.
- Bookmarks use a separate `localStorage` key (`octo0_equip_favs`) so skill and equipment bookmarks cannot collide.

### Grouping, filtering, and views

- Category tabs: All Equipment (610) / Weapons (348) / Armor (126) / Accessories (136). Accessories are their own group, not folded into armor.
- A **Group By** selector re-sections the grid or table with headers (label + count per group, counted across the whole filtered set, not just the current page). Modes: None, Equipment Type, ATK Tier, DEF Tier, Acquisition Source, Effect Family.
- Tiers are data-driven constants (`ATTACK_TIERS`, `DEFENSE_TIERS`) in `equipmentApp.js`, chosen from the measured spread: ATK 300+ 54, 200-299 69, 100-199 114, 50-99 77, 1-49 54, no-ATK 242; DEF 200+ 7, 100-199 46, 50-99 40, 1-49 58, none 459.
- Source grouping uses the region prefix before `" - "` in `source` (445 unique source strings collapse to 171 regions, e.g. `Wishvale`, `Grandport`).
- Effect families are derived from the text: `Attack Effect` 92, `Equip Effect` 113, `Special` 11 (flavour/stat prose), `No Effect` 394.
- **Stat + Minimum** filtering covers all ten stats; "Any Stat" applies the threshold across every stat. PATK 300+ yields the expected 36 rows.
- Sorting covers name, type, attack power (`max(patk, matk)`), defense (`max(pdef, mdef)`), each individual stat, and price. The Sort By select is generated from `SORT_KEYS` so every stat has both directions, and clicking a table header toggles direction while keeping the select in sync. Items with no listed price sort last regardless of direction.
- Two views: the card grid (attack/defense badges, nonzero stat chips, effect text, price) and a dense sortable table (PATK/MATK/PDEF/MDEF/SPD/CRT/ACC/EVA, price, source) with clickable headers.
- The detail modal shows only the nonzero stat tiles (with an explicit "No stat modifiers" state for the 69 effect-only items), the effect text, price, acquisition region and full source, effect family, and the item's attack power versus the best item of the same type.
- Category grouping uses the existing card accent system (`.cat-Weapon`, `.cat-Armor`, `.cat-Accessories`); armor and accessories intentionally show glyph fallbacks because no dedicated artwork exists for them.

### Verification completed

- `node --check equipmentApp.js` passes.
- All 41 assertions in a DOM-stub smoke test pass, covering initial metrics/counts (610, 348, 126, 136), 48-card paging with "Page 1 of 13", tab switching to Weapons ("Page 1 of 8", 9 subtype chips), group headers and counts, PATK 300+ = 36 rows in both grid and table, table header sorting syncing the select and toggling direction, page 2 offsets, bookmark add/remove with persistence, modal population for both a zero-stat and a stat-bearing item, and modal close.
- No duplicate or missing DOM ids in either page, all referenced icons resolve, `equipment.html` tags balance, and no build markers remain.
- Served locally: `equipment.html` 200, `equipmentApp.js` 200, `equipmentData.js` 200, `styles.css` 200, all with correct content types.

### Known data limits carried forward

- Equipment prices that list two sources store the **minimum** in `costValue`, so price sorting means "cheapest listed source".
- Some accessory effects state bonuses in prose ("Elem. Atk. +10%") that are absent from `stats`; the numeric stat grid remains authoritative.
- `Weapon archived`, `Armor Archived`, `Base Stats`, `Shops`, and `Wishvale Shop` sheets are still unused.

## 2026-09-16 — Skill icon and dataset consolidation

### Corrected skill icon mappings

- Replaced the ambiguous numbered assets (`image1.png` through `image10.png`) in the app and exporter. Those files are status-effect icons; for example, `image1.png` is a heart, not a sword.
- Mapped the available dedicated assets to their matching subtypes:
  - Weapons: Sword, Polearm, Dagger, Axe, Bow.
  - Elements: Fire, Ice, Lightning, Wind, Light, Dark.
- Updated both `app.js` subtype chips and `parse_skill_data.ps1`, then regenerated `skillData.js` and `skillData.json`.
- Do not reintroduce numbered `image*.png` files as weapon/element subtype icons without visually verifying them first.

### Consolidated player-facing skills

- Investigated `Octopath traveler 0 database .xlsx` and found that `SkillData` has 2,787 internal implementation rows but only 760 unique display names.
- The repeated rows represent weapon replacements, availability states, and effect/boost variants. For example, `Repeated Bash` appeared in 265 workbook rows while the player-facing [Octopath Traveler 0 Guide & Wiki skill list](https://octopathtraveler0.com/skills) shows it once.
- Updated `parse_skill_data.ps1` to export one canonical record per display name. It keeps the first authored wrapper row, which contains the player-readable description.
- Weapon-selection and all-weapon wrappers are classified as Physical. Their canonical record receives the corresponding generated combat row’s target, boost ratios, and hit data.
- Added `Weapon Select` and `All Weapons` to the Physical subtype chips in `app.js`.
- Regenerated the datasets. Current export: 760 records / 760 unique IDs; category totals are Physical 278, Elemental 125, Support 194, Passive 163.

### Verification completed

- No duplicate display names or exported IDs remain.
- Canonical `Hilt Strike`, `Sweep`, `Twin Shot`, and `Repeated Bash` are Physical and have their expected target/boost data.
- All currently referenced icon paths resolve.
- The local static app responds at `http://localhost:8000`.

### Completed missing-icon follow-up

- Added custom, self-contained SVG assets for the previously missing Staff, Tome, Fan, Unarmed, Spirit, and Arcane subtypes.
- Connected each asset in `app.js` and `$subtypeIcons` in `parse_skill_data.ps1`, then regenerated the datasets.
- Verified all six SVG files parse as XML, are served as `image/svg+xml`, and are referenced by the generated Staff, Tome, Fan, Unarmed, Spirit, and Arcane records.
