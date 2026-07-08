import { useState, type ReactNode } from "react";
import { Loader2, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AIDisclaimer } from "@/components/ai-disclaimer";
import { AIOutput } from "@/components/ai-output";
import { generateAI } from "@/lib/ai.functions";

export function AIToolPage({
  icon: Icon,
  title,
  description,
  buildPrompt,
  system,
  children,
  submitLabel = "Generate",
  canSubmit,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buildPrompt: () => string;
  system: string;
  children: ReactNode;
  submitLabel?: string;
  canSubmit: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function onSubmit() {
    setLoading(true);
    try {
      const res = await generateAI({ data: { system, prompt: buildPrompt() } });
      setOutput(res.content);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <header className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Inputs</CardTitle>
            <CardDescription>Structured prompt for consistent results.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {children}
            <Button onClick={onSubmit} disabled={!canSubmit || loading} className="w-full">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              {loading ? "Generating…" : submitLabel}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Result</CardTitle>
            <CardDescription>Edit freely before using.</CardDescription>
          </CardHeader>
          <CardContent>
            <AIOutput value={output} onChange={setOutput} />
          </CardContent>
        </Card>
      </div>

      <AIDisclaimer />
    </div>
  );
}