# Canva Edit Session Handoff
*The Intentional Tea · Claude Code · May 2026*
*Read this fully before doing anything. This is the complete context for the Canva editing session.*

---

## WHO THIS IS FOR

This is a handoff document for a new Claude Code session working on The Intentional Tea's Canva files. The previous session compiled a full content audit, received an approved corrections file from Tiara, and aligned on the execution plan. This session picks up at execution.

---

## CANVA MCP

Canva is connected via MCP in this project. The tools are available. To edit text in Canva, the workflow is:
1. `start-editing-transaction` on the design ID
2. `get-design-content` with richtexts to see current text and element IDs
3. `perform-editing-operations` to make text changes
4. `commit-editing-transaction` to save

**Important known issue:** Canva returns text elements in canvas-addition order, NOT visual reading order. Match elements by their CURRENT TEXT CONTENT, not by position in the array.

---

## CANVA DESIGN IDs

| File | Design ID | Slides | Status |
|---|---|---|---|
| Q&A Carousels | DAHIiFwnd3U | 75 Q&As | Cover titles need updating |
| Monday Motivation | DAGstIhJQaE | 52 slides | 10 text corrections |
| Get Grounded | DAGydUa23lM | 54 slides | 6 text corrections |
| Energy Check | DAGydUOHS9M | 54 slides | 1 text correction |
| Affirmations/Quotes | DAGy42F1oHg | 100 slides | 3 corrections + fill blank slide 3 |
| Journal Prompts | DAHIiq-683g | 18 carousel sets | Subtitle + prompt tweaks |
| Graphics | DAHKEcmq5Vg | ~80 slides | DO NOT TOUCH — awaiting content from Copilot |

---

## EXECUTION ORDER

Do these in order. Graphics is explicitly skipped this session.

1. Monday Motivation corrections
2. Get Grounded corrections
3. Energy Check corrections
4. Affirmations corrections
5. Journal Prompt corrections
6. Q&A cover slide title updates

---

## THE CORRECTIONS FILE

The approved corrections file is attached to this session (content-sweep-for-claude-code.md). It is also the file Tiara shared at the start of this session. All corrections below come from that file. **Only slides listed need changes. Everything else is approved as-is.**

---

## SECTION 1 — Q&A CAROUSEL COVER TITLES

**Design ID: DAHIiFwnd3U**

**Critical rule:** These new titles go on COVER SLIDES ONLY. Answer slides stay completely untouched. Do not edit answer slides at all.

Each Q&A carousel has two slides: a cover (just the title + brand text) and an answer slide (title + answer body + CTA). Only the cover slide title text gets replaced.

The current cover title text matches the question (e.g., "What Does It Mean to Live Intentionally?"). Replace that text with the new hook title below.

