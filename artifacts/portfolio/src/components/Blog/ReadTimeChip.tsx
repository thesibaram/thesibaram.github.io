interface Props { minutes: number }

export function ReadTimeChip({ minutes }: Props) {
  return (
    <span className="flex items-center gap-1 font-mono text-[10px] text-[var(--px-muted)]">
      <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
        <rect x="3" y="1" width="2" height="1" />
        <rect x="1" y="3" width="1" height="2" /><rect x="6" y="3" width="1" height="2" />
        <rect x="3" y="6" width="2" height="1" />
        <rect x="2" y="2" width="1" height="1" /><rect x="5" y="2" width="1" height="1" />
        <rect x="2" y="5" width="1" height="1" /><rect x="5" y="5" width="1" height="1" />
        <rect x="4" y="3" width="1" height="2" /><rect x="3" y="4" width="1" height="1" />
      </svg>
      {minutes} min read
    </span>
  )
}
