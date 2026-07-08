import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
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

export const Route = createFileRoute("/_app/research")({
  component: ResearchPage,
});

function ResearchPage() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [depth, setDepth] = useState("brief");
  const [questions, setQuestions] = useState("");

  return (
    <AIToolPage
      icon={Search}
      title="AI Research Assistant"
      description="Structured briefs on any topic — background, key points, and open questions."
      system="You are a research analyst. Produce a well-organized brief with: 1) Executive summary, 2) Background, 3) Key points (bulleted), 4) Considerations / trade-offs, 5) Open questions to investigate further, 6) Suggested next steps. Note when a claim is uncertain. Use markdown."
      canSubmit={topic.trim().length > 0}
      submitLabel="Research topic"
      buildPrompt={() =>
        `Topic: ${topic}\nAudience: ${audience || "general"}\nDepth: ${depth}\nSpecific questions to address:\n${questions || "(none)"}`
      }
    >
      <div className="space-y-2">
        <Label htmlFor="topic">Topic *</Label>
        <Input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Zero-trust security for SMBs" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="audience">Audience</Label>
          <Input id="audience" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g. Non-technical execs" />
        </div>
        <div className="space-y-2">
          <Label>Depth</Label>
          <Select value={depth} onValueChange={setDepth}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="brief">Brief overview</SelectItem>
              <SelectItem value="standard">Standard brief</SelectItem>
              <SelectItem value="deep">Deep dive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="questions">Questions to answer</Label>
        <Textarea
          id="questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          placeholder="What do you specifically want to learn?"
          className="min-h-28"
        />
      </div>
    </AIToolPage>
  );
}