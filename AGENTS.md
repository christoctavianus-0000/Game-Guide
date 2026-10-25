# Agent Second Brain & Game Guide Workspace Rules

## 1. Obsidian Second Brain Integration (`D:\My AI Project\Agent_Second_Brain`)

You have direct read/write access to the user's Obsidian Second Brain vault located at:
`D:\My AI Project\Agent_Second_Brain`

### Key Vault Paths
- **Home Dashboard:** `D:\My AI Project\Agent_Second_Brain\00 - Home.md`
- **Game Guide Master MOC:** `D:\My AI Project\Agent_Second_Brain\03 - Areas\Game Guide MOC.md`
- **Digimon Card Battle MOC:** `D:\My AI Project\Agent_Second_Brain\03 - Areas\Digimon Digital Card Battle MOC.md`
- **Octopath Traveler 0 MOC:** `D:\My AI Project\Agent_Second_Brain\03 - Areas\Octopath Traveler 0 MOC.md`
- **Bravely Default II MOC:** `D:\My AI Project\Agent_Second_Brain\03 - Areas\Bravely Default II MOC.md`
- **Active Roadmap & Backlog:** `D:\My AI Project\Agent_Second_Brain\02 - Projects\Game Guide Roadmap & Backlog.md`
- **Shared Architecture & Invariants:** `D:\My AI Project\Agent_Second_Brain\04 - Resources\Game Guide Shared Architecture & Invariants.md`
- **Daily Notes:** `D:\My AI Project\Agent_Second_Brain\01 - Daily Notes\YYYY-MM-DD.md`
- **Inbox (Quick Capture):** `D:\My AI Project\Agent_Second_Brain\00 - Inbox\`

### Mandatory Second Brain Workflow
1. **Read Context When Planning or Researching:**
   - When asked to plan features, check the backlog, review architecture rules, or work on a game codex, read the relevant MOC or `02 - Projects\Game Guide Roadmap & Backlog.md` in `D:\My AI Project\Agent_Second_Brain`.
2. **Write Back After Meaningful Changes:**
   - Whenever you complete a feature, fix a non-trivial bug, discover a new data/fusion invariant, or update the roadmap, update the corresponding note(s) in `D:\My AI Project\Agent_Second_Brain` (e.g., check off completed tasks in `Game Guide Roadmap & Backlog.md`, document new invariants in the game's MOC or `04 - Resources/`, or log progress in today's Daily Note).
3. **Always Include a "🧠 Second Brain Sync" Proof in Responses:**
   - Whenever you read from or write to the Obsidian vault during a task, include a concise **🧠 Second Brain Sync** section at the end of your response listing the clickable file links of the Obsidian notes you consulted or updated. This gives the user immediate verification that the Second Brain was used.

---

## 2. Core Game Guide Implementation Rules

Also adhere to `.github/copilot-instructions.md`:
- **Zero runtime dependencies:** Every page must work directly over `file://` and static hosting without bundlers.
- **Dataset synchronization:** Keep generated `*Data.js` and `*Data.json` files in sync via their extraction scripts.
- **HTML escaping:** Wrap all dynamic fields interpolated into `innerHTML` with `escapeHtml()`.
- **Verification:** Run `npm.cmd run check` from the repository root to verify all Digimon and Octopath tests and TypeScript checks pass.
