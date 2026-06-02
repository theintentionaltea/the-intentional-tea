# Carousel Covers — Execution Handoff
*The Intentional Tea · Claude Code · May 2026*
*Read fully before touching the file. This is the only context you need.*

---

## WHAT THIS FILE IS

The carousel covers file is a purchased template pack (originally from Sarah Spring / Pink Trendsetter) repurposed as Q&A covers for The Intentional Tea's Instagram feed. It holds the cover slides for all 75 Q&A carousels.

**Design ID:** DAHK4_9thLU  
**Total slides:** 83 (was 84; Tiara deleted one blank slide — original slide 74)  
**Photo-background slides:** ~73 (slides 1–73)  
**No-background slides:** ~10 (slides 74–83 in new numbering, originally 75–84)

---

## DESIGN STRUCTURE

The design has two types of slides:

**Photo-background slides (1–73):** Each has Tiara's photo in the background. These are the main Q&A covers for the feed. Layouts vary — see matching table below.

**No-background slides (74–83):** Simpler, cleaner versions without the photo. Tiara wants to USE these for Q&As too, not hold them in reserve. They create visual variety on the feed. These were not analyzed in the prior session — pull fresh content before editing.

---

## CRITICAL OPERATING RULES

1. **Match elements by current text content, not array position.** Canva returns elements in canvas-addition order, not visual reading order.
2. **Sort by `top` coordinate** to reconstruct visual reading order when needed.
3. **Transaction IDs are single-use.** Commit before doing anything else. Changes are lost if you don't commit.
4. **API truncation:** The start-editing-transaction response caps at ~25,000 tokens. For large designs, pages beyond the cutoff won't have element IDs in the response. Open a second transaction if needed for later pages.
5. **You cannot add new text elements via MCP** — only edit existing ones.
6. **Sarah Spring branding** exists on 4 slides. Remove it. See the Sarah Spring section below.

---

## BEFORE YOU EDIT ANYTHING

Tiara made changes to the design at the end of the previous session:
- Added text boxes to blank slides (visual positions 12, 13, 14)
- Deleted the blank slide (was slide 74)

**Pull fresh content before executing.** The element IDs and slide positions from any prior session analysis are stale.

---

## SARAH SPRING BRANDING — REMOVE ON THESE SLIDES

Four slides have Sarah Spring or Pink Trendsetter branding that must be replaced:

| Slide (identify by text) | What to remove | What to replace with |
|---|---|---|
| "How toexpert" / "by sarah spring" / "5 Ultimate skills..." | "by sarah spring" → remove/blank, "5 Ultimate skills you have to learn" → replace with title split | See matching table |
| "Trendy outfits" / "Looking for something else?" / "www.pinktrendsetter.com" | Replace all three boxes with new title | See matching table |
| "Here's what" / "our clients say" / "Sarah Spring" / "@sarahspringsite" / testimonial | This whole slide is a testimonial layout — skip it (see SKIP list) | N/A |
| "If your IG Story responses are low" / "Sarah Spring" / ... | Complex multi-element layout — skip it (see SKIP list) | N/A |

---

## SLIDES TO SKIP (do not assign titles — leave as extras or delete)

These slides have layouts that don't work for Q&A covers:

| Slide (identify by text) | Reason |
|---|---|
| "what content to post for" (h:25, single tiny element) | UI element, not a content box |
| "SLOWLY VIRAL" / "BACK OF HOUSE" / "PINTEREST" / "FREE CLASS NEXT THURSDAY" (5 boxes) | Niche SMM layout, too cluttered |
| "Our Process" / "PLANNING" / "PRODUCTION" / "ENGAGEMENT" | Process/framework layout, doesn't work for Q&A |
| "Here's what" / "our clients say" / "Sarah Spring" / testimonial | Testimonial layout, too complex to repurpose |
| "8" / "Hooks" / "Reminder" / "Save this post..." / "Okay!" | Numbered list layout |
| "If your IG Story" / "Sarah Spring" complex layout | Sarah Spring complex, skip |
| "<" / "Notes" (two tiny elements, h:37 and h:28) | Navigation/UI elements only — **verify visually** before skipping; there may be additional content boxes not captured in prior analysis |
| "12:00" | Phone clock UI element |

---

## MATCHING TABLE — ALL 75 TITLES

**How to read this table:**
- "Identify by" = the current text on the slide (search for this to find the right slide)
- "Boxes" = number of text boxes on the slide
- "New title" = what goes on this slide
- "Split" = how to divide the title across the boxes, in order

**Note on my analysis slide numbers:** The prior session's analysis numbered slides 1–75. The user confirmed the blank slides appear at **visual Canva positions 12, 13, 14** (not 13, 14, 15 as the analysis suggested). There is a 1-slide offset somewhere around slide 12. Use the "Identify by" text, not the slide numbers, to locate each slide.

