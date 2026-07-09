# Build Prompt: AI-Powered IT Support & Help Desk Productivity Assistant

Copy the prompt below into lovable.ai, ChatGPT, Claude, or any AI build tool to generate the prototype.

---

## PROMPT

Build a web application called **"DeskPilot"** — an AI-powered productivity assistant designed for IT Support and Help Desk professionals, particularly early-career technicians and interns.

**Context:** IT support staff spend their day triaging tickets, writing repetitive but tone-sensitive emails, summarizing shift handovers, planning their workload, and looking up fixes for unfamiliar issues. This app consolidates those tasks into one calm, unified assistant.

**Target user:** A young IT Support / Help Desk professional (early career, tech-comfortable, values modern design over corporate/legacy enterprise tools like old-school ITSM software).

### Core features to build (all five, integrated into one interface, not five separate tools):

1. **Smart Email Generator**
   - Input: ticket context, recipient type (end user, manager, client), tone (formal, informal, urgent/apologetic)
   - Output: a ready-to-send professional email
   - Must adapt vocabulary and formality based on audience selected

2. **Meeting Notes / Shift Handover Summarizer**
   - Input: pasted raw notes from a stand-up, incident review, or shift handover
   - Output: concise summary with clearly separated sections for key points, decisions made, action items (with owner if mentioned), and deadlines

3. **AI Task Planner / Ticket Prioritizer**
   - Input: a list of open tickets with brief descriptions
   - Output: a prioritized daily/weekly plan, ranked by urgency and impact (e.g., P1 outage vs. minor request), with suggested time blocks

4. **AI Research Assistant**
   - Input: an error message, error code, or unfamiliar technical topic
   - Output: a plain-language explanation, likely causes, and a step-by-step troubleshooting suggestion — written for someone to hand to a non-technical end user if needed

5. **AI Chatbot Interface**
   - A conversational widget that acts as first-line triage: answers common IT FAQs (password resets, VPN access, software requests) before a ticket is created
   - Should handle multi-turn conversation and gracefully escalate to "create a ticket" when it can't resolve the issue

### Design and visual direction — "Calm Control Room"

The interface should feel steady and clear, not alarming — IT support is already a reactive, stressful job, so the tool itself should be the calm part of the workflow. Avoid generic enterprise-SaaS navy-and-white; avoid neon or alarm-style colors except where meaning requires it.

- **Background:** warm off-white (`#F7F5F2`) in light mode / soft charcoal (`#1C1B1F`) in dark mode — not stark white or pure black
- **Primary accent:** deep indigo-violet (`#4C3AE3`) for buttons, links, and active states
- **Urgency/status accent:** warm coral (`#FF8A5B`) reserved only for high-priority ticket indicators or alerts — never used decoratively
- **Success/confirmation:** muted sage green (`#7FA87C`) for resolved states and confirmations
- **Text:** near-black charcoal rather than pure black, for reduced eye strain during long queue sessions
- **Typography:** clean sans-serif, generous line height, no dense corporate tables where a card layout can work instead

**Layout guidance:**
- One unified command bar (like a search/command palette) that routes to whichever of the five features is needed, so the tool feels like one assistant rather than five bolted-together utilities
- Ticket priority shown as a subtle colored left-border stripe on cards rather than loud badges
- Chatbot messages use rounded conversational bubbles; technical output (fixes, KB summaries) shown in a distinct clean monospace card to visually separate "conversation" from "reference material"

### Responsible AI requirements (must be visibly included, not just backend logic)

- A visible disclaimer on AI-generated content: outputs should be reviewed before sending to end users, especially for technical troubleshooting steps
- A short note on limitations: the AI may not have context on organization-specific systems and can occasionally be inaccurate
- No collection or display of sensitive personal data (passwords, personal identifiers) within any feature

### Deliverable expectations

- A working prototype demonstrating all five features connected through one interface
- Sample prompts used for each feature should be easy to inspect/export for documentation purposes
- Clean, presentable UI suitable for a live demo or screen-recorded walkthrough

---

## Notes for your documentation (not part of the AI prompt — for your own reference)

- **Problem statement:** IT Support and Help Desk staff, especially early-career technicians, spend disproportionate time on repetitive communication and triage tasks, reducing time available for actual technical resolution.
- **Why IT Support fits all 5 features:** unlike most professional use cases, IT support genuinely touches all five feature areas in daily work — this is worth explicitly calling out in your documentation as your justification for building all five rather than the minimum three.
- **Tools used:** name the specific AI tool/platform you actually used to generate the prototype (e.g., lovable.ai, ChatGPT) plus any model version, for the "Tools used" section of your submission.
- **Challenges and solutions:** keep a running note as you build — the rubric explicitly asks for this in your 1–2 page documentation.
