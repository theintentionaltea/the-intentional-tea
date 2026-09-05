---
name: better-accessibility
description: Accessibility as craft — native elements first, visible focus rings, full keyboard support, hit area minimums, accessible names, error announcements, motion preferences. Use when building or reviewing any UI.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/better-accessibility
---

# Better Accessibility

Accessibility is not a compliance checkbox bolted on at the end; it is the floor for interface craft. Most of it is free if you use the platform: native elements ship with keyboard support, real labels announce themselves, and a visible focus ring is one CSS rule.

---

## Core Principles

### 1. Native Elements First
The first rule of ARIA: don't use ARIA when a native element exists.
- `<button>` for actions
- `<a href>` for navigation (must support Cmd/Ctrl/middle-click)
- Never `<div onClick>`
- No ARIA is better than bad ARIA

### 2. Visible Focus Rings
Style `:focus-visible`, not bare `:focus`.
- Never use `outline: none` without a verified replacement
- Use at least a `2px` solid perimeter
- Verify the ring against every adjacent color it crosses

### 3. Full Keyboard Support
Every pointer interaction needs a keyboard path:
- Escape closes overlays
- Arrow keys move within composite widgets (tabs, menus, listboxes)
- Tab moves between widgets
- Enter and Space activate
- Only `tabindex="0"` and `tabindex="-1"` — never positive values

### 4. Trap and Restore Focus
Modals set `inert` on the background content, move focus inside on open, and return focus to the trigger on close.

### 5. Minimum Hit Area
- WCAG 2.5.8 Level AA: 24×24 CSS pixel target minimum
- Aim for 44×44px in touch contexts
- Extend with pseudo-elements if the visible element should stay smaller
- Never let extended hit areas overlap

### 6. Label and Type Every Control
- Every input gets a `<label for>` or wrapping `<label>`
- A placeholder is never a label
- Add `autocomplete` with a meaningful `name`
- Never block paste (users paste passwords and codes)

### 7. Errors That Announce
- Keep submit enabled until the request starts
- Validate on submit: mark failing fields with `aria-invalid="true"`
- Point `aria-describedby` at the inline error text
- Focus the first invalid field after submit

### 8. Accessible Names Everywhere
- Icon-only buttons need a descriptive `aria-label`
- Visible label text must appear in the accessible name
- Decorative elements get `aria-hidden="true"` — never on a focusable element

### 9. Don't Rely on Color Alone
Status needs a redundant cue: icon, text, or underline alongside the color.

### 10. Honor prefers-reduced-motion
```css
@media (prefers-reduced-motion: no-preference) {
  /* animations go here */
}
```
Under reduced motion: replace slides and scales with opacity crossfades. Kill parallax and autoplay entirely.

### 11. Announce Dynamic Content
- `aria-describedby` for field-specific validation
- `role="status"` for non-urgent updates (toasts, result counts)
- `role="alert"` only for urgent errors not tied to a control

### 12. Alt Text by Purpose
- Decorative images: `alt=""`
- Informative images: describe the meaning
- Functional images: describe the action (search icon → `alt="Search"`, not `alt="magnifying glass"`)

### 13. Structure Is Navigation
- One page-level `<h1>`, properly nested levels
- One visible `<main>` landmark
- "Skip to content" link as the first focusable element when repeated chrome precedes `<main>`

### 14. Survive Zoom and Text Resize
Page must work at 200% zoom and reflow at 320px width without horizontal scrolling.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| `outline: none` to remove the focus ring | Style `:focus-visible` instead |
| `<div onClick>` for a button or link | `<button>` for actions, `<a href>` for navigation |
| Placeholder used as the only label | Add a visible `<label for>` |
| Positive `tabindex` to fix focus order | Fix the DOM order instead |
| `aria-hidden="true"` on a focusable element | Remove it or make the element non-focusable |
| Submit disabled until the form is valid | Keep it enabled; validate on submit |
| Decorative glow swallowing clicks | `pointer-events: none` on the decorative layer |
