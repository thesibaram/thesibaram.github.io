interface Props {
  color: string
  size?: "sm" | "md"
}

export function PinHead({ color, size = "md" }: Props) {
  const w = size === "sm" ? 10 : 12
  const h = size === "sm" ? 14 : 16
  return (
    <svg
      viewBox="0 0 12 16"
      width={w}
      height={h}
      className="pixel-art"
      style={{ imageRendering: "pixelated", filter: "drop-shadow(1px 2px 0px rgba(0,0,0,0.2))" }}
      aria-hidden="true"
    >
      {/* Pin head — pixel octagon */}
      <rect x="2" y="0" width="8" height="2" fill={color} />
      <rect x="0" y="2" width="12" height="4" fill={color} />
      <rect x="2" y="6" width="8" height="2" fill={color} />
      {/* Pin shaft */}
      <rect x="5" y="8" width="2" height="8" fill="var(--px-muted)" opacity="0.55" />
    </svg>
  )
}
