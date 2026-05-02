interface Props {
  series: { name: string; part: number; total: number }
  expanded?: boolean
}

export function SeriesBadge({ series, expanded = false }: Props) {
  if (expanded) {
    return (
      <span className="font-mono text-[11px] px-3 py-1.5 border border-[var(--px-accent)] text-[var(--px-accent)]">
        Part {series.part} of {series.total} — {series.name}
      </span>
    )
  }
  return (
    <span className="flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 border border-[var(--px-accent)] text-[var(--px-accent)]">
      <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
        <rect x="1" y="3" width="2" height="2" /><rect x="3" y="2" width="2" height="4" />
        <rect x="5" y="3" width="2" height="2" />
        <rect x="3" y="3" width="2" height="2" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      PT.{series.part}/{series.total}
    </span>
  )
}
