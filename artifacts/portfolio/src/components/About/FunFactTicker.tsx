import { about } from "../../data/about"

function StarIcon() {
  return (
    <svg viewBox="0 0 4 4" width="4" height="4" fill="var(--px-accent)" className="pixel-art inline-block mr-1 flex-shrink-0">
      <rect x="1" y="0" width="2" height="1" />
      <rect x="0" y="1" width="4" height="2" />
      <rect x="1" y="3" width="2" height="1" />
    </svg>
  )
}

export function FunFactTicker() {
  return (
    <div
      className="border-t border-b border-[var(--px-border)] py-1.5 overflow-hidden mt-4"
      style={{ width: 280 }}
    >
      <div
        className="whitespace-nowrap flex items-center gap-2"
        style={{
          animation: "ticker-scroll 20s linear infinite",
          display: "inline-flex",
          alignItems: "center"
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {about.funFacts.concat(about.funFacts).map((fact, i) => (
          <span key={i} className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--px-muted)] mr-6 flex-shrink-0">
            <StarIcon />
            {fact}
          </span>
        ))}
      </div>
    </div>
  )
}
