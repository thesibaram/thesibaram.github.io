import { useEffect, useRef, useState } from "react"
import { certifications } from "@/data/certifications"

export function CertStats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const earned     = certifications.filter(c => c.status === "completed").length
  const inProgress = certifications.filter(c => c.status === "in-progress").length
  const planned    = certifications.filter(c => c.status === "planned").length
  const total      = certifications.length

  const segments = [
    { count: earned,     label: "Earned",      color: "#22C55E"          },
    { count: inProgress, label: "In Progress",  color: "#F59E0B"          },
    { count: planned,    label: "Planned",      color: "var(--px-border)" },
  ]

  return (
    <div ref={ref} className="mt-8 flex flex-col gap-3" data-testid="cert-stats">
      {/* Pixel segmented progress bar */}
      <div className="flex h-2.5 w-full border border-[var(--px-border)] overflow-hidden">
        {segments.map((seg, i) => (
          <div
            key={seg.label}
            style={{
              width: visible && total > 0 ? `${(seg.count / total) * 100}%` : "0%",
              background: seg.color,
              transition: `width 0.7s ease ${i * 0.18}s`,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      {/* Legend row */}
      <div className="flex items-center gap-5 flex-wrap">
        {segments.map(seg => (
          <div key={seg.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: seg.color }} />
            <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-wider">
              {seg.count} {seg.label}
            </span>
          </div>
        ))}
        <span className="font-mono text-[10px] text-[var(--px-muted)] ml-auto">
          {total} total &middot; {new Set(certifications.map(c => c.category)).size} domains
        </span>
      </div>
    </div>
  )
}
