# Game Guide - Digimon Card Battle Project Guide

## Purpose

Static, no-build browser codex for *Digimon Digital Card Battle* (PlayStation). Two pages: the Card Codex for browsing every card, and the Fusion Codex for working out which pairs fuse into which result. Everything runs from `file://` or any static host; there is no server, bundler, or runtime dependency.

## Quick start

Open `index.html` for the Card Codex, or `fusion.html` for the Fusion Codex. Both load `cardData.js` first, so the data globals exist before the page script runs.

## Architecture and runtime flow

`cardData.js` declares `window.CARD_DATABASE`, an array of 301 card records. `fusion_data.js` declares `window.FUSION_DATA` with `fusion_table` (36 color-pair entries) and `special_fusions` (19 exceptions). Each HTML page loads the data globals, then its own page script, then renders from the DOM on `DOMContentLoaded`.

Fusion logic lives in `fusion.js` and reads only those two globals, so the data can be regenerated without touching UI code.

## Fusion model

Rules combine to decide whether a pair of cards produces a target.

1. **Color matrix.** Each specialty maps to a color: Fire to Red, Ice to Blue, Nature to Green, Darkness to Black, Rare to Yellow, Option to Option. `fusion_table["<color1>+<color2>"]` gives the resulting color, and the lookup falls back to the reversed key so argument order never matters.
2. **Material values.** Every card has a hidden `materialValue` and `resultValue`. A standard fusion needs `materialValue(A) + materialValue(B) === target.resultValue` and a matrix result color equal to the target's color.

3. **Never a material.** The game never returns a card used as material. If the only card at the summed value (in the matrix color) is one of the materials, the next higher Result Value in that color is produced instead (`Leomon + Mutant Digivolve` => `Togemon`). Implemented in `resolveStandardFusion()`.

`special_fusions` overrides both rules for specific named pairs (Omnimon I + Paildramon to Imperialdramon, and 18 others). Special and standard matches are merged and deduped by unordered card pair.

## Files

| Path | Role |
| --- | --- |
| `index.html` | Card Codex shell: shared codex navigation, compact header, sortable card table, search, theme toggle. |
| `app.js` | Card Codex state: filtering, sorting, table rendering, empty states, icon-token markup. |
| `styles.css` | Shared visual system for both pages: nav, header, tables, badges, responsive rules. |
| `fusion.html` | Fusion Codex shell: mode tabs, Tab 1 target search, Tab 2 material picker and previews. |
| `fusion.js` | All fusion logic: combination search, material prediction, sorting, filtering, tab switching, deep links, autocomplete. |
| `fusion.css` | Fusion-only styles: tab strip, picker grid, result card stats, compact combination table. |
| `cardData.js` | Browser-ready generated data: declares global `CARD_DATABASE` (301 cards). Loaded by both pages. |
| `fusion_data.js` | Browser-ready generated data: declares global `FUSION_DATA`. Loaded by `fusion.html` only. |
| `fusion_data.json` | Same fusion data in JSON form, useful for scripts or inspection. |
| `fusion_values.json` | Workbook-derived material/result values exported by `merge_fusion.py`. |
| `Digimon Card Battle - Fusion.xlsx` | Workbook holding the fusion value sheet used to populate `materialValue` / `resultValue`. |
| `FUSION_RULES.md` | Human-readable rules extracted from the workbook: color matrix, material values, special fusions. |
| `merge_fusion.py` | Reads the fusion workbook and merges material/result values into the category JSON files. |
| `parse_all_cards.py` | Extracts card fields from the saved card HTML into the category JSON files. |
| `download_all_assets.js` | Builds `cardData.js` and `allCards.json` from the category files; optionally downloads missing card art. |
| `requirements.txt` | Python-only dependencies for the HTML and workbook extraction scripts. |
| `<specialty>Cards.json` | Per-category source records (`fireCards.json`, `iceCards.json`, ...). |
| `themeToggle.js` | Shared light/dark toggle with early `<head>` loading, document event delegation, multi-tier storage (`game_guide_theme`, `digimon_codex_theme`), cookie, and `window.name` fallback. |
| `assets/cards/` | Card art named `<no>_<Name>.jpg`, referenced by `localCardIcon`. |
| `assets/ui/` | Custom vector SVG UI icons: attack type icons (`circle.svg`, `triangle.svg`, `x.svg`), brand (`digivice.svg`), nav (`nav-cards.svg`, `nav-fusion.svg`), and specialty badges (`spec-*.svg`). |
| `tests/fusion.test.js` | Unit test suite verifying special fusions, standard matrix calculations, value summations, GameFAQs Phoenixmon/special fusions verification, search aliases, and non-numeric value handling (10 tests). |
| `tests/dataIntegrity.test.js` | Data integrity tests verifying synchronization between category files, `allCards.json`, `CARD_DATABASE`, and SVG icon asset existence (3 tests). |
| `tests/themeToggle.test.js` | Unit test suite verifying theme initialization, document click delegation, cross-page persistence, and mobile + desktop-on-mobile responsive CSS rules (4 tests). |

## Current dataset

`CARD_DATABASE` holds 301 cards across six specialties:

