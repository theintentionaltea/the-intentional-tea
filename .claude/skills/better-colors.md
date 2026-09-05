---
name: better-colors
description: Color system principles — ramps, semantic tokens, consistent hue across ramps, contrast measurement against actual rendered backgrounds, one meaning per color. Use when building or reviewing any color system.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/better-colors
---

# Better Colors

Build color systems that communicate clearly and remain maintainable.

---

## 10 Core Principles

### 1. Match the Existing System
Use the project's existing color notation — don't introduce a second one alongside it. If the project uses CSS variables, use CSS variables. If it uses Tailwind tokens, use Tailwind tokens.

### 2. Organize into Ramps by Functional Role
Group colors by what they do, not by hue name. A ramp is a range of values (light → dark) for one semantic role (background, surface, text, border, accent).

### 3. Semantic Tokens in Components, Primitives in the Layer Below
- **Primitives**: named by hue (`--color-blush-300`)
- **Semantic tokens**: named by role (`--color-surface-subtle`)
- Components reference semantic tokens only — never primitives directly

### 4. Maintain Consistent Hue Across Ramps
As lightness changes through a ramp, keep the hue consistent. Ramps that shift hue look muddy.

### 5. One Color = One Meaning
If blush is used for "accent," it must not also appear as a "warning" state or decorative border. Assign each color one role and keep it.

### 6. Measure Contrast Against Actual Rendered Backgrounds
Do not assume contrast ratios — measure them. Text contrast requirements vary by size and weight:
- WCAG AA: 4.5:1 for normal text, 3:1 for large text (18px+ or 14px+ bold)
- WCAG AAA: 7:1 for normal text

### 7. Choose the Right Interpolation Space for Gradients
Linear gradients in RGB look washed out in the middle. Use OKLCH or OKLAB for gradients that maintain perceived brightness across the range.

### 8. Accent Restraint
One accent color, used in exactly three roles maximum. More than that and the accent loses its visual priority.

### 9. Design Tokens for Theming
Define complete light and dark palettes as separate token sets. Components consume tokens — they don't define their own color values.

### 10. Document What Each Token Is For
If someone has to guess what `--color-brand-muted` means, the naming failed. Every token name should explain its role without context.

---

## For The Intentional Tea Brand Colors

| Token | Value | Role |
|---|---|---|
| `--color-cream` | `#FAF7F2` | Background / base |
| `--color-blush` | `#E2C0B9` | Accent / highlight |
| `--color-espresso` | `#402E1B` | Depth (print/Instagram) |
| `--color-black` | `#000000` | Primary text (website) |

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Using primitives directly in components | Reference semantic tokens only |
| Naming tokens by appearance (`--light-pink`) | Name by role (`--color-accent`) |
| Building ramps with inconsistent saturation | Keep hue consistent as lightness varies |
| Assuming contrast ratios | Measure against actual rendered backgrounds |
| Gradient looks washed out in the middle | Use OKLCH/OKLAB interpolation |
