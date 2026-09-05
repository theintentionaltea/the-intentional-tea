---
name: visual-style-presets
description: Nine complete visual style presets for UI design — each a full direction with palette, typography pairing, and structural motif. Do not blend presets. Use to establish design direction before building.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/visual-style-presets
---

# Visual Style Presets

Nine complete visual style directions for UI design. Each preset is a full direction — color palette, typography pairing, and one distinctive structural motif.

## Critical Rule

**Do not blend two presets in one interface.** Mixing material systems (glass + skeuomorphism + frames together) is the most common failure mode. Pick one and commit.

---

## Universal Standards (Override Any Preset)

Palette alone doesn't create coherent design. These apply regardless of which preset you choose:

- **Surface hierarchy**: Multiple distinguishable depth levels, never flattened
- **Contrast minimums**: Body text at 4.5:1 WCAG; no dimming for "perceived luxury"
- **Accent restraint**: One accent color used in exactly three roles maximum
- **Material consistency**: One system per screen
- **Motion discipline**: 160-240ms for controls; always respect `prefers-reduced-motion`

---

## For The Intentional Tea

The brand's visual direction maps most closely to an **editorial warm minimal** preset:

**Characteristics:**
- Warm ivory paper (#FAF7F2) as the dominant surface
- Near-black (#000000) for text and decisive actions
- One muted accent (Blush #E2C0B9) for selection, hover, or highlight
- Generous whitespace as a design element
- High-contrast serif (Bodoni Moda) for display text
- Compact sans (Instrument Sans) for labels and body
- Hairline rules as structure; no heavy borders
- Editorial grid (content-driven column layout)
- Photography with documentary crops over product shots
- No glass effects, no gradients, no floating decorative elements

**Not the brand:**
- Dark UI presets
- Glass / frosted effects
- Skeuomorphic textures
- High-saturation palettes
- Playful / bubbly aesthetics

---

## When to Reference This Skill

- Before designing any new page section
- When a page section feels visually off-brand
- When adding a new component type to the site
- When a collaborator or subagent proposes a visual direction that conflicts with the established system
