export function PixelAvatar() {
  // Head: rows 2-10, cols 20-44 (in pixel units, so x=20,y=8 etc with 4px scale)
  // Hair: dark, top 3 rows of head
  // Skin: #C68642 (add className="pixel-avatar-skin" for dark mode switching)
  // Eyes: row 6, white rects with dark pupils
  // Mouth: row 9, 3-pixel smile
  // Torso: rows 12-20, accent color shirt
  // Arms: 2px wide each side
  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 64 80" className="pixel-art w-full h-full" style={{imageRendering:"pixelated"}}>
        {/* Hair - dark top */}
        <rect x="20" y="8" width="24" height="4" fill="var(--px-ink)" />
        <rect x="20" y="12" width="24" height="4" fill="var(--px-ink)" />
        {/* Head / skin */}
        <rect x="20" y="16" width="24" height="20" fill="#C68642" className="pixel-avatar-skin" />
        {/* Eyes */}
        <rect x="24" y="20" width="4" height="4" fill="white" />
        <rect x="36" y="20" width="4" height="4" fill="white" />
        <rect x="25" y="21" width="2" height="2" fill="#1A1A1A" />
        <rect x="37" y="21" width="2" height="2" fill="#1A1A1A" />
        {/* Nose */}
        <rect x="30" y="26" width="4" height="2" fill="#8D5524" />
        {/* Mouth - smile */}
        <rect x="24" y="30" width="4" height="2" fill="#8D5524" />
        <rect x="28" y="32" width="8" height="2" fill="#8D5524" />
        <rect x="36" y="30" width="4" height="2" fill="#8D5524" />
        {/* Torso - shirt in accent */}
        <rect x="16" y="40" width="32" height="28" fill="var(--px-accent)" />
        {/* Collar */}
        <rect x="28" y="40" width="4" height="4" fill="var(--px-text)" opacity="0.3" />
        {/* Arms */}
        <rect x="8" y="40" width="8" height="24" fill="#C68642" className="pixel-avatar-skin" />
        <rect x="48" y="40" width="8" height="24" fill="#C68642" className="pixel-avatar-skin" />
      </svg>
      <span className="font-mono text-[10px] text-[var(--px-muted)]">// photo coming soon</span>
    </div>
  )
}
