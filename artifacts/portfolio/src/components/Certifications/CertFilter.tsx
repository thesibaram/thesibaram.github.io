import { Certification } from "@/data/certifications"

type StatusFilter = "all" | Certification["status"]

interface Props {
  statusFilter: StatusFilter
  onStatusChange: (s: StatusFilter) => void
}

const STATUS_OPTIONS: { value: StatusFilter; label: string; color: string }[] = [
  { value: "all",         label: "All",         color: "var(--px-accent)"  },
  { value: "completed",   label: "Earned",       color: "#22C55E"           },
  { value: "in-progress", label: "In Progress",  color: "#F59E0B"           },
  { value: "planned",     label: "Planned",      color: "var(--px-muted)"   },
]

export function CertFilter({ statusFilter, onStatusChange }: Props) {
  return (
    <div
      className="flex mt-6 border border-[var(--px-border)] overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
      role="tablist"
      data-testid="cert-filter"
    >
      {STATUS_OPTIONS.map((opt, i) => {
        const isActive = statusFilter === opt.value
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onStatusChange(opt.value)}
            className={`flex-1 min-w-[80px] flex items-center justify-center gap-1.5 font-mono text-[11px] py-2.5 px-4 whitespace-nowrap transition-all duration-[120ms] ${i > 0 ? 'border-l border-[var(--px-border)]' : ''}`}
            style={{
              background:  isActive ? opt.color : 'transparent',
              color:       isActive ? '#0D0D10'  : 'var(--px-muted)',
              borderColor: isActive ? opt.color  : undefined,
            }}
            onMouseEnter={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--px-text)' } }}
            onMouseLeave={e => { if (!isActive) { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--px-muted)' } }}
          >
            {opt.value !== "all" && (
              <div
                className="w-1.5 h-1.5 flex-shrink-0"
                style={{ background: isActive ? '#0D0D10' : opt.color }}
              />
            )}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
