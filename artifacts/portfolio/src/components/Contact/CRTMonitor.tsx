export function CRTMonitor() {
  return (
    <svg
      viewBox="0 0 48 36"
      width="120"
      height="90"
      className="pixel-art"
      style={{
        imageRendering: "pixelated",
        filter: "drop-shadow(0 0 4px var(--px-accent))",
      }}
    >
      <rect x="4" y="1" width="40" height="27" fill="var(--px-surface)" stroke="var(--px-border)" strokeWidth="1" />
      <rect x="6" y="3" width="36" height="23" fill="#0A0A12" />
      <rect x="7" y="4" width="34" height="21" fill="#0D1117" />
      <rect x="20" y="28" width="8" height="4" fill="var(--px-surface)" stroke="var(--px-border)" strokeWidth="0.5" />
      <rect x="16" y="32" width="16" height="3" fill="var(--px-surface)" stroke="var(--px-border)" strokeWidth="0.5" />

      <text x="9" y="11" fontFamily="monospace" fontSize="3" fill="var(--px-accent)" style={{ imageRendering: "pixelated" }}>
        {">"} SIBARAM_N.exe
      </text>
      <text x="9" y="16" fontFamily="monospace" fontSize="3" fill="#22C55E" style={{ imageRendering: "pixelated" }}>
        {">"} Status: ONLINE
      </text>
      <text x="9" y="21" fontFamily="monospace" fontSize="3" fill="var(--px-muted)" style={{ imageRendering: "pixelated" }}>
        {">"} Loading...
      </text>

      <rect
        x="29"
        y="19"
        width="2"
        height="4"
        fill="var(--px-accent)"
        style={{ animation: "blink 600ms step-start infinite" }}
      />
    </svg>
  );
}
