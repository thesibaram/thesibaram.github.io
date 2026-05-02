import { motion } from "framer-motion"

// Trophy icon 8x8
function TrophyIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art inline-block mr-1">
      <rect x="2" y="0" width="4" height="4" />
      <rect x="1" y="0" width="1" height="3" />
      <rect x="6" y="0" width="1" height="3" />
      <rect x="3" y="4" width="2" height="2" />
      <rect x="1" y="6" width="6" height="2" />
    </svg>
  )
}

// Chip icon 8x8
function ChipIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art inline-block mr-1">
      <rect x="2" y="2" width="4" height="4" />
      {/* pins */}
      <rect x="0" y="3" width="2" height="1" />
      <rect x="6" y="3" width="2" height="1" />
      <rect x="3" y="0" width="1" height="2" />
      <rect x="3" y="6" width="1" height="2" />
    </svg>
  )
}

interface StatRowProps {
  label: string
  value: string
  index: number
  isLast: boolean
}

export function StatRow({ label, value, index, isLast }: StatRowProps) {
  const isStatus = label === "STATUS"
  const isBug = label === "CURRENT BUG"
  const isSIH = label === "SIH 2024"
  const isGPU = label === "GPU"

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className={`flex items-center justify-between h-8 ${!isLast ? "border-b border-[var(--px-border)]" : ""}`}
    >
      <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-wide flex-shrink-0 mr-2">
        {label}
      </span>
      {/* Dotted separator */}
      <span className="flex-1 border-b border-dotted border-[var(--px-border)] mx-2" />
      <span
        className={`font-mono text-[12px] flex items-center gap-1 flex-shrink-0 ${isBug ? "italic" : ""}`}
        style={{
          color: isBug ? "#F59E0B" : "var(--px-text)"
        }}
      >
        {isStatus && (
          <span
            className="w-1.5 h-1.5 block flex-shrink-0"
            style={{
              background: "#22C55E",
              animation: "blink 1s step-end infinite"
            }}
          />
        )}
        {isSIH && <TrophyIcon />}
        {isGPU && <ChipIcon />}
        {value}
      </span>
    </motion.div>
  )
}
