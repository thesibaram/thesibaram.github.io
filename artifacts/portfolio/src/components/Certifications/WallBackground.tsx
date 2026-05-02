export function WallBackground() {
  return (
    <>
      {/* Dot grid — matches Hero background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--px-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.45,
        }}
      />
      {/* SVG noise texture for cork feel */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <filter id="wall-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#wall-noise)" />
      </svg>
    </>
  )
}
