interface StatusChipProps {
  status: "completed" | "in-progress" | "archived";
}

export function StatusChip({ status }: StatusChipProps) {
  if (status === "completed") {
    return (
      <span className="px-2 py-0.5 border border-[#22C55E] text-[#22C55E] font-mono text-xs rounded-none">
        Completed
      </span>
    );
  }

  if (status === "in-progress") {
    return (
      <span className="px-2 py-0.5 border border-[#F59E0B] text-[#F59E0B] font-mono text-xs rounded-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-[#F59E0B] block animate-pulse"></span>
        In Progress
      </span>
    );
  }

  return (
    <span className="px-2 py-0.5 border border-[var(--px-border)] text-[var(--px-muted)] font-mono text-xs rounded-none">
      Archived
    </span>
  );
}
