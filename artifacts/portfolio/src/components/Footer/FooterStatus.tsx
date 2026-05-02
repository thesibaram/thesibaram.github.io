import { LiveClock } from "./LiveClock";
import { contact } from "../../data/contact";

function LocationIcon() {
  return (
    <svg viewBox="0 0 6 6" width="6" height="6" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="2" height="1" /><rect x="1" y="1" width="4" height="2" /><rect x="2" y="3" width="2" height="1" /><rect x="2" y="4" width="2" height="2" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 6 6" width="6" height="6" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="1" width="2" height="1" /><rect x="0" y="2" width="6" height="4" /><rect x="1" y="3" width="4" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

const ACTIVITY = [false, true, false, true, true, false, true];

export function FooterStatus() {
  return (
    <div className="flex flex-col gap-3">
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
        // SYSTEM STATUS
      </p>

      <div className="flex items-center gap-2">
        <div style={{ color: "var(--px-muted)" }}><LocationIcon /></div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-text)" }}>
          Berhampur, Odisha
        </span>
      </div>

      <LiveClock />

      <div className="flex items-center gap-2">
        <span
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            background: "#22C55E",
            flexShrink: 0,
            animation: "blink 1s step-start infinite",
          }}
        />
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-text)" }}>
          {contact.availability}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div style={{ color: "var(--px-muted)" }}><FolderIcon /></div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-muted)" }}>
          Flowers102 + Grad-CAM
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            background: "#22C55E",
            flexShrink: 0,
            animation: "blink 1.4s step-start infinite",
          }}
        />
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#22C55E" }}>
          ONLINE
        </span>
      </div>

      <div
        className="flex flex-col gap-2"
        style={{ border: "1px solid var(--px-border)", padding: "10px", marginTop: "4px" }}
      >
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)" }}>
          // github.com/thesibaram
        </p>
        <div className="flex gap-1">
          {ACTIVITY.map((active, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                background: active ? "var(--px-accent)" : "var(--px-border)",
              }}
            />
          ))}
        </div>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)" }}>
          last 7 days
        </p>
      </div>
    </div>
  );
}
