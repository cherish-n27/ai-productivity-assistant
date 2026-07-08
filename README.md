# Project Overview

IT Support and Help Desk professionals spend a disproportionate amount of their day on repetitive, non-technical tasks — drafting emails, summarizing shift handovers, prioritizing ticket queues, and researching unfamiliar errors — leaving less time for actual technical resolution. This is especially true for early-career technicians and interns who are still building speed and confidence in these areas.

Ballast IT is an AI-powered productivity assistant that consolidates five common help desk tasks into a single, calm interface, so a technician can move between them without switching tools or losing context. It was built as part of the CAPACITI AI Skill Accelerator Programme project, addressing the brief's requirement to design a solution that applies AI effectively, uses strong prompt engineering, and follows responsible AI practices.

The design direction — "Calm Control Room" — was chosen deliberately: help desk work is inherently reactive and often stressful, so the interface itself was designed to be the steady, unshaken part of the workflow rather than another source of noise.

## Features

Ballast IT includes all five features outlined in the project brief, integrated into one assistant rather than built as five separate tools:


### Smart Email Generator
Generates context-based professional emails, adapting tone (formal, informal, apologetic/urgent) and vocabulary based on the recipient (end user, manager, client, or team).
### Meeting Notes / Shift Handover Summarizer
Converts lengthy raw notes into a structured summary: key points, decisions and action items (with owners where mentioned), and deadlines — built specifically around IT shift handovers and stand-ups.
### AI Task Planner / Ticket Prioritizer
Takes a list of open tickets and produces a prioritized daily plan, ranking by urgency and impact (e.g. a P1 outage vs. a minor request) with suggested time blocks.
### AI Research Assistant
Takes an error message, error code, or unfamiliar technical topic and returns a plain-language explanation, likely causes, and step-by-step troubleshooting suggestions — written so a technician could hand the explanation to a non-technical end user if needed.
### AI Triage Chatbot
A conversational first-line interface that answers common IT FAQs (password resets, VPN access, software requests) before a ticket is even created, and gracefully escalates to ticket creation when it can't resolve the issue.


## Responsible AI safeguards


Every AI-generated output (emails, research results) displays a visible disclaimer to review content before sending or applying it
The Research Assistant explicitly notes that results may not reflect an organization's specific network/systems setup
No sensitive personal data (passwords, personal identifiers) is collected or displayed in any feature


## Tools Used


1. Lovable.ai — used to generate and iterate on the application build from a structured prompt
2. Claude (Anthropic) — used to design the use case, write and refine the build prompt, design the "Calm Control Room" visual system, and build an initial clickable HTML/CSS/JS prototype for comparison and design reference
3. HTML/CSS/JavaScript — the standalone prototype (ballast_it_prototype.html) is a self-contained file with no build step or dependencies, used to validate the design direction before/alongside the Lovable build



## Setup Instructions

1. Go to lovable.dev and start a new project
2. Paste in the full design prompt from lovable_sidebar_layout_prompt.md (included in this submission) to generate the sidebar app-shell layout
3. If the first generation drifts from the spec (e.g. adds an unwanted landing-page hero), follow up with a short, specific correction rather than re-pasting the whole prompt — for example: "Remove the hero section entirely. This should open directly into the sidebar + dashboard layout, with no scrolling landing page above it."
4. Use the Export prompts option within Lovable (if available in your build) to keep a record of the prompts used, for the "Sample prompts" section of your documentation
