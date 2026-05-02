interface PixelBotIconProps {
  size?: number;
}

export function PixelBotIcon({ size = 24 }: PixelBotIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="pixel-art"
      style={{ imageRendering: "pixelated", display: "block" }}
    >
      {/* Antenna */}
      <rect x="11" y="0" width="2" height="4" fill="currentColor" />
      <rect x="9" y="2" width="6" height="3" fill="currentColor" />

      {/* Ears */}
      <rect x="1" y="8" width="2" height="4" fill="currentColor" />
      <rect x="21" y="8" width="2" height="4" fill="currentColor" />

      {/* Head */}
      <rect x="3" y="5" width="18" height="14" fill="var(--px-surface)" stroke="currentColor" strokeWidth="1" />

      {/* Eyes */}
      <rect x="6" y="8" width="4" height="3" fill="currentColor" />
      <rect x="14" y="8" width="4" height="3" fill="currentColor" />

      {/* Mouth */}
      <rect x="8" y="13" width="8" height="2" fill="currentColor" />
    </svg>
  );
}
