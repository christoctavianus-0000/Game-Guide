---
name: better-layout
description: Helps with grouping, alignment, reading order, progressive disclosure and other details that make a good layout.
---

# Layout

Position, spacing and alignment carry hierarchy before a word is read. This skill builds that structure and stress-tests it: resize it, translate it, mirror it for RTL.

Write every fix in the project's styling system. The numbers below are starting points for interfaces with no established density system.

## Group with space, not lines

Space groups first, background shapes second, separator lines last and only where space alone can't carry the structure. The gap between groups must be at least 2× the gap within one (`8px` intra-group to `16px`+ inter-group), or the grouping reads as noise.

## Keep controls distinct from content

Give every interactive element a background shape, a border, or a consistent placement zone. A control styled like the static text beside it does not read