---
name: better-writing
description: Interface copy rules — button labels, error messages, link text, toggle switches, empty states, and capitalization. Use when writing or reviewing any user-facing UI text.
metadata:
  type: skill
  source: https://github.com/boraoztunc/skills/tree/main/better-writing
---

# Better Writing

Clear and brief beats clever. Consistency beats variety.

Prioritize consistency with existing product voice. Address users directly ("you" not "the user"). Use plain vocabulary that translates well.

---

## Rules by Element Type

### Button Labels
Start with specific verbs. Never vague affirmations.

| Weak | Strong |
|---|---|
| Get Started | Start Your Reset |
| Learn More | See What's Inside |
| Submit | Save My Spot |
| Continue | Go to Checkout |

### Error Messages
Instruct users how to fix the problem. No blame.

| Don't | Do |
|---|---|
| "That password is too short" | "Choose a password with at least 8 characters" |
| "Invalid email" | "Enter a valid email address (example@email.com)" |
| "Something went wrong" | "Couldn't save your changes. Try again." |

### Link Text
Write link text that makes sense out of context.

| Weak | Strong |
|---|---|
| Click here | Read the planning guide |
| Learn more | See how it works |
| This article | How to use the Life Planner |

### Toggle Switches
Label the ON state. The label implies the off state.
- "Send me weekly tips" — when on, tips are sent. When off, they aren't.
- Don't add negative phrasing to describe the off state.

### Empty States
Combine orientation with forward action.
- Explain what the feature does (one sentence)
- Offer a clear next step (one action)
- Don't just say "Nothing here yet"

### Capitalization
Follow one consistent policy per element type.
- Sentence case is the safer default across localization contexts
- Pick one policy and apply it consistently — mixing is worse than either choice

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| "Click here to learn more" | Write descriptive link text |
| "An error occurred" | Tell the user what happened and what to do |
| Empty state says only "No items" | Explain what would appear here and how to add it |
| Button says "OK" | Say what OK does: "Got it," "Save," "Done" |
| All caps in body copy | Sentence case; use `text-transform` in CSS for labels |
