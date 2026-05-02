import { motion } from "framer-motion"
import { hero } from "@/data/hero"

export function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0 }}
      className="inline-flex items-center gap-1.5 border border-[var(--px-accent)] px-2.5 py-1 mb-5"
      data-testid="status-badge"
    >
      <span
        className="w-1.5 h-1.5 block flex-shrink-0"
        style={{
          background: '#22C55E',
          animation: 'blink 1s step-end infinite'
        }}
      />
      <span className="font-mono text-[10px] text-[var(--px-accent)] uppercase tracking-widest">
        {hero.status.label}
      </span>
    </motion.div>
  )
}