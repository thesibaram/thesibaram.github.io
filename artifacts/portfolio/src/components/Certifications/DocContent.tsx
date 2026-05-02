import { useState } from "react"
import { Certification, categoryConfig } from "@/data/certifications"
import { PixelSeal } from "./PixelSeal"

interface Props {
  cert: Certification
  isPlaceholder: boolean
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 6 6" width="6" height="6" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="1" width="6" height="5" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x="0" y="1" width="6" height="2" />
      <rect x="1" y="0" width="1" height="1" /><rect x="4" y="0" width="1" height="1" />
    </svg>
  )
}

export function DocContent({ cert, isPlaceholder }: Props) {
  const [hovered, setHovered] = useState(false)
  const catConfig = categoryConfig[cert.category]
  const catColor = catConfig.color

  return (
    <div
      className="flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Main content area */}
      <div className="flex-1 p-[10px] pt-3 flex flex-col gap-[5px] relative overflow-hidden">
        {/* Pixel seal — top right */}
        {!isPlaceholder && (
          <div className="absolute top-2 right-2">
            <PixelSeal category={cert.category} status={cert.status} />
          </div>
        )}

        {/* Title */}
        <div
          className="font-mono text-[8px] font-bold leading-[1.3] uppercase pr-7"
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

        {/* Issuer + Date — hide on hover, show skills instead */}
        <div
          style={{
            opacity: hovered && !isPlaceholder ? 0 : 1,
            transition: "opacity 200ms ease",
            position: "absolute",
            bottom: 0,
            left: 10,
            right: 10,
            paddingBottom: 6,
          }}
        >
          <div
            className="font-sans text-[7px] text-[var(--px-muted)] truncate mt-1"
          >
            {cert.issuer}
          </div>
          <div className="flex items-center gap-1 mt-[4px] text-[var(--px-muted)]">
            <CalendarIcon />
            <span className="font-mono text-[7px]">{cert.issuedDate}</span>
          </div>
        </div>

        {/* Skills — fade in on hover */}
        {!isPlaceholder && (
          <div
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 200ms ease",
              position: "absolute",
              bottom: 0,
              left: 10,
              right: 10,
              paddingBottom: 6,
            }}
          >
            <div className="flex flex-wrap gap-[3px]">
              {cert.skills.slice(0, 4).map(skill => (
                <span
                  key={skill}
                  className="font-mono text-[6px] px-1 py-0.5 border leading-none"
                  style={{ borderColor: catColor, color: catColor }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* In-progress stamp */}
        {cert.status === "in-progress" && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ paddingTop: 30 }}
          >
            <span
              className="font-mono text-[7px] px-[6px] py-[2px] border whitespace-nowrap"
              style={{
                transform: "rotate(-20deg)",
                color: "rgba(245,158,11,0.45)",
                borderColor: "rgba(245,158,11,0.3)",
              }}
            >
              IN PROGRESS
            </span>
          </div>
        )}
      </div>

      {/* Category strip — bottom (only for non-in-progress) */}
      {cert.status !== "in-progress" && (
        <div
          className="flex items-center justify-center font-mono text-[7px] uppercase"
          style={{
            height: 16,
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
