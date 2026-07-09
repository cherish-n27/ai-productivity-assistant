# Lovable prompt — DeskPilot (sidebar app-shell layout)

Paste this into Lovable. It's written to be literal about structure, since Lovable follows layout instructions closely — being specific here is what makes it match.

---

## PROMPT

Build "DeskPilot" as a **persistent app shell**, not a single scrolling landing page. This should feel like a tool a help desk technician keeps open all day, not a marketing page.

### Overall layout (be exact about this structure)

A two-column layout that fills the viewport:

- **Left sidebar** — fixed width (~240px), full height, white background, thin right border. Contains, top to bottom:
  1. Brand mark (small rounded-square icon in indigo) + "DeskPilot" wordmark
  2. Nav section "Overview" with one item: Dashboard
  3. Nav section "Assistant" with five items, each with an icon: Email generator, Notes summarizer, Task planner, Research assistant, Triage chatbot
  4. A small footer line pinned to the bottom of the sidebar
  - Clicking a nav item switches the main content area — this is real navigation, not anchor scrolling. Only one section is visible at a time.
  - The active nav item gets a light indigo background and indigo text; inactive items are muted gray and only darken on hover.

- **Main content area** (everything to the right of the sidebar):
  - A top bar with a greeting ("Good morning, [name]") on the left and a small circular avatar on the right
  - Below that, a command bar: a rounded pill-shaped input spanning the width, with a search icon on the left and a "⌘K" hint on the right, placeholder text like "Ask DeskPilot anything — draft an email, summarize notes, plan your day…". Pressing enter with a keyword like "email" or "plan" should switch to that section (simple keyword matching is fine).
  - Below the command bar, the content changes per nav selection:
    - **Dashboard**: three small stat cards in a row (open tickets, P1 count, avg resolution time), then a "Today's queue" panel listing tickets as rows with a colored left border indicating priority, then a row of three clickable feature cards linking to the main tools
    - **Email generator**: dropdowns for recipient type and tone, a textarea for context, a generate button, and an output card below with a review disclaimer
    - **Notes summarizer**: a large textarea for raw notes, a summarize button, and an output card structured into Key points / Action items / Deadlines
    - **Task planner**: a "build today's plan" button that reveals a prioritized list of tickets styled the same as the dashboard queue (colored left border by priority)
    - **Research assistant**: a text input for an error or topic, a button, and an output card with "what this means," "likely causes," and "suggested steps" sections
    - **Triage chatbot**: a scrollable chat window with rounded message bubbles (user messages right-aligned in indigo, bot messages left-aligned in a light gray card), plus a text input and send button at the bottom

### Design system — match exactly

**Colors:**
- Background: warm off-white `#F7F5F2`
- Card/surface: white `#FFFFFF`
- Primary text: near-black charcoal `#232220`
- Secondary text: muted warm gray `#6B685F`
- Borders: soft warm gray `#E6E2D8`
- Primary accent (buttons, active nav, links): deep indigo-violet `#4C3AE3`, hover state `#382AAE`
- Indigo light fill (active nav background, icon backgrounds): `#EEECFB`
- Urgency/high-priority accent — used ONLY for P1 tickets and warnings, never decoratively: coral `#FF8A5B`, with light fill `#FFEEE4` and dark text variant `#B85A32`
- Success/confirmation accent: sage green `#6E9C6B`, with light fill `#EAF2E7` and dark text variant `#4C6E49`

**Typography:**
- Headings: a distinct geometric sans-serif (Space Grotesk or similar) — used for the brand name, panel headings, and stat numbers
- Body text: Inter (or similar clean humanist sans) for everything else
- No large hero headline treatment — this is a functional app, not a landing page. Keep headings modest in size (panel titles around 18–20px).

**Component style:**
- Rounded corners: ~14px on cards and panels, ~8px on buttons and inputs, fully rounded on the command bar and chat bubbles
- Cards have a very subtle shadow, not a hard drop shadow — soft and barely visible
- Ticket priority rows use a colored left border (4px) rather than colored badges as the primary priority signal — coral for P1, amber for P2, sage for P3 — with a small rounded tag on the right as a secondary label
- Every AI output includes a small disclaimer line below it in a muted coral tone reminding the user to review before sending/using

### What to avoid
- No single-scroll landing page structure — this must be a real multi-view app with persistent navigation
- No large centered hero headline or marketing-style copy
- No neon, gradient, or dark-mode-only color schemes
- Don't default to blue-and-white generic SaaS styling — the indigo/coral/sage palette above is deliberate and should be followed precisely

---

## Tip for using this with Lovable

If Lovable's first pass still drifts (e.g., adds a hero section, or collapses the sidebar), follow up with a short, pointed correction rather than repasting the whole prompt, for example:

> "Remove the hero section entirely. This should open directly into the sidebar + dashboard layout, with no scrolling landing page above it."

Lovable tends to respond better to short, specific corrections on top of an existing generation than to a full re-prompt.
