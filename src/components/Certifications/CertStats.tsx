import { useEffect, useRef, useState } from "react"
import { certifications } from "@/data/certifications"

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setVal(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return val
}

export function CertStats() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const earned     = certifications.filter(c => c.status === "completed").length
  const inProgress = certifications.filter(c => c.status === "in-progress").length
  const planned    = certifications.filter(c => c.status === "planned").length
  const domains    = new Set(certifications.map(c => c.category)).size

  const v1 = useCountUp(earned, 900, triggered)
  const v2 = useCountUp(inProgress, 900, triggered)
  const v3 = useCountUp(planned, 900, triggered)
  const v4 = useCountUp(domains, 900, triggered)

  const stats = [
    { value: v1, label: "Earned",      color: "#22C55E"           },
    { value: v2, label: "In Progress", color: "#F59E0B"           },
    { value: v3, label: "Planned",     color: "var(--px-muted)"   },
    { value: v4, label: "Domains",     color: "var(--px-accent)"  },
  ]

  return (
    <div ref={ref} className="flex mt-8 border border-[var(--px-border)] divide-x divide-[var(--px-border)]">
      {stats.map(s => (
        <div key={s.label} className="flex-1 flex flex-col items-center py-4 gap-1">
          <span className="font-mono text-2xl font-bold" style={{ color: s.color }}>{s.value}</span>
          <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
