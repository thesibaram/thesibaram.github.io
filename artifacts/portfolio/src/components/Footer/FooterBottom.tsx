import { BackToTop } from "./BackToTop";

function CopyrightIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="4" height="1" /><rect x="0" y="2" width="1" height="4" /><rect x="7" y="2" width="1" height="4" /><rect x="2" y="7" width="4" height="1" /><rect x="2" y="2" width="4" height="1" /><rect x="2" y="3" width="1" height="2" /><rect x="2" y="5" width="4" height="1" />
    </svg>
  );
}

export function FooterBottom() {
  return (
    <div
      style={{
        background: "var(--px-surface)",
        borderTop: "1px solid var(--px-border)",
        padding: "12px clamp(24px, 6vw, 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      <div className="flex items-center gap-2" style={{ color: "var(--px-muted)" }}>
        <CopyrightIcon />
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)" }}>
          2026 Sibaram Behera — All rights reserved
        </span>
      </div>

      <span
        className="hidden md:block"
        style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)" }}
      >
        // made with React + Vite in Odisha, India
      </span>

      <BackToTop />
    </div>
  );
}
