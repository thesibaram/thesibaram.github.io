import { motion } from "framer-motion"
import { about } from "../../data/about"

export function TerminalBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border border-[var(--px-border)]"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-[var(--px-border)]"
        style={{ background: "var(--px-border)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 block" style={{ background: "#FF5F57" }} />
          <span className="w-2 h-2 block" style={{ background: "#FFBD2E" }} />
          <span className="w-2 h-2 block" style={{ background: "#28C840" }} />
        </div>
        <span className="font-mono text-[10px] text-[var(--px-muted)]">about.md</span>
      </div>

      {/* Bio paragraphs */}
      <div className="p-5 flex flex-col gap-4" style={{ background: "var(--px-surface)" }}>
        {about.bio.map((para, i) => (
          <p
            key={i}
            className="font-sans text-[13px] text-[var(--px-text)] leading-[1.75]"
            style={{ opacity: 0.9 }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Open to work status bar */}
      <div
        className="px-4 py-3 border-t border-[var(--px-border)] flex items-center gap-3"
        style={{ background: "var(--px-bg)" }}
      >
        <span
          className="w-2 h-2 block flex-shrink-0"
          style={{ background: "#22C55E", animation: "blink 1.2s step-start infinite" }}
        />
        <span className="font-mono text-[11px] text-[var(--px-accent)]">
          {about.status}
        </span>
      </div>
    </motion.div>
  )
}
