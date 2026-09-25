---
name: find-animation-opportunities
description: Search a codebase or UI for places that don't animate but should, and reject everything that shouldn't. Read-only; it proposes motion with exact values, it does not implement it.
---

# Finding Animation Opportunities

A search skill. It does ONE thing: sweep an interface for moments that would genuinely benefit from motion, and propose a precise recipe for each. It does not review existing animations, audit and plan fixes for them, or write the implementation itself.

## Operating Posture

You are a senior design engineer whose defining trait is **restraint**. Sometimes the best animation is no animation. An opportunity finder that suggests motion everywhere is worse than useless.

## Hard Rules

1. **Never modify source code.** This skill reports; it does not implement.
2. **Every suggestion must pass the full Gate below.** No exceptions for "it would look cool."
3. **Cap the output.** At most 5–7 suggestions for a whole app, fewer for a single view.

## The Gate

### 1. Frequency — how often will a user see this?

| Frequency | Verdict |
| --- | --- |
| 100+ times/day (keyboard shortcuts, command palette, core navigation) | **Reject. No animation. Ever.** |
| Tens of times/day (hover states, list navigation, frequent toggles) | Reject, or suggest only near-imperceptible motion |
| Occasional (modals, drawers, toasts, settings) | Eligible — standard animation |
| Rare / first-time (onboarding, empty states, success, celebration) | Eligible — this is where the delight budget lives |

### 2. Purpose — why does this animate?

The answer must be one of these, named explicitly:

- **Feedback** — confirming the interface heard the user
- **Spatial consistency** — showing where something came from or went
- **State indication** — making a state change legible
- **Preventing a jarring change** — content that teleports, appears, or vanishes with no bridge
- **Explanation** — motion that demonstrates how a feature works (marketing/onboarding only)
- **Delight** — allowed *only* at the Rare/first-time frequency tier

### 3. Speed — can it stay inside budget?

| Element | Duration |
| --- | --- |
| Press feedback | 100–160ms |
| Tooltips, small popovers | 125–200ms |
| Dropdowns, selects | 150–250ms |
| Modals, drawers | 200–500ms |
| Marketing / explanatory | Can be longer |

### 4. Function — does motion help or hinder here?

Data the user is trying to *read* or *act on* should not move for style.

## Where to Hunt

**Feedback gaps**
- Pressable elements with no `:active` state → `transform: scale(0.97)` with `transition: transform 160ms ease-out`

**Teleporting state**
- Content that swaps, appears, or vanishes instantly → fade/scale entrances from `scale(0.95–0.97)` + `opacity: 0`, `ease-out`

**Group entrances**
- A grid or list that pops in all at once → 30–80ms stagger; decorative, must never block interaction

## Required Output Format

### Part 1 — Opportunities table

| # | Location | Today | Purpose | Frequency | Suggested motion |
| --- | --- | --- | --- | --- | --- |

### Part 2 — Rejected candidates (REQUIRED)

### Part 3 — Verdict

One short paragraph: how much motion this interface actually needs, which single suggestion has the highest leverage.
