# Game Guide project notes

This repository contains two independent static web apps:

- `Digimon Card Battle/` contains the card database and fusion codex. Shared styles live in `styles.css`; fusion-specific styles live in `fusion.css`.
- `Octopath Traveler 0/` contains the skill, character, equipment, enemy, shop, and NPC codexes. Shared page styles live in `styles.css`.

## Core Implementation Rules
1. **Zero runtime dependencies**: All applications must run directly from `file://` or any static host without a build step or bundler.
2. **HTML escaping**: Any dynamic field interpolated into `innerHTML` markup must be wrapped with `escapeHtml()`.
3. **Category tabs & DOM contract**: Tab strips are horizontally centered (`justify-content: center` on container and button labels), with `justify-content: flex-start` retained under mobile media queries to preserve smooth horizontal scrolling. On `character.html`, `#characterJobTabs` uses a compact two-tier centered flex-wrap bar with `.job-tabs-break` separating standard traveler jobs from CotC special jobs, eliminating horizontal scroll for `Lord`, `Queen`, and `Wise King`. In Octopath HTML files, always keep `<button class="cat-tab..." data-category="...">` attribute order intact for `tests/helpers/dom-stub.js`.
4. **Defensive storage**: Always wrap `localStorage` access in `try...catch` blocks to protect against restricted browser modes.
5. **Static type checking**: Octopath maintains a zero-error TypeScript check (`tsc --noEmit`) across all 6 applications via `types/codex-types.d.ts` and `tsconfig.json`.
6. **Distinct visual themes & custom SVG icons**:
   - **Digimon Card Battle**: Cyber-digital / Digivice HUD aesthetic with custom vector SVG icons in `Digimon Card Battle/assets/ui/`.
   - **Octopath Traveler 0**: HD-2D Fantasy RPG Tome aesthetic (Cinzel serif display headers, warm obsidian/brass dark mode, illuminated parchment light mode) with custom vector SVG icons in `Octopath Traveler 0/assets/icons/ui/`.
7. **Character sprites & portraits**: All 35 playable characters in `Octopath Traveler 0/assets/characters/` provide both a vertical portrait (`_portrait.png`) and an official CotC combat sprite (`_sprite.png`). The modal enables Portrait/Sprite toggling with crisp pixelated rendering (`.char-modal-image[data-mode="sprite"]`).
8. **Excel database invariants**:
   - Skills are categorized using the workbook's authoritative `Category` (`2` = Passive, `1` = Active) and `SkillIconID` (`92610`–`92620`), not SP text heuristics. Multi-row skills merge their damage row ratios/targets, derive hits from `Now HP` and `<skl_exec_count>`, and collect all 16 ailment slots.
   - Equipment sources are backfilled from `Treasure`, `Sidequests`, `Townspeople`, and `Bestiary` sheets.
   - Enemy types follow `Bestiary` section headers (`Regular`, `Boss`, `Sidequest`, `Elite`, `Arena`, `Rare`), with cleaned IDs, `leaves`, `critDef`, and `Monster Arena` rewards.
9. **Global theme synchronization & click delegation**:
   - Theme toggle scripts (`themeToggle.js`) load in `<head>` after the stylesheet to apply pre-paint themes without FOUC and bind a global `document.addEventListener('click', ...)` event delegation handler immediately.
   - Theme choices persist across four tiers: `game_guide_theme` (cross-guide key), local game key (`octo0_theme` / `digimon_codex_theme`), regex-corrected cookie `(?:^|;\\s*)`, and `window.name` (Firefox `file://` fallback).
   - Toggles compute the next theme deterministically from the live `document.documentElement.getAttribute('data-theme') === 'light'` state rather than cached storage.
10. **Digimon fusion mechanics & GameFAQs data invariants**:
    - **Color matrix (36 pairs)**: Determines result specialty from material colors (Red = Fire, Blue = Ice, Green = Nature, Black = Darkness, Yellow = Rare, Option = Option).
    - **Special fusions (19 recipes)**: Predetermined card pairs (e.g. `Omnimon I + Paildramon => Imperialdramon`, `Garudamon + Silphymon => Valkyrimon`) that override standard math rules and execute in both directions.
    - **Material & Result values**: Standard fusions require `materialValue(A) + materialValue(B) === target.resultValue` and matching matrix color. 273 cards have authoritative GameFAQs/workbook values; 28 cards are non-fusable (`?` for partner/armor cards, Sevens, and Rosemon's Lure/Download Digivolve); 18 cards have `Result = 0` (special results and gems).
    - **Name aliases & search resolution**: Canonical database names map to GameFAQs spelling variants via `NAME_ALIASES` in `merge_fusion.py` and `SEARCH_ALIASES` in `fusion.js` (e.g. `Omnimon 1`, `Sylphymon`, `H-Kabuterimon`, `Diablomon`, `Orgemon`, `Monocromon`, `Braciomon`, `Gigidramon`, `WaruMonzaemon`, and disk cards 222-224, 267-272).

## Verification
Run full repository checks from the root with `npm.cmd run check` (76 total tests passing: 14 Digimon, 62 Octopath).
Individual suites can be run with:
- `npm.cmd test --prefix "Digimon Card Battle"` (14 tests)
- `npm.cmd test --prefix "Octopath Traveler 0"` (62 tests)
- `npm.cmd run typecheck --prefix "Octopath Traveler 0"` (6 apps checked, 0 errors)


