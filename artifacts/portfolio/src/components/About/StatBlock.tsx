import { about } from "../../data/about"
import { StatRow } from "./StatRow"

// Grid icon 8x8
function GridIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art inline-block mr-1">
      <rect x="0" y="0" width="3" height="3" />
      <rect x="5" y="0" width="3" height="3" />
      <rect x="0" y="5" width="3" height="3" />
      <rect x="5" y="5" width="3" height="3" />
    </svg>
  )
}

export function StatBlock() {
  return (
    <div className="border border-[var(--px-border)] bg-[var(--px-surface)] mt-6">
      {/* Header */}
      <div className="px-4 py-2 border-b border-[var(--px-border)]">
        <span className="font-mono text-[10px] text-[var(--px-muted)] flex items-center">
          <GridIcon />
          // PROFILE.JSON
        </span>
      </div>
      {/* Stat rows */}
      <div className="px-4 py-1">
        {about.stats.map((stat, i) => (
          <StatRow
            key={stat.label}
            label={stat.label}
            value={stat.value}
            index={i}
            isLast={i === about.stats.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
