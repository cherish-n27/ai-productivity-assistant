import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, FileText, ListChecks, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/_app/")({
  component: Dashboard,
});

const stats = [
  { label: "Open tickets", value: "24", delta: "+3 since yesterday" },
  { label: "P1 incidents", value: "2", delta: "SLA due < 4h", tone: "coral" as const },
  { label: "Avg resolution", value: "1h 42m", delta: "-8m this week", tone: "sage" as const },
];

type Priority = "P1" | "P2" | "P3";

const queue: { id: string; title: string; requester: string; priority: Priority; age: string }[] = [
  { id: "BLT-2041", title: "VPN drops after macOS 15.2 update", requester: "Amelia Chen · Finance", priority: "P1", age: "12m" },
  { id: "BLT-2038", title: "Outlook cannot load shared mailbox", requester: "Jordan Reeve · Sales", priority: "P1", age: "38m" },
  { id: "BLT-2035", title: "Printer on 3F queue paused", requester: "Priya Nair · Ops", priority: "P2", age: "1h" },
  { id: "BLT-2033", title: "New starter kit — laptop imaging", requester: "People team", priority: "P2", age: "2h" },
  { id: "BLT-2029", title: "Slack notification sounds muted", requester: "Sam Okafor · Design", priority: "P3", age: "4h" },
  { id: "BLT-2024", title: "Update Zoom to latest LTS", requester: "IT maintenance", priority: "P3", age: "1d" },
];

const shortcuts = [
  { to: "/email" as const, icon: Mail, title: "Draft a ticket reply", body: "Structured, on-brand response in your voice." },
  { to: "/meeting" as const, icon: FileText, title: "Summarize standup notes", body: "Key points, action items, deadlines." },
  { to: "/tasks" as const, icon: ListChecks, title: "Build today's plan", body: "Prioritize the queue by SLA and impact." },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(35,34,32,0.03)]"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </p>
            <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
              {s.value}
            </p>
            <p
              className={`mt-1 text-xs ${
                s.tone === "coral"
                  ? "text-coral-strong"
                  : s.tone === "sage"
                    ? "text-sage-strong"
                    : "text-muted-foreground"
              }`}
            >
              {s.delta}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(35,34,32,0.03)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Today's queue</h2>
            <p className="text-xs text-muted-foreground">Ordered by priority, then SLA age.</p>
          </div>
          <Link
            to="/tasks"
            className="text-xs font-medium text-primary hover:text-primary/80"
          >
            Open in planner →
          </Link>
        </div>
        <ul className="divide-y divide-border">
          {queue.map((t) => (
            <TicketRow key={t.id} ticket={t} />
          ))}
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {shortcuts.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(35,34,32,0.03)] transition-colors hover:border-primary/40"
          >
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-indigo-fill text-primary">
              <s.icon className="h-4 w-4" />
            </div>
            <p className="font-display text-sm font-semibold text-foreground">{s.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.body}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
              Open <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}

export function TicketRow({
  ticket,
}: {
  ticket: { id: string; title: string; requester: string; priority: Priority; age: string };
}) {
  const tone =
    ticket.priority === "P1"
      ? { border: "border-l-coral", tag: "bg-coral-fill text-coral-strong" }
      : ticket.priority === "P2"
        ? { border: "border-l-amber", tag: "bg-[color-mix(in_oklab,var(--amber)_18%,transparent)] text-foreground" }
        : { border: "border-l-sage", tag: "bg-sage-fill text-sage-strong" };
  return (
    <li className={`flex items-center gap-4 border-l-4 ${tone.border} px-5 py-3.5`}>
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="font-mono text-xs text-muted-foreground">{ticket.id}</span>
          <span className="truncate">{ticket.title}</span>
        </p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {ticket.requester} · opened {ticket.age} ago
        </p>
      </div>
      <span
        className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tone.tag}`}
      >
        {ticket.priority}
      </span>
    </li>
  );
}