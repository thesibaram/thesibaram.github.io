import { useEffect, useRef, useState } from "react"
import { skillCategories } from "@/data/skills"

const MAX_BLOCKS = 12

interface Props { activeId: string; onCategoryClick: (id: string) => void }

export function PixelBarChart({ activeId, onCategoryClick }: Props) {
  const [filled, setFilled] = useState<number[]>(skillCategories.map(() => 0))
  const containerRef = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  const maxSkills = Math.max(...skillCategories.map(c => c.skills.length))

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !animated.current) {
        animated.current = true
        skillCategories.forEach((cat, ci) => {
          const blocks = Math.round((cat.skills.length / maxSkills) * MAX_BLOCKS)
          for (let b = 0; b < blocks; b++) {
            setTimeout(() => {
              setFilled(prev => {
                const next = [...prev]
                next[ci] = b + 1
                return next
              })
            }, ci * 80 + b * 50)
          }
        })
      }
    }, { threshold: 0.2 })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [maxSkills])

  return (
    <div ref={containerRef} className="hidden md:block mt-8" data-testid="pixel-bar-chart">
      <div className="flex flex-col gap-2.5">
        {skillCategories.map((cat, ci) => {
          const blocks = Math.round((cat.skills.length / maxSkills) * MAX_BLOCKS)
          const isActive = cat.id === activeId
          return (
            <div
              key={cat.id}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => onCategoryClick(cat.id)}
              data-testid={`bar-${cat.id}`}
            >
              {/* Label */}
              <span
                className={`font-mono text-[11px] text-right flex-shrink-0 transition-colors duration-[120ms] ${
                  isActive
                    ? 'text-[var(--px-accent)]'
                    : 'text-[var(--px-muted)] group-hover:text-[var(--px-accent)]'
                }`}
                style={{ width: 148 }}
              >
                {cat.label}
              </span>

              {/* Pixel blocks */}
              <div className="flex items-center gap-[3px] flex-1">
                {Array.from({ length: MAX_BLOCKS }).map((_, bi) => {
                  const isFilled = bi < filled[ci]
                  const isActiveFilled = isActive && isFilled
                  return (
                    <div
                      key={bi}
                      style={{
                        width: 14,
                        height: 14,
                        background: isFilled ? 'var(--px-accent)' : 'transparent',
                        border: `1px solid ${isFilled ? 'var(--px-accent)' : 'var(--px-border)'}`,
                        opacity: isActiveFilled ? 1 : isFilled ? 0.75 : 1,
                        transition: 'background 0.08s ease, border-color 0.08s ease, opacity 0.12s',
                        boxShadow: isActiveFilled ? '0 0 4px var(--px-accent)' : 'none',
                      }}
                    />
                  )
                })}
              </div>

              {/* Count */}
              <span className="font-mono text-[10px] text-[var(--px-muted)] flex-shrink-0 w-14">
                {cat.skills.length} skills
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