---

### PHOTO-BACKGROUND SLIDES (64 titles)

| Identify by (current text) | Boxes | New Title | Split |
|---|---|---|---|
| "What you should post" / "this month" | 2 | Why I moved my whole life to a digital planner | "Why I moved my whole life" / "to a digital planner" |
| "15PART ONE OF THE TITLE" / "tips & content ideas" / "that you can mix & match?" | 3 | The part of habit building nobody talks about | "The part of" / "habit building" / "nobody talks about" |
| "WHY CLIENT" / "ghost" / "learn how to prevent it" | 3 | Why rituals hit different than habits | "WHY rituals" / "hit different" / "than habits" |
| "How toexpert" / "by sarah spring" / "5 Ultimate skills" *(remove Sarah Spring)* | 3 | How to set an intention and make it stick | "How to" / "set an intention" / "and make it stick" |
| "Summer staples" *(single large box)* | 1 | You can't force a harvest in winter | Full title in one box |
| "MINDSET HABITS" / "Top habits" | 2 | The honest reason I stopped calling them routines | "The honest reason" / "I stopped calling them routines" |
| "hooks" *(single large box)* | 1 | Once something clicks, it doesn't unclick | Full title in one box |
| "Exactly doing" / "inside my 2026 planning session" | 2 | Everything I use a digital planner for (that isn't scheduling) | "Everything I use a digital planner for" / "(that isn't scheduling)" |
| "How to know your audience" / "Understand who they are, what they need..." | 2 | What alignment feels like (it's not what you think) | "What alignment feels like" / "(it's not what you think)" |
| "salesy" *(single medium box)* | 1 | Not every problem is yours to carry | Full title in one box |
| *Blank slide Canva #12 — user added box* | 1 | A messy entry in your planner still counts | Full title in one box |
| *Blank slide Canva #13 — user added box* | 1 | Nobody tells you how non-linear healing is | Full title in one box |
| *Blank slide Canva #14 — user added box* | 1 | The messy parts don't mean something went wrong | Full title in one box |
| "Placeholder For" / "+" / "Placeholder for the rest of title" *(+ may be divider)* | 3 | The difference between scarcity thinking and an abundance mindset | "The difference between" / "scarcity thinking" / "and an abundance mindset" |
| "Trendy outfits" / "Looking for something else?" / "www.pinktrendsetter.com" *(remove branding)* | 3 | What soft living is about (it's not aesthetic) | "What soft living" / "is about" / "(it's not aesthetic)" |
| "How To Reset Your Life" *(single large box)* | 1 | When it's time to reset your whole life (and how to do it) | Full title in one box |
| "WHY YOUR" / "CONTENT" / "isn't" / "converting" *(dramatic 4-word reveal)* | 4 | Stop treating your mistakes like a verdict | "STOP treating" / "your mistakes" / "like" / "a verdict" |
| Same 4-box layout, duplicate slide | 4 | People-pleasing is fear wearing a helpful face | "People-pleasing" / "is fear" / "wearing a" / "helpful face" |
| "Your content should" / "pre-sell" / "your services" | 3 | The cost of being reliable for everyone except yourself | "The cost of being" / "reliable" / "for everyone except yourself" |
| "why "dm me"" / "isn't a strategy" / "Type something..." *(comment UI box)* | 3 | Your nervous system is not a problem to manage. It's information. | "Your nervous system is" / "not a problem to manage." / "It's information." |
| Same layout, duplicate slide | 3 | Boundaries aren't about keeping people out. They're about keeping your peace in. | "Boundaries aren't about" / "keeping people out." / "They're about keeping your peace in." |
| "HOW TO" / "Attract clients" / "without" / "cold pitching" | 4 | Building an evening routine that helps you decompress | "Building an" / "evening routine" / "that helps you" / "decompress" |
| "post" / "post" *(two large equal boxes)* | 2 | You're not stuck. You're between versions of yourself. | "You're not stuck." / "You're between versions of yourself." |
| "WHY" / "educational content" / "converts best" | 3 | Why gratitude practices don't work for most people | "WHY gratitude" / "practices don't work" / "for most people" |
| Same 3-box WHY layout, duplicate slide | 3 | What daily rituals do that motivation never could | "What daily rituals do" / "that motivation" / "never could" |
| "X" / "The mindset shift" / "that increased" / "my income" *(X is likely decorative)* | 4 | What comparison is really telling you about what you want | keep X decorative / "What comparison" / "is really telling you" / "about what you want" |
| "pro tips" / "Stop copying." / "start" / "Leading." / "here's how" *(5 boxes, series style)* | 5 | Why people-pleasing feels like kindness but costs you everything | "Why people-pleasing" / "feels like kindness" / "but costs you" / "everything" / *(5th box: "here's how" — verify if it should stay or be removed)* |
| "SMM series" / "How to find" / "clients" / "through DM" / "learn more" *(5 boxes, series)* | 5 | Why you keep starting over every Monday and how to stop | *(top label optional)* / "Why you keep" / "starting over" / "every Monday" / "and how to stop" |
| "Why" / "Story" / "telling" / "sells better" / "than tips." *(5-box word reveal)* | 5 | Why winging it is making you more tired | "Why" / "winging it" / "is making" / "you more" / "tired" |
| "build a relatable" / "Brand" / "how to" | 3 | Romanticizing your life without pretending it's something it's not | "Romanticizing your life" / "without" / "pretending it's something it's not" |
| "Your content should" / "answer questions," / "not just look pretty" | 3 | Building a morning routine that works for your life | "Building a morning routine" / "that works" / "for your life" |
| "You don't need a" / "rebrand" / "you need" / "direction" | 4 | You have more say in your life than you've been acting like | "You have more say" / "in your life" / "than you've been" / "acting like" |
| "2026" *(single very large box)* | 1 | Moving through your day without fighting yourself | Full title in one box |
| "grows account in" *(single medium box — verify visually, may be partial)* | 1 | Presence isn't about pretending things are fine | Full title in one box |
| "Why" *(small top)* / "beats viral" / "every time" *(large visual gap between top and bottom — image fills middle)* | 3 | What's happening when you can't stop overthinking | "What's happening" / "when you can't stop" / "overthinking" |
| "niche down" / "you need to" / "niche clearly" | 3 | In an intentional life, the currency of success is peace | "In an intentional life," / "the currency of success" / "is peace" |
| "Confidence is a" / "stra" / "tegy" *(word split across boxes)* | 3 | Confidence isn't something you find. It's something you build in the doing. | "Confidence isn't something you find." / "It's something" / "you build in the doing." |
| "Authority" / "is built in" / "small" / "mom" / "ents" *(5-box word split "moments")* | 5 | Consistency that doesn't require you to run yourself into the ground | "Consistency" / "that doesn't require" / "you to run" / "yourself" / "into the ground" |
| "THE #1" / "mistake" / "new social media managers make" | 3 | The difference between a goal and an intention | "The difference" / "between" / "a goal and an intention" |
| "Reels" / "that build trust" / "(not just views)" | 3 | What a real reset looks like (not the Pinterest version) | "What a real reset" / "looks like" / "(not the Pinterest version)" |
| "You need" / "clarity" *(2 boxes, setup + hero)* | 2 | Your goals aren't the problem. Your system is. | "Your goals aren't the problem." / "Your system is." |
| "Post less." / "Convert more." *(2 contrasting phrases)* | 2 | Burnout isn't about working too hard. It's about working without alignment. | "Burnout isn't about working too hard." / "It's about working without alignment." |
| "STOP" / "undercharging." / "start" / "positioning" *(4-box command structure)* | 4 | Intentional living isn't a vibe. It's a decision you keep making. | "Intentional living" / "isn't a vibe." / "It's a decision" / "you keep making." |
| "Why clients" / "don't respect" / "cheap" / "prices" | 4 | What "trust the process" means when the process feels terrible | "What "trust the process"" / "means when" / "the process" / "feels terrible" |
| "How I'd price" / "my services" / "again" / "if I started" | 4 | Living on purpose looks different than you think | "Living on purpose" / "looks different" / "than" / "you think" |
| "You don't need" / "more followers" / [image gap] / "TO make" / "more money" *(top 2 + bottom 2 with visual gap)* | 4 | You keep finishing things and immediately moving on. That's the problem. | "You keep finishing things" / "and immediately moving on." / *(gap)* / "That's" / "the problem." |
| "YOUR" / "instagram bio" / "is costing you" / "clients" | 4 | What's quietly stealing your mental white space every single day | "What's quietly stealing" / "your mental white space" / "every" / "single day" |
| "THE EASIEST WAY to" / "never run out of" / "content ideas" | 3 | What manifesting is (minus the magical thinking) | "What manifesting is" / "(minus the magical" / "thinking)" |
| "How to turn" / "1 idea" / "into 10 posts" | 3 | How I started planning my week around my cycle (and why it changed everything) | "How I started planning" / "my week around my cycle" / "(and why it changed everything)" |
| "The secret to" / "Binge-Worthy" / "content" | 3 | What a mental declutter looks like in practice | "What a mental declutter" / "looks like" / "in practice" |
| "Why your" / "captions" / "aren't being read" | 3 | Your nervous system doesn't know the difference between a full inbox and an emergency | "Your nervous system" / "doesn't know the difference" / "between a full inbox and an emergency" |
| "Content" / "FRAMEworks" / "that never fail" | 3 | Why you need more white space in your life and how to get it | "Why you need more" / "white space" / "in your life and how to get it" |
| "People buy" / "clarity" *(setup + hero word)* | 2 | Ease isn't the absence of effort. It's the absence of resistance. | "Ease isn't the absence of effort." / "It's the absence of resistance." |
| "What no one tells you about" / "ruonline" | 2 | The moment I realized I was living someone else's version of my life | "The moment I realized" / "I was living someone else's version of my life" |
| "Boring message" / "makeovers" | 2 | The lesson belongs to you. The guilt doesn't have to. | "The lesson belongs to you." / "The guilt doesn't have to." |
| "everything you need to know about" *(single medium box)* | 1 | The lie you were told about rest | Full title in one box |
| "How to make" / "customer say" / ""I need this!"" | 3 | What my Sunday reset looks like (realistic version) | "What my Sunday reset" / "looks like" / "(realistic version)" |
| "my top-5" / "resources" / "to learn marketing" | 3 | How I use human design to stop forcing things that were never mine to force | "How I use human design" / "to stop forcing things" / "that were never mine to force" |
| "How to sell" / "your skill" / "as a beginner" | 3 | What it takes to feel safe in your own body | "What it takes" / "to feel safe" / "in your own body" |
| "If you've ever" / "Googled..." / "how to get paid to write" / "This is for you." | 4 | Behind what, exactly? Behind a timeline you made up when you were 22? | "Behind what, exactly?" / "Behind a timeline" / "you made up when" / "you were 22?" |
| "The difference between" / "busy content &" / "strategic content" | 3 | The thing you're controlling that's controlling you | "The thing" / "you're controlling" / "that's controlling you" |
| "Stop asking:" / "'Will this go viral?'" / long compounding content text | 3 | Focus is the most renewable and most stolen resource you have | "Focus is" / "the most renewable" / "and most stolen resource you have" |
| "Your content" / "everyone" / "It's for the right person" | 3 | The "after" is a moving target and your life is happening right now | "The "after"" / "is a moving target" / "and your life is happening right now" |
| Slide with two tiny elements "<" (h:37) and "Notes" (h:28) — **verify visually first** | 2? | Recalibration isn't failure. It's what happens when you're paying attention. | "Recalibration isn't failure." / "It's what happens when you're paying attention." |

