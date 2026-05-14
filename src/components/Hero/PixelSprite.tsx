import { memo } from "react"

export const PixelSprite = memo(function PixelSprite() {
  return (
    <svg
      viewBox="0 0 48 64"
      width="192"
      height="256"
      className="pixel-art sprite-idle"
      style={{ imageRendering: 'pixelated' }}
      aria-hidden="true"
    >
      {/* Hair - rows 1-2 */}
      <rect x="10" y="4" width="28" height="4" fill="var(--px-ink)" />
      <rect x="10" y="8" width="28" height="4" fill="var(--px-ink)" />
      {/* Head / skin - rows 3-5 */}
      <rect x="12" y="12" width="24" height="12" fill="#C68642" className="pixel-avatar-skin" />
      {/* Eyes */}
      <rect x="16" y="16" width="4" height="4" fill="white" />
      <rect x="28" y="16" width="4" height="4" fill="white" />
      <rect x="17" y="17" width="2" height="2" fill="#111" />
      <rect x="29" y="17" width="2" height="2" fill="#111" />
      {/* Mouth */}
      <rect x="18" y="22" width="12" height="2" fill="#8D5524" />
      <rect x="16" y="20" width="4" height="2" fill="#8D5524" />
      <rect x="28" y="20" width="4" height="2" fill="#8D5524" />
      {/* Body / shirt - rows 6-11 */}
      <rect x="10" y="26" width="28" height="20" fill="var(--px-accent)" />
      {/* Collar */}
      <rect x="22" y="26" width="4" height="4" fill="rgba(0,0,0,0.2)" />
      {/* Arms */}
      <rect x="6" y="26" width="4" height="16" fill="#C68642" className="pixel-avatar-skin" />
      <rect x="38" y="26" width="4" height="16" fill="#C68642" className="pixel-avatar-skin" />
      {/* Laptop in hands */}
      <rect x="14" y="36" width="20" height="10" fill="var(--px-surface)" />
      <rect x="14" y="36" width="20" height="1" fill="var(--px-border)" />
      {/* Code lines on laptop screen */}
      <rect x="16" y="39" width="8" height="1" fill="var(--px-accent)" opacity="0.8" />
      <rect x="16" y="42" width="12" height="1" fill="var(--px-accent)" opacity="0.6" />
      <rect x="16" y="45" width="6" height="1" fill="var(--px-accent)" opacity="0.4" />
      {/* Legs / pants - rows 12-15 */}
      <rect x="14" y="48" width="8" height="12" fill="var(--px-muted)" opacity="0.6" />
      <rect x="26" y="48" width="8" height="12" fill="var(--px-muted)" opacity="0.6" />
      {/* Feet */}
      <rect x="12" y="58" width="10" height="4" fill="var(--px-ink)" />
      <rect x="26" y="58" width="10" height="4" fill="var(--px-ink)" />
    </svg>
  )
})