import { BlogPost, BlogStatus } from "@/data/blog"

type StatusFilter = "all" | BlogStatus
type CategoryFilter = "all" | BlogPost["category"]

interface Props {
  statusFilter: StatusFilter
  categoryFilter: CategoryFilter
  onStatusChange: (s: StatusFilter) => void
  onCategoryChange: (c: CategoryFilter) => void
}

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
  { value: "coming-soon", label: "Coming Soon" },
]

const CATEGORY_OPTIONS: { value: CategoryFilter; label: string; color?: string }[] = [
  { value: "all",      label: "All"      },
  { value: "Debug",    label: "Debug",    color: "#EF4444"            },
  { value: "Tutorial", label: "Tutorial", color: "#22C55E"            },
  { value: "Project",  label: "Project",  color: "var(--px-accent)"   },
  { value: "Research", label: "Research", color: "var(--px-accent2)"  },
  { value: "Opinion",  label: "Opinion",  color: "#F59E0B"            },
  { value: "Journey",  label: "Journey",  color: "#3B82F6"            },
]

function FilterPill({ label, active, color, onClick }: { label: string; active: boolean; color?: string; onClick: () => void }) {
  const activeColor = color || "var(--px-accent)"
  return (
    <button
      onClick={onClick}
      className="font-mono text-[11px] px-3.5 py-1.5 border whitespace-nowrap flex-shrink-0 transition-all duration-[120ms]"
      style={{
        background: active ? activeColor : 'transparent',
        color: active ? '#0D0D10' : 'var(--px-muted)',
        borderColor: active ? activeColor : 'var(--px-border)',
      }}
      onMouseEnter={e => { if (!active) { const el = e.currentTarget as HTMLElement; el.style.transform = 'translate(-2px,-2px)'; el.style.boxShadow = '3px 3px 0px var(--px-accent)' } }}
      onMouseLeave={e => { if (!active) { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '' } }}
    >
      {label}
    </button>
  )
}

export function BlogFilter({ statusFilter, categoryFilter, onStatusChange, onCategoryChange }: Props) {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {STATUS_OPTIONS.map(opt => (
          <FilterPill key={opt.value} label={opt.label} active={statusFilter === opt.value} onClick={() => onStatusChange(opt.value)} />
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {CATEGORY_OPTIONS.map(opt => (
          <FilterPill key={opt.value} label={opt.label} active={categoryFilter === opt.value} color={opt.color} onClick={() => onCategoryChange(opt.value as CategoryFilter)} />
        ))}
      </div>
    </div>
  )
}
