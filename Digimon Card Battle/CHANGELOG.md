# Change Log

This file records implementation decisions that future prompts and contributors should preserve.

## Unreleased - Fusion Codex page

- New page `fusion.html` + `fusion.js` + `fusion.css`: two-mode fusion calculator built from `FUSION_RULES.md` and the `Fusion.xlsx` workbook.
  - **Tab 1 "Find Recipe (By Result)"**: search a target card by exact name, then list every pair that produces it. Standard pairs come from `materialValue(A) + materialValue(B) == target.resultValue` plus a color check through the fusion matrix; special pairs come from `special_fusions`. Results from both sources are deduped.
  - **Tab 2 "Fuse 2 Cards (By Materials)"**: pick Material 1 and Material 2, then list every card whose `resultValue` equals the material sum and whose color matches the matrix result, plus any special fusion that matches the exact pair.
- Both tabs use native `<datalist>` autocomplete (`cardListTarget`, `cardList1`, `cardList2`) populated from all 301 `CARD_DATABASE` names, so typing anywhere gives the same suggestions.
- Tab 1 combinations render as a sortable table: Card 1, Material 1, `+`, Card 2, Material 2, Material Sum, Type. Any header toggles asc/desc; the default sort is Material 1 ascending. A filter box narrows rows by either material name.
- Cross-navigation between tabs: clicking a Tab 1 combination row switches to Tab 2 with both materials filled; clicking a Tab 2 result card switches to Tab 1 with that card searched. Row clicks are delegated data attributes (`data-c1`, `data-c2`, `data-result`) so re-renders stay safe.
- Deep link `fusion.html?card=<name>` from the Card Codex auto-fills the search and renders the combination list.
- The fusion combination table intentionally has no internal scroll container (`max-height: none`, `overflow-y: visible`) so long result lists scroll with the page instead of inside the card.
- `fusion_data.js` and `fusion_data.json` are generated twins holding `{ fusion_table, special_fusions }`; the page loads the `.js` global `FUSION_DATA`, the JSON exists for scripts and inspection. Regenerate with `merge_fusion.py` (values) after any workbook change.

## Unreleased - Card Codex changes for fusion

- `index.html` / `app.js` / `styles.css`: added a fixed left codex side nav shared by both pages, compacted the card table (no horizontal scroll, tighter padding and icon sizes), and removed the Material Value and Result Value columns from the codex table (they remain visible on the Fusion Codex result card).
- Attack column headers show the circle / triangle / X icon plus "Attack", and every icon carries a `[circle icon] attack` style alt and title for screen readers.
- Card names are now `fusion.html?card=<name>` links, so clicking a name in the codex opens that card's fusion recipes.
- Support Effect text participates in the codex search and sort like the other columns.
- `cardData.js` gained `materialValue` and `resultValue` per card, merged from the workbook by `merge_fusion.py`.
