---
name: bravely-default-2-guide
description: Architecture, data pipelines, asset management, and UI patterns for the Bravely Default II static game guide codex.
---

# Bravely Default II — Codex Skill Guide

Use this skill when developing, debugging, verifying, or adding features to the **Bravely Default II** game guide (`Bravely Default 2/`).

---

## 1. Core Codex Architecture

The guide consists of 7 independent static HTML pages sharing `styles.css`, `themeToggle.js`, and `utils.js`:
- **Jobs** (`index.html` + `app.js`): 24 Asterisk jobs with roles, S-E aptitudes, dual specialties, and ability modal.
- **Abilities** (`ability.html` + `abilityApp.js`): 157 Command & Support abilities with cost filters and job links.
- **Equipment** (`equipment.html` + `equipmentApp.js`): 309 items (Weapons, Armor, Accessories) with stat filters.
- **Bestiary** (`enemy.html` + `enemyApp.js`): 292 entries (Regular, Rare world bosses, Asterisk bosses) with weaknesses and spoiler toggle.
- **Side Quests** (`quest.html` + `questApp.js`): 69 subquests with chapters, clients, objectives, and completion tracker.
- **Shops** (`shop.html` + `shopApp.js`): 7 settlement shops with prices and equipment cross-links.
- **B 'n' D** (`bnd.html` + `bndApp.js`): 105 minigame cards with stylized SVG cards and rule descriptions.

---

## 2. Invariants & Rules

1. **Zero Runtime Dependencies**: Every page runs over `file://` and static hosting without bundlers.
2. **Data Twin Synchronization**:
   - Every `<name>Data.json` has a twin `<name>Data.js` declaring `window.<name>Data = [...]`.
   - Always regenerate through `python update_data.py`.
3. **Strict HTML Escaping**:
   - Always call `window.BD2.escapeHtml()` on dynamic values before interpolating into DOM `innerHTML`.
4. **Theme & Storage Sync**:
   - Theme toggle binds to `bd2_theme` and synchronizes with root `game_guide_theme`.
   - Bookmarks and progress keys: `bd2_fav_jobs`, `bd2_fav_abilities`, `bd2_fav_equipment`, `bd2_fav_enemies`, `bd2_fav_quests`, `bd2_fav_bnd`, `bd2_completed_quests`, `bd2_spoiler_revealed`.
5. **Responsive Rules**:
   - Mobile: `<= 760px`
   - Desktop-on-Mobile (coarse pointer / tablet): `761px – 1180px`
   - Wide Desktop: `> 1180px` (with `.site-rail`)

---

## 3. Verification

Run checks from `Bravely Default 2/`:
```sh
npm run check
```
Runs:
- `tsc --noEmit` typecheck (0 errors)
- `node --test tests/*.test.js` (23 unit tests)
