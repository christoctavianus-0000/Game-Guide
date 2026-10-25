# Bravely Default II Codex — Project & Architecture Guide

A dependency-free, high-performance offline static game guide for **Bravely Default II** (Nintendo Switch & PC). Built with vanilla HTML5, CSS3, and JavaScript, strictly adhering to the Game Guide Shared Architecture.

---

## 1. Codex Pages & Features

| Page | Script | Dataset | Description |
| :--- | :--- | :--- | :--- |
| **Jobs** (`index.html`) | `app.js` | `jobData.js` (24 jobs) | All 24 Asterisk jobs with roles, weapon/shield aptitude grades (S–E), dual job traits/specialties, and modal ability progression. Deep-linkable via `?job=<id>`. |
| **Abilities** (`ability.html`) | `abilityApp.js` | `abilityData.js` (157 abilities) | Command & Support/Passive abilities filterable by job, type, and cost. Sortable table + detail modal with direct job navigation. Deep-linkable via `?ability=<id>`. |
| **Equipment** (`equipment.html`) | `equipmentApp.js` | `equipmentData.js` (309 items) | Weapons (Sword, Dagger, Axe, Spear, Bow, Staff), Armor (Shield, Headwear, Armour), and Accessories with weights, stat modifiers, and acquisition sources. Deep-linkable via `?item=<id>`. |
| **Bestiary** (`enemy.html`) | `enemyApp.js` | `enemyData.js` (292 enemies) | Monster compendium covering 265 standard beasts, 7 rare world bosses, and 20 Asterisk holders with weakness chips, drops, steals, and a spoiler blur toggle. Deep-linkable via `?enemy=<id>`. |
| **Side Quests** (`quest.html`) | `questApp.js` | `questData.js` (69 subquests) | Complete subquest journal spanning Prologue through Chapter 7 with clients, locations, objectives, star ratings, and completion checkboxes. Deep-linkable via `?quest=<id>`. |
| **Shops** (`shop.html`) | `shopApp.js` | `shopData.js` (7 shops) | Town markets across Excillant (Halcyonia, Savalon, Wiswald, Rimedhal, Holograd, Enderno, Mag Mell) with consumable items, prices in pg, and cross-links to the Equipment Codex. Deep-linkable via `?shop=<id>`. |
| **B 'n' D** (`bnd.html`) | `bndApp.js` | `bndCardData.js` (105 cards) | Minigame card codex with 105 Monster, Job, and Character cards, card strength ratings, territorial rules, and stylized SVG card fronts. Deep-linkable via `?card=<id>`. |

---

## 2. Directory Structure

```text
Bravely Default 2/
├── assets/
│   ├── cards/              # 105 generated B 'n' D SVG card fronts
│   ├── icons/
│   │   └── ui/             # 24 custom SVG icons (crest, weapons, elements, nav)
│   └── jobs/               # 24 official asterisk job icon PNGs
├── source/                 # NotebookLM & wiki raw data, DATA_REPORT.md
├── tests/                  # Node.js native test runner suite (23 tests)
├── types/                  # TypeScript codex-types.d.ts definitions
├── *.html                  # 7 static codex pages
├── *App.js & app.js        # Vanilla browser controllers
├── *Data.json & *Data.js   # Synchronized data twins
├── styles.css              # Celestial crystal theme & responsive stylesheet
├── themeToggle.js          # Shared & local theme persistence
├── utils.js                # Shared HTML escaping & modal utilities
├── update_data.py          # Deterministic master data regeneration pipeline
├── package.json            # Node scripts (typecheck, test, check)
└── tsconfig.json           # Typecheck configuration (target: ES2021)
```

---

## 3. Data Invariants & Zero-Dependency Rules

1. **Twin Synchronization**:
   - Every `<dataset>Data.json` is mirrored by a browser-ready `<dataset>Data.js` file assigning `window.<dataset>Data`.
   - Never edit `.js` files manually. Run `python update_data.py` to regenerate all datasets deterministically.
2. **Defensive Storage & Bookmarking**:
   - User favorites and quest completion checkboxes are stored under:
     - `bd2_fav_jobs`, `bd2_fav_abilities`, `bd2_fav_equipment`, `bd2_fav_enemies`, `bd2_fav_quests`, `bd2_fav_bnd`
     - `bd2_completed_quests`
     - `bd2_spoiler_revealed`
     - `bd2_theme` (synchronized with root `game_guide_theme`)
   - All `localStorage` calls are wrapped in `try...catch` blocks for restricted sandbox environments.
3. **Strict HTML Escaping**:
   - Every interpolated variable passed into `innerHTML` is escaped via `window.BD2.escapeHtml()`.
4. **Responsive Layouts**:
   - Mobile: `<= 760px`
   - Desktop-on-Mobile & Tablet: `761px – 1180px`
   - Desktop Wide: `> 1180px` (with `.site-rail` navigation)

---

## 4. Verification

Run checks from `Bravely Default 2/`:
```sh
npm run check
```
Or from the root repository:
```sh
npm run check:bd2
```
