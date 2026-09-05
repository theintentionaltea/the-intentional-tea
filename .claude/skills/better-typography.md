---
name: better-typography
description: Typography system rules — type scale, line-height by role, letter-spacing, measure caps, font loading, wrapping, tabular numbers, and mobile input sizes. Use when reviewing or building any text-heavy interface.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/better-typography
---

# Better Typography

Good typography is mostly restraint. A sensible scale, comfortable spacing, and enough contrast beat any clever effect.

---

## Core Principles

### 1. Serve the Right Format
Use `.woff2` on the web (Brotli compression). `.woff` is a fallback only. `.ttf` and `.otf` are desktop formats — don't serve them on the web.

### 2. Properties Over Raw Tags
- `font-weight: 650` not `font-variation-settings: "wght" 650`
- `font-optical-sizing: auto` not the raw `opsz` axis
- `font-variant-numeric: tabular-nums` not `font-feature-settings: "tnum" 1`

### 3. Fewer Fonts, Sizes, and Weights
Rarely use more than three fonts. Weight and size define hierarchy. Pair for contrast, not similarity — a serif headline with a sans body reads as deliberate.

### 4. Use a Type Scale with Semantic Names
Define a small set of sizes and deviate from it as little as possible. On a team, name sizes by use (`text-body-sm`), not by size (`text-14`).

### 5. Heading Sizes Descend with Level
A visually subordinate heading should not overpower its parent. Semantic heading levels map to descending type scale steps.

### 6. Line-Height by Role
- Headings: ~`1.1`
- Body copy: `1.5` to `1.6`
- Use unitless values so line-height scales with font size
- Anything wrapping to 3+ lines needs at least `1.4`

### 7. Letter-Spacing by Size
- Large headings: slightly negative letter-spacing
- Small uppercase labels: slight positive letter-spacing
- Body copy: neither

### 8. Cap the Measure
Long-form text should max out around 60-75 characters per line. Any unit works; what matters is that a cap exists.

### 9. Wrap Deliberately
- `text-wrap: balance` on headings — distributes text evenly
- `text-wrap: pretty` on descriptions — avoids lone words on the last line
- `overflow-wrap: break-word` where long URLs or IDs could escape containers

### 10. Tabular Numbers on Changing Values
Apply `font-variant-numeric: tabular-nums` to any value that changes (prices, timers, counters).

### 11. Truncate Without Losing Content
- Single line: `text-overflow: ellipsis` + `overflow: hidden` + `white-space: nowrap`
- Multi-line: `line-clamp`
- If the missing text matters, keep it reachable in a tooltip

### 12. Store Text in Natural Case
Use `text-transform` in CSS, not uppercase in the copy. Redesigns won't require rewriting copy.

### 13. Inputs at 16px on Mobile
iOS Safari zooms when an input's font is smaller than 16px. Fix: `text-base sm:text-sm` (upsizes on mobile) or scale down with CSS `transform` at 16px.

### 14. Size and Contrast Floors
- Long-form body text: start near 16px
- UI text: 14px for inputs and menus
- Captions: 13px
- Rarely below 12px
- Below 18px, stay at `font-weight: 400+`

### 15. Font Smoothing on the Root
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```
Apply once at the root layout, never per component.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| `.ttf`/`.otf` served on the web | Convert to `.woff2` |
| Hard-coded one-off font sizes | Use the type scale |
| `line-height: 24px` on scalable text | Use unitless value (`1.5`) |
| Full-width paragraphs | Cap around 60-75 chars per line |
| Orphan on last line of paragraph | `text-wrap: pretty` |
| Numbers causing layout shift | `tabular-nums` |
| Inputs below 16px zoom on iOS | Fix with `text-base sm:text-sm` |
| Extra-info hint with no visual cue | Dotted underline via `text-decoration-style: dotted` |
| Thin/Light weight on 14px UI text | Weight 400+ below 18px |