| Specialty | Count |
| --- | ---: |
| Fire | 38 |
| Ice | 38 |
| Nature | 40 |
| Darkness | 39 |
| Rare | 36 |
| Option | 110 |

Every card carries `materialValue` and `resultValue`. 28 cards have no fusion value in the workbook and GameFAQs guide (19 story partner and armor cards, 7 Sevens cards, Rosemon's Lure, and Download Digivolve) and are stored as `?`; 18 cards have `resultValue` `0` because they exist only as special-fusion results or non-fusable gems. The calculator treats both as "no standard fusion" rather than as zero, so they never appear as a wrong result. `FUSION_DATA` holds a 6x6 `fusion_table` and 19 `special_fusions` entries.

## Card Codex behavior

- Table columns: No., Icon, Name, Level, Specialty, HP, DP, +P, circle Attack, triangle Attack, X Attack, Support Effect.
- Clicking a sortable header toggles ascending/descending; the No. column is the default sort.
- Search matches name, number, and support effect text.
- A card name is a link to `fusion.html?card=<name>`, which opens the Fusion Codex with that card already searched.
- Attack effect text uses `[[circle]]`, `[[triangle]]`, and `[[x]]` tokens that render as inline icons.

## Fusion Codex behavior

- **Tab 1, Find Recipe (By Result).** Type a card name to list every pair that fuses into it. Suggestions come from a `<datalist>` of all card names. Rows sort by any column (default Material 1 ascending) and filter by either material name. The list is not height-restricted, so long results scroll with the page.
- **Tab 2, Fuse 2 Cards (By Materials).** Choose Material 1 and Material 2 to see each card they can produce, with the computed sum and result color shown.
- Cross-navigation: a Tab 1 row opens Tab 2 with both materials filled; a Tab 2 result card opens Tab 1 with that card searched.
- The result card repeats the full stat block: level, specialty, HP, DP, +P, each attack, support effect, material value, and result value.

## Data extraction rules

- Card fields come from saved card HTML parsed by `parse_all_cards.py`; icon files map through `ICON_MAP` to the `circle` / `triangle` / `x` tokens.
- Fusion values come from the workbook's fusion value sheet; `merge_fusion.py` matches rows to cards by lowercased name and writes those values into the category JSON files.
- Keep generated `*Data.js` and `*Data.json` files in sync when the source workbook changes; never hand-edit a generated file without updating the source.

To rebuild the browser card database after updating the saved card HTML or workbook:

```sh
python -m pip install -r requirements.txt
python parse_all_cards.py --input-dir /path/to/saved-card-html
python merge_fusion.py
node download_all_assets.js
```

The parser expects `ddcb_fire.html`, `ddcb_ice.html`, `ddcb_nature.html`, `ddcb_darkness.html`, `ddcb_rare.html`, `ddcb_partner.html`, and `ddcb_option.html` in the input directory. `--input-dir` defaults to the system temporary directory (or `TEMP` when set). The final Node script combines the category JSON files into `cardData.js` and `allCards.json`; it does not fetch artwork unless invoked with `--download-missing-images`.

## Editing guidance

- Add UI behavior to `app.js` or `fusion.js`; keep data generation in the Python scripts.
- Escape any dataset string interpolated into `innerHTML`; both page scripts define `escapeHtml`.
- Reuse the shared table and badge classes in `styles.css` before adding new ones, and keep page-specific rules in `fusion.css`.
- Keep both Digimon pages on the Cyber-Digital / Digivice HUD visual system: deep Digital World navy-slate surfaces (`#070b14` to `#142038`), glowing cyan-blue HUD grid lines and accents (`#38bdf8`, `#f59e0b`), hex-grid background overlay, custom vector SVG icons (`assets/ui/`), compact Inter typography, and Rajdhani for data labels. Preserves the 5 specialty colors and option badges.
- Keep a “Project home” link at the upper-left of both pages, linking to `../index.html`; shared navigation styling keeps it visible and keyboard-accessible on desktop and mobile.
- When changing shared navigation or theme tokens, check both `index.html` and `fusion.html` in dark and light themes, at desktop and phone widths.
- Do not commit downloaded card art changes without checking `download_all_assets.js` first.

## Verification

- Run `npm run check` at the repository root to validate both apps and check the generated Digimon data files stay in sync.
- `npm test` (or `node --test tests/*.test.js`) runs all 14 Digimon unit tests: data integrity (category files, `allCards.json`, `CARD_DATABASE`), JSON mirror sync, UI vector SVG existence, fusion engine initialization, special fusion recipes, order independence, standard matrix and sum calculations, non-numeric value safeguards, GameFAQs guide verification (Phoenixmon & special fusions), search aliases, and theme toggle responsiveness/cross-page persistence.
- `node --check app.js` and `node --check fusion.js` catch syntax errors.
- Load both pages in a browser and confirm the console has no errors.
- Spot-check fusion math: `Angemon` lists 200 combinations, `WarGreymon` lists 34, and `Agumon` + `Gabumon` (material 5 + 5 = 10, Red + Blue = Green) produces `MoriShellmon`.
- Confirm deep links work: clicking a name in the Card Codex opens the matching Fusion Codex result.
