---
name: better-accessibility
description: Helps your project comply with accessibility standards and best practices.
---

# Accessibility

Most accessibility is free if you use the platform. Native elements ship with keyboard support, real labels announce themselves and a visible focus ring is one CSS rule.

Reviewing means two walks. Keyboard-only, where every flow completes without a mouse. Then screen-reader, where every control announces a name, a role and its state. When unsure, take the platform default over a custom rebuild, and remove ARIA rather than add it.

## Native elements first

The first rule of ARIA: don't use ARIA when a native element exists. `<button>` for actions, `<a href>` for navigation, never `<div onClick>`. A real link must support Cmd/Ctrl/middle-click. No ARIA is better than bad ARIA.

## Visible focus rings

Style `:focus-visible`, not bare `:focus`. Keyboard users get a ring and mouse users usually don't. Prefer the browser's unmodified indicator.

A custom ring needs a project focus token or another explicit color. Verify the whole indicator against every adjacent color it crosses, `currentColor` included. Use at least a `2px` solid perimeter or an equivalent visible area. Never use `outline: none` without a verified replacement, and preserve system colors in forced-colors mode.

## Full keyboard support

Every pointer interaction needs a keyboard path. Follow the ARIA APG patterns: Escape closes overlays, arrow keys move within composite widgets, Tab moves between widgets, Enter and Space activate.

Use only `tabindex="0"` to join the natural tab order and `tabindex="-1"` for programmatic focus. Positive values break that order. Composite widgets use roving tabindex, where the active item is `0` and every other is `-1`.

## Trap and restore focus

Modals set `inert` on the background content, move focus inside on open and return focus to the trigger on close. Add `overscroll-behavior: contain` so background content doesn't scroll.

## Minimum hit area

WCAG 2.5.8's Level AA baseline is a 24×24 CSS-pixel target. Aim for 44×44px on touch and 40×40px on desktop where density permits. Extend with a pseudo-element when the visible element should stay smaller.

Never let extended hit areas overlap. Give decorative layers `pointer-events: none`, so a glow never swallows the clicks meant for the control beneath it.

## Label and type every control

Every input gets a `<label for>` or a wrapping `<label>`. A placeholder is never a label. Label and control share one hit target, with no dead zone between a checkbox and its text.

## Accessible names everywhere

Icon-only buttons need a descriptive `aria-label`. Visible label text must appear in the accessible name. Decorative elements get `aria-hidden="true"`, never on a focusable element.

## Don't rely on color alone

Status needs a redundant cue: an icon, text, or an underline alongside the color.

## Honor prefers-reduced-motion

Wrap motion in `@media (prefers-reduced-motion: no-preference)` so it is opt-in. Under reduced motion, replace slides and scales with opacity crossfades, and kill parallax and autoplay entirely.

Autoplaying media needs a visible pause control, and toasts carrying an action or an error stay until dismissed.

## Announce dynamic content

Three mechanisms, three jobs. `aria-describedby` carries field-specific validation. A polite live region (`role="status"`) carries non-urgent updates not tied to a control, such as toasts and result counts. `role="alert"` carries urgent untied errors and nothing else.

## Alt text by purpose

Decorative images get `alt=""`. Informative images describe the meaning. Functional images describe the action: a search icon button is `alt="Search"`, not `alt="magnifying glass"`.

## Structure is navigation

Use headings that describe their sections and form a coherent outline. Give the page one `<h1>` and nest the levels below it without skipping. Expose one visible primary `<main>` landmark. When repeated navigation or chrome precedes it, make a "Skip to content" link the first focusable element. Anchored headings get `scroll-margin-top`.

## Survive zoom and text resize

The page must work at 200% zoom and reflow at 320px width without horizontal scrolling. Use `min-height` rather than fixed `height` on text containers. Never let the viewport meta cap how far the reader can zoom.

## Before you finish

| Mistake | Fix |
| --- | --- |
| Custom focus color assumed to work everywhere | Verify it against every adjacent color and in forced-colors mode |
| `aria-hidden="true"` on a focusable element | Remove it or make the element non-focusable |
| Hover treatment stuck after a tap on touch | Gate hover styling with `@media (hover: hover)` |
| Tooltip on a natively `disabled` control | Text beside it, or `aria-disabled` so it stays focusable |
| Skip link not first focusable element | Make it the first element in the DOM |
