import { motion } from "framer-motion"
import { Certification } from "@/data/certifications"
import { PinHead } from "./PinHead"
import { getRotation } from "./certUtils"

interface Props {
  cert: Certification
  index: number
  onOpen: () => void
}

const isPlaceholder = (title: string) => title.startsWith("//")

export function StickyNote({ cert, index, onOpen }: Props) {
  const placeholder = isPlaceholder(cert.title)
  const rotation = getRotation(cert.id, -8, 9)
  const pinColor = placeholder ? "var(--px-border)" : "var(--px-muted)"

  return (
    <motion.div
      initial={{ y: -40, opacity: 0, rotate: 0 }}
      whileInView={{ y: 0, opacity: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="flex flex-col items-center"
      style={{ opacity: placeholder ? 0.55 : 1 }}
    >
      {/* Pin above note */}
      <div style={{ zIndex: 1, marginBottom: -8, position: "relative" }}>
        <PinHead color={pinColor} size="md" />
      </div>

      {/* Sticky note — 200×200px, readable */}
      <div
        className="relative"
        style={{
          width: 200,
          height: 200,
          background: "var(--sticky-bg, #FFF9C4)",
          boxShadow: "4px 4px 0px rgba(0,0,0,0.1)",
          cursor: placeholder ? "default" : "pointer",
          transition: "transform 200ms ease, box-shadow 200ms ease",
        }}
        onClick={placeholder ? undefined : onOpen}
        title={placeholder ? "Add your real cert to /data/certifications.ts" : undefined}
        onMouseEnter={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = `rotate(${rotation * 1.3}deg) scale(1.04) translateY(-6px)`
            el.style.boxShadow = "6px 6px 0px rgba(0,0,0,0.16)"
          }
        }}
        onMouseLeave={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = ""
            el.style.boxShadow = "4px 4px 0px rgba(0,0,0,0.1)"
          }
        }}
      >
        {/* Folded corner */}
        <div
          className="absolute top-0 right-0"
          style={{
            width: 28,
            height: 28,
            background: "linear-gradient(225deg, var(--px-bg) 50%, rgba(0,0,0,0.08) 50%)",
          }}
        />

        {/* Content */}
        <div className="p-4 flex flex-col gap-2.5 h-full">
          {/* Title */}
          <div
            className="font-mono text-[11px] font-bold leading-snug pr-6"
            style={{
              color: placeholder ? "var(--px-muted)" : "var(--px-text)",
              fontStyle: placeholder ? "italic" : "normal",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {cert.title}
          </div>

          {/* Date */}
          <div className="font-mono text-[10px] text-[var(--px-muted)]">
            {cert.issuedDate}
          </div>

          {/* Planned label */}
          <div className="font-mono text-[10px] italic text-[var(--px-muted)]">
            // planned
          </div>

          {/* Click hint */}
          {!placeholder && (
            <div className="mt-auto font-mono text-[9px] text-[var(--px-muted)] opacity-60">
              click to view →
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
