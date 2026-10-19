# Change Log

This file records implementation decisions that future prompts and contributors should preserve.

## Unreleased - GameFAQs Fusion Verification & Data Synchronization

- **GameFAQs Basic & Special Fusion Verification (`basic-fusion`, `special-fusion`)**:
  - Re-verified all fusion calculations against Ephraim225's authoritative GameFAQs guides.
  - **Color Matrix (36 pairs)**: Confirmed 100% exact match across all 6 specialties.
  - **Special Fusions (19 recipes)**: Confirmed 100% exact match across all recipes in both forward and reverse orders. Added all 19 recipes to `FUSION_RULES.md`.
  - **Material & Result Values (273 cards)**: Resolved 24 missing card mappings caused by typographical differences in the FAQ/workbook (e.g. `Pheonixmon` -> `Phoenixmon` [Mat 17, Res 34], `Silphymon`, `Monochromon`, `Brachiomon`, `Ogremon`, `Dark Lord's Cape`, `Ice Altar`, `Nature Altar`, `Darkness Altar`, `Rare Altar`, 9 Attack/Defense Disks, `Digi-Sapphire`, etc.).
  - Exactly 273/273 cards from the GameFAQs guide now map to our database with 100% precision.
  - Exactly 28 cards (19 story partner/armor digimon, 7 Sevens cards, Rosemon's Lure, Download Digivolve) retain `?` as documented non-fusable cards.
  - Exactly 18 cards have Result Value 0 (special fusion results and gems).
- **Search Alias Resolution (`fusion.js`)**:
  - Added `SEARCH_ALIASES` to `getCardByName()` so searching guide variant names (`Omnimon 1`, `Omnimon 2`, `Sylphymon`, `H-Kabuterimon`, `Diablomon`, `Orgemon`, `Monocromon`, `Braciomon`, `Gigidramon`, `WaruMonzaemon`) automatically resolves to their canonical cards.
- **Test Suite Expansion (`tests/fusion.test.js`)**:
  - Expanded Digimon test suite to **14 tests** (covering all 19 special fusions in both directions, the GameFAQs Phoenixmon Result 34 example, search aliases, and non-fusable safeguards).

## Unreleased - Theme Toggle Reliability & Cross-Page Synchronization

- **Immediate Click Responsiveness via Document Event Delegation (`themeToggle.js`)**:
  - Replaced `DOMContentLoaded`-bound element click listeners with early global event delegation on `document`: `document.addEventListener('click', function(e) { ... })`.
  - Moved `<script src="themeToggle.js"></script>` into `<head>` on both `index.html` and `fusion.html`, eliminating dropped clicks during script parsing and fast page transitions.
- **Deterministic Toggle State**:
  - Evaluates next state directly from the DOM (`document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'`) rather than potentially desynced storage values.
- **Cross-Guide Storage Persistence & Lifecycle Sync**:
  - Synchronizes preference to primary key `game_guide_theme` alongside local key `digimon_codex_theme`, fixed cookie regex `(?:^|;\\s*)`, and `window.name` fallback.
  - Added `pageshow` listener for bfcache (browser back/forward navigation) and `storage` event listener for multi-tab synchronization.
- **Automated Regression Suite (`tests/themeToggle.test.js`)**:
  - Added 3 unit tests verifying initial dark theme, document click delegation, and simulated page load persistence (Digimon test suite now **11/11 passing**).

## Unreleased - Cyber-Digital UI Redesign & Custom Vector SVG Icons

- **Digimon Wiki / Digivice Cyber-Digital Theme (`styles.css`, `fusion.css`)**:
  - Restyled both `index.html` and `fusion.html` with an authentic Digimon Wiki / Digivice LCD terminal aesthetic.
  - Dark mode (`:root`): Deep Digital World navy-slate surfaces (`#070b14` to `#142038`), glowing cyan-blue HUD borders (`rgba(56, 189, 248, 0.16)` to `0.45`), subtle digital hex-grid background overlay, and crisp digital cyan/amber accents (`#38bdf8`, `#f59e0b`).
  - Light mode (`[data-theme="light"]`): Clean Digimon Wiki daylight lab-blue (`#eef4fb` to `#ffffff`) with azure borders (`rgba(2, 132, 199, 0.22)`).
  - Centered category tabs on desktop (`justify-content: center`), preserving `justify-content: flex-start` under mobile media queries for horizontal scrolling.
- **Custom Vector SVG Icon Suite (`assets/ui/`)**:
  - Created 14 custom vector SVGs: `digivice.svg`, `nav-cards.svg`, `nav-fusion.svg`, `circle.svg`, `triangle.svg`, `x.svg`, and 8 specialty badges (`spec-all.svg`, `spec-fire.svg`, `spec-ice.svg`, `spec-nature.svg`, `spec-darkness.svg`, `spec-rare.svg`, `spec-option.svg`, `spec-partner.svg`).
  - Replaced raster attack icons (`.gif`) and generic emoji in navigation, headers, desktop rails, specialty tabs, and attack tokens.
  - Added unit test in `tests/dataIntegrity.test.js` verifying all UI vector icons exist (total 8/8 tests pass).

## Unreleased - Codex sanitization, accessibility, alignment & test suite

- **HTML Escaping Hardening**: Sanitized dynamic card names in `alt="${escapeHtml(card.name)}"`, combo names, preview metadata, and filter input value attributes in `fusion.js` and `app.js`. Updated `renderIconTokens(text)` to call `escapeHtml(text)` prior to regex token replacement.
- **Fusion Arithmetic & Debouncing**: Fixed arithmetic display bug in `fusion.js`: when either material value is `"?"` or `NaN`, the sum evaluates to `'—'` rather than `0 + ? = 0`. Added 150ms debounce to search input in `app.js` to avoid redundant filtering on rapid keystrokes.
- **Accessibility**: Added explicit `aria-label="Material Card 1"` and `aria-label="Material Card 2"` to material search inputs in `fusion.html`.
- **Category Tab Centering**: Centered category tabs ("All Cards", "Fire", "Ice", etc.) in `styles.css` using `justify-content: center` on `.category-tabs` and `.tab-btn`, retaining `justify-content: flex-start` under `@media (max-width: 768px)` for smooth horizontal scrolling on mobile.
- **Fusion Test Suite**: Created `tests/fusion.test.js` with 5 unit tests covering special fusions, order independence, standard matrix logic, and `"?"` material handling. Total Digimon unit tests: 7/7 passing. Added `npm test` script to `package.json`.

## Unreleased - Fusion Codex page

- Added an upper-left “Project home” link to the root Game Guide landing page on all Digimon and Octopath pages, with responsive shared styling.
- New page `fusion.html` + `fusion.js` + `fusion.css`: two-mode fusion calculator built from `FUSION_RULES.md` and the `Fusion.xlsx` workbook.
  - **Tab 1 "Find Recipe (By Result)"**: search a target card by exact name, then list every pair that produces it. Standard pairs come from `materialValue(A) + materialValue(B) == target.resultValue` plus a color check through the fusion matrix; special pairs come from `special_fusions`. Results from both sources are deduped.
  - **Tab 2 "Fuse 2 Cards (By Materials)"**: pick Material 1 and Material 2, then list every card whose `resultValue` equals the material sum and whose color matches the matrix result, plus any special fusion that matches the exact pair.
- Both tabs use native `<datalist>` autocomplete (`cardListTarget`, `cardList1`, `cardList2`) populated from all 301 `CARD_DATABASE` names, so typing anywhere gives the same suggestions.
- Tab 1 combinations render as a sortable table: Card 1, Material 1, `+`, Card 2, Material 2, Material Sum, Type. Any header toggles asc/desc; the default sort is Material 1 ascending. A filter box narrows rows by either material name.
- Cross-navigation between tabs: clicking a Tab 1 combination row switches to Tab 2 with both materials filled; clicking a Tab 2 result card switches to Tab 1 with that card searched. Row clicks are delegated data attributes (`data-c1`, `data-c2`, `data-result`) so re-renders stay safe.
- Deep link `fusion.html?card=<name>` from the Card Codex auto-fills the search and renders the combination list.
- The fusion combination table intentionally has no internal scroll container (`max-height: none`, `overflow-y: visible`) so long result lists scroll with the page instead of inside the card.
- `fusion_data.js` and `fusion_data.json` are generated twins holding `{ fusion_table, special_fusions }`; the page loads the `.js` global `FUSION_DATA`, the JSON exists for scripts and inspection. `merge_fusion.py` reads the workbook and merges card material/result values into the category JSON files.

## Unreleased - Card Codex changes for fusion

- `index.html` / `fusion.html` / `styles.css` / `fusion.css`: aligned the Digimon pages with Octopath's neutral charcoal palette, compact typography, surface treatments, and responsive top-nav / desktop-rail layout. Digimon specialty colors remain distinct; added skip links and reduced-motion support.
- `index.html` / `app.js` / `styles.css`: added shared codex navigation, compacted the card table (no horizontal scroll, tighter padding and icon sizes), and removed the Material Value and Result Value columns from the codex table (they remain visible on the Fusion Codex result card).
- Attack column headers show the circle / triangle / X icon plus "Attack", and every icon carries a `[circle icon] attack` style alt and title for screen readers.
- Card names are now `fusion.html?card=<name>` links, so clicking a name in the codex opens that card's fusion recipes.
- Support Effect text participates in the codex search and sort like the other columns.
- `cardData.js` is rebuilt from the category JSON files by `download_all_assets.js`; `materialValue` and `resultValue` are merged into those category files by `merge_fusion.py`.
