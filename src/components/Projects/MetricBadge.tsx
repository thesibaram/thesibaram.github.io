interface MetricBadgeProps {
  label: string;
  value: string;
}

export function MetricBadge({ label, value }: MetricBadgeProps) {
  return (
    <>
      <span className="font-mono text-xs text-[var(--px-muted)]">{label}</span>
      <span className="font-mono text-xs font-bold" style={{ color: "var(--px-accent)" }}>{value}</span>
    </>
  );
}
