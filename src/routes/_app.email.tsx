import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AIToolPage } from "@/components/ai-tool-page";

export const Route = createFileRoute("/_app/email")({
  component: EmailPage,
});

function EmailPage() {
  const [recipient, setRecipient] = useState("");
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("professional");
  const [context, setContext] = useState("");

  return (
    <AIToolPage
      icon={Mail}
      title="Smart Email Generator"
      description="Draft clear, well-structured emails tailored to your recipient and intent."
      system="You are an expert business writer. Generate a complete email with a clear subject line and body. Use markdown. Keep it concise, natural, and free of filler. Never invent facts."
      canSubmit={purpose.trim().length > 0}
      submitLabel="Draft email"
      buildPrompt={() =>
        `Write an email with the following parameters.\n\nRecipient: ${recipient || "unspecified"}\nTone: ${tone}\nPurpose: ${purpose}\nContext / key points:\n${context || "(none)"}\n\nOutput format:\nSubject: <subject>\n\n<body>`
      }
    >
      <div className="space-y-2">
        <Label htmlFor="recipient">Recipient</Label>
        <Input
          id="recipient"
          placeholder="e.g. Marketing team, client Jane Doe"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="purpose">Purpose *</Label>
          <Input
            id="purpose"
            placeholder="e.g. Follow up on Q3 proposal"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Tone</Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="concise">Concise</SelectItem>
              <SelectItem value="persuasive">Persuasive</SelectItem>
              <SelectItem value="apologetic">Apologetic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="context">Context & key points</Label>
        <Textarea
          id="context"
          placeholder="Anything the email should mention: dates, decisions, next steps…"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="min-h-28"
        />
      </div>
    </AIToolPage>
  );
}