import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { hero } from "@/data/hero"

function StatCounter({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [display, setDisplay] = useState("0")
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
    const suffix = value.replace(/[0-9.]/g, '')
    if (isNaN(numeric) || suffix === value) {
      const t = setTimeout(() => setDisplay(value), delay * 1000)
      return () => clearTimeout(t)
    }
    const start = performance.now() + delay * 1000
    const duration = 1200

    const tick = (now: number) => {
      if (now < start) { rafRef.current = requestAnimationFrame(tick); return }
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numeric)
      setDisplay(current + suffix)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay * 0.1, duration: 0.4 }}
      className="flex flex-col items-center gap-0.5 flex-1 min-w-0 px-1"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span
        className="font-mono font-bold text-[var(--px-accent)] leading-none"
        style={{ fontSize: "clamp(16px, 4.5vw, 28px)" }}
      >
        {display}
      </span>
      <span
        className="font-sans text-[var(--px-muted)] uppercase tracking-wide text-center leading-tight w-full"
        style={{ fontSize: "clamp(11px, 2vw, 12px)" }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export function HeroStats() {
  return (
    <div
      className="flex items-stretch pt-6 md:pt-8 w-full"
      data-testid="hero-stats"
    >
      {hero.stats.map((s, i) => (
        <div key={s.label} className="flex items-stretch flex-1 min-w-0">
          <StatCounter value={s.value} label={s.label} delay={i * 0.1} />
          {i < hero.stats.length - 1 && (
            <div className="w-px bg-[var(--px-border)] self-stretch flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}
