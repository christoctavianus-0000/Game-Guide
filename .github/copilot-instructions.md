# Game Guide project notes

This repository contains two independent static web apps:

- `Digimon Card Battle/` contains the card database and fusion codex. Shared styles live in `styles.css`; fusion-specific styles live in `fusion.css`.
- `Octopath Traveler 0/` contains the skill, character, equipment, enemy, shop, and NPC codexes. Shared page styles live in `styles.css`.

When changing the UI, preserve each app's existing visual theme and test narrow phone layouts as well as desktop. Prefer horizontal scrolling for genuinely wide data tables, but reflow browsable records into readable mobile layouts when practical. Keep touch controls at least 44px tall, account for fixed bottom navigation and device safe areas, and avoid page-level horizontal overflow.

Run Octopath checks from its app directory (`cd "Octopath Traveler 0"`). The repository root has no package manifest; Digimon's scripts can be syntax-checked directly with Node.
