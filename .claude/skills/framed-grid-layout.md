---
name: framed-grid-layout
description: 12-column grid with thin 1px borders, L-shaped corner brackets, diagonal texture, and responsive span classes. Use for editorial, technical, or system-like layouts where section boundaries should be visible and precise.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/framed-grid-layout
---

# Framed Grid Layout

Structured, minimal web layouts using a 12-column grid with consistent framing, thin borders, and L-shaped corner brackets.

## When to Use

Works best when a page needs a clean technical structure with visible section boundaries and content should feel **precise, organized, editorial, or system-like**.

For The Intentional Tea: appropriate for the resources page, planning tools sections, or any structured content listing.

---

## Key Technical Features

### Grid Foundation
- 12-column parent grid
- Consistent `16px` gaps
- Responsive padding: `16px` to `28px`

### Visual Elements
- Thin `1px` borders with low contrast (think #E8E8E8 on cream)
- L-shaped corner brackets built with CSS gradients (no extra markup)
- Subtle diagonal texture at very low opacity (below 0.05)
- Neutral color palette

### Responsive Design

Span classes:
- `span-12` (full width)
- `span-8` (two-thirds)
- `span-6` (half)
- `span-4` (one-third)

All collapse to full-width on screens below 760px.

---

## Design Discipline

- Section edges align vertically and horizontally
- Every frame uses the same border, padding, and corner bracket scale
- Diagonal texture opacity stays below 0.05
- No heavy borders, no colored backgrounds on sections
- Structure comes from spacing and alignment, not decoration

---

## Example Use Cases on The Intentional Tea

- Product comparison tables
- Resources or tools listing pages
- FAQ sections with clear Q/A separation
- Pricing breakdowns for Business Operations
- Step-by-step process layouts

---

## When NOT to Use

- Marketing hero sections (too structured for emotional content)
- Testimonials (framed grids feel cold for social proof)
- Blog post body text (reading layout doesn't need visible frames)
