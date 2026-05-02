import { motion } from "framer-motion"
import { PixelSprite } from "./PixelSprite"
import { PixelScene } from "./PixelScene"

export function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="hidden md:flex items-center justify-center relative"
      data-testid="hero-right"
    >
      {/* Pixel decorative frame */}
      <div className="relative border-2 border-dashed border-[var(--px-border)] p-8 w-full max-w-xs">
        {/* Frame label */}
        <div
          className="absolute top-[-10px] left-1/2 -translate-x-1/2 font-mono text-[10px] text-[var(--px-muted)] bg-[var(--px-bg)] px-2 whitespace-nowrap"
        >
          [ OPERATOR: SIBARAM_B ]
        </div>
        {/* Corner accents */}
        {/* TL */}
        <span className="absolute top-[-4px] left-[-4px] w-4 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute top-[-4px] left-[-4px] w-0.5 h-4 bg-[var(--px-accent)]" />
        {/* TR */}
        <span className="absolute top-[-4px] right-[-4px] w-4 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute top-[-4px] right-[-4px] w-0.5 h-4 bg-[var(--px-accent)]" />
        {/* BL */}
        <span className="absolute bottom-[-4px] left-[-4px] w-4 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-4px] left-[-4px] w-0.5 h-4 bg-[var(--px-accent)]" />
        {/* BR */}
        <span className="absolute bottom-[-4px] right-[-4px] w-4 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-4px] right-[-4px] w-0.5 h-4 bg-[var(--px-accent)]" />

        {/* Scene context */}
        <div className="relative h-72 flex items-center justify-center">
          <PixelScene />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="relative z-10"
          >
            <PixelSprite />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}