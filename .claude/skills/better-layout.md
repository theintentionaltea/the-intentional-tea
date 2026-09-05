---
name: better-layout
description: Layout principles — spacing as the primary grouping tool, visual distinction for interactive controls, alignment consistency, importance-based ordering, progressive disclosure, and content-driven breakpoints.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/better-layout
---

# Better Layout

Layout communicates before a single word is read: position, spacing, and alignment carry hierarchy on their own.

---

## 10 Core Principles

### 1. Spacing Over Lines
Use negative space as the primary grouping tool.
- Inter-group gaps should be at least 2× the intra-group gaps
- Borders and dividers should be a last resort, not a first instinct

### 2. Visual Distinction for Interactive Controls
Interactive controls must look interactive through backgrounds, borders, or consistent placement.
- A button that looks like text will not get clicked
- A link that looks like a heading will confuse navigation

### 3. Alignment Consistency
Pick alignment edges and maintain them throughout the page.
- Left edges align with left edges
- Use logical CSS properties (`margin-inline-start` not `margin-left`) for directional layouts

### 4. Importance-Based Ordering
Position critical content near the top and leading edge.
- Most important information first
- Secondary actions go below or to the right of primary actions

### 5. Progressive Disclosure Cues
Hidden content needs visible affordances.
- Items should "peek 16-32px past the scroll edge" to signal more content
- Don't hide scrollable content behind a flush container edge

### 6. Control Spacing
- `12px` between bordered controls
- `24px` around borderless ones
- These are starting points — adjust to the design's density

### 7. Button Inset Positioning
Keep full-width buttons inside layout margins with visible radius.
- Full-width buttons that touch the viewport edge look unfinished

### 8. Content vs. Controls
- Backgrounds and media extend to the viewport edges
- Controls and text stay inside layout margins

### 9. Content-Driven Breakpoints
Break where content stops fitting, not at device presets.
- `320px`, `768px`, `1024px` are arbitrary — break where your content needs it

### 10. Accommodate Growth
Plan for string growth and language expansion.
- Avoid fixed-width text containers
- Button labels that work at 6 characters need to work at 20 characters

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Dividers between every row | Use spacing as the separator |
| Interactive elements that look inert | Add visible background, border, or cursor change |
| Inconsistent left edges | Align to a consistent margin system |
| Breakpoints at device widths | Break where content stops fitting |
| Fixed-width text containers | Use `max-width` with percentage or fluid units |
| Full-width button touching viewport edge | Add `padding-inline` margin |
