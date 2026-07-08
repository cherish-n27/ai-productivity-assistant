import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ListChecks } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AIToolPage } from "@/components/ai-tool-page";

export const Route = createFileRoute("/_app/tasks")({
  component: TasksPage,
});

function TasksPage() {
  const [goal, setGoal] = useState("");
  const [timeframe, setTimeframe] = useState("this-week");
  const [constraints, setConstraints] = useState("");

  return (
    <AIToolPage
      icon={ListChecks}
      title="AI Task Planner"
      description="Break down a goal into a prioritized, actionable plan."
      system="You are a productivity coach. Given a goal, produce a structured plan: 1) Clarified objective, 2) Prioritized tasks (P1/P2/P3) with time estimates, 3) Suggested schedule across the timeframe, 4) Risks and mitigations. Use markdown with checkboxes for tasks."
      canSubmit={goal.trim().length > 0}
      submitLabel="Plan tasks"
      buildPrompt={() =>
        `Goal: ${goal}\nTimeframe: ${timeframe}\nConstraints / preferences:\n${constraints || "(none)"}\n`
      }
    >
      <div className="space-y-2">
        <Label htmlFor="goal">Goal *</Label>
        <Input id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="e.g. Launch onboarding email series" />
      </div>
      <div className="space-y-2">
        <Label>Timeframe</Label>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-week">This week</SelectItem>
            <SelectItem value="two-weeks">Next two weeks</SelectItem>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="this-quarter">This quarter</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="constraints">Constraints & context</Label>
        <Textarea
          id="constraints"
          value={constraints}
          onChange={(e) => setConstraints(e.target.value)}
          placeholder="Team size, blockers, dependencies, hours available…"
          className="min-h-28"
        />
      </div>
    </AIToolPage>
  );
}