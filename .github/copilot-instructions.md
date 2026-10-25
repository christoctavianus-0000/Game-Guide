# Game Guide project notes

This repository contains three independent static web apps:

- `Digimon Card Battle/` contains the card database and fusion codex. Shared styles live in `styles.css`; fusion-specific styles live in `fusion.css`.
- `Octopath Traveler 0/` contains the skill, character, equipment, enemy, shop, and NPC codexes. Shared page styles live in `styles.css`.
- `Bravely Default 2/` contains the asterisk jobs, abilities, equipment, bestiary, side quests, shops, and B 'n' D card minigame codexes. Shared page styles live in `styles.css`.

## Core Implementation Rules
1. **Zero runtime dependencies**: All applications must run directly from `file://` or any static host without a build step or bundler.
2. **HTML escaping**: Any dynamic field interpolated into `innerHTML` markup must be wrapped with `escapeHtml()`.
3. **Category tabs & DOM contract**: Tab strips are horizontally centered (`justify-content: center` on container and button labels), with `justify-content: flex-start` retained under mobile media queries to preserve smooth horizontal scrolling.
4. **Defensive storage**: Always wrap `localStorage` access in `try...catch` blocks to protect against restricted browser modes.
5. **Static type checking**: Both Octopath (`Octopath Traveler 0/`) and Bravely Default II (`Bravely Default 2/`) maintain zero-error TypeScript checks (`tsc --noEmit`) via their respective `tsconfig.json` and `types/codex-types.d.ts`.
6. **Distinct visual themes & custom SVG icons**:
   - **Digimon Card Battle**: Cyber-digital / Digivice HUD aesthetic with custom vector SVG icons in `Digimon Card Battle/assets/ui/`.
   - **Octopath Traveler 0**: HD-2D Fantasy RPG Tome aesthetic (Cinzel serif display headers, warm obsidian/brass dark mode, illuminated parchment light mode) with custom vector SVG icons in `Octopath Traveler 0/assets/icons/ui/`.
   - **Bravely Default II**: Celestial Crystal & Asterisk RPG aesthetic (Cinzel display headers, midnight sapphire dark mode, luminous dawn light mode) with custom vector SVG icons in `Bravely Default 2/assets/icons/ui/` and 105 card SVGs in `Bravely Default 2/assets/cards/`.
7. **Character sprites & portraits**: All 35 playable characters in `Octopath Traveler 0/assets/characters/` provide both a vertical portrait (`_portrait.png`) and an official CotC combat sprite (`_sprite.png`).
8. **Bravely Default II Asterisk & Data Invariants**:
   - All 24 asterisk jobs include official weapon aptitudes (S to E), dual specialties, asterisk holders, and Lv. 1–12 command/passive abilities.
   - All 105 B 'n' D cards provide complete classification (Monster, Job, Character), rules, and vector card fronts.
   - All 69 subquests track chapter unlocks, clients, locations, objectives, and rewards.
   - All 7 town shops link directly into the Equipment Codex.
   - Data twins (`*Data.json` ↔ `*Data.js`) are kept strictly synchronized via deterministic Python parsers (`update_data.py`).
9. **Global theme synchronization & click delegation**:
   - Theme toggle scripts (`themeToggle.js`) load in `<head>` after the stylesheet to apply pre-paint themes without FOUC and bind a global `document.addEventListener('click', ...)` event delegation handler immediately.
   - Theme choices persist across four tiers: `game_guide_theme` (cross-guide key), local game key (`bd2_theme` / `octo0_theme` / `digimon_codex_theme`), cookie, and `window.name`.
10. **Mobile & "Request Desktop Site on Mobile" Responsive Architecture**:
    - **Standard mobile (`320px–768px`)**: Stacked card grids, single-column mastheads/headers, bottom-sheet modals (`max-height: 92dvh`, `env(safe-area-inset-bottom)`), and horizontal touch scrolling on wide tables.
    - **Mobile "Request Desktop Site" (`761px–1180px` & `@media (pointer: coarse)`)**: Mobile browsers in Desktop mode render a `~980px` viewport on a coarse touch screen. All codexes compact table padding in the `761px–1180px` range, keep table wrappers horizontally touch-scrollable (`overflow-x: auto; -webkit-overflow-scrolling: touch`), and ensure fixed rails do not obscure viewport contents.
    - **Coarse pointer ergonomics (`@media (pointer: coarse)`)**: All interactive buttons, tabs, and links enforce `40px–44px` minimum tap targets with `touch-action: manipulation`, and all search inputs/selects enforce `font-size: 16px` to prevent iOS Safari auto-zoom.

## Verification
Run full repository checks from the root with `npm.cmd run check` (116 total tests passing: 30 Digimon, 63 Octopath, 23 Bravely Default II).
Individual suites can be run with:
- `npm.cmd test --prefix "Digimon Card Battle"` (30 tests)
- `npm.cmd test --prefix "Octopath Traveler 0"` (63 tests)
- `npm.cmd test --prefix "Bravely Default 2"` (23 tests)
- `npm.cmd run typecheck --prefix "Octopath Traveler 0"` (6 apps checked, 0 errors)
- `npm.cmd run typecheck --prefix "Bravely Default 2"` (7 apps checked, 0 errors)
