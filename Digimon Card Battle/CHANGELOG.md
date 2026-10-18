# Change Log

This file records implementation decisions that future prompts and contributors should preserve.

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
