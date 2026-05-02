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
      <div style={{ zIndex: 1, marginBottom: -6, position: "relative" }}>
        <PinHead color={pinColor} size="md" />
      </div>

      {/* Sticky note */}
      <div
        className="relative cursor-pointer"
        style={{
          width: 140,
          height: 140,
          background: "var(--sticky-bg, #FFF9C4)",
          boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
          transition: "transform 200ms ease, box-shadow 200ms ease",
        }}
        onClick={placeholder ? undefined : onOpen}
        title={placeholder ? "Add your real cert to /data/certifications.ts" : undefined}
        onMouseEnter={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = `rotate(${rotation * 1.3}deg) scale(1.05) translateY(-4px)`
            el.style.boxShadow = "5px 5px 0px rgba(0,0,0,0.18)"
          }
        }}
        onMouseLeave={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = ""
            el.style.boxShadow = "3px 3px 0px rgba(0,0,0,0.1)"
          }
        }}
      >
        {/* Folded corner — CSS triangle trick */}
        <div
          className="absolute top-0 right-0"
          style={{
            width: 20,
            height: 20,
            background: `linear-gradient(225deg, var(--px-bg) 50%, rgba(0,0,0,0.08) 50%)`,
          }}
        />

        {/* Content */}
        <div className="p-3 flex flex-col gap-2 h-full">
          <div
            className="font-mono text-[8px] font-bold leading-[1.35] uppercase"
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
          <div className="font-mono text-[7px] italic text-[var(--px-muted)]">
            {cert.issuedDate}
          </div>
          <div className="font-mono text-[7px] italic text-[var(--px-muted)]">
            // planned
          </div>
        </div>
      </div>
    </motion.div>
  )
}
