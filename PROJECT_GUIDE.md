# Game Guide — Project Guide

## Purpose

This repository is a dependency-free pair of static **Octopath Traveler 0 codex pages**, sharing one stylesheet and a top navigation bar:

- **`index.html` — Skill Codex**: browse skill data extracted from the game workbook, filter and sort it, inspect boost/effect details in a modal, and keep browser-local bookmarks.
- **`equipment.html` — Equipment Codex**: browse weapons, armor, and accessories, group them by type / ATK tier / defense tier / source / effect family, filter by any stat threshold, and compare them in a sortable table.

There is no build step, backend, or runtime dependency: the pages run as static files in a browser. The repo does carry dev-only tooling (`package.json`, `tsconfig.json`, `tests/`) for type-checking and regression testing; see "Verification" below.

## Quick start

Open `index.html` (Skill Codex) or `equipment.html` (Equipment Codex) in a modern browser, or serve this directory with any static-file server and open either page. Use the top navigation bar to switch between the two codexes. The pages load Google Fonts over the network; the app logic and the generated datasets themselves are local.

## Architecture and runtime flow

```text
Octopath traveler 0 database .xlsx  (source workbook)
              |
              |-- .\parse_skill_data.ps1 ------> skillData.json + skillData.js (skill records)
              |-- .\parse_equipment_data.py ---> equipmentData.json + equipmentData.js (equipment records)
              v
 generated browser datasets (each .json kept in sync with its .js twin)
                                  |
index.html     -> skillData.js     -> app.js          -> filters, cards, modal
equipment.html -> equipmentData.js -> equipmentApp.js -> grouping, grid/table, modal
                         \
                          -> styles.css
```

Both pages share `styles.css` (design tokens plus the shared `.site-nav` bar). `index.html` loads **`skillData.js`** and `equipment.html` loads **`equipmentData.js`**; never rename a generated `.js` file without updating the page that loads it. The JSON files are inspection copies and are not fetched by the browser.

## Files

| Path | Role |
| --- | --- |
| `index.html` | Static page shell: shared nav, floating codex rail, header metrics, category tabs, filters, skill grid, detail modal, and script/style loading order. |
| `app.js` | All client-side state, filtering, sorting, pagination, card/modal rendering, event handlers, and local bookmarks. |
| `styles.css` | Complete responsive HD-2D-inspired visual system. Main sections: header, category tabs, filter bar, cards, modal, footer, responsive rules. |
| `skillData.js` | Browser-ready generated data: declares global `const skillData = [...]`. Do not rename without changing `index.html`. |
| `skillData.json` | Same generated records in JSON form, useful for scripts or inspection. |
| `equipment.html` | Equipment Codex shell: shared nav, floating codex rail, header metrics, category tabs, group-by / stat / sort / view controls, card grid, sortable table, detail modal. |
| `equipmentApp.js` | All equipment state, grouping, stat-threshold filtering, sorting, card/table rendering, event delegation, modal, and local bookmarks. |
| `equipmentData.js` | Browser-ready generated equipment data: declares global `const equipmentData = [...]`. Loaded by `equipment.html`. |
| `equipmentData.json` | Same generated equipment records in JSON form. |
| `Octopath traveler 0 database .xlsx` | Primary source workbook. `SkillData`, `Weapon`, and `Armor` are the sheets parsed for the current pages. |
| `parse_skill_data.ps1` | Skill dataset extractor. Reads the XLSX XML directly; no Excel or third-party PowerShell module is required. |
| `parse_equipment_data.py` | Equipment dataset extractor. Pandas-based; reads the `Weapon` and `Armor` sheets with headers on row 4. |
| `package.json` | Dev-only tooling: `typecheck` and `test` scripts. No runtime dependencies. |
| `tsconfig.json` | TypeScript `--noEmit` config covering `app.js`, `equipmentApp.js`, and `types/`. |
| `types/codex-types.d.ts` | Record shapes (`SkillRecord`, `EquipmentRecord`), subtype chips, and per-page element-id maps. |
| `tests/` | `node --test` suite with a minimal DOM stub; see "Verification". |
| `explore_database.py` | Optional Pandas utility that lists workbook sheets and previews a sheet. It currently previews `Character` when run directly. |
| `assets/icons/` | Skill-category and subtype icons referenced by the generated records and UI configuration. |

