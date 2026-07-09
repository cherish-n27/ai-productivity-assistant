# Project Overview

IT Support and Help Desk professionals spend a disproportionate amount of their day on repetitive, non-technical tasks — drafting emails, summarizing shift handovers, prioritizing ticket queues, and researching unfamiliar errors — leaving less time for actual technical resolution. This is especially true for early-career technicians and interns who are still building speed and confidence in these areas.

Ballast IT is an AI-powered support workspace that consolidates five common support tasks into a single, calm interface, so a technician can move between them without switching tools or losing context. It was built as part of the CAPACITI AI Skill Accelerator Programme project, addressing the brief's requirement to design a solution that applies AI effectively, uses strong prompt engineering, and follows responsible AI practices.

The design direction, "Calm Control Room", was chosen deliberately: IT support and help desk work is inherently reactive and often stressful, so the interface itself was designed to be the steady, unshaken part of the workflow rather than another source of noise. This shows up directly in the product's own language, the dashboard greets the user with "Ballast is steady" and ticket counts rather than an alarming red banner.

## Features

Ballast IT includes all five features outlined in the project brief, integrated into one workspace rather than built as five separate tools. Each tool follows the same two-panel pattern: structured Inputs on the left for consistent, repeatable results, and an editable Result panel on the right so nothing is sent or used without review.


### Email Generator
Drafts a clear, on-brand reply for a ticket, user, or vendor. Takes a Recipient (free text. e.g. "Marketing team, client Jane Doe"), a required Purpose, a Tone selector (e.g. Professional), and free-text Context & key points (dates, decisions, next steps). Output is fully editable before copying.
### Notes Summarizer
Turns raw standup or incident notes into a shareable brief. Takes a Meeting title, Attendees, and required Notes/transcript field, and returns a structured summary.
### Task Planner
Builds a prioritized plan from the current open ticket queue, ordering by SLA and impact, in a single click ("Build today's plan") rather than requiring manual input, it pulls directly from the ticket count shown on the dashboard.
### Research Assistant
Paste an error, symptom, or unfamiliar topic and get a triage brief back. Takes a required Topic, an Audience field (e.g. "Non-technical execs"), a Depth selector (e.g. "Brief overview"), and specific Questions to answer — giving more control over the scope of the AI's response than a single open text box would.
### Triage Chatbot
A conversational assistant for quick answers on tickets, tools, and internal runbooks. Prompts the user with "Ask about a ticket, an error, or a runbook step" and handles free-form messages through a standard chat input.


## Dashboard

The landing view shows a personalized greeting, a live status line ("Ballast is steady — 12 tickets in queue this morning"), three key stats (Open tickets, P1 incidents with SLA countdown, Average resolution time), a prioritized "Today's queue" list (colour-coded by priority, ordered by priority then SLA age), and three quick-launch cards into the most common actions: Draft a ticket reply, Summarize standup notes, Build today's plan.

## Responsible AI safeguards

Every AI-generated output across all four generative tools (Email, Notes, Research, Chatbot) displays this disclaimer:


> Responsible AI: Outputs are AI-generated and may be inaccurate. Always review before sending to a user, resolving a ticket, or sharing outside your team. Don't paste confidential customer data.



### Additional safeguards:


- All Result panels are explicitly editable ("Edit freely before using") rather than a static output — reinforcing human review as part of the workflow, not an afterthought
+ The footer on every screen repeats the reminder: "Ballast keeps your queue steady. Review AI output before sending."
* No sensitive personal data (passwords, personal identifiers) is collected or displayed in any feature


## Tools Used


- Lovable.ai — used to generate and iterate on the live, functional application build (v1.4) from a structured design prompt
* Claude (Anthropic) — used to define the use case, write and refine the build prompt, design the "Calm Control Room" visual system, and build an initial clickable HTML/CSS/JS prototype used as a design reference before the Lovable build
+ HTML/CSS/JavaScript — the standalone prototype [deskpilot_prototype.html](deskpilot_prototype.html) is a self-contained file with no build step or dependencies; it was used to validate the sidebar app-shell layout direction and is included for reference, not as the primary deliverable

## Setup Instructions

This section documents how Ballast IT was actually built, so the process can be understood, reviewed, or repeated.

### Step 1: Define the use case and scope

Before writing any prompts, the use case was narrowed to IT Support / Help Desk specifically, because it's one of the few roles where all five required features (email drafting, notes summarizing, task planning, research, and a chatbot) map onto genuine daily work rather than needing three chosen at random. This scoping happened in conversation with Claude, which also helped identify the target user (an early-career help desk technician) and a supporting visual direction ("Calm Control Room") suited to a high-stress, reactive job.

### Step 2: Write the build prompt

A single, detailed prompt was drafted covering:


+ The problem being solved and who it's for
- All five required features and what each one should input and output
* The exact colour palette, typography direction, and component style ("Calm Control Room")
+ Responsible AI requirements to bake into the interface itself (disclaimers, editable outputs, no sensitive data collection)


This prompt is included in this submission as [ai_productivity_assistant_build_prompt.md](ai_productivity_assistant_build_prompt.md).

### Step 3: Generate an initial design reference

Before touching Lovable, Claude was used to build a quick clickable HTML/CSS/JS prototype from the same prompt, purely to see the layout and colour system in action and sanity-check the direction. This became [deskpilot_prototype.html](deskpilot_prototype.html).

### Step 4: Build in Lovable


1. Visit lovable.dev and create a new project  
2. Paste in the build prompt  
3. Review the first generation against the brief  

### Step 5: Correct the layout with a follow-up prompt

The first Lovable generation used a single-page, landing-page-style layout instead of the persistent sidebar app-shell that was actually intended. Rather than re-writing the whole prompt, a second, much more literal prompt was written specifically describing the sidebar navigation, panel structure, and exact colour hex values — included in this submission as [lovable_sidebar_layout_prompt.md](lovable_sidebar_layout_prompt.md). This was pasted into the same Lovable project as a follow-up message to correct the structure.

### Step 6: Review, refine, and iterate

Each of the five tool screens was checked against the brief, and short follow-up prompts were used to refine specific details (input field structure, disclaimer wording, dashboard stats) rather than regenerating the whole app each time — this keeps Lovable's changes targeted and avoids losing work that was already correct.

### Step 7: Test all features

Each tool was clicked through to confirm the input fields make sense, the Responsible AI disclaimer appears consistently, and the output panels are editable before use, in line with the brief's requirement to test functionality before presenting.

### Step 8: Present

The live Lovable preview link is used directly for demonstration — no separate export or hosting step is required for presentation purposes, since Lovable serves the app from its own preview URL.
