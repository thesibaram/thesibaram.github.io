import React from "react"
import { skillCategories } from "@/data/skills"

function BrainIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{imageRendering:'pixelated'}}>
      <rect x="2" y="4" width="5" height="1" /><rect x="1" y="5" width="6" height="1" />
      <rect x="1" y="6" width="6" height="3" /><rect x="2" y="9" width="5" height="1" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="9" y="4" width="5" height="1" /><rect x="9" y="5" width="6" height="1" />
      <rect x="9" y="6" width="6" height="3" /><rect x="9" y="9" width="5" height="1" />
      <rect x="3" y="6" width="1" height="1" /><rect x="5" y="7" width="1" height="1" />
      <rect x="11" y="6" width="1" height="1" /><rect x="13" y="7" width="1" height="1" />
    </svg>
  )
}
function EyeIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{imageRendering:'pixelated'}}>
      <rect x="3" y="6" width="10" height="1" /><rect x="2" y="7" width="12" height="2" />
      <rect x="3" y="9" width="10" height="1" />
      <rect x="6" y="6" width="4" height="4" fill="var(--px-surface)" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="4" y="5" width="1" height="1" /><rect x="7" y="5" width="1" height="1" /><rect x="11" y="5" width="1" height="1" />
    </svg>
  )
}
function CodeIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{imageRendering:'pixelated'}}>
      <rect x="1" y="7" width="2" height="2" /><rect x="2" y="5" width="2" height="2" /><rect x="2" y="9" width="2" height="2" />
      <rect x="13" y="7" width="2" height="2" /><rect x="12" y="5" width="2" height="2" /><rect x="12" y="9" width="2" height="2" />
      <rect x="7" y="5" width="1" height="1" /><rect x="8" y="6" width="1" height="1" /><rect x="7" y="7" width="1" height="1" />
      <rect x="8" y="8" width="1" height="1" /><rect x="7" y="9" width="1" height="1" />
    </svg>
  )
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{imageRendering:'pixelated'}}>
      <rect x="2" y="10" width="3" height="4" /><rect x="6" y="6" width="3" height="8" /><rect x="10" y="8" width="3" height="6" />
      <rect x="1" y="14" width="14" height="1" />
    </svg>
  )
}
function TerminalIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{imageRendering:'pixelated'}}>
      <rect x="1" y="2" width="14" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="3" y="6" width="2" height="1" /><rect x="5" y="7" width="2" height="1" /><rect x="3" y="8" width="2" height="1" />
      <rect x="8" y="8" width="4" height="1" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{imageRendering:'pixelated'}}>
      <rect x="5" y="1" width="6" height="1" /><rect x="3" y="2" width="10" height="1" />
      <rect x="2" y="3" width="12" height="1" /><rect x="1" y="4" width="14" height="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="2" y="11" width="12" height="1" /><rect x="3" y="12" width="10" height="1" />
      <rect x="5" y="13" width="6" height="1" />
      <rect x="1" y="7" width="14" height="1" />
      <rect x="7" y="1" width="2" height="13" />
    </svg>
  )
}

const iconMap: Record<string, React.FC> = {
  brain: BrainIcon, eye: EyeIcon, code: CodeIcon,
  chart: ChartIcon, terminal: TerminalIcon, globe: GlobeIcon,
}

interface Props {
  activeId: string
  onChange: (id: string) => void
}

export function CategoryTabs({ activeId, onChange }: Props) {
  return (
    /* flex-wrap on mobile so all tabs are always visible, single row on md+ */
    <div
      className="flex flex-wrap md:flex-nowrap mt-8 gap-y-0"
      role="tablist"
      data-testid="category-tabs"
    >
      {skillCategories.map((cat, idx) => {
        const Icon = iconMap[cat.iconKey] ?? GlobeIcon
        const isActive = cat.id === activeId
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 font-mono text-[10px] md:text-[11px] border border-[var(--px-border)] transition-all duration-[120ms] whitespace-nowrap flex-shrink-0 ${
              /* On mobile: slight negative margin to merge borders; on first item no offset */
              idx === 0 ? "" : "-ml-px"
            } ${
              isActive
                ? "bg-[var(--px-accent)] text-[#0D0D10] border-[var(--px-accent)] z-10 relative"
                : "bg-transparent text-[var(--px-muted)] hover:text-[var(--px-text)]"
            }`}
            onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0px var(--px-accent)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none" }}
            data-testid={`tab-${cat.id}`}
          >
            <span className={isActive ? "text-[#0D0D10]" : "text-[var(--px-muted)]"}>
              <Icon />
            </span>
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
