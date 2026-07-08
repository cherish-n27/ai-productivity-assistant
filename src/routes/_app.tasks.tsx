import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ListChecks, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIDisclaimer } from "@/components/ai-disclaimer";
import { TicketRow } from "./_app.index";

export const Route = createFileRoute("/_app/tasks")({
  component: TasksPage,
});

type Priority = "P1" | "P2" | "P3";

const plan: { id: string; title: string; requester: string; priority: Priority; age: string }[] = [
  { id: "BLT-2041", title: "VPN drops after macOS 15.2 update — patch push", requester: "Amelia Chen · Finance", priority: "P1", age: "12m" },
  { id: "BLT-2038", title: "Outlook shared mailbox — reauth flow", requester: "Jordan Reeve · Sales", priority: "P1", age: "38m" },
  { id: "BLT-2035", title: "3F printer queue — clear stuck job, verify driver", requester: "Priya Nair · Ops", priority: "P2", age: "1h" },
  { id: "BLT-2033", title: "New starter kit — image 2 MacBooks by 3pm", requester: "People team", priority: "P2", age: "2h" },
  { id: "BLT-2029", title: "Follow up: Slack notification profile check", requester: "Sam Okafor · Design", priority: "P3", age: "4h" },
  { id: "BLT-2024", title: "Batch Zoom LTS upgrade — schedule for tonight", requester: "IT maintenance", priority: "P3", age: "1d" },
];

function TasksPage() {
  const [built, setBuilt] = useState(false);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-fill text-primary">
          <ListChecks className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h1 className="font-display text-lg font-semibold text-foreground">Task planner</h1>
          <p className="text-sm text-muted-foreground">
            Ballast orders today's queue by SLA, priority, and dependency.
          </p>
        </div>
      </header>

      {!built ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-indigo-fill text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="mt-3 font-display text-base font-semibold text-foreground">
            No plan yet
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Build a prioritized plan from your 24 open tickets.
          </p>
          <Button
            className="mt-4 rounded-lg bg-primary hover:bg-primary/90"
            onClick={() => setBuilt(true)}
          >
            Build today's plan
          </Button>
        </div>
      ) : (
        <section className="rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(35,34,32,0.03)]">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <div>
              <h2 className="font-display text-base font-semibold text-foreground">
                Plan for today
              </h2>
              <p className="text-xs text-muted-foreground">
                6 tickets · ~4h 20m estimated focus time
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => setBuilt(false)}
            >
              Rebuild
            </Button>
          </div>
          <ul className="divide-y divide-border">
            {plan.map((t) => (
              <TicketRow key={t.id} ticket={t} />
            ))}
          </ul>
          <div className="border-t border-border px-5 py-3">
            <AIDisclaimer compact />
          </div>
        </section>
      )}
    </div>
  );
}