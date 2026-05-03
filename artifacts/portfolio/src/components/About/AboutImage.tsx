import { about } from "../../data/about"
import { PixelAvatar } from "./PixelAvatar"
import { useState } from "react"

function CameraIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art inline-block mr-1">
      <rect x="1" y="2" width="6" height="4" />
      <rect x="3" y="1" width="2" height="1" />
      <rect x="3" y="3" width="2" height="2" fill="var(--px-surface)" />
    </svg>
  )
}

export function AboutImage() {
  const [imgError, setImgError] = useState(false)
  const hasPhoto = about.image && !imgError

  return (
    <div className="flex flex-col gap-3 items-center lg:items-start">
      {/* Image container — fixed 280px on desktop, full-width capped on mobile */}
      <div
        className="relative"
        style={{ width: "min(280px, 100vw - 32px)" }}
      >
        {/* Corner brackets */}
        <span className="absolute top-[-6px] left-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute top-[-6px] left-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" />
        <span className="absolute top-[-6px] right-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute top-[-6px] right-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-6px] left-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-6px] left-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-6px] right-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-6px] right-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" />

        {/* Main image — aspect-ratio so height is always proportional */}
        <div
          className="w-full border-2 border-[var(--px-accent)] overflow-hidden relative"
          style={{ aspectRatio: "3/4" }}
        >
          {hasPhoto ? (
            <>
              <img
                src={about.image}
                alt={about.name}
                className="w-full h-full object-cover object-top transition-all duration-300"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
                onMouseEnter={e => (e.currentTarget.style.filter = "saturate(1) contrast(1)")}
                onMouseLeave={e => (e.currentTarget.style.filter = "saturate(0.85) contrast(1.05)")}
                onError={() => setImgError(true)}
              />
              {/* Scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)"
                }}
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[var(--px-surface)]">
              <PixelAvatar />
              <div className="text-center mt-2">
                <p className="font-mono text-[12px] text-[var(--px-muted)]">[ drop photo here ]</p>
                <p className="font-mono text-[10px] text-[var(--px-muted)] opacity-50">public/images/sibaram.jpg</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Photo label */}
      <div className="pl-1 text-center lg:text-left">
        <p className="font-mono text-[10px] text-[var(--px-muted)] flex items-center justify-center lg:justify-start">
          <CameraIcon />
          SIBARAM BEHERA
        </p>
        <p className="font-mono text-[10px] text-[var(--px-muted)] opacity-60 ml-[9px]">B.Tech EE @ PMEC</p>
      </div>
    </div>
  )
}
