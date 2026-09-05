---
name: service-booking-flow
description: Editorial service booking design — warm lookbook browsing to resilient booking flow. Covers visual system (warm ivory, serif identity), treatment selector, booking flow states, motion defaults, and validation.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/service-booking-flow
---

# Editorial Service Booking

Make browsing services feel like turning through a quiet lookbook, then carry that confidence into a resilient booking flow.

Applies to: appointment-based services, consulting packages, done-for-you services. Adapted here for The Intentional Tea's Business Operations offers.

---

## Establish the Journey

1. Open with one strong image or visual statement and a short description of what you do.
2. Build trust with evidence — process, client results, specifics — rather than generic badges.
3. Let visitors compare services in one calm, readable stage.
4. Show proof only when real (real client results, real process steps).
5. Move into service selection, booking/contact, and confirmation without changing visual language.

---

## Visual System

- Warm cream paper and near-black text (matches The Intentional Tea palette)
- Pair an elegant high-contrast serif (Bodoni Moda) with compact sans labels (Instrument Sans)
- Favor hairline rules, minimal border radius, editorial crops, generous whitespace
- Keep navigation sparse
- Use black for decisive actions; blush (#E2C0B9) only for selection or status indicators
- Avoid: glossy cards, glass effects, loud gradients, beauty-template ornament

---

## Page Composition

### Header
Show essential navigation, brand name, and one booking/contact action.

### Hero
One strong statement of craft. For Business Operations: what you build and who it's for.

### Services Section
Pair a tab list or selector with details, investment range, and next step.
- Duration / timeline visible
- Price or starting price visible
- Clear "How to get started" link

### Process
3-5 steps showing what happens after they reach out. Reduces uncertainty.

### Proof
Real client results or case studies. For The Intentional Tea: the snowball stand, the father's business, referral clients.

### FAQ
6-10 questions that remove the last objections before contact.

### Contact / Booking CTA
Simple form or Calendly link. Keep selected service visible through this step.

---

## Booking Flow Requirements

- Prefer native form controls
- Persist service choice through the form
- Design all states: loading, error, success, retry
- Return focus to the correct field after an error
- Preserve selections across Back navigation

---

## Accessibility

- Complete booking with keyboard only
- Confirm no layout shift during service selection changes
- Visible contrast, visible focus, alt text for all images
- Works at 200% zoom

---

## Motion Defaults

- Control interactions: 160-220ms
- Section entrances: 500-760ms
- Render the final state immediately for reduced motion (no animation at all)
- Never auto-advance carousels

---

## Avoid

- Hover-only service previews (keyboard and touch users can't access them)
- Losing form selections after errors or Back navigation
- Auto-advancing content
- Fake availability or placeholder client testimonials
