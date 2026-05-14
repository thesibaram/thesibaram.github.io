import { memo } from "react"
import { motion } from "framer-motion"

export const PixelScene = memo(function PixelScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Floating { } braces - top left */}
      <motion.div
        className="absolute top-4 left-4 font-mono text-[var(--px-accent)] text-xl font-bold opacity-40"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ }"}
      </motion.div>

      {/* Floating CNN label - top right */}
      <motion.div
        className="absolute top-6 right-6 font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest opacity-30"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        CNN
      </motion.div>

      {/* Floating 94% - bottom right */}
      <motion.div
        className="absolute bottom-8 right-4 font-mono text-[var(--px-accent)] text-sm font-bold opacity-50"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        94%
      </motion.div>

      {/* Desk surface */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--px-border)]" />

      {/* Coffee mug - bottom right area */}
      <div className="absolute bottom-4 right-8 flex flex-col items-center gap-0">
        {/* Steam wisps */}
        <motion.div
          className="flex gap-1.5 mb-0.5"
          animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-1.5 bg-[var(--px-muted)] opacity-40" />
          <div className="w-0.5 h-2 bg-[var(--px-muted)] opacity-30" />
        </motion.div>
        {/* Cup body */}
        <svg viewBox="0 0 12 10" width="24" height="20" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
          <rect x="0" y="0" width="10" height="8" fill="var(--px-muted)" opacity="0.5" />
          <rect x="10" y="2" width="2" height="4" fill="var(--px-muted)" opacity="0.4" />
          <rect x="2" y="8" width="8" height="2" fill="var(--px-muted)" opacity="0.3" />
        </svg>
      </div>

      {/* Mini monitor - bottom left */}
      <div className="absolute bottom-2 left-4">
        <svg viewBox="0 0 24 20" width="48" height="40" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
          {/* Screen */}
          <rect x="0" y="0" width="20" height="14" fill="var(--px-surface)" />
          <rect x="0" y="0" width="20" height="14" fill="none" stroke="var(--px-border)" strokeWidth="1" />
          {/* Code lines */}
          <rect x="2" y="3" width="8" height="1" fill="var(--px-accent)" opacity="0.7" />
          <rect x="2" y="6" width="12" height="1" fill="var(--px-accent)" opacity="0.5" />
          <rect x="2" y="9" width="6" height="1" fill="var(--px-accent)" opacity="0.4" />
          {/* Stand */}
          <rect x="9" y="14" width="2" height="4" fill="var(--px-border)" />
          <rect x="5" y="18" width="10" height="2" fill="var(--px-border)" />
        </svg>
      </div>
    </div>
  )
})