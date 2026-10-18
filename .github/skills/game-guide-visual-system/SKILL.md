---
name: game-guide-visual-system
description: Maintain a coherent visual language across the Game Guide static codex apps while preserving each game's own identity.
---

# Game Guide visual system

Use this skill when changing the visual design, shared navigation, typography, themes, or responsive layouts of the Digimon Card Battle and Octopath Traveler 0 codexes.

## Shared foundation

- Keep the interface restrained and information-led: compact headers, clear controls, quiet surfaces, readable tables, and consistent spacing.
- Use the established Inter / Rajdhani pairing: Inter for body and display text, Rajdhani for compact data labels and controls.
- Use the neutral charcoal palette in dark mode and the existing soft neutral palette in light mode. Avoid blue/neon chrome.
- Keep common surface and control treatments consistent, including subtle borders, modest corner radii, and visible keyboard focus.
- Match the codex navigation behavior: a compact top navigation at smaller widths and a fixed vertical rail on desktop.
- Include a clearly visible “Project home” link at the upper-left of every app page, linking to the repository-root `../index.html`. Keep it in the shared navigation and accessible by keyboard.
- Respect reduced-motion preferences and preserve usable touch targets on phones.

## Preserve game identity

- Do not make the two apps identical. Preserve meaningful game-specific content, terminology, artwork, and category colors.
- Digimon specialty colors are category information and should remain distinct, while its surrounding interface stays neutral.
- Keep app-specific layouts where they serve the content, such as Digimon's dense card table and fusion picker.

## Before finishing a design change

- Check every affected page in both dark and light themes and at desktop and phone widths.
- Ensure current navigation items are identified accessibly and each page has a keyboard-accessible skip link.
- Verify each app page's project-home link resolves to the repository-root landing page.
- Run `npm run check` from the repository root.
- Record durable design decisions in the relevant app's `PROJECT_GUIDE.md` and `CHANGELOG.md`.
