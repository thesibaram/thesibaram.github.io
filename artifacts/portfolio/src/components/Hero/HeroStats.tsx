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
      className="flex flex-col items-center gap-1 px-3 md:px-4 first:pl-0 last:pr-0"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className="font-mono text-[22px] md:text-[28px] font-bold text-[var(--px-accent)] leading-none">{display}</span>
      <span className="font-sans text-[11px] md:text-[12px] text-[var(--px-muted)] uppercase tracking-wider text-center">{label}</span>
    </motion.div>
  )
}

export function HeroStats() {
  return (
    <div
      className="flex flex-wrap items-stretch pt-6 md:pt-8 gap-y-4"
      data-testid="hero-stats"
    >
      {hero.stats.map((s, i) => (
        <div key={s.label} className="flex items-stretch">
          <StatCounter value={s.value} label={s.label} delay={i * 0.1} />
          {i < hero.stats.length - 1 && (
            <div className="w-px bg-[var(--px-border)] mx-1 md:mx-2 self-stretch" />
          )}
        </div>
      ))}
    </div>
  )
}
