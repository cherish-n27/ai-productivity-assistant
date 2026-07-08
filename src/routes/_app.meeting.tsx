import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AIToolPage } from "@/components/ai-tool-page";

export const Route = createFileRoute("/_app/meeting")({
  component: MeetingPage,
});

function MeetingPage() {
  const [title, setTitle] = useState("");
  const [attendees, setAttendees] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <AIToolPage
      icon={FileText}
      title="Meeting Notes Summarizer"
      description="Turn raw notes or transcripts into structured summaries with action items."
      system="You are a meeting scribe. Produce a clean summary with: 1) TL;DR (2-3 sentences), 2) Key decisions, 3) Action items with owner when possible, 4) Open questions. Use markdown headings. Never fabricate details not present in the notes."
      canSubmit={notes.trim().length > 20}
      submitLabel="Summarize"
      buildPrompt={() =>
        `Meeting title: ${title || "Untitled meeting"}\nAttendees: ${attendees || "unspecified"}\n\nRaw notes / transcript:\n${notes}`
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Meeting title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Q3 Planning Review" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attendees">Attendees</Label>
          <Input id="attendees" value={attendees} onChange={(e) => setAttendees(e.target.value)} placeholder="Names or teams" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Notes or transcript *</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste your meeting notes or transcript here…"
          className="min-h-56"
        />
      </div>
    </AIToolPage>
  );
}