## Current dataset

The workbook has 2,787 `SkillData` implementation rows. The generated browser dataset consolidates those into **760 player-facing records**, one per skill name, with these category totals:

| Category | Count |
| --- | ---: |
| Physical | 278 |
| Elemental | 125 |
| Support | 194 |
| Passive | 163 |

Each record has this shape:

```js
{
  id: "607582",
  name: "Abide",
  detail: "Raise own Phys. Atk. for turn(s).",
  category: "Support",       // Physical | Elemental | Support | Passive
  subType: "Buff",
  icon: "",                   // relative icon path when applicable
  sp: 6,
  target: "Self",
  turns: "3,5,7,9",
  ratios: [100, 100, 100, 100], // boost levels 1 through 4
  hits: [0, 0, 0, 0],           // boost levels 1 through 4
  ailments: [{ name: "Phys. Atk. Up", value: "2", efficacy: "20" }]
}
```

The 760 exported records currently have 760 unique `id` values. Favorites are stored by `id` in `localStorage` (`octo0_skill_favs`). Recheck this uniqueness invariant after changing the consolidation logic.

## Equipment dataset

`parse_equipment_data.py` exports **610 player-facing equipment records**:

| Group | Count |
| --- | ---: |
| Weapons | 348 |
| Armor (Headgear 43, Body Armor 53, Shield 30) | 126 |
| Accessories | 136 |

Weapon types: Sword 46, Polearm 44, Dagger 43, Axe 43, Bow 43, Staff 43, Tome 43, Fan 43.

Each record has this shape:

```js
{
  id: "weapon-2",
  recordType: "equipment",
  kind: "Weapon",                          // Weapon | Armor
  name: "Long Sword",
  type: "Sword",                           // weapon type, Headgear, Body Armor, Shield, Accessories
  icon: "assets/icons/icon_sword.png",     // weapons only; armor and accessories use UI glyphs
  stats: { hp: 0, sp: 0, patk: 8, pdef: 0, matk: 0, mdef: 0, spd: 2, crt: 0, acc: 0, eva: 0 },
  effect: "",                              // "Attack effect: ...", "Equip effect: ...", or flavour text
  source: "Wishvale - Shop",
  cost: "120",                             // original price text; may list two prices
  costValue: 120                           // lowest parsed price, used for price sorting
}
```

Notes and known limits:

- 541 records have at least one nonzero stat; the remaining 69 are effect-only items such as `SP Cleansing Stone`, and `equipmentApp.js` shows a "No stat modifiers" tile for them.
- Some rows list two prices (for example `Master's Longbow` -> `"$16,500 $59,000"`). `costValue` stores the **minimum**, so price sorting means "cheapest listed source"; the card and modal show the original text.
- Some accessory descriptions state bonuses in prose ("Elem. Atk. +10%") that are not present in `stats`; the stat grid is the authoritative numeric view.
- Accessories have no dedicated artwork, so `icon` is empty and the UI falls back to a category glyph.
- Equipment bookmarks live under their own `localStorage` key (`octo0_equip_favs`), separate from skill bookmarks.
- Attack power is `max(patk, matk)` and defense is `max(pdef, mdef)`; both are computed in `equipmentApp.js`, not in the data.

## UI behavior

`app.js` starts on the **Physical** category and renders 48 skills per page. It supports:

- Category tabs and category-specific subtype chips.
- Debounced (150 ms) text search across name, description, subtype, target, and ailment names.
- Target and SP-range filters, plus name/SP/max-potency sorting.
- Paginated cards and an empty state.
- Detail modal with boost ratios, hit counts, ailments, and combat specifications; close via button, overlay, or Escape.
- Favorites persisted in the current browser with `localStorage`; “Bookmarks” filters the current result set to saved IDs.

