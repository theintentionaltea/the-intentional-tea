---
name: progressive-blur
description: Layered CSS progressive blur (top or bottom) using multiple backdrop-filter masks. Creates depth and softness at viewport edges. Use for sticky headers, scroll fade effects, or elegant content transitions.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/progressive-blur
---

# Progressive Blur

Create a layered CSS progressive blur (top or bottom) using multiple backdrop-filter masks for depth and softness.

---

## Workflow

1. Confirm placement (top or bottom), height, and z-index relative to UI
2. Insert the snippet
3. Adjust the customization knobs

---

## Usage Checklist

- Insert the HTML inside `<body>`
- Keep the `.gradient-blur` element near the top of the DOM
- Ensure the background behind it exists (backdrop-filter blurs what is behind it)
- Adjust `z-index` to sit above content but below modals
- Set `pointer-events: none` to prevent click blocking

---

## Top Blur (Fades From Top Edge)

```html
<div class="gradient-blur" aria-hidden="true"></div>
```

```css
.gradient-blur {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  pointer-events: none;
  z-index: 10;
}

.gradient-blur::before {
  content: '';
  position: absolute;
  inset: 0;
  backdrop-filter: blur(0.5px);
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
}
```

For the full 8-layer version (0.5px to 64px blur steps), implement each step as a separate pseudo-element or child div with progressively larger blur values and mask gradients starting at different percentages.

---

## Bottom Blur (Fades From Bottom Edge)

Same structure, flip the gradient direction:
- `to top` instead of `to bottom`
- Position `bottom: 0` instead of `top: 0`

---

## Customization Knobs

| Knob | How to adjust |
|---|---|
| Direction | Flip `to top` ↔ `to bottom` |
| Height | Change `.gradient-blur` height |
| Blur strength | Change blur values (0.5px to 64px) |
| Smoothness | Add/remove layers |

---

## For The Intentional Tea

Best uses:
- Sticky navigation blur (top blur, ~80px, on scroll)
- Section transitions where content fades into the next section
- Product image containers for an elegant reveal feel

Avoid:
- Using on very short sections (the blur won't have room to work)
- High blur values on mobile (GPU intensive, use fewer steps)

---

## Common Pitfalls

- Backdrop-filter requires content behind it — flat backgrounds won't blur
- High blur values consume GPU; reduce steps on lower-end devices
- Must have `pointer-events: none` or it blocks clicks on content underneath
