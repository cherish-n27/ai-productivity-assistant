import { useState, type CSSProperties } from "react";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

const HOUR = new Date().getHours();
const GREETING =
  HOUR < 5 ? "Working late" : HOUR < 12 ? "Good morning" : HOUR < 18 ? "Good afternoon" : "Good evening";

const KEYWORDS: Array<{ match: RegExp; to: "/email" | "/meeting" | "/tasks" | "/research" | "/chatbot" }> = [
  { match: /email|draft|reply|write/i, to: "/email" },
  { match: /note|summar|meeting|transcript/i, to: "/meeting" },
  { match: /plan|task|queue|today|prioriti/i, to: "/tasks" },
  { match: /research|error|why|investig|diagnos/i, to: "/research" },
  { match: /chat|triage|ask|help/i, to: "/chatbot" },
];

function AppLayout() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    const hit = KEYWORDS.find((k) => k.match.test(q));
    if (hit) {
      navigate({ to: hit.to });
      setQuery("");
    }
  }

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "240px", "--sidebar-width-icon": "3.5rem" } as CSSProperties}
    >
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex min-w-0 flex-1 flex-col bg-background">
          <header className="flex items-center justify-between gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-2">
              <SidebarTrigger className="md:hidden" />
              <div className="min-w-0">
                <p className="truncate font-display text-base font-semibold text-foreground sm:text-lg">
                  {GREETING}, Riya
                </p>
                <p className="hidden truncate text-xs text-muted-foreground sm:block">
                  Ballast is steady. 12 tickets in queue this morning.
                </p>
              </div>
            </div>
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-indigo-fill font-display text-sm font-semibold text-primary">
              RM
            </div>
          </header>

          <div className="border-b border-border bg-background px-4 py-3 sm:px-6 lg:px-8">
            <form onSubmit={submit} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.02)] focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ballast. keeping your help desk steady — draft an email, summarize notes, plan your day…"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <kbd className="hidden shrink-0 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
                ⌘K
              </kbd>
            </form>
          </div>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}