## Equipment UI behavior

`equipmentApp.js` starts on the **All Equipment** category and renders 48 items per page. It supports:

- Category tabs (All Equipment / Weapons / Armor / Accessories) and category-specific subtype chips (weapon types; armor slots). Accessories are treated as their own group rather than as armor.
- Debounced (150 ms) search across name, type, kind, effect text, source, price, and stat labels/values (for example `patk 120`).
- A **Group By** selector (None / Type / ATK tier / DEF tier / Source / Effect family) that re-sections the grid or table with headers showing the group label and item count. Groups follow the active sort order.
- A **Stat + Minimum** filter: pick any of the ten stats and a threshold, or leave the stat on "Any Stat" to require any single stat to meet the threshold.
- Sorting by name, type, attack power (`max(patk, matk)`), defense (`max(pdef, mdef)`), each individual stat, or price. Sorting is available both from the Sort By select and by clicking a table column header (clicking again toggles direction). Unpriced items always sort last.
- A grid/table view toggle. The table view shows PATK, MATK, PDEF, MDEF, SPD, CRT, ACC, EVA, price, and source as dense sortable columns.
- Cards that show attack/defense badges, only the nonzero stat chips, the effect text, and the price.
- A detail modal with the nonzero stat tiles, effect text, price, acquisition region and full source, effect family, and the item's attack power compared with the best item of the same type.
- Favorites persisted with `localStorage` (`octo0_equip_favs`); the header "Bookmarks" pill filters the current result set to saved IDs.

ATK and DEF tiers are defined in `equipmentApp.js` as `ATTACK_TIERS` / `DEFENSE_TIERS` (300+, 200-299, 100-199, 50-99, 1-49, and a "no attack/defense power" bucket) and were chosen from the actual value spread in the dataset.

## Data extraction rules

`parse_skill_data.ps1` reads the `SkillData` worksheet and:

1. resolves XLSX shared strings and headers;
2. cleans game markup from `Skill Detail`;
3. maps weapon and magic icon codes to the Physical/Elemental subtype labels;
4. heuristically classifies the remaining skills as Support or Passive from SP and description text;
5. maps target codes (with description-text fallback);
6. collects four boost ratios, four hit counts, up to four ailments, and turn values;
7. merges weapon-selection/all-weapon wrapper rows with the corresponding generated combat values; 
8. retains the first authored row for each skill name, removing internal availability, weapon-replacement, and effect-variant duplicates; and
9. overwrites both generated data files in UTF-8.