---

### NO-BACKGROUND SLIDES (11 titles, ~10 slides)

These slides (new positions 74–83) were NOT analyzed in the prior session. Pull fresh content to see their layouts and element IDs before editing.

Assign these titles — split based on the actual layout you find:

| Title | Notes on splitting |
|---|---|
| Self-care stopped being selfish the moment you realized depletion has a cost | Long — likely 3 boxes |
| What shadow work is (and why it keeps coming up) | Medium — 2–3 boxes |
| Clarity doesn't come from thinking harder. It comes from looking at what's right there. | Two sentences — 2 boxes ideal |
| Your life isn't built on big decisions. It's built on the ones you make before you're fully awake. | Long two-sentence — 3–4 boxes |
| What your morning routine is doing for your brain | Medium — 2–3 boxes |
| Intentionality isn't a personality trait. It's a practice you return to. | Two sentences — 2 boxes |
| The real receipts of growth aren't the follower count. They're the internal shifts. | Two sentences — 2 boxes |
| Changing your mind means you got new information and used it | Medium — 2–3 boxes |
| You can't show up for anything when you're depleted | Short-medium — 1–2 boxes |
| Your space is either working for you or quietly working against you | Medium — 2–3 boxes |
| Time you spend on purpose feels different than time that passed | Medium — 1–2 boxes |

One of these 11 will be left without a slide (only ~10 no-background slides available). Pick the one that least fits the layout you find and leave it for a future Q&A.

---

## EXECUTION WORKFLOW

```
1. start-editing-transaction (DAHK4_9thLU)
2. get-design-content with richtexts → pull element IDs
3. For photo slides: work through the matching table above, slide by slide
4. For no-background slides: check layout first, then assign from the list above
5. perform-editing-operations in batches (don't let transaction sit too long)
6. commit-editing-transaction → MUST commit before closing or switching
```

Work in batches of 10–15 slides per transaction if the design is large. Commit after each batch.

---

## STATUS

- Monday Motivation, Get Grounded, Energy Check, Affirmations (slides 11+24), Journal Prompts (sets 1/2/3/5/7) — all done in prior sessions.
- **Carousel covers (DAHK4_9thLU) — 0/75 done. This is the only task.**

---

## DO NOT TOUCH

- **Graphics file (DAHKEcmq5Vg)** — Tiara is working with Copilot to fill all ~80 slides. Blocked until she has the full content.

---

*Handoff written May 2026. The matching table is a finalized proposal — visual verification on the "<" / "Notes" slide and the "grows account in" single-box slide is flagged. Adjust any split that doesn't fit visually once you pull live content.*
