import { AlertTriangle } from "lucide-react";

export function AIDisclaimer() {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/50 p-3 text-xs text-muted-foreground">
      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
      <p>
        <span className="font-medium text-foreground">Responsible AI:</span> Outputs are
        AI-generated and may be inaccurate, incomplete, or biased. Review and edit before using
        them in professional contexts, and don't share confidential data.
      </p>
    </div>
  );
}