---
name: game-guide-visual-system
description: Maintain a coherent architectural foundation across the Game Guide static codex apps while crafting authentic, world-specific visual identities and custom SVG icon systems for each game (Digimon Wiki Cyber-Digital vs. Octopath Wiki HD-2D Fantasy RPG).
---

# Game Guide Visual System & SVG Icon Skill

Use this skill when designing, updating, or auditing the visual language, themes, typography, custom vector SVG icons, shared navigation, or responsive layouts of the **Digimon Card Battle** and **Octopath Traveler 0** codexes.

## 1. Shared Architectural Foundation

- **Information-led ergonomics**: Keep headers compact, controls scannable, tables high-contrast with `font-variant-numeric: tabular-nums`, and spacing disciplined.
- **Navigation chrome**:
  - Smaller viewports (`< 1100px`): sticky/compact top navigation bar with horizontally scrollable section links.
  - Desktop viewports (`>= 1100px`): fixed vertical left rail (`.site-rail`) with custom vector crests and section icons.
  - Every page must include a keyboard-accessible `.project-home-link` (`← Project home`) at the upper-left linking to `../index.html`, plus a `.skip-link` (`Skip to main content`).
- **Centered & Compact Category Tabs**:
  - Category tab strips (`.category-tabs`) and button labels (`.cat-tab`) are centered on desktop (`justify-content: center`), while switching to `justify-content: flex-start` inside mobile media queries (`@media (max-width: 600px)` / `640px`) so horizontal overflow never clips the leading tab.
  - **Octopath Character Codex Job Tabs (`#characterJobTabs`)**: Uses a compact, two-tier centered flex-wrap bar with `.job-tabs-break` (`flex-basis: 100%; height: 0;`) separating the 8 standard traveler jobs (Row 1: All + Warrior, Dancer, Merchant, Scholar, Cleric, Thief, Hunter, Apothecary) from the 10 CotC special/royal jobs (Row 2: Architect, Cait Scholar, Captain, Empress, Flamebringer, King, Knight Ardante, Lord, Queen, Wise King). This completely eliminates horizontal scrolling on desktop/laptop while keeping `Lord`, `Queen`, and `Wise King` immediately accessible.
- **Accessibility & Motion**:
  - Maintain visible `:focus-visible` rings, `aria-selected` / `aria-current="page"` state attributes, and full `@media (prefers-reduced-motion: reduce)` support.
- **Test & DOM Contract Safety**:
  - Never alter element IDs, `data-category` values, or the attribute order of `<button class="cat-tab..." data-category="...">` in Octopath HTML files (required by `Octopath Traveler 0/tests/helpers/dom-stub.js`).
- **Theme Toggle Architecture & Cross-Codex Synchronization**:
  - **Pre-paint execution**: Inline snippet in `<head>` immediately resolves the active theme and sets `data-theme="light"` or `data-theme="dark"` on `<html>` before rendering, preventing theme flashes (FOUC).
  - **Early head script & document delegation**: `<script src="themeToggle.js"></script>` is loaded in `<head>`. Click handling uses global event delegation on `document` (`document.addEventListener('click', ...)`) rather than waiting for `DOMContentLoaded`, ensuring instant toggle responsiveness even while multi-megabyte data files (`skillData.js`, `enemyData.js`, `allCards.js`) are still loading.
  - **DOM-driven toggle state**: Next theme is evaluated from `document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'` rather than stale storage values.
  - **Multi-tier storage & sync**: Theme preference is saved to and synchronized from primary key `game_guide_theme` alongside local backwards-compatible keys (`octo0_theme`, `digimon_codex_theme`), safe cookie fallback with regex `(?:^|;\\s*)`, and `window.name` fallback for `file://` contexts.
  - **Lifecycle resilience**: Listens to `pageshow` (for bfcache back/forward navigation) and `storage` (for cross-tab synchronization).
- **Character Sprites & Vertical Portraits Suite**:
  - All 35 playable characters in `Octopath Traveler 0/assets/characters/` must provide both a vertical portrait (`<slug>_portrait.png`, e.g., 74×160 or 54×96) and an official CotC combat sprite (`<slug>_sprite.png`, e.g., 66×102 or 72×96).
  - Detail modals provide a Portrait vs. Sprite toggle (`.char-modal-image-toggle`).
  - When rendering pixel art sprites in the modal, apply `image-rendering: pixelated; image-rendering: crisp-edges;` to `.char-modal-image[data-mode="sprite"]` to prevent blurring on high-DPI displays.
- **Mobile & "Request Desktop Site on Mobile" (`980px` + `pointer: coarse`) Ergonomics**:
  - **Safe-area & overflow guards**: `body` includes `overflow-x: hidden`, `env(safe-area-inset-*)` padding, and `-webkit-tap-highlight-color: transparent`.
  - **Coarse pointer touch targets (`@media (pointer: coarse)`)**: Enforce `min-height: 44px` on buttons, nav links, and tabs, `touch-action: manipulation` on all interactive controls, and `font-size: 16px` on all `<input>` and `<select>` elements so iOS Safari never auto-zooms even when "Request Desktop Website" is active.
  - **Unsticky filters on mobile/touch**: In Octopath, `.sticky-filter-wrap` resets to `position: relative` under `@media (max-width: 1099px), (max-height: 760px), (pointer: coarse)` so tall filter panels never obscure half the viewport while scrolling.
  - **Desktop-on-mobile (`761px–1180px`) table & rail fit**: Wide tables (`.card-table-section`, `.combinations-table-wrap`, `.enemy-table-shell`, `.equip-table-wrap`, `.npc-chunk-table-wrap`) use compact cell padding and `overflow-x: auto; -webkit-overflow-scrolling: touch`. On `1100px–1280px` with `(pointer: coarse)`, hide the fixed `.site-rail` (`padding-left: 0`) and keep `.site-nav-links` visible in the top bar.

---

## 2. World-Specific Visual Identities

Do **not** flatten the two codexes into generic grayscale templates. Each codex embodies its own game universe and community wiki aesthetic while sharing the same structural ergonomics:

### A. Digimon Card Battle — Cyber-Digital / Digivice HUD (`Digimon Card Battle/`)
- **Inspiration**: Digimon Wiki & Digivice LCD/holographic terminal HUD.
- **Dark Theme (`:root`)**: Deep Digital World navy-slate (`#070b14` to `#142038`), glowing cyan-blue HUD grid lines (`rgba(56, 189, 248, 0.16)`), subtle CRT/hex-grid background overlay, and crisp digital cyan/amber accents (`#38bdf8`, `#f59e0b`).
- **Light Theme (`[data-theme="light"]`)**: Clean Digimon Wiki daylight lab-blue (`#eef4fb` to `#ffffff`) with crisp azure borders (`rgba(2, 132, 199, 0.22)`).
- **Typography**: `Rajdhani` (tech headers, badges, counters) + `Inter` (body copy).
- **Specialty Badges**: Preserve the 5 elemental specialty colors (`Fire`, `Ice`, `Nature`, `Darkness`, `Rare`) plus `Option` across tabs, cards, and table rows.

### B. Octopath Traveler 0 — HD-2D Fantasy RPG Tome (`Octopath Traveler 0/`)
- **Inspiration**: Octopath Traveler Wiki & Orsterra illuminated chronicles.
- **Dark Theme (`:root`)**: Warm obsidian tavern-leather and dark mahogany surfaces (`#0c0907` to `#231b14`), antique brass and burnished gold filigree borders (`rgba(229, 184, 105, 0.24)` to `0.52`), warm parchment text (`#f6f0e4`), and gold-leaf highlights (`#e5b869`, `#fef3c7`).
- **Light Theme (`[data-theme="light"]`)**: Warm illuminated vellum/parchment (`#e7dbc7` to `#fdfaf3`), sepia/bronze borders (`rgba(138, 92, 34, 0.24)`), and deep manuscript ink typography (`#241a10`).
- **Typography**: `Cinzel` (ornate serif display headers, brand titles, and category tabs) + `Inter` (readable body prose) + `Rajdhani` (tabular combat numbers, SP, potency, and stat chips).
- **Category Accents**: Distinct RPG category accents for `Physical` (burnished amber), `Elemental` (arcane azure), `Support` (emerald), and `Passive` (amethyst).

---

## 3. Custom SVG Icon System Guidelines

When creating or updating UI icons, crests, or category emblems, follow these SVG engineering standards:

1. **No OS-dependent Emoji in Primary Chrome**:
   - Replace generic emoji in brand crests, navigation bars, desktop rails, category tabs, and empty states with custom-crafted vector SVGs:
     - Digimon UI icons live in `Digimon Card Battle/assets/ui/`.
     - Octopath UI icons live in `Octopath Traveler 0/assets/icons/ui/`.
2. **24×24 ViewBox & Pixel-Grid Alignment**:
   - Author icons on a standard `viewBox="0 0 24 24"` canvas with crisp geometry, `stroke-linecap="round"`, `stroke-linejoin="round"`, and high silhouette readability at `15px–28px`.
3. **Thematic Detailing**:
   - **Digimon SVGs**: Use geometricchamfers, circuit nodes, LCD segments, and glowing cyan/gold/emerald gradients (`digivice.svg`, `card-db.svg`, `fusion.svg`, `specialty-*.svg`).
   - **Octopath SVGs**: Use metallic gold/brass/silver linear gradients, gemstone facets, 8-pointed compass roses, heraldic shields, and medieval RPG silhouettes (`octopath-crest.svg`, `nav-*.svg`, `cat-*.svg`).
4. **Accessible Markup**:
   - Decorative icons placed next to text labels must use `alt=""` (or `aria-hidden="true"` on their wrapper) so screen readers announce only the label text without double-reading filenames.
5. **Automated Asset Verification**:
   - Every custom SVG icon added to `assets/ui/` or `assets/icons/ui/` should be covered by an existence assertion in the test suite (`tests/dataIntegrity.test.js` or `tests/skillCodex.test.js`).

---

## 4. Pre-Completion Verification Checklist

- [ ] Check every affected page in both **Dark** and **Light** themes and at desktop (`>= 1100px`) and mobile (`<= 600px`) widths.
- [ ] Confirm `<button class="cat-tab..." data-category="...">` attribute ordering is preserved on all Octopath HTML pages.
- [ ] Verify each app page's `← Project home` link resolves to `../index.html` and the root launcher cards display each world's custom crest SVG.
- [ ] Verify `themeToggle.js` is loaded in `<head>`, click delegation is active immediately, and themeToggle unit tests pass.
- [ ] Run `npm.cmd run check` from the repository root and confirm all Digimon tests, Octopath tests, and TypeScript checks pass with 0 errors.
- [ ] Record durable design and icon updates in `PROJECT_GUIDE.md` and `CHANGELOG.md`.
