---
name: better-ui
description: UI polish principles — border radius math, optical alignment, shadows for elevation, animation timing, scale on press, and micro-interaction details. Use when reviewing or building any interface component.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/better-ui
---

# Better UI

Design engineering principles for polished interfaces. Great interfaces rarely come from a single thing — it's usually a collection of small details that compound into a great experience.

---

## Core Principles

### Concentric Border Radius
Outer radius should equal inner radius plus padding to avoid misalignment.
- If a card has `border-radius: 16px` and `padding: 8px`, the inner element should have `border-radius: 8px`
- Formula: `inner-radius = outer-radius - padding`

### Optical Alignment
Prioritize visual balance over geometric centering, especially for icons and asymmetric shapes.
- Icons with visual weight on one side need to be shifted slightly to feel centered
- What looks centered to the eye is more important than what measures centered

### Shadows for Elevation
Use layered transparent box-shadows rather than borders solely for depth.
- Layer 2-3 shadows at different offsets and blurs
- Use `rgba` not solid colors
- Avoid single heavy shadows — they look dated

### Interruptible Animations
CSS transitions work best for interactive states. Reserve keyframes for one-time sequences.
- `transition` for hover/focus/active states
- `@keyframes` for entrance animations and loading states only

### Staggered Entrances
Break staged animations into ~100ms intervals for semantic chunks.
- Don't stagger high-frequency interactions (tab switching, list items in a fast scroll)
- Stagger works for initial page load and modal entry

### Subtle Exits
Use small fixed `translateY` values with ease-out timing.
- Exit animations should be faster than entrance animations
- Typical exit: 150ms vs 250ms entrance

### Icon Animation Values
- Scale: from 0.25 to 1
- Opacity: from 0 to 1
- Blur: from 4px to 0px

### Image Outlines
Apply 1px outlines using pure black (light mode) or white (dark mode) with low opacity.
- `outline: 1px solid rgba(0, 0, 0, 0.08)` on images in light mode
- Prevents images from floating disconnected from the layout

### Scale on Press
Apply consistent `0.96` scale for tactile button feedback.
```css
button:active { transform: scale(0.96); }
```

### Theme Switch Handling
Suppress transitions during color mode switches to prevent visual smearing.
- Add a class on the `<html>` element during the switch, remove it after
- `* { transition: none !important; }` for the brief switch duration

### Motion Restraint
- Avoid custom animations on frequent interactions (typing, scrolling, tabs)
- Pair motion with static visual cues so the UI works even when motion is disabled

---

## What This Skill Delegates

- Typography → `better-typography`
- Accessibility → `better-accessibility`
- Layout structure → `better-layout`
