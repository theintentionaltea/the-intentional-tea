const API_KEY = "y6WrNQEbTI4iKhXXv3Gtfe3E8GVfgKf6f2A4vvjfGvg";
const BASE_URL = "https://api.gumroad.com/v2/products";

const products = [
  {
    id: "z2c-J0JBwuO61k-sS98MSA==",
    description: `<p>You downloaded this because something told you there was a different way to do things. Not a 75-day challenge. Not a five-step framework you'll abandon by week two. Something that actually fits the life you're already living.</p>
<p>This is a collection of three short ebooks built around one idea: that intention is a practice you return to, not a personality trait you either have or don't. They're short by design. You're not meant to read them once and feel inspired — you're meant to come back to them when things feel off and need a recalibration.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>Manifesting with Intention</li>
<li>Journaling with Intention</li>
<li>Rituals Over Rigidity</li>
<li>Start Here guide</li>
</ul>
<p>Compatible with GoodNotes, Notability, any PDF annotation app, or your browser.</p>`
  },
  {
    id: "hnU0LiBErVqU6V70aH8kVg==",
    description: `<p>The entry point. Clean, icon-based stickers in neutral tones — circles, frames, tabs, sticky notes, pins, and graphic elements designed to work inside any digital planner without competing with it.</p>
<p>This pack pulls from two collections: the original Essential icons and a curated selection of budget stickers and widgets that work just as well for general planning as they do for finances. Between the two, you've got everything you need to start personalizing your setup without overwhelming it.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>Icon-based stickers in neutral tones</li>
<li>Sticky notes, pins, frames, tabs, and graphic elements</li>
<li>Budget stickers and widgets</li>
<li>Pre-cropped PNGs, ready to use</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "jSIng5eg2Kxycfh-P3ZbPw==",
    description: `<p>For the planner that's allowed to have some personality. Same functional categories as the rest of the collection — date numbers, event stickers, tracker widgets, planning elements — just in the full color range. Rainbow and pastel colorways that layer well together without turning your planner into a mood board.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>1,100+ stickers across rainbow and pastel colorways</li>
<li>Category and event stickers</li>
<li>Days of the week, months, and date numbers 1–31</li>
<li>Tracker widgets and planning elements</li>
<li>Pre-cropped PNGs, ready to use</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "RaaTixP8ahUyus9jdMm06w==",
    description: `<p>Minimal. Clean. Works with everything. The Black &amp; White covers the same functional ground as the rest of the collection — event stickers, date numbers, trackers, planning elements — in a monochrome palette that pairs with any planner aesthetic without overpowering it.</p>
<p>If your setup is already built around a neutral or dark color scheme, this is the one.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>1,100+ stickers in black and white</li>
<li>Category and event stickers</li>
<li>Days of the week, months, and date numbers 1–31</li>
<li>Tracker widgets and planning elements</li>
<li>Pre-cropped PNGs, ready to use</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "SQ10KnvWkpmm0wPQQUhyIw==",
    description: `<p>Designed to pair with the Intentional Financial Planner and the Intentional Life Planner, but honestly useful in any GoodNotes setup built around a warm, neutral palette. This is the most comprehensive sticker pack in the collection — it covers everything from category labels and event markers to daily trackers, mini habit widgets, and layout stickers you can drop in wherever your planner needs more structure.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>500+ stickers in beige, cream, and warm tones</li>
<li>Category labels: Personal, Work, Bills, Errands, School, Business, and more</li>
<li>Event stickers: Appointment, Meeting, Birthday, Self-Care, Pay Bill, Priority, and more</li>
<li>Days of the week, months, and date numbers 1–31</li>
<li>Time-of-day labels</li>
<li>Mini tracker widgets: habit, water, mood, gratitude, meal</li>
<li>Mini weekly and monthly layout stickers</li>
<li>Pre-cropped PNGs, ready to use</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "dqiOyO8dn06grjXCmpQMHw==",
    description: `<p>Not a full planner system — something more flexible than that. Twenty-seven single-page planning templates you can use as standalone pages in GoodNotes, add to an existing planner to fill in what it's missing, or combine into your own custom setup built exactly the way you want it.</p>
<p>If you've ever found yourself in a planner that almost works but keeps falling short in one or two specific areas, this is the fix.</p>
<p><strong>What's included — 27 templates:</strong></p>
<ul>
<li>Daily planner (2 layouts)</li>
<li>Weekly planner (2 layouts)</li>
<li>Monthly planner + monthly review</li>
<li>Yearly planner (2 layouts)</li>
<li>Quarterly goal planner</li>
<li>New year goal sheet + yearly goal tracker</li>
<li>To-do list</li>
<li>Goal planner</li>
<li>Project planner</li>
<li>Event planner</li>
<li>Important dates page</li>
<li>Habit tracker</li>
<li>Wellness tracker</li>
<li>Self-care checklist</li>
<li>Gratitude journal sheet</li>
<li>Vision board sheet</li>
<li>Savings tracker</li>
<li>Budget tracker</li>
<li>Meal planner</li>
<li>Study planner</li>
<li>Daily organization layout</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "dn7l5Y1mrQSKaOYkbuSCuQ==",
    name: "Intentional Financial Planner — Undated & Hyperlinked",
    description: `<p>Most budgeting tools are designed for someone who already has their finances figured out. This one was built for the person who wants to get there — without the guilt of a tracker that makes you feel worse every time you open it.</p>
<p>Seventy-plus fully hyperlinked pages that move the way you do: from your yearly overview, down to the month, into the week, and all the way to the specific numbers you need to see. The navigation works like an app — tabs for every month, hyperlinked buttons that take you exactly where you need to go, no scrolling through pages to find where you left off.</p>
<p>It's undated, which means you pick it up whenever you're ready and start there. January. June. The first of whatever month you're in when you finally decide to actually look at your finances. (No judgment on that one.)</p>
<p><strong>What's included — 70+ fully hyperlinked pages:</strong></p>
<ul>
<li>Yearly financial review templates and calendar</li>
<li>12 monthly planners</li>
<li>12 monthly budgets</li>
<li>12 monthly cash spending trackers</li>
<li>12 monthly bank spending trackers</li>
<li>Easy navigation "app-like" buttons throughout</li>
<li>Extra templates for planning, tracking, and savings challenges</li>
<li>Notes section with notebook templates</li>
<li>Fully hyperlinked index</li>
<li>Customizable section dividers</li>
<li>Multiple cover options</li>
<li>Sunday and Monday start versions</li>
<li>149 digital budget stickers and widgets (pre-cropped PNGs) included</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "1iWLnOPJkHc6dt4IIt0Emw==",
    name: "Intentional Life Planner — Ultimate Calendar & Life Planner",
    description: `<p>The problem with most digital planners is that they're either a beautiful shell with no real structure, or they're so packed with features that you spend more time navigating them than you do using them. This one sits in the middle: eighty-plus fully hyperlinked pages that cover everything from your yearly overview down to your daily plan, with extra templates for the parts of your life that don't fit neatly into a productivity layout.</p>
<p>It's undated. You pick it up whenever — December, March, the random Tuesday in July when you finally decide to get your life together — and you start from there. You don't have to wait for January. You don't have to buy a new one next year. You grow into it over time and it stays with you.</p>
<p>The hyperlinked navigation works like an app: index tabs for every month, clickable buttons to move between your weekly and daily views, section dividers for the parts of your life you want to keep organized separately. Productivity. Finances. Lifestyle. Wellness. Notes. Custom sections for whatever else you're tracking.</p>
<p><strong>What's included — 80+ fully hyperlinked pages:</strong></p>
<ul>
<li>Yearly templates and calendar</li>
<li>12 monthly planners with calendar view, habits, and monthly reflections on every monthly page</li>
<li>5 weekly planner templates with same-month weeks linked directly from monthly pages</li>
<li>Simple daily planner template</li>
<li>All-in-one daily planner template</li>
<li>Daily planner accessible directly from monthly pages</li>
<li>Extra templates for productivity, finances, lifestyle, and wellness</li>
<li>Productivity, Finances, Lifestyle, Wellness, Notes, and Custom sections with icons at the top of every page</li>
<li>6 hyperlinked section dividers + custom section dividers</li>
<li>Multiple cover options</li>
<li>Fully hyperlinked navigation throughout</li>
<li>Sunday and Monday start versions</li>
</ul>
<p>Compatible with GoodNotes, Notability, and all PDF annotation apps.</p>`
  },
  {
    id: "6jJLfs67N_oY_5YAGq5SHA==",
    description: `<p>At some point, most of us end up living a version of our life that we didn't exactly choose — we inherited it from our circumstances, our conditioning, our to-do lists, our people-pleasing, and a general lack of time to stop and ask whether any of it actually fits. The Intentional Life Reset was built for the moment you're finally ready to look at that honestly.</p>
<p>This is a twelve-module self-paced framework. Not a thirty-day challenge. Not a productivity system. A structured process for auditing what's working, letting go of what isn't, and building a personal operating system that's actually designed around your specific life — your nervous system, your capacity, your values, your season.</p>
<p>Each module pairs a strategic reading with an interactive worksheet and a somatic reset — because real change doesn't happen at the level of the mind alone, and any framework that ignores the body is only doing half the work.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>12 strategic modules covering all areas of life reset: identity, energy, clarity, boundaries, purpose, rhythm, and more</li>
<li>12 interactive worksheets including: Wheel of Life, Alignment Map, Vision Board Bingo, Boundary Strategy Worksheet, and more</li>
<li>12 somatic resets including: Vagus Nerve Ear Massage, Box Breathing, and body-based practices designed to help your nervous system process what your mind is working through</li>
<li>Journaling prompts throughout each module</li>
<li>Fully hyperlinked navigation</li>
</ul>
<p>iPad optimized. Compatible with GoodNotes, Notability, and all PDF annotation apps. Self-paced — work through it over a weekend or take it one module at a time. It holds either way.</p>`
  },
  {
    id: "1FphaxajCuFKgUHbacNCFQ==",
    description: `<p><em>A personalized reading of your birth chart, human design, and cosmic blueprint</em></p>
<p>Most astrology reports do one of two things: they dump every placement into a wall of text you skim once and forget, or they speak in affirmations vague enough to apply to literally anyone. This is neither of those things.</p>
<p>The Intentional Astrology Report is a fully personalized written interpretation of your birth chart, your Human Design, and your current tarot energy — written as a narrative document you can actually live by. Not a list of traits. Not a summary of what your placements mean in general. A specific, synthesized reading of how your chart, your design, and your current energy are operating together — and what that means for your life right now.</p>
<p>The report moves through a deliberate sequence: from your core identity (Big 3, Chart Ruler, inner planets) through how you're designed to operate (Human Design strategy, authority, and profile), into where both systems are pointing at the same thing, and ending with specific insights and at least one action you can take within 48 hours of reading it.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>Full natal chart reading with chart visual and complete placement table</li>
<li>Big 3 interpretation (Sun, Moon, Rising) written as one woven narrative — not three separate paragraphs</li>
<li>Chart Ruler interpretation by sign and house placement</li>
<li>Inner planets: Mercury, Venus, Mars</li>
<li>Saturn and outer planet overview</li>
<li>Focus area deep dive (career, love, life direction — based on your intake form)</li>
<li>Human Design integration: Type, Strategy, Authority, and Profile — with connections back to your astrology</li>
<li>Integration Notes: where your chart and your design point at the same truth</li>
<li>Key Takeaways, Alignment Tips, and at least one action you can take within 48 hours</li>
<li>Resources and glossary</li>
</ul>
<p><strong>How it works:</strong> purchase → receive intake form → submit birth details and focus area → PDF delivered within 5–7 business days.</p>
<p><em>This report is for self-development and informational purposes only. It is not a substitute for professional medical, legal, or financial advice.</em></p>`
  },
  {
    id: "TqtEiF8S1mO6nwVBEj6ROw==",
    description: `<p>The Intentional Astrology Report tells you who you are at the energetic and structural level. The Life Reset gives you the framework to do something with that understanding.</p>
<p>Most people receive a reading, feel seen for a moment, and then don't know what to do with it. This bundle closes that gap. Your report reveals the patterns, the design, and the places where you've been working against yourself. The Life Reset gives you twelve modules to build from there — a structured process for auditing what's in your life, releasing what doesn't fit, and building something that does.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>The Intentional Life Reset (immediate download)</li>
<li>The Intentional Astrology Report (personalized, delivered within 5–7 business days after intake form submission)</li>
</ul>`
  },
  {
    id: "c-upEJluZY1z-uwmVpoR8Q==",
    description: `<p>Everything you need to know yourself, understand how you're designed to operate, and build the systems to live from that understanding — in one collection.</p>
<p>The Intentional Astrology Report gives you the deep read: who you are, how you're designed, where your chart and your Human Design are pointing at the same things. The Life Reset gives you the twelve-module framework to audit your life and rebuild it around what you now know. The Intentional Life Planner gives you the daily, weekly, and monthly structure to actually execute — a hyperlinked, undated planning system that moves with your life instead of fighting it.</p>
<p><strong>What's included:</strong></p>
<ul>
<li>The Intentional Life Reset (immediate download)</li>
<li>The Intentional Astrology Report (personalized, delivered within 5–7 business days after intake form submission)</li>
<li>Intentional Life Planner — Ultimate Calendar &amp; Life Planner (immediate download)</li>
</ul>`
  },
  {
    id: "1-oo_R5Knq82jRhTkivMkA==",
    name: "Business Elevation Deposit — Tier 1: Elevation Starter",
    description: "<p>This deposit secures your spot for the Elevation Starter package. Full scope, timeline, and deliverables are outlined in your proposal. Remaining balance due before work begins.</p>"
  },
  {
    id: "720B6h9jVJh7z1F_l_kMqA==",
    name: "Business Elevation Deposit — Tier 1: Elevation Starter",
    description: "<p>This deposit secures your spot for the Elevation Starter package. Full scope, timeline, and deliverables are outlined in your proposal. Remaining balance due before work begins.</p>"
  },
  {
    id: "0S2ZqTivra2cYvdgFv__tQ==",
    name: "Business Elevation Deposit — Tier 2: The Full Elevation",
    description: "<p>This deposit secures your spot for The Full Elevation package. Full scope, timeline, and deliverables are outlined in your proposal. Remaining balance due before work begins.</p>"
  },
  {
    id: "bUqhRIvtri-Bhxqf-oFJRQ==",
    name: "Business Elevation Deposit — Tier 3: Full Elevation + Ongoing Support",
    description: "<p>This deposit secures your spot for Full Elevation + Ongoing Support. Full scope, timeline, and deliverables are outlined in your proposal. Remaining balance due before work begins.</p>"
  },
];

for (const product of products) {
  const body = new URLSearchParams();
  if (product.name) body.append("name", product.name);
  if (product.description) body.append("description", product.description);

  const res = await fetch(`${BASE_URL}/${product.id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const json = await res.json();
  const name = json.product?.name ?? product.id;
  const status = json.success ? "✓" : `✗ ${json.message ?? "unknown error"}`;
  console.log(`${status}  ${name}`);
}
