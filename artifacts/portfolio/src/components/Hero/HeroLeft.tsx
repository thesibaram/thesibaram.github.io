import { useState } from "react"
import { motion } from "framer-motion"
import { about } from "@/data/about"

export function HeroLeft() {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center md:items-start w-full"
      data-testid="hero-left"
    >
      {/* Section indicator — desktop only */}
      <div className="hidden md:flex items-center gap-3 mb-8 w-full" style={{ maxWidth: 400 }}>
        <span className="font-mono text-[9px] text-[var(--px-muted)] tracking-[0.3em] uppercase">
          01 — Portfolio
        </span>
        <div className="h-px flex-1 bg-[var(--px-border)]" />
      </div>

      {/* Photo frame */}
      <div
        className="relative w-full"
        style={{ maxWidth: "min(360px, 100%)" }}
      >
        {/* Corner brackets */}
        <span className="absolute -top-2 -left-2 w-6 h-px bg-[var(--px-accent)] z-10" />
        <span className="absolute -top-2 -left-2 w-px h-6 bg-[var(--px-accent)] z-10" />
        <span className="absolute -top-2 -right-2 w-6 h-px bg-[var(--px-accent)] z-10" />
        <span className="absolute -top-2 -right-2 w-px h-6 bg-[var(--px-accent)] z-10" />
        <span className="absolute -bottom-2 -left-2 w-6 h-px bg-[var(--px-accent)] z-10" />
        <span className="absolute -bottom-2 -left-2 w-px h-6 bg-[var(--px-accent)] z-10" />
        <span className="absolute -bottom-2 -right-2 w-6 h-px bg-[var(--px-accent)] z-10" />
        <span className="absolute -bottom-2 -right-2 w-px h-6 bg-[var(--px-accent)] z-10" />

        {/* Image — shorter on mobile, taller on desktop */}
        <div
          className="overflow-hidden w-full"
          style={{ aspectRatio: "3/4", maxHeight: "clamp(240px, 55vw, 480px)" }}
        >
          {!imgError ? (
            <img
              src={about.image}
              alt="Sibaram Behera"
              className="w-full h-full object-cover object-top"
              style={{ filter: "saturate(0.88) contrast(1.04)" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[var(--px-surface)] border border-[var(--px-border)] flex items-center justify-center">
              <span className="font-mono text-[18px] text-[var(--px-muted)] tracking-widest">SB</span>
            </div>
          )}
        </div>

        {/* Bottom accent stripe */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "3px", background: "var(--px-accent)" }}
        />
      </div>

      {/* Caption — hidden on mobile to save space, shown on desktop */}
      <div
        className="hidden md:flex mt-6 items-start justify-between w-full"
        style={{ maxWidth: 400 }}
      >
        <div>
          <p className="font-mono text-[11px] font-semibold text-[var(--px-text)] tracking-wider">
            SIBARAM BEHERA
          </p>
          <p className="font-mono text-[9px] text-[var(--px-muted)] mt-1 tracking-wider">
            B.TECH EE · PMEC · BERHAMPUR, ODISHA
          </p>
        </div>
        <div
          className="flex items-center gap-1.5 px-2 py-1"
          style={{ border: "1px solid var(--px-accent)" }}
        >
          <span
            className="w-1.5 h-1.5 block flex-shrink-0"
            style={{ background: "#22C55E", animation: "blink 1s step-end infinite" }}
          />
          <span className="font-mono text-[9px] text-[var(--px-accent)] uppercase tracking-widest">
            Available
          </span>
        </div>
      </div>

      {/* Mobile-only caption (compact) */}
      <div className="flex md:hidden items-center justify-between w-full mt-3 px-1" style={{ maxWidth: "min(360px, 100%)" }}>
        <p className="font-mono text-[10px] text-[var(--px-muted)] tracking-wider">SIBARAM BEHERA · PMEC</p>
        <div
          className="flex items-center gap-1.5 px-2 py-0.5"
          style={{ border: "1px solid var(--px-accent)" }}
        >
          <span className="w-1.5 h-1.5 block flex-shrink-0" style={{ background: "#22C55E" }} />
          <span className="font-mono text-[8px] text-[var(--px-accent)] uppercase tracking-widest">Open</span>
        </div>
      </div>
    </motion.div>
  )
}
