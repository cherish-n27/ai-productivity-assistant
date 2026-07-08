import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  FileText,
  ListChecks,
  Search,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AIDisclaimer } from "@/components/ai-disclaimer";

export const Route = createFileRoute("/_app/")({
  component: Dashboard,
});

const features = [
  {
    to: "/email" as const,
    icon: Mail,
    title: "Smart Email Generator",
    description: "Draft polished emails in seconds — tone, intent, and audience aware.",
  },
  {
    to: "/meeting" as const,
    icon: FileText,
    title: "Meeting Notes Summarizer",
    description: "Turn transcripts or raw notes into concise summaries and action items.",
  },
  {
    to: "/tasks" as const,
    icon: ListChecks,
    title: "AI Task Planner",
    description: "Break down goals into structured, prioritized task lists.",
  },
  {
    to: "/research" as const,
    icon: Search,
    title: "AI Research Assistant",
    description: "Get structured briefs on any topic with key points and questions.",
  },
  {
    to: "/chatbot" as const,
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Conversational assistant for quick help across your workday.",
  },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section className="space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground">
          <Sparkles className="h-3 w-3" /> AI-powered workspace
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Work smarter, not harder.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Flowdesk brings AI to your everyday workplace tasks — from drafting emails to planning
          your week — so you can focus on what matters.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Link key={f.to} to={f.to} className="group">
            <Card className="h-full transition-all hover:border-primary/40 hover:shadow-md">
              <CardHeader>
                <div className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Open <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      <AIDisclaimer />
    </div>
  );
}