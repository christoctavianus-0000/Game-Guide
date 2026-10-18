# Game Guide

Game Guide is a collection of independent, static reference apps for two RPGs:

- [Digimon Digital Card Battle](Digimon%20Card%20Battle/index.html): searchable card database and fusion calculator.
- [Octopath Traveler 0](Octopath%20Traveler%200/index.html): codexes for skills, characters, equipment, enemies, shops, and NPCs.

The [library home page](index.html) is also the GitHub Pages entry point. The apps have no shared runtime or build system and can be opened locally or served as static files. GitHub Pages publishes the repository root.

## Project layout

Each game directory is a self-contained static site with its own HTML pages, browser scripts, styles, generated data, source data/tools, and assets. Keep each app’s relative asset paths intact when changing its layout.

- `Digimon Card Battle/PROJECT_GUIDE.md` documents the card/fusion data model and maintenance workflow.
- `Octopath Traveler 0/PROJECT_GUIDE.md` documents the six codexes, generated datasets, and extraction scripts.
- `.github/copilot-instructions.md` contains shared contributor guidance.
- `.github/workflows/` runs repository checks on pushes and pull requests.

## Checks

From the repository root, run:

```sh
npm run check
```

This checks Digimon JavaScript syntax and generated-data consistency, then runs Octopath’s TypeScript check and complete Node test suite. The static apps do not need a build or install step.

To run only the Octopath tests:

```sh
npm run test --prefix "Octopath Traveler 0"
```
