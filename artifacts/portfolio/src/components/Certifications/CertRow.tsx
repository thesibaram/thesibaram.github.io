import { motion } from "framer-motion"
import { Certification, categoryConfig } from "@/data/certifications"
import { PixelSeal } from "./PixelSeal"
import { StatusChip } from "./StatusChip"
import { CertExpanded } from "./CertExpanded"

interface Props {
  cert: Certification
  index: number
  isExpanded: boolean
  onToggle: () => void
}

const isPlaceholder = (title: string) => title.startsWith("//")

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 8 8" width="9" height="9" fill="currentColor"
      className="pixel-art flex-shrink-0" style={{ imageRendering: 'pixelated' }}
      animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
    >
      <rect x="1" y="2" width="1" height="1" /><rect x="2" y="3" width="1" height="1" />
      <rect x="3" y="4" width="2" height="1" /><rect x="5" y="3" width="1" height="1" />
      <rect x="6" y="2" width="1" height="1" />
    </motion.svg>
  )
}

export function CertRow({ cert, index, isExpanded, onToggle }: Props) {
  const placeholder = isPlaceholder(cert.title)
  const catColor = categoryConfig[cert.category].color
  const maxSkills = 2
  const visibleSkills = cert.skills.slice(0, maxSkills)
  const extraSkills = cert.skills.length - maxSkills

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.22 }}
      style={{ opacity: placeholder ? 0.55 : 1 }}
    >
      {/* Row */}
      <div
        className="flex items-center border-b border-[var(--px-border)] transition-all duration-150 cursor-pointer group"
        style={{
          borderLeft: `3px solid ${isExpanded ? catColor : 'transparent'}`,
          background: isExpanded ? `color-mix(in srgb, ${catColor} 5%, var(--px-surface))` : 'var(--px-surface)',
          borderStyle: placeholder ? 'dashed' : undefined,
        }}
        onClick={placeholder ? undefined : onToggle}
        onMouseEnter={e => { if (!placeholder && !isExpanded) { (e.currentTarget as HTMLElement).style.borderLeftColor = catColor; (e.currentTarget as HTMLElement).style.background = 'var(--px-bg)' } }}
        onMouseLeave={e => { if (!placeholder && !isExpanded) { (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'; (e.currentTarget as HTMLElement).style.background = 'var(--px-surface)' } }}
        title={placeholder ? "Update src/data/certifications.ts to add your real certifications" : undefined}
      >
        {/* Seal column */}
        <div className="flex items-center justify-center w-12 flex-shrink-0 py-3">
          <PixelSeal category={cert.category} status={cert.status} />
        </div>

        {/* Title + issuer */}
        <div className="flex-1 min-w-0 py-3 pr-4">
          <div
            className="font-mono text-[13px] font-bold leading-snug truncate"
            style={{ color: placeholder ? 'var(--px-muted)' : 'var(--px-text)', fontStyle: placeholder ? 'italic' : 'normal' }}
          >
            {cert.title}
          </div>
          <div className="font-sans text-[11px] text-[var(--px-muted)] truncate mt-0.5">{cert.issuer}</div>
        </div>

        {/* Date — hidden on small screens */}
        <div className="hidden md:block w-28 flex-shrink-0 py-3 pr-4">
          <span className="font-mono text-[11px] text-[var(--px-muted)]">{cert.issuedDate || "—"}</span>
        </div>

        {/* Skills — hidden on small screens */}
        <div className="hidden lg:flex items-center gap-1 w-36 flex-shrink-0 py-3 pr-4">
          {visibleSkills.map(skill => (
            <span key={skill} className="font-mono text-[9px] px-1.5 py-0.5 border border-[var(--px-border)] text-[var(--px-muted)] leading-none">{skill}</span>
          ))}
          {extraSkills > 0 && <span className="font-mono text-[9px] text-[var(--px-muted)]">+{extraSkills}</span>}
        </div>

        {/* Status chip */}
        <div className="w-28 flex-shrink-0 py-3 pr-3">
          {placeholder
            ? <span className="font-mono text-[9px] px-2 py-0.5 border border-dashed border-[var(--px-border)] text-[var(--px-muted)]">PLACEHOLDER</span>
            : <StatusChip status={cert.status} />
          }
        </div>

        {/* Expand chevron */}
        {!placeholder && (
          <div className="w-8 flex items-center justify-center flex-shrink-0 py-3 text-[var(--px-muted)] group-hover:text-[var(--px-accent)] transition-colors">
            <ChevronIcon open={isExpanded} />
          </div>
        )}
      </div>

      {/* Expanded detail panel — full row width */}
      {!placeholder && (
        <CertExpanded cert={cert} isOpen={isExpanded} />
      )}
    </motion.div>
  )
}
