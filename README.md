# Game Guide

Game Guide is a collection of independent, static reference apps for three RPGs:

- [Digimon Digital Card Battle](Digimon%20Card%20Battle/index.html): searchable card database and fusion calculator.
- [Octopath Traveler 0](Octopath%20Traveler%200/index.html): codexes for skills, characters, equipment, enemies, shops, and NPCs.
- [Bravely Default II](Bravely%20Default%202/index.html): codexes for asterisk jobs, abilities, equipment, bestiary, side quests, shops, and B 'n' D card minigame.

The [library home page](index.html) is also the GitHub Pages entry point. The apps have no shared runtime or build system and can be opened locally over `file://` or served as static files. GitHub Pages publishes the repository root.

## Project layout

Each game directory is a self-contained static site with its own HTML pages, browser scripts, styles, generated data, source data/tools, and assets. Keep each app’s relative asset paths intact when changing its layout.

- `Digimon Card Battle/PROJECT_GUIDE.md` documents the card/fusion data model and maintenance workflow.
- `Octopath Traveler 0/PROJECT_GUIDE.md` documents the six codexes, generated datasets, and extraction scripts.
- `Bravely Default 2/PROJECT_GUIDE.md` documents the seven codexes, data pipeline, and asset structure.
- `.github/copilot-instructions.md` contains shared contributor guidance.
- `.github/workflows/` runs repository checks on pushes and pull requests.

## Checks

From the repository root, run:

```sh
npm run check
```

This runs:
1. **Digimon Card Battle**: `node --check` syntax validation and 17 unit tests (including fusion engine, GameFAQs guide verification, UI SVG icon verification, theme synchronization, and mobile/desktop-on-mobile responsiveness).
2. **Octopath Traveler 0**: `tsc --noEmit` typecheck across all 6 applications and 63 unit/regression tests (including full character sprite coverage, compact job navigation, Excel database invariants, theme synchronization, and mobile/desktop-on-mobile responsiveness).
3. **Bravely Default II**: `tsc --noEmit` typecheck across all 7 applications and 23 unit tests (including twin `.json` ↔ `.js` sync, cross-reference integrity, SVG asset verification, XSS immunity, theme synchronization, and mobile/desktop-on-mobile responsiveness).

To run tests independently:

```sh
npm test --prefix "Digimon Card Battle"
npm test --prefix "Octopath Traveler 0"
npm test --prefix "Bravely Default 2"
```
