import { levelConfig } from "@/data/skills"
import { PixelLevelBar } from "./PixelLevelBar"

export function LevelLegend() {
  return (
    <div className="flex items-center justify-end gap-6 mt-4" data-testid="level-legend">
      {(["core", "proficient", "familiar"] as const).map(level => (
        <div key={level} className="flex items-center gap-2">
          <PixelLevelBar level={level} />
          <span className="font-mono text-[10px] text-[var(--px-muted)]">
            {levelConfig[level].label}
          </span>
        </div>
      ))}
    </div>
  )
}