The consolidation follows the presentation used by the [Octopath Traveler 0 Guide & Wiki skill list](https://octopathtraveler0.com/skills), which shows a player-facing skill once even where the workbook contains many internal rows. Do not use the raw workbook row count as the UI total.

To regenerate after editing the workbook or parser, run from this directory:

```powershell
.\parse_skill_data.ps1
```

Review the category totals and a few records after regeneration. The Support/Passive categories and some target labels are intentionally heuristic, so workbook/content changes can alter classifications.

## Equipment extraction rules

`parse_equipment_data.py` reads the workbook's `Weapon` and `Armor` worksheets with `header=3` (rows 1-3 are workbook notes) and:

1. keeps only rows that have both an item name and a `TYPE`;
2. normalizes the ten stat columns (`HP`, `SP`, `PATK`, `PDEF`, `MATK`, `MDEF`, `SPD`, `CRT`, `ACC`, `EVA`) into a lowercase `stats` object, defaulting missing values to 0;
3. maps weapon types to the shared `assets/icons/...` paths (armor and accessories get an empty `icon`);
4. derives a display `cost` plus a numeric `costValue` (the lowest amount found in the price text) so price sorting is stable;
5. prefixes record ids with `weapon-` / `armor-` and sets `recordType: "equipment"`; and
6. writes `equipmentData.json` and `equipmentData.js` in UTF-8.

To regenerate after editing the workbook:

```powershell
python parse_equipment_data.py
```

The script requires `pandas` plus an Excel engine for the workbook. Row-derived ids skip blank rows, so ids are not contiguous (for example `weapon-91` can be followed by `weapon-93`); treat ids as opaque strings, which is also how bookmarks are stored.

## Editing guidance

- For skill UI behavior, edit `app.js`; for equipment UI behavior, edit `equipmentApp.js`. Both are IIFEs that rely on IDs defined in `index.html` / `equipment.html` respectively.
- For markup or controls, edit the relevant page, then add/adjust the corresponding entry in that app's `elements` map and its event/render logic. Keep `index.html` and `equipment.html` in step only where they intentionally share markup (header, filter bar, modal, shared `.site-nav`).
- For visual changes, use the CSS custom properties at the top of `styles.css` and the existing component sections; the equipment-specific rules live in the "EQUIPMENT CODEX ADDITIONS" block at the end of the file.
- For skill data-field changes, update `parse_skill_data.ps1`; for equipment data-field changes, update `parse_equipment_data.py`. Regenerate both output files for that dataset, then update every app access to that field (`app.js` or `equipmentApp.js`).
- Keep asset paths relative to the page that loads them; the exporters and both subtype configurations use `assets/icons/...` paths.
- Never interpolate workbook-derived values into HTML without `escapeHtml()`; both codexes keep an escaping test in `tests/escaping.test.js` for this.
- Keep `types/codex-types.d.ts` in step with any change to a record shape or to a page's element ids, and run the typecheck before committing UI logic.

## Verification

Automated checks (run with `npm run typecheck`, `npm test`, or both via `npm run check`):

- `npm run typecheck` runs TypeScript 5.6 in `--noEmit` mode over `app.js` and `equipmentApp.js`, typed against `types/codex-types.d.ts`. A regenerated dataset that renames or drops a field fails here.
- `npm test` runs the `node --test` suite in `tests/`: skill codex rendering/filter/sort/modal/bookmarks, equipment codex rendering/grouping/stat filters/table sorting/modals/bookmarks, and hostile-payload escaping for both pages.

None of this affects the shipped pages: TypeScript is never compiled and emits nothing, and `tests/` is never loaded by a browser. Emitted output stays dependency-free.

## Verification checklist

After a change, open the page and verify:

1. header/category counts match the loaded dataset;
2. category, subtype, search, target, SP, sort, reset, and pagination controls work together;
3. a card opens a populated modal and Escape/overlay closes it;
4. bookmark persistence works after refresh; and
5. the layout remains usable at narrow widths.

For `equipment.html`, also verify:

1. the header metrics read All Equipment 610, Weapons 348, Armor 126, Accessories 136;
2. every Group By mode (type, ATK tier, DEF tier, source, effect family) renders headers with correct per-group counts;
3. a Stat + Minimum combination filters to the expected rows (for example PATK 300+ yields 36 items);
4. the grid/table toggle preserves the active filters and sort, and clicking a table header toggles direction and updates the Sort By select;
5. clicking a row or card opens the modal with only the item's nonzero stats, and Escape closes it; and
6. equipment bookmarks stay independent from skill bookmarks.

For data changes, also check that every skill record still has four `ratios` and four `hits` entries, that every equipment record has all ten `stats` keys, and that both generated `.js` files match their `.json` twins. The current exports meet all of those checks and have no blank names.

## Workbook scope

The workbook contains additional data sheets (characters, quests, maps, monsters, cooking, and more). The current pages consume `SkillData` (skills) plus `Weapon` and `Armor` (equipment); the remaining sheets, including `Weapon archived`, `Armor Archived`, `Base Stats`, `Shops`, and `Wishvale Shop`, are unused. Expanding the guide further will require a new extractor/data contract and UI section, rather than automatically appearing from the workbook.
