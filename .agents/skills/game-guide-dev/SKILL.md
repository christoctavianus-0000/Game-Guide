---
name: game-guide-dev
description: Project runbook for the Game Guide static codex library (Digimon Card Battle, Octopath Traveler 0, Bravely Default II). Use when adding/editing codex pages, regenerating *Data.json/*Data.js datasets, adding a new game, or verifying changes in this repo.
---

# Game Guide Development Runbook

## 1. Repo Map

Repository root hosts the library hub ([index.html](../../../index.html), [themeToggle.js](../../../themeToggle.js)) and three self-contained static web apps:

- **`Digimon Card Battle/`**: Card Codex (`index.html`, `app.js`) and Fusion Codex (`fusion.html`, `fusion.js`, `fusion.css`). Shared styles in `styles.css`; `themeToggle.js`; data in `*Cards.json`, `allCards.json`, `cardData.js`, `fusion_values.json`, `fusion_data.json`, `fusion_data.js`; tests in `tests/`. See `Digimon Card Battle/PROJECT_GUIDE.md`.
- **`Octopath Traveler 0/`**: 6 codex pages sharing `styles.css`, `themeToggle.js`, and `types/codex-types.d.ts`:
  - `index.html` (`app.js`, `skillData.js` / `skillData.json`)
  - `equipment.html` (`equipmentApp.js`, `equipmentData.js` / `equipmentData.json`)
  - `character.html` (`characterApp.js`, `characterData.js` / `characterData.json`)
  - `enemy.html` (`enemyApp.js`, `enemyData.js` / `enemyData.json`)
  - `shop.html` (`shopApp.js`, `shopData.js` / `shopData.json`)
  - `npc.html` (`npcApp.js`, `npcData.js` / `npcData.json`)
  - Plus `masterySourceData.json` / `masterySourceData.js` and `tests/`. See `Octopath Traveler 0/PROJECT_GUIDE.md`.
- **`Bravely Default 2/`**: 7 codex pages sharing `styles.css`, `themeToggle.js`, `utils.js`, and `types/codex-types.d.ts`:
  - `index.html` (`app.js`, `jobData.js` / `jobData.json`)
  - `ability.html` (`abilityApp.js`, `abilityData.js` / `abilityData.json`)
  - `equipment.html` (`equipmentApp.js`, `equipmentData.js` / `equipmentData.json`)
  - `enemy.html` (`enemyApp.js`, `enemyData.js` / `enemyData.json`)
  - `quest.html` (`questApp.js`, `questData.js` / `questData.json`)
  - `shop.html` (`shopApp.js`, `shopData.js` / `shopData.json`)
  - `bnd.html` (`bndApp.js`, `bndCardData.js` / `bndCardData.json`)
  - Plus `tests/` and `source/DATA_REPORT.md`. See `Bravely Default 2/PROJECT_GUIDE.md`.

## 2. Hard Rules

- **Zero runtime dependencies**: Every page must open and work directly over `file://` and static hosting (GitHub Pages) with no bundler or runtime packages. Dev-only Node/TypeScript tooling lives strictly in `package.json`, `tsconfig.json`, and `tests/`.
- **HTML escaping**: Escape every dataset or dynamic field interpolated into `innerHTML` with `escapeHtml()` (or `window.BD2.escapeHtml()` in Bravely Default II).
- **Defensive storage**: Wrap all `localStorage` reads/writes in `try...catch` blocks for restricted browser modes.
- **Theme sync (4-tier persistence)**: Load `themeToggle.js` in `<head>` after the stylesheet to prevent FOUC and attach `document.addEventListener('click', ...)` delegation immediately. Sync across four tiers: `game_guide_theme` (cross-guide key), per-game key (`digimon_codex_theme`, `octo0_theme`, `bd2_theme`), cookie, and `window.name`.
- **Category tabs & DOM contract**: Center tab strips (`justify-content: center` on container and button labels) on desktop, switching to `justify-content: flex-start` inside mobile media queries for smooth horizontal scroll.
- **Mobile & "Request Desktop Site on Mobile"**:
  - Standard mobile (`320px–768px`): single-column headers/cards, bottom-sheet modals (`max-height: 92dvh`, `env(safe-area-inset-bottom)`), horizontal touch scrolling on wide tables.
  - Desktop-on-mobile (`761px–1180px` & `@media (pointer: coarse)`): compact table padding, horizontally touch-scrollable table wrappers (`overflow-x: auto; -webkit-overflow-scrolling: touch`), and fixed rails must not overlap content.
  - Coarse pointer ergonomics (`@media (pointer: coarse)`): `40px–44px` minimum tap targets with `touch-action: manipulation`, and `font-size: 16px` on search inputs/selects to prevent iOS Safari auto-zoom.
- **Distinct visual themes & SVG assets**: Preserve each game's identity and relative asset paths:
  - Digimon: Cyber-digital / Digivice HUD (`Digimon Card Battle/assets/ui/`, `assets/cards/`).
  - Octopath: HD-2D Fantasy RPG Tome (`Octopath Traveler 0/assets/icons/ui/`, `assets/characters/` `_portrait.png` + `_sprite.png`).
  - Bravely Default II: Celestial Crystal & Asterisk (`Bravely Default 2/assets/icons/ui/`, `assets/jobs/`, `assets/cards/`).
- **Cross-Codex Uniformity Contract**:
  - **Clickable `.site-rail` World Button**: Every `.site-rail` across Digimon, Octopath, and Bravely Default II must include a clickable top `.site-rail-home` / `.site-rail-link` (`href="../index.html"`, `title="Back to World Index"`, `aria-label="Back to World Index"`) + `.site-rail-divider` (never a non-clickable `<span>`).
  - **Uniform Search Affordances**: All search inputs use `type="search"`, a uniform inline `<svg class="search-icon" aria-hidden="true">` magnifying glass (no OS-dependent mixed `🔍`/`🔎` emojis), WebKit native cancel-button suppression where a `.clear-search-btn` is present, and wired clear-button visibility toggling (`syncClearSearchBtn()`).
  - **Metadata, Icons, Footers & Hover Polish**: Every HTML page (including root `index.html`) includes `<a class="skip-link" href="#main-content">`, `<meta name="theme-color">` synced by `themeToggle.js`, uniform icon sizes (`24x24` rail / `16x16` nav / `28x28` header crest in Octopath; `56x56` hero emblems in BD2), matching `<footer class="site-footer">`, and `@media (hover: hover) and (pointer: fine)`-gated hover transforms with tactile `:active` press states.

## 3. Data Pipeline Workflow

Never hand-edit generated browser `.js` data files separately from their `.json` twins — always regenerate both via the game's pipeline.

- **Digimon Card Battle** (no `update_data.py`; requires `pip install -r requirements.txt` with `beautifulsoup4`, `lxml`, `openpyxl`):
  1. Run from `Digimon Card Battle/`:
     - `python parse_all_cards.py --input-dir <dir>` (parses saved `ddcb_fire.html`, `ddcb_ice.html`, `ddcb_nature.html`, `ddcb_darkness.html`, `ddcb_rare.html`, `ddcb_partner.html`, `ddcb_option.html`; defaults to `TEMP` or system temp dir) → writes `*Cards.json`.
     - `python merge_fusion.py` (reads `Digimon Card Battle - Fusion.xlsx`) → merges `materialValue`/`resultValue` into `*Cards.json` and writes `fusion_values.json`.
     - `node download_all_assets.js` (only add `--download-missing-images` if intentionally fetching missing art) → writes `cardData.js` (`window.CARD_DATABASE`) and `allCards.json`.
  2. `fusion_data.json` and `fusion_data.js` (`window.FUSION_DATA`) hold the color fusion matrix and special fusions.
- **Octopath Traveler 0** (requires `openpyxl` and `pandas` for Python parsers, plus PowerShell for skills):
  1. Run from `Octopath Traveler 0/`:
     - `python update_data.py` (supports `--skill` and `--skip-skill`).
     - Reads `Octopath traveler 0 database .xlsx` and invokes 6 Python parsers (`parse_character_data.py`, `parse_equipment_data.py`, `parse_enemy_data.py`, `parse_shop_data.py`, `parse_npc_data.py`, `parse_mastery_sources.py`) plus `parse_skill_data.ps1`.
     - Regenerates `*Data.json` and `*Data.js` twins together.
  2. Update `types/codex-types.d.ts` whenever a record field or page element ID changes.
- **Bravely Default II** (standard-library Python):
  1. Run from `Bravely Default 2/`:
     - `python update_data.py`
     - Executes `parse_jobs.py`, `parse_abilities.py`, `parse_equipment.py`, `parse_enemies.py`, `parse_quests.py`, `parse_shops.py`, and `parse_bnd.py`.
     - Regenerates `*Data.json` and `*Data.js` (`window.<dataset>Data`) twins and writes `source/DATA_REPORT.md`.
  2. Update `types/codex-types.d.ts` whenever a record field or page element ID changes.

## 4. Adding a Feature or New Codex Page

1. Create or update the HTML shell (`<page>.html`), vanilla JS controller (`<page>App.js` / `app.js`), and styles in the game's `styles.css` (or page-specific CSS if needed, preserving light/dark tokens).
2. Wire `<head>` script order (`styles.css` → `themeToggle.js`) and load the `*Data.js` global before the page script.
3. Update shared navigation bars / `.site-rail` links across sibling codex pages (and root `index.html` when adding a new game).
4. Add or update types in `types/codex-types.d.ts` (for Octopath / BD2) and keep JSDoc annotations clean for `tsc --noEmit`.
5. Add unit/regression tests in `<game>/tests/*.test.js` covering data twin sync, `escapeHtml()` immunity, theme/responsive CSS rules, and interactive filter/sort/modal behavior.

## 5. Verification

Run full checks from the repository root in PowerShell using `npm.cmd`:

```powershell
npm.cmd run check
```

Per-game commands:

- **Digimon Card Battle**: `npm.cmd run check:digimon` or `npm.cmd test --prefix "Digimon Card Battle"` (`node --check` + `node --test tests/*.test.js`)
- **Octopath Traveler 0**: `npm.cmd run check:octopath` or `npm.cmd run typecheck --prefix "Octopath Traveler 0"` / `npm.cmd test --prefix "Octopath Traveler 0"`
- **Bravely Default II**: `npm.cmd run check:bd2` or `npm.cmd run typecheck --prefix "Bravely Default 2"` / `npm.cmd test --prefix "Bravely Default 2"`

## 6. Related Skills

- **`frontend-design`**: Use when designing a new game theme, major UI section, or codex layout so each game keeps an intentional visual identity instead of generic defaults.
- **`emil-design-eng`**: Use when polishing UI interactions, transitions, tactile `:active` states, popover origins, and `@media (hover: hover) and (pointer: fine)` hover gating.
- **`webapp-testing`**: Use for Playwright-based end-to-end UI tests (tabs, modals, deep links, theme switching) against local pages.
- **`a11y-debugging`**: Use to audit ARIA attributes, keyboard focus, contrast, and 44px coarse tap targets.
- **`chrome-devtools`**: Use to inspect live DOM state, console errors, network requests, and mobile/desktop-on-mobile viewports in Chrome.
- **`obsidian-markdown`**: Use when writing or updating Obsidian Second Brain notes (wikilinks, YAML frontmatter, callouts).

## 7. Second Brain Write-Back

After completing meaningful features, bug fixes, or data discoveries:

1. Check and update `D:\My AI Project\Agent_Second_Brain\02 - Projects\Game Guide Roadmap & Backlog.md` (check off items or add new follow-ups).
2. Document architectural or data invariants in the relevant MOC under `D:\My AI Project\Agent_Second_Brain\03 - Areas\` or `D:\My AI Project\Agent_Second_Brain\04 - Resources\Game Guide Shared Architecture & Invariants.md`.
3. Log progress in `D:\My AI Project\Agent_Second_Brain\01 - Daily Notes\YYYY-MM-DD.md`.
4. Always include a **🧠 Second Brain Sync** section with clickable `file://` links to consulted or updated Obsidian notes at the end of your reply.
