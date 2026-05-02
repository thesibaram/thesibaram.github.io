import { categoryConfig, Certification } from "@/data/certifications"
import { PinHead } from "./PinHead"

const categories = Object.keys(categoryConfig) as Certification["category"][]

export function CategoryLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
      <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest flex-shrink-0">
        Pin Colors:
      </span>
      {categories.map(cat => {
        const cfg = categoryConfig[cat]
        return (
          <div key={cat} className="flex items-center gap-1.5">
            <PinHead color={cfg.color} size="sm" />
            <span className="font-mono text-[10px] text-[var(--px-muted)]">{cfg.label}</span>
          </div>
        )
      })}
      <div className="flex items-center gap-1.5">
        <PinHead color="var(--px-border)" size="sm" />
        <span className="font-mono text-[10px] text-[var(--px-muted)]">Placeholder</span>
      </div>
    </div>
  )
}
