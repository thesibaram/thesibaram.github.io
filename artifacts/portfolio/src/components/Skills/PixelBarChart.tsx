import { useEffect, useRef, useState } from "react"
import { skillCategories } from "@/data/skills"

const MAX_BLOCKS = 8

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
            }, ci * 100 + b * 60)
          }
        })
      }
    }, { threshold: 0.3 })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [maxSkills])

  return (
    <div ref={containerRef} className="hidden md:flex flex-col gap-2 mt-8" data-testid="pixel-bar-chart">
      {skillCategories.map((cat, ci) => {
        const blocks = Math.round((cat.skills.length / maxSkills) * MAX_BLOCKS)
        const isActive = cat.id === activeId
        return (
          <div
            key={cat.id}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onCategoryClick(cat.id)}
            data-testid={`bar-${cat.id}`}
          >
            <span
              className={`font-mono text-[11px] text-right flex-shrink-0 transition-colors duration-[120ms] ${isActive ? 'text-[var(--px-accent)]' : 'text-[var(--px-muted)] group-hover:text-[var(--px-accent)]'}`}
              style={{ width: 140 }}
            >
              {cat.label}
            </span>
            <div className="flex items-center gap-[3px]">
              {Array.from({ length: MAX_BLOCKS }).map((_, bi) => (
                <div
                  key={bi}
                  style={{
                    width: 12, height: 12,
                    background: bi < filled[ci] ? 'var(--px-accent)' : 'transparent',
                    border: `1px solid ${bi < filled[ci] ? 'var(--px-accent)' : 'var(--px-border)'}`,
                    opacity: bi < filled[ci] ? 0.9 : 1,
                    transition: 'background 0.1s, border-color 0.1s',
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] text-[var(--px-muted)]">
              {cat.skills.length} skills
            </span>
          </div>
        )
      })}
    </div>
  )
}