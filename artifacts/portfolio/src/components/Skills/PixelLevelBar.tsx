import { memo } from "react"
import { SkillLevel, levelConfig } from "@/data/skills"

interface Props { level: SkillLevel }

export const PixelLevelBar = memo(function PixelLevelBar({ level }: Props) {
  const { pixels, color } = levelConfig[level]
  const blocks = [5, 4, 3, 2, 1] // top to bottom visually, but fill from bottom = indices >= (5-pixels)
  // filled when block index (from top) >= (5 - pixels)
  return (
    <div className="flex flex-col gap-0.5" style={{ gap: 2 }} aria-hidden="true">
      {blocks.map((b, i) => {
        const filled = i >= (5 - pixels)
        return (
          <div
            key={b}
            style={{
              width: 4,
              height: 4,
              background: filled ? color : 'transparent',
              border: `1px solid ${filled ? color : 'var(--px-border)'}`,
              flexShrink: 0,
            }}
          />
        )
      })}
    </div>
  )
})