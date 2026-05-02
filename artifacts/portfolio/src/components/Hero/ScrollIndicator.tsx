import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handler = () => { if (window.scrollY > 80) setVisible(false) }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
          data-testid="scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 8 8" width="16" height="16" fill="var(--px-muted)" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
              <rect x="3" y="0" width="2" height="2" />
              <rect x="2" y="2" width="4" height="2" />
              <rect x="1" y="4" width="6" height="2" />
            </svg>
          </motion.div>
          <span className="font-mono text-[9px] text-[var(--px-muted)] tracking-[3px] uppercase">Scroll</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}