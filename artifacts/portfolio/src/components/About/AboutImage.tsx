// ============================================
// PHOTO PLACEHOLDER
// To add your photo:
// 1. Drop your image into /public/images/
// 2. Name it: sibaram.jpg (or .png / .webp)
// 3. Update about.ts -> image field with the path
// 4. The pixel avatar fallback disappears automatically
// ============================================

import { about } from "../../data/about"
import { PixelAvatar } from "./PixelAvatar"
import { useState } from "react"

// Camera icon 8x8 SVG
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
    <div className="flex flex-col gap-3">
      {/* Image container with pixel corner brackets */}
      <div className="relative" style={{ width: 'min(280px, 100%)', height: 320 }}>
        {/* Corner brackets via CSS - use absolute positioned spans */}
        {/* Top-left */}
        <span className="absolute top-[-6px] left-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute top-[-6px] left-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" />
        {/* Top-right */}
        <span className="absolute top-[-6px] right-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute top-[-6px] right-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" style={{left:'auto',right:'-6px'}} />
        {/* Bottom-left */}
        <span className="absolute bottom-[-6px] left-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-6px] left-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" style={{top:'auto',bottom:'-6px'}} />
        {/* Bottom-right */}
        <span className="absolute bottom-[-6px] right-[-6px] w-3 h-0.5 bg-[var(--px-accent)]" />
        <span className="absolute bottom-[-6px] right-[-6px] w-0.5 h-3 bg-[var(--px-accent)]" style={{top:'auto',bottom:'-6px'}} />

        {/* Main image area */}
        <div
          className="w-full h-full border-2 border-[var(--px-accent)] overflow-hidden relative"
          style={{ borderRadius: 0 }}
        >
          {hasPhoto ? (
            <>
              <img
                src={about.image}
                alt={about.name}
                className="w-full h-full object-cover transition-all duration-300"
                style={{ filter: 'saturate(0.85) contrast(1.05)' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'saturate(1) contrast(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'saturate(0.85) contrast(1.05)')}
                onError={() => setImgError(true)}
              />
              {/* Scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)'
                }}
              />
            </>
          ) : (
            /* Placeholder state */
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[var(--px-border)] bg-[var(--px-surface)]" style={{border:'none'}}>
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
      <div className="pl-1">
        <p className="font-mono text-[10px] text-[var(--px-muted)] flex items-center">
          <CameraIcon />
          SIBARAM BEHERA
        </p>
        <p className="font-mono text-[10px] text-[var(--px-muted)] opacity-60 ml-[9px]">B.Tech EE @ PMEC</p>
      </div>
    </div>
  )
}
