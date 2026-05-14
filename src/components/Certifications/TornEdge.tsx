export function TornEdge() {
  return (
    <div className="absolute bottom-0 left-0 right-0" style={{ height: 24 }}>
      {/* Torn paper SVG mask */}
      <svg
        viewBox="0 0 160 20"
        width="100%"
        height="20"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ display: "block" }}
        aria-hidden="true"
      >
        <path
          d="M 0,0 L 8,12 L 16,4 L 24,16 L 32,6 L 40,14 L 48,2 L 56,18 L 64,8 L 72,15 L 80,3 L 88,17 L 96,7 L 104,13 L 112,5 L 120,15 L 128,8 L 136,14 L 144,4 L 152,12 L 160,6 L 160,20 L 0,20 Z"
          fill="var(--px-bg)"
        />
      </svg>
      {/* Paper fiber lines below torn edge */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-0.5 px-2 pb-0.5" style={{ height: 6 }}>
        <div className="h-px w-3/4" style={{ background: "var(--px-border)", opacity: 0.4 }} />
        <div className="h-px w-1/2 ml-3" style={{ background: "var(--px-border)", opacity: 0.3 }} />
        <div className="h-px w-2/3 ml-1" style={{ background: "var(--px-border)", opacity: 0.25 }} />
      </div>
    </div>
  )
}
