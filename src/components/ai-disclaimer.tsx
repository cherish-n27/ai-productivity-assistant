import { AlertTriangle } from "lucide-react";

export function AIDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="flex items-center gap-1.5 text-[11px] text-coral-strong">
        <AlertTriangle className="h-3 w-3" />
        AI-generated — review before sending to a user or vendor.
      </p>
    );
  }
  return (
    <div className="flex items-start gap-2 rounded-lg border border-coral-fill bg-coral-fill/60 p-3 text-xs text-coral-strong">
      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      <p>
        <span className="font-semibold">Responsible AI:</span> Outputs are AI-generated and may be
        inaccurate. Always review before sending to a user, resolving a ticket, or sharing outside
        your team. Don't paste confidential customer data.
      </p>
    </div>
  );
}