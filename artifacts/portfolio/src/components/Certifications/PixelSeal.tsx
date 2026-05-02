import { Certification, categoryConfig } from "@/data/certifications"

interface Props {
  category: Certification["category"]
  status: Certification["status"]
}

// Center icons: 4x4 mini pixel icons drawn in viewBox 0 0 8 8
function MLIcon() {
  return <>
    <rect x="1" y="2" width="2" height="3" /><rect x="5" y="2" width="2" height="3" />
    <rect x="3" y="3" width="2" height="2" />
    <rect x="1" y="5" width="6" height="1" />
  </>
}
function DLIcon() {
  return <>
    <rect x="1" y="2" width="6" height="1" />
    <rect x="1" y="4" width="6" height="1" />
    <rect x="1" y="6" width="6" height="1" />
  </>
}
function CVIcon() {
  return <>
    <rect x="1" y="3" width="6" height="1" /><rect x="1" y="5" width="6" height="1" />
    <rect x="2" y="4" width="4" height="1" />
    <rect x="3" y="4" width="2" height="1" fill="currentColor" />
  </>
}
function DevIcon() {
  return <>
    <rect x="1" y="3" width="2" height="1" /><rect x="2" y="4" width="2" height="1" /><rect x="1" y="5" width="2" height="1" />
    <rect x="5" y="4" width="2" height="1" />
  </>
}
function CloudIcon() {
  return <>
    <rect x="2" y="3" width="4" height="1" /><rect x="1" y="4" width="6" height="2" />
    <rect x="2" y="6" width="4" height="1" />
  </>
}
function GeneralIcon() {
  return <>
    <rect x="4" y="1" width="1" height="2" /><rect x="1" y="4" width="2" height="1" />
    <rect x="6" y="4" width="2" height="1" /><rect x="4" y="6" width="1" height="2" />
    <rect x="2" y="2" width="1" height="1" /><rect x="6" y="2" width="1" height="1" />
    <rect x="2" y="6" width="1" height="1" /><rect x="6" y="6" width="1" height="1" />
  </>
}

const centerIcons: Record<Certification["category"], React.ElementType> = {
  ML: MLIcon, DL: DLIcon, CV: CVIcon, Dev: DevIcon, Cloud: CloudIcon, General: GeneralIcon
}

export function PixelSeal({ category, status }: Props) {
  const cfg = categoryConfig[category]
  const color = cfg.color
  const isFilled = status === "completed"
  const isPlanned = status === "planned"
  const opacity = isPlanned ? 0.4 : 1
  const CenterIcon = centerIcons[category]

  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      className="pixel-art flex-shrink-0"
      style={{ imageRendering: "pixelated", opacity }}
      aria-hidden="true"
    >
      {/* Octagon outline — 1px rects */}
      {/* Top edge */}
      <rect x="10" y="2" width="12" height="2" fill={color} />
      {/* Bottom edge */}
      <rect x="10" y="28" width="12" height="2" fill={color} />
      {/* Left edge */}
      <rect x="2" y="10" width="2" height="12" fill={color} />
      {/* Right edge */}
      <rect x="28" y="10" width="2" height="12" fill={color} />
      {/* Corners */}
      <rect x="4" y="4" width="6" height="6" fill={color} />
      <rect x="22" y="4" width="6" height="6" fill={color} />
      <rect x="4" y="22" width="6" height="6" fill={color} />
      <rect x="22" y="22" width="6" height="6" fill={color} />

      {/* Fill for completed */}
      {isFilled && <rect x="4" y="4" width="24" height="24" fill={color} opacity="0.12" />}

      {/* Inner ring */}
      <rect x="12" y="6" width="8" height="2" fill={color} opacity={isFilled ? 0.6 : 0.4} />
      <rect x="12" y="24" width="8" height="2" fill={color} opacity={isFilled ? 0.6 : 0.4} />
      <rect x="6" y="12" width="2" height="8" fill={color} opacity={isFilled ? 0.6 : 0.4} />
      <rect x="24" y="12" width="2" height="8" fill={color} opacity={isFilled ? 0.6 : 0.4} />

      {/* Center icon (8x8 sub-grid, centered in 32x32 = offset 12,12) */}
      <g transform="translate(12, 12)" fill={color}>
        <CenterIcon />
      </g>
    </svg>
  )
}
