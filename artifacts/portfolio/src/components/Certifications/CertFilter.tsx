import { Certification } from "@/data/certifications"

type StatusFilter = "all" | Certification["status"]
type CategoryFilter = "all" | Certification["category"]

interface Props {
  statusFilter: StatusFilter
  categoryFilter: CategoryFilter
  onStatusChange: (s: StatusFilter) => void
  onCategoryChange: (c: CategoryFilter) => void
}

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "planned", label: "Planned" },
]

const CATEGORY_OPTIONS: { value: CategoryFilter; label: string; color?: string }[] = [
  { value: "all",     label: "All" },
  { value: "ML",      label: "ML",      color: "var(--px-accent)"  },
  { value: "DL",      label: "DL",      color: "var(--px-accent2)" },
  { value: "CV",      label: "CV",      color: "#22C55E"            },
  { value: "Dev",     label: "Dev",     color: "#F59E0B"            },
  { value: "Cloud",   label: "Cloud",   color: "#3B82F6"            },
  { value: "General", label: "General", color: "var(--px-border)"  },
]

function FilterPill({
  label, active, color, onClick
}: { label: string; active: boolean; color?: string; onClick: () => void }) {
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
      onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.cssText += `;transform:translate(-2px,-2px);box-shadow:3px 3px 0px var(--px-accent)` } }}
      onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '' } }}
    >
      {label}
    </button>
  )
}

export function CertFilter({ statusFilter, categoryFilter, onStatusChange, onCategoryChange }: Props) {
  return (
    <div className="flex flex-col gap-2 mt-6">
      {/* Status row */}
      <div className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="flex gap-2">
          {STATUS_OPTIONS.map(opt => (
            <FilterPill
              key={opt.value}
              label={opt.label}
              active={statusFilter === opt.value}
              onClick={() => onStatusChange(opt.value)}
            />
          ))}
        </div>
      </div>
      {/* Category row */}
      <div className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="flex gap-2">
          {CATEGORY_OPTIONS.map(opt => (
            <FilterPill
              key={opt.value}
              label={opt.label}
              active={categoryFilter === opt.value}
              color={opt.color}
              onClick={() => onCategoryChange(opt.value as CategoryFilter)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
