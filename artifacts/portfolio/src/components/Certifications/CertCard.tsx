import { motion } from "framer-motion"
import { Certification } from "@/data/certifications"
import { PixelSeal } from "./PixelSeal"
import { StatusChip } from "./StatusChip"
import { CategoryBadge } from "./CategoryBadge"
import { CertExpanded } from "./CertExpanded"
import { PixelChip } from "@/components/ui/PixelChip"

interface Props {
  cert: Certification
  index: number
  isExpanded: boolean
  onToggle: () => void
}

const isPlaceholder = (title: string) => title.startsWith("//")

// Pixel calendar icon 8x8
function CalendarIcon() {
  return (
    <svg viewBox="0 0 8 8" width="10" height="10" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="2" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="1" y="2" width="6" height="2" />
      <rect x="2" y="1" width="1" height="1" /><rect x="5" y="1" width="1" height="1" />
      <rect x="2" y="5" width="1" height="1" /><rect x="4" y="5" width="1" height="1" /><rect x="6" y="5" width="1" height="1" />
    </svg>
  )
}

// Pixel institution icon 8x8
function InstitutionIcon() {
  return (
    <svg viewBox="0 0 8 8" width="10" height="10" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="7" width="6" height="1" />
      <rect x="2" y="3" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="3" y="5" width="2" height="2" />
      <rect x="3" y="1" width="2" height="2" />
    </svg>
  )
}

// Chevron icon
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 8 8"
      width="10"
      height="10"
      fill="currentColor"
      className="pixel-art flex-shrink-0"
      style={{ imageRendering: 'pixelated' }}
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <rect x="1" y="2" width="1" height="1" /><rect x="2" y="3" width="1" height="1" />
      <rect x="3" y="4" width="2" height="1" /><rect x="5" y="3" width="1" height="1" />
      <rect x="6" y="2" width="1" height="1" />
    </motion.svg>
  )
}

export function CertCard({ cert, index, isExpanded, onToggle }: Props) {
  const placeholder = isPlaceholder(cert.title)
  const maxSkillsVisible = 3
  const visibleSkills = cert.skills.slice(0, maxSkillsVisible)
  const extraSkills = cert.skills.length - maxSkillsVisible

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.25 }}
      className="flex flex-col h-full"
      style={{ opacity: placeholder ? 0.65 : 1 }}
    >
      <div
        className="relative flex flex-col gap-3 p-5 border bg-[var(--px-surface)] cursor-pointer transition-all duration-150 h-full"
        style={{
          borderStyle: placeholder ? 'dashed' : 'solid',
          borderColor: 'var(--px-border)',
        }}
        onClick={placeholder ? undefined : onToggle}
        onMouseEnter={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = 'translate(-3px, -3px)'
            el.style.boxShadow = '5px 5px 0px var(--px-accent)'
            el.style.borderColor = 'var(--px-accent)'
          }
        }}
        onMouseLeave={e => {
          if (!placeholder) {
            const el = e.currentTarget as HTMLElement
            el.style.transform = ''
            el.style.boxShadow = ''
            el.style.borderColor = 'var(--px-border)'
          }
        }}
        title={placeholder ? "Update src/data/certifications.ts to add your real certifications" : undefined}
      >
        {/* Pixel Seal - top right */}
        <motion.div
          className="absolute top-3 right-3"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.07 + 0.15, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <PixelSeal category={cert.category} status={cert.status} />
        </motion.div>

        {/* Row 1: Category + Status (leave room for seal) */}
        <div className="flex items-center gap-2 pr-10">
          {placeholder
            ? <span className="font-mono text-[10px] px-2 py-0.5 border border-dashed border-[var(--px-border)] text-[var(--px-muted)]">[ PLACEHOLDER ]</span>
            : <CategoryBadge category={cert.category} />
          }
          <StatusChip status={cert.status} />
        </div>

        {/* Row 2: Title */}
        <h3
          className="font-mono text-[14px] font-bold leading-snug line-clamp-2"
          style={{ color: placeholder ? 'var(--px-muted)' : 'var(--px-text)', fontStyle: placeholder ? 'italic' : 'normal' }}
        >
          {cert.title}
        </h3>

        {/* Row 3: Issuer */}
        <div className="flex items-center gap-1.5 text-[var(--px-muted)]">
          <InstitutionIcon />
          <span className="font-sans text-[12px]">{cert.issuer}</span>
        </div>

        {/* Row 4: Date */}
        <div className="flex items-center gap-1.5 text-[var(--px-muted)]">
          <CalendarIcon />
          <span className="font-mono text-[11px]">{cert.issuedDate}</span>
        </div>

        {/* Row 5: Skills chips */}
        {cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {visibleSkills.map(skill => (
              <PixelChip key={skill} className="text-[10px] px-1.5 py-0.5">{skill}</PixelChip>
            ))}
            {extraSkills > 0 && (
              <span className="font-mono text-[10px] text-[var(--px-muted)] self-center">+{extraSkills}</span>
            )}
          </div>
        )}

        {/* Row 6: Footer */}
        {!placeholder && (
          <div className="flex items-center justify-between mt-auto pt-1">
            <div />
            <ChevronIcon open={isExpanded} />
          </div>
        )}
      </div>

      {/* Expanded panel */}
      {!placeholder && (
        <CertExpanded cert={cert} isOpen={isExpanded} />
      )}
    </motion.div>
  )
}
