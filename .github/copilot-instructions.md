# Game Guide project notes

This repository contains two independent static web apps:

- `Digimon Card Battle/` contains the card database and fusion codex. Shared styles live in `styles.css`; fusion-specific styles live in `fusion.css`.
- `Octopath Traveler 0/` contains the skill, character, equipment, enemy, shop, and NPC codexes. Shared page styles live in `styles.css`.

## Core Implementation Rules
1. **Zero runtime dependencies**: All applications must run directly from `file://` or any static host without a build step or bundler.
2. **HTML escaping**: Any dynamic field interpolated into `innerHTML` markup must be wrapped with `escapeHtml()`.
3. **Category tabs**: Tab strips are horizontally centered (`justify-content: center` on container and button labels), with `justify-content: flex-start` retained under mobile media queries to preserve smooth horizontal scrolling.
4. **Defensive storage**: Always wrap `localStorage` access in `try...catch` blocks to protect against restricted browser modes.
5. **Static type checking**: Octopath maintains a zero-error TypeScript check (`tsc --noEmit`) across all 6 applications via `types/codex-types.d.ts` and `tsconfig.json`.

## Verification
Run full repository checks from the root with `npm run check`.
Individual suites can be run with:
- `npm test --prefix "Digimon Card Battle"` (7 tests)
- `npm test --prefix "Octopath Traveler 0"` (53 tests)
- `npm run typecheck --prefix "Octopath Traveler 0"` (6 apps checked)
