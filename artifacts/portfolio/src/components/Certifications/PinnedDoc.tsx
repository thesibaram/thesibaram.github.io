import { motion } from "framer-motion"
import { Certification, categoryConfig } from "@/data/certifications"
import { PinHead } from "./PinHead"
import { DocContent } from "./DocContent"
import { TornEdge } from "./TornEdge"
import { getRotation } from "./certUtils"

interface Props {
  cert: Certification
  index: number
  onOpen: () => void
}

const isPlaceholder = (title: string) => title.startsWith("//")

export function PinnedDoc({ cert, index, onOpen }: Props) {
  const placeholder = isPlaceholder(cert.title)
  const isInProgress = cert.status === "in-progress"

  const rotMin = isInProgress ? -6 : -3
  const rotMax = isInProgress ?  3 :  4
  const rotation = getRotation(cert.id, rotMin, rotMax)

  const catConfig = categoryConfig[cert.category]
  const pinColor = placeholder ? "var(--px-border)" : isInProgress ? "#F59E0B" : catConfig.color

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
      style={{ opacity: placeholder ? 0.65 : 1 }}
    >
      {/* Pin above document — centered */}
      <div style={{ zIndex: 1, marginBottom: -7, position: "relative" }}>
        <PinHead color={pinColor} size="md" />
      </div>

      {/* Document */}
      <div
        className="relative"
        style={{
          width: 160,
          height: 200,
          background: "var(--doc-bg, #FAFAF7)",
          border: `1px solid var(--px-border)`,
          boxShadow: "4px 4px 0px rgba(0,0,0,0.14)",
          cursor: placeholder ? "default" : "pointer",
          transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
        }}
        onClick={placeholder ? undefined : onOpen}
        title={placeholder ? "Add your real cert to /data/certifications.ts" : undefined}
        onMouseEnter={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = `rotate(${rotation}deg) scale(1.05) translateY(-4px)`
            el.style.boxShadow = "6px 6px 0px rgba(0,0,0,0.22)"
            el.style.borderColor = catConfig.color
          }
        }}
        onMouseLeave={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = ""
            el.style.boxShadow = "4px 4px 0px rgba(0,0,0,0.14)"
            el.style.borderColor = "var(--px-border)"
          }
        }}
      >
        <DocContent cert={cert} isPlaceholder={placeholder} />

        {/* Torn bottom edge for in-progress */}
        {isInProgress && <TornEdge />}
      </div>
    </motion.div>
  )
}
