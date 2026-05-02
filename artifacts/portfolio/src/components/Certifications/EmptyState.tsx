import { motion } from "framer-motion"

interface Props { onReset: () => void }

export function EmptyState({ onReset }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="col-span-full flex flex-col items-center gap-4 py-16 text-center"
    >
      <svg viewBox="0 0 24 24" width="48" height="48" fill="none" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
        <rect x="3" y="4" width="18" height="16" stroke="var(--px-border)" strokeWidth="1" />
        <rect x="3" y="4" width="18" height="4" fill="var(--px-border)" opacity="0.3" />
        <rect x="7" y="10" width="10" height="1" fill="var(--px-border)" />
        <rect x="7" y="13" width="6" height="1" fill="var(--px-border)" />
      </svg>
      <div>
        <p className="font-mono text-[13px] text-[var(--px-text)]">No certifications in this category.</p>
        <p className="font-mono text-[11px] text-[var(--px-muted)] mt-1">Try a different filter combination.</p>
      </div>
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