| # | Current Cover Title | New Cover Title |
|---|---|---|
| 1 | What Does It Mean to Live Intentionally? | Living on purpose looks different than you think |
| 2 | What Are Intentions? | The difference between a goal and an intention |
| 3 | How to Set Intentions | How to set an intention and make it stick |
| 4 | What Are Rituals? | Why rituals hit different than habits |
| 5 | How to Have a Growth Mindset | Stop treating your mistakes like a verdict |
| 6 | Why It's Important to Get Grounded | Your nervous system doesn't know the difference between a full inbox and an emergency |
| 7 | What Does Being in Alignment Mean? | What alignment feels like (it's not what you think) |
| 8 | Why I Prefer Rituals Over Routines | The honest reason I stopped calling them routines |
| 9 | Why It's Important to Have Daily Rituals | What daily rituals do that motivation never could |
| 10 | What Is Manifesting? | What manifesting is (minus the magical thinking) |
| 11 | Why You Should Set Boundaries | Boundaries aren't about keeping people out. They're about keeping your peace in. |
| 12 | Why It's Important to Show Up for Yourself | The cost of being reliable for everyone except yourself |
| 13 | How to Start Healing Your Nervous System | Building a morning routine that works for your life |
| 14 | How to Tap Into Your Intuition | What a real reset looks like (not the Pinterest version) |
| 15 | How to Practice Self-Trust | Why winging it is secretly making you more tired |
| 16 | Why Rest Is a Form of Productivity | Intentional living isn't a vibe. It's a decision you keep making. |
| 17 | How to Release Comparison | What's happening when you can't stop overthinking |
| 18 | Why Reflection Matters | The lie you were told about rest |
| 19 | What Is Living on Autopilot? | Why I moved my whole life to a digital planner |
| 20 | Why Your "Yes" Should Be a Choice | The part of habit building nobody talks about |
| 21 | How to Tell if You're Busy or Productive | Self-care stopped being selfish the moment you realized depletion has a cost |
| 22 | Why You Need to Name What's Draining You | Your nervous system is not a problem to manage. It's information. |
| 23 | What It Means to Participate in Your Own Growth | Why gratitude practices don't work for most people |
| 24 | Why Softness Isn't Laziness | When it's time to reset your whole life (and how to do it) |
| 25 | How to Recognize Your Capacity | Why you keep starting over every Monday and how to stop |
| 26 | Why You Don't Have to Earn Your Rest | Why people-pleasing feels like kindness but costs you everything |
| 27 | What Is an Energy Leak? | What shadow work is (and why it keeps coming up) |
| 28 | Why Rigidity Leads to Burnout | What "trust the process" means when the process feels terrible |
| 29 | How to Build a Flexible Rhythm | You're not stuck. You're between versions of yourself. |
| 30 | Why You Don't Owe an Explanation | Confidence isn't something you find. It's something you build in the doing. |
| 31 | How to Handle a Recalibration Phase | Everything I use a digital planner for (that isn't scheduling) |
| 32 | Why Starting Over Is a Myth | The thing you're controlling that's controlling you |
| 33 | What It Means to Be the Author of Your Life | What soft living is about (it's not aesthetic) |
| 34 | Why Environment Matters | What comparison is really telling you about what you want |
| 35 | How to Recognize a Signal vs. a Command | Burnout isn't about working too hard. It's about working without alignment. |
| 36 | Why Clarity Makes Decisions Simpler | Building an evening routine that helps you decompress |
| 37 | What Is Functional Resilience? | How I use human design to stop forcing things that were never mine to force |
| 38 | Why You Should Celebrate Small Wins | Romanticizing your life without pretending it's something it's not |
| 39 | How to Discern an Opportunity from a Distraction | Your goals aren't the problem. Your system is. |
| 40 | Why Your Worth Isn't Tied to Your Exhaustion | What a mental declutter looks like in practice |
| 41 | What It Means to Live by Design | The difference between scarcity thinking and an abundance mindset |
| 42 | How to Notice Patterns Keeping You Stuck | Why you need more white space in your life and how to get it |
| 43 | Why Slowing Down Is a Strategy | How I started planning my week around my cycle (and why it changed everything) |
| 44 | Goal vs. Intention | Consistency that doesn't require you to run yourself into the ground |
| 45 | How to Anchor Your Day | Nobody tells you how non-linear healing is |
| 46 | Why Stop Seeking Validation? | The moment I realized I was living someone else's version of my life |
| 47 | What It Means to Move with Ease | What my Sunday reset looks like (realistic version) |
| 48 | How to Honor Your Current Season | You can't force a harvest in winter |
| 49 | Why Your Perspective Is a Permanent Shift | Once something clicks, it doesn't unclick |
| 50 | What Is Savoring Progress? | You keep finishing things and immediately moving on. That's the problem. |
| 51 | Why Clarity Requires an Honest Audit | Clarity doesn't come from thinking harder. It comes from looking at what's right there. |
| 52 | How to Protect Your Mental White Space | What's quietly stealing your mental white space every single day |
| 53 | Why Consistency Isn't About Perfection | A messy entry in your planner still counts |
| 54 | What It Means to Reclaim Your Agency | You have more say in your life than you've been acting like |
| 55 | Small Choices, Big Picture | Your life isn't built on big decisions. It's built on the ones you make before you're fully awake. |
| 56 | How to Build Safety in Your Body | What it takes to feel safe in your own body |
| 57 | Why You Shouldn't Fear Recalibration | Recalibration isn't failure. It's what happens when you're paying attention. |
| 58 | What It Means to Trust Your Timing | Behind what, exactly? Behind a timeline you made up when you were 22? |
| 59 | Why Discernment Is a Survival Skill | Not every problem is yours to carry |
| 60 | How to Stop Living for the "After" | The "after" is a moving target and your life is happening right now |
| 61 | Why Rituals Prevent Decision Fatigue | What your morning routine is doing for your brain |
| 62 | What It Means to Be in Harmony | Moving through your day without fighting yourself |
| 63 | Self-Respect vs. People-Pleasing | People-pleasing is fear wearing a helpful face |
| 64 | How to Release the Weight of Past Mistakes | The lesson belongs to you. The guilt doesn't have to. |
| 65 | Why Intentionality Is a Daily Practice | Intentionality isn't a personality trait. It's a practice you return to. |
| 66 | What Is the Currency of Success? | In an intentional life, the currency of success is peace |
| 67 | How to Recognize Your Own Evolution | The real receipts of growth aren't the follower count. They're the internal shifts. |
| 68 | Why You're Allowed to Change Your Mind | Changing your mind means you got new information and used it |
| 69 | What It Means to Be Resourced | You can't show up for anything when you're depleted |
| 70 | Why You Should Guard Your Focus | Focus is the most renewable and most stolen resource you have |
| 71 | How to Handle the Messy Parts | The messy parts don't mean something went wrong |
| 72 | What It Means to Move with Ease (duplicate) | Ease isn't the absence of effort. It's the absence of resistance. |
| 73 | How to Honor Your Current Season (duplicate) | Presence isn't about pretending things are fine |
| 74 | [cover duplicate] | Your space is either working for you or quietly working against you |
| 75 | [cover duplicate] | Time you spend on purpose feels different than time that passed |

---

## SECTION 2 — MONDAY MOTIVATION CORRECTIONS

**Design ID: DAGstIhJQaE**

Find each slide by its current text and make the specific change shown. Full slide text is not changing — only the phrase noted.

**Slide 6** — find: "you can often build more momentum when you ease into things gradually"
Replace with: "momentum tends to build when you ease in rather than force a sprint from the start"

**Slide 9** — find: "One intentional action taken today is going to move you further than ten scattered ones ever will."
Replace with: "One intentional action today moves you further than ten scattered ones ever will."

**Slide 13** — find: "you just need one that feels grounded enough to start from"
Replace with: "you need one that feels grounded enough to start from"

**Slide 16** — find: "The slow path and the right path are often the exact same path, just with different expectations attached to them."
Replace with: "The slow path and the right path are often the exact same path, with different expectations attached."

**Slide 21** — find: "Alignment isn't a destination you arrive at once and stay in forever, it's something you choose again with every single decision you make."
Replace with: "Alignment is something you choose again with every single decision, not a destination you arrive at once and stay in."

**Slide 26** — find: "the goal has always been to be purposeful about where your time and energy actually go"
Replace with: "the goal has always been to be purposeful about where your time and energy go"

**Slide 33** — find: "because action without intention is really just busyness with better packaging"
Replace with: "because action without intention is busyness with better packaging"

**Slide 39** — find: "spend your energy on what genuinely moves things forward, not just what keeps you feeling occupied"
Replace with: "spend your energy on what genuinely moves things forward, not what keeps you feeling occupied"

**Slide 48** — find: "you need more alignment between what you say you want and how you're actually spending your days"
Replace with: "you need more alignment between what you say you want and how you're spending your days"

**Slide 50** — find: "so the best place to start is right here, with what you already have"
Replace with: "You are the one you've been waiting for, which means the best place to start is right here, with what you already have."

---

## SECTION 3 — GET GROUNDED CORRECTIONS

**Design ID: DAGydUa23lM**

**Slide 15** — find: "Stillness isn't wasted time. It's how you refill."
Replace with: "Stillness is how you refill, and treating it like wasted time is how you stay depleted."

**Slide 21** — find: "This is your reset, take it seriously enough to actually use it."
Replace with: "This is your reset, take it seriously enough to use it."

**Slide 29** — find: "Let this moment be a breath, not another thing to get through. A breath that belongs entirely to you."
Replace with: "Let this moment be a breath that belongs entirely to you."

**Slide 37** — find: "Presence is a practice you can start right now, not when things calm down, not after the list is done, right now."
Replace with: "Presence is a practice you can start right now, before things calm down, before the list is done, before you feel ready for it."

**Slide 39** — find: "Slow isn't stuck — it's a different kind of progress that our culture forgot how to recognize."
Replace with: "Slow is a different kind of progress our culture forgot how to recognize."

**Slide 44** — find: "Nature doesn't rush and yet everything gets done. So can you."
Replace with: "Nature doesn't rush and yet everything gets done, which is a rhythm worth borrowing."

---

## SECTION 4 — ENERGY CHECK CORRECTIONS

**Design ID: DAGydUOHS9M**

**Slide 9** — find: "You're stepping into a frequency where your time and your talent are treated with the respect they deserve."
Replace with: "You're stepping into a season where your time and your talent are treated with the respect they deserve."

---

## SECTION 5 — AFFIRMATIONS CORRECTIONS

**Design ID: DAGy42F1oHg**

**Slide 3** — currently blank. Add this text:
"Your capacity grows when you stop treating exhaustion as the baseline and rest as the exception."

**Slide 11** — find: "you are building at your own pace on your own path, and those two things are not the same as being slow"
Replace with: "you're building at your own pace on your own path, and that's a distinction worth protecting"

**Slide 24** — find: "Softness isn't the absence of strength; it's a different kind of power."
Replace with: "Softness is a different kind of power, the kind that's sustainable past the point where force gives out."

---

## SECTION 6 — JOURNAL PROMPT CORRECTIONS

**Design ID: DAHIiq-683g**

**Set 1 subtitle** — find: "Time to Let Go"
Replace with: "Letting Go of What Stopped Fitting"

**Set 2 subtitle** — find: "Protect Your Peace"
Replace with: "Boundaries and Energy"

**Set 3 subtitle** — find: "Trust Your Own Lead"
Replace with: "Self-Trust and Intuition"

**Set 5, Prompt 3** — find: "What does success look like to you specifically, not to your family or your peers or your timeline, but to you?"
Replace with: "What does success look like to you specifically, not the version your family mapped out or your peers are chasing, but yours?"

**Set 7 subtitle** — find: "Build It on Purpose"
Replace with: "Designing Your Life on Purpose"

**Set 7, Prompt 2** — find: "What does your ideal morning actually look like, not the aspirational version, but something you could realistically sustain?"
Replace with: "What does your ideal morning look like, something you could realistically sustain, not the aspirational one you'd abandon by Wednesday?"

**Set 9 subtitle** — find: "Healing Your Nervous System"
Replace with: "What Your Body's Been Asking For"

**Set 10 subtitle** — find: "Stop Apologizing for the Space You Take Up"
Replace with: "The Space You're Allowed to Take Up"

**Set 12, Prompt 4** — find: "What would a genuine reset look like for you right now, not a productivity reset, but a real one?"
Replace with: "What would a genuine reset look like for you right now, a real one, not another productivity overhaul?"

**Set 14, Prompt 4** — find: "What would it mean to feel genuinely at home in yourself, not comfortable, but actually at home?"
Replace with: "What would it mean to feel genuinely at home in yourself, past comfortable, past performing ease?"

---

## WHAT'S EXPLICITLY NOT IN SCOPE THIS SESSION

- **Graphics file (DAHKEcmq5Vg)** — DO NOT TOUCH. Tiara is working with Copilot to fill out all 80 slides. Come back to this in a later session once she has the full content.
- **Affirmations slides 25, 61** — minor typos exist ("with fear. with fear." and garbled line) but were not included in the corrections file. Do not change what wasn't approved.
- Any slides not listed in the corrections above — approved as-is, leave them alone.

---

## BRAND CONTEXT (for reference only — not needed for this task)

- Brand: The Intentional Tea
- Owner: Tiara (@theintentionaltea)
- Niche: Intentional living, digital planning, mindfulness
- All Canva files are Instagram Stories/Reels filler content pre-loaded and ready to post
- Voice: Smart, self-aware, no em dashes, no AI filler, no banned words

---

*Handoff complete. Start with Monday Motivation and work through in order.*
