import { ReactElement } from "react"
import { BlogPost, categoryConfig } from "@/data/blog"

function BugIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="2" width="4" height="4" />
      <rect x="3" y="1" width="2" height="1" />
      <rect x="1" y="3" width="1" height="2" /><rect x="6" y="3" width="1" height="2" />
      <rect x="1" y="5" width="1" height="1" /><rect x="6" y="5" width="1" height="1" />
    </svg>
  )
}
function TerminalIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="1" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="2" y="3" width="1" height="1" /><rect x="3" y="4" width="1" height="1" /><rect x="2" y="5" width="1" height="1" />
      <rect x="5" y="5" width="2" height="1" />
    </svg>
  )
}
function FolderIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="3" width="6" height="4" />
      <rect x="1" y="2" width="3" height="1" />
    </svg>
  )
}
function FlaskIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="3" y="1" width="2" height="3" />
      <rect x="2" y="4" width="4" height="1" />
      <rect x="1" y="5" width="6" height="2" />
      <rect x="2" y="7" width="4" height="1" />
    </svg>
  )
}
function ThoughtIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="1" width="6" height="4" />
      <rect x="1" y="5" width="1" height="1" />
      <rect x="2" y="5" width="4" height="1" />
      <rect x="2" y="6" width="1" height="1" />
      <rect x="3" y="3" width="1" height="1" /><rect x="5" y="3" width="1" height="1" />
    </svg>
  )
}
function MapIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="1" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="3" y="1" width="1" height="4" />
      <rect x="4" y="2" width="1" height="1" />
      <rect x="2" y="5" width="3" height="1" />
    </svg>
  )
}

const iconMap: Record<BlogPost["category"], () => ReactElement> = {
  Debug: BugIcon, Tutorial: TerminalIcon, Project: FolderIcon,
  Research: FlaskIcon, Opinion: ThoughtIcon, Journey: MapIcon
}

interface Props { category: BlogPost["category"] }

export function CategoryBadge({ category }: Props) {
  const cfg = categoryConfig[category]
  const Icon = iconMap[category]
  return (
    <span
      className="flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 border"
      style={{ color: cfg.color, borderColor: cfg.color }}
    >
      <Icon />
      {cfg.label}
    </span>
  )
}
