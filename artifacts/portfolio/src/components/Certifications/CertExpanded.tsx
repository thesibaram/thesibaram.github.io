import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Certification } from "@/data/certifications"
import { PixelChip } from "@/components/ui/PixelChip"

interface Props { cert: Certification; isOpen: boolean }

export function CertExpanded({ cert, isOpen }: Props) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    if (cert.credentialId) {
      navigator.clipboard.writeText(cert.credentialId).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 800)
      })
    }
  }

  const statusNote = cert.status === "completed"
    ? `Verified credential, earned ${cert.issuedDate}`
    : cert.status === "in-progress"
    ? "Currently working toward this certification"
    : "Queued for future learning path"

  const statusNoteColor = cert.status === "in-progress"
    ? "#F59E0B"
    : cert.status === "planned"
    ? "var(--px-muted)"
    : "var(--px-muted)"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="border-t border-dashed border-[var(--px-border)] px-5 py-4 flex flex-col gap-4">
            {/* Credential ID */}
            {cert.credentialId && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-wider">Credential ID</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] text-[var(--px-text)]">{cert.credentialId}</span>
                  <button
                    onClick={handleCopy}
                    className="font-mono text-[10px] px-2 py-0.5 border border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] transition-colors duration-100"
                    style={{ color: copied ? 'var(--px-accent)' : undefined, borderColor: copied ? 'var(--px-accent)' : undefined }}
                    title="Copy credential ID"
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

            {/* Verify button */}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between font-mono text-[12px] text-[var(--px-accent)] border border-[var(--px-accent)] px-4 py-2.5 transition-all duration-[120ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--px-accent)]/10"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px var(--px-accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                [ VERIFY CREDENTIAL ]
                <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
                  <rect x="5" y="1" width="2" height="1" /><rect x="6" y="2" width="1" height="2" />
                  <rect x="1" y="1" width="4" height="1" /><rect x="1" y="2" width="1" height="4" />
                  <rect x="2" y="6" width="4" height="1" /><rect x="3" y="4" width="3" height="1" />
                </svg>
              </a>
            )}

            {/* Status note */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px]" style={{ color: statusNoteColor }}>
                {statusNote}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
