import { motion } from "framer-motion"

interface Props { onReset: () => void }

export function EmptyState({ onReset }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full flex flex-col items-center gap-4 py-16 text-center"
    >
      <svg viewBox="0 0 16 16" width="40" height="40" fill="none" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
        <rect x="2" y="3" width="12" height="10" stroke="var(--px-border)" strokeWidth="1" />
        <rect x="2" y="3" width="12" height="3" fill="var(--px-border)" opacity="0.3" />
        <rect x="5" y="8" width="6" height="1" fill="var(--px-border)" />
        <rect x="5" y="10" width="4" height="1" fill="var(--px-border)" />
      </svg>
      <p className="font-mono text-[13px] text-[var(--px-text)]">No posts match this filter.</p>
      <button
        onClick={onReset}
        className="font-mono text-[11px] px-4 py-2 border border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] transition-all duration-[120ms]"
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px var(--px-accent)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
      >
        [ Reset Filters ]
      </button>
    </motion.div>
  )
}
