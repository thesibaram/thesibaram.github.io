import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Certification } from "@/data/certifications"
import { CategoryBadge } from "./CategoryBadge"
import { StatusChip } from "./StatusChip"
import { PixelChip } from "@/components/ui/PixelChip"

interface Props {
  cert: Certification | null
  onClose: () => void
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="0" width="2" height="2" /><rect x="8" y="0" width="2" height="2" />
      <rect x="2" y="2" width="2" height="2" /><rect x="6" y="2" width="2" height="2" />
      <rect x="4" y="4" width="2" height="2" />
      <rect x="2" y="6" width="2" height="2" /><rect x="6" y="6" width="2" height="2" />
      <rect x="0" y="8" width="2" height="2" /><rect x="8" y="8" width="2" height="2" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 8 8" width="10" height="10" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="2" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="1" y="2" width="6" height="2" />
      <rect x="2" y="1" width="1" height="1" /><rect x="5" y="1" width="1" height="1" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="1" width="3" height="1" /><rect x="6" y="2" width="1" height="2" />
      <rect x="1" y="4" width="5" height="1" /><rect x="1" y="5" width="1" height="2" />
      <rect x="2" y="6" width="5" height="1" />
    </svg>
  )
}

export function CertModal({ cert, onClose }: Props) {
  const [copied, setCopied] = useState(false)
  const isOpen = cert !== null

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    if (isOpen) window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, onClose])

  function handleCopy() {
    if (cert?.credentialId) {
      navigator.clipboard.writeText(cert.credentialId).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 800)
      })
    }
  }

  const statusNote = cert?.status === "completed"
    ? `Verified credential, earned ${cert?.issuedDate}`
    : cert?.status === "in-progress"
    ? "Currently working toward this certification"
    : "Queued for future learning path"

  return (
    <AnimatePresence>
      {cert && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.72)" }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed z-50 flex flex-col"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(480px, 90vw)",
              maxHeight: "80vh",
              background: "var(--px-surface)",
              border: "2px solid var(--px-border)",
              overflowY: "auto",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex-shrink-0"
              style={{
                background: "var(--px-bg)",
                borderBottom: "1px solid var(--px-border)",
                padding: "16px 20px",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <CategoryBadge category={cert.category} />
                <button
                  onClick={onClose}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--px-muted)] border border-[var(--px-border)] px-2 py-1 transition-all duration-[120ms]"
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--px-accent)"; el.style.color = "var(--px-accent)" }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--px-border)"; el.style.color = "var(--px-muted)" }}
                >
                  <CloseIcon /> ESC
                </button>
              </div>
              <h3 className="font-mono text-[16px] font-bold leading-snug text-[var(--px-text)]">
                {cert.title}
              </h3>
              <p className="font-sans text-[13px] text-[var(--px-muted)] mt-1">{cert.issuer}</p>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col gap-5 p-5">
              {/* Date + Status */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-[var(--px-muted)]">
                  <CalendarIcon />
                  <span className="font-mono text-[12px]">{cert.issuedDate}</span>
                </div>
                <StatusChip status={cert.status} />
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-wider">Credential ID</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[12px] text-[var(--px-text)] truncate">{cert.credentialId}</span>
                    <button
                      onClick={handleCopy}
                      className="font-mono text-[10px] px-2 py-0.5 border border-[var(--px-border)] flex-shrink-0 transition-colors duration-100"
                      style={{
                        color: copied ? "var(--px-accent)" : "var(--px-muted)",
                        borderColor: copied ? "var(--px-accent)" : undefined,
                      }}
                    >
                      {copied ? "COPIED" : "COPY"}
                    </button>
                  </div>
                </div>
              )}

              {/* Skills */}
              {cert.skills.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-wider">Validates</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map(skill => (
                      <PixelChip key={skill}>{skill}</PixelChip>
                    ))}
                  </div>
                </div>
              )}

              {/* Verify link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-mono text-[12px] text-[var(--px-accent)] border border-[var(--px-accent)] px-4 py-2.5 transition-all duration-[120ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--px-accent)]/10"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0px var(--px-accent)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none" }}
                >
                  [ VERIFY CREDENTIAL ]
                  <LinkIcon />
                </a>
              )}

              {/* Status note */}
              <span
                className="font-mono text-[11px]"
                style={{
                  color: cert.status === "in-progress" ? "#F59E0B" : "var(--px-muted)",
                }}
              >
                {statusNote}
              </span>
            </div>

            {/* Footer */}
            <div
              className="flex-shrink-0 flex items-center justify-between"
              style={{
                borderTop: "1px solid var(--px-border)",
                background: "var(--px-bg)",
                padding: "12px 20px",
              }}
            >
              <div
                className="self-stretch w-1"
                style={{ background: "var(--px-accent)", marginRight: 12 }}
              />
              <button
                onClick={onClose}
                className="font-mono text-[11px] text-[var(--px-muted)] hover:text-[var(--px-text)] transition-colors duration-100 ml-auto"
              >
                [ Close ]
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
