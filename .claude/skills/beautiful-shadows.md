---
name: beautiful-shadows
description: Three tiered Tailwind shadow utilities for refined, neutral elevation — sm (compact cards), md (panels/popovers), lg (hero media/modals). Layered transparent shadows, no color tinting.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/beautiful-shadows
---

# Beautiful Shadows

Three tiered shadow utilities for refined, neutral elevation effects.

## The Three Tiers

### Beautiful sm
Use for: compact cards, form controls, pills, quieter surfaces
- Subtle three-layer shadow structure
- Very low opacity, small blur values
- Adds presence without calling attention

### Beautiful md
Use for: cards, panels, popovers, the default elevated surface style
- Six-layer shadow for moderate depth
- The go-to shadow for most elevated components

### Beautiful lg
Use for: hero media, feature callouts, modal-like containers, the strongest lift
- Complex gradient shadow for maximum prominence
- Use sparingly — reserve for truly hero elements

---

## Key Rules

- Pair with clean backgrounds and consistent border radius
- Never mix these with standard Tailwind shadows on the same component
- Neutral tones only — no color tinting in the shadows
- Apply only one shadow strength per component state
- Don't stack multiple shadows

---

## For The Intentional Tea

The brand's soft luxury aesthetic calls for shadow use that feels like light falling on paper, not a harsh drop shadow:

- Product cards → Beautiful sm or md
- Hero sections → no shadow (full-bleed, shadow-free)
- Modals / overlays → Beautiful lg
- Form inputs → Beautiful sm (on focus/active state)
- Floating CTAs → Beautiful md

---

## Anti-Patterns

- Overusing Beautiful lg on dense components (feels heavy)
- Relying on shadows instead of borders in low-contrast designs
- Color-tinted shadows on the warm cream brand palette (they clash)
