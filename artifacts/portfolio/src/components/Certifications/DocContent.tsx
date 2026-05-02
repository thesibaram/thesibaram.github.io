import { useState } from "react"
import { Certification, categoryConfig } from "@/data/certifications"
import { PixelSeal } from "./PixelSeal"

interface Props {
  cert: Certification
  isPlaceholder: boolean
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

function ExpandIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="0" width="3" height="1" /><rect x="0" y="0" width="1" height="3" />
      <rect x="5" y="0" width="3" height="1" /><rect x="7" y="0" width="1" height="3" />
      <rect x="0" y="5" width="1" height="3" /><rect x="0" y="7" width="3" height="1" />
      <rect x="7" y="5" width="1" height="3" /><rect x="5" y="7" width="3" height="1" />
    </svg>
  )
}

export function DocContent({ cert, isPlaceholder }: Props) {
  const [hovered, setHovered] = useState(false)
  const catConfig = categoryConfig[cert.category]
  const catColor = catConfig.color
  const maxSkillsDefault = 2
  const visibleSkills = hovered ? cert.skills : cert.skills.slice(0, maxSkillsDefault)
  const hiddenCount = cert.skills.length - maxSkillsDefault

  return (
    <div
      className="flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Content area */}
      <div className="flex-1 p-3 pt-4 flex flex-col gap-2 relative">
        {/* Pixel seal — top right */}
        {!isPlaceholder && (
          <div className="absolute top-2.5 right-2.5">
            <PixelSeal category={cert.category} status={cert.status} />
          </div>
        )}

        {/* Title — always visible, readable */}
        <div
          className="font-mono text-[12px] font-bold leading-snug pr-10"
          style={{
            color: isPlaceholder ? "var(--px-muted)" : "var(--px-text)",
            fontStyle: isPlaceholder ? "italic" : "normal",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {cert.title}
        </div>

        {/* Issuer — always visible */}
        <div className="font-sans text-[11px] text-[var(--px-muted)] truncate mt-0.5">
          {cert.issuer}
        </div>

        {/* Date — always visible */}
        <div className="flex items-center gap-1.5 text-[var(--px-muted)]">
          <CalendarIcon />
          <span className="font-mono text-[10px]">{cert.issuedDate}</span>
        </div>

        {/* Skills — 2 visible by default, all on hover */}
        {!isPlaceholder && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {visibleSkills.map(skill => (
              <span
                key={skill}
                className="font-mono text-[9px] px-1.5 py-0.5 border leading-none"
                style={{ borderColor: catColor, color: catColor }}
              >
                {skill}
              </span>
            ))}
            {!hovered && hiddenCount > 0 && (
              <span className="font-mono text-[9px] text-[var(--px-muted)] self-center">
                +{hiddenCount}
              </span>
            )}
          </div>
        )}

        {/* In-progress stamp */}
        {cert.status === "in-progress" && (
          <div className="mt-auto">
            <span
              className="inline-block font-mono text-[9px] px-2 py-1 border"
              style={{
                transform: "rotate(-8deg)",
                color: "rgba(245,158,11,0.7)",
                borderColor: "rgba(245,158,11,0.4)",
              }}
            >
              IN PROGRESS
            </span>
          </div>
        )}

        {/* Click hint on hover */}
        {!isPlaceholder && hovered && (
          <div className="mt-auto pt-1 flex items-center gap-1 text-[var(--px-muted)]">
            <ExpandIcon />
            <span className="font-mono text-[9px]">click to expand</span>
          </div>
        )}
      </div>

      {/* Category strip — bottom */}
      {cert.status !== "in-progress" && (
        <div
          className="flex items-center justify-center font-mono text-[9px] uppercase tracking-wider"
          style={{
            height: 22,
            background: isPlaceholder ? "transparent" : `color-mix(in srgb, ${catColor} 15%, transparent)`,
            borderTop: `1px solid ${isPlaceholder ? "var(--px-border)" : `color-mix(in srgb, ${catColor} 40%, transparent)`}`,
            color: isPlaceholder ? "var(--px-muted)" : catColor,
          }}
        >
          {isPlaceholder ? "PLACEHOLDER" : catConfig.label}
        </div>
      )}
    </div>
  )
}
