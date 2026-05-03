import { LiveClock } from "./LiveClock";
import { contact } from "../../data/contact";

const RESUME_URL = "https://drive.google.com/file/d/1gIDOSyr4AREiWYphSNtrWcClJyslWeVk/view?usp=drive_link";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="0" width="2" height="6" /><rect x="2" y="4" width="2" height="2" /><rect x="6" y="4" width="2" height="2" /><rect x="3" y="6" width="4" height="1" /><rect x="1" y="8" width="8" height="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 6 6" width="6" height="6" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="2" height="1" /><rect x="1" y="1" width="4" height="2" /><rect x="2" y="3" width="2" height="1" /><rect x="2" y="4" width="2" height="2" />
    </svg>
  );
}

const ACTIVITY = [false, true, false, true, true, false, true];

export function FooterStatus() {
  return (
    <div className="flex flex-col gap-3">
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
        // CONTACT &amp; STATUS
      </p>

      {/* Email */}
      <a
        href={`mailto:${contact.email}`}
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "13px",
          color: "var(--px-accent)",
          textDecoration: "none",
          transition: "opacity 100ms",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      >
        {contact.email}
      </a>

      {/* Location */}
      <div className="flex items-center gap-2">
        <div style={{ color: "var(--px-muted)" }}><LocationIcon /></div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "var(--px-text)" }}>
          Berhampur, Odisha
        </span>
      </div>

      {/* Clock */}
      <LiveClock />

      {/* Status */}
      <div className="flex items-center gap-2">
        <span style={{ display: "inline-block", width: "6px", height: "6px", background: "#22C55E", flexShrink: 0, animation: "blink 1s step-start infinite" }} />
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", color: "#22C55E" }}>
          OPEN TO ML INTERNSHIPS
        </span>
      </div>

      {/* GitHub activity */}
      <div style={{ border: "1px solid var(--px-border)", padding: "10px", marginTop: "4px" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-muted)", marginBottom: "6px" }}>
          // github.com/thesibaram — last 7 days
        </p>
        <div className="flex gap-1">
          {ACTIVITY.map((active, i) => (
            <div
              key={i}
              style={{ width: "10px", height: "10px", background: active ? "var(--px-accent)" : "var(--px-border)" }}
            />
          ))}
        </div>
      </div>

      {/* Resume download */}
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "10px 16px",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "#0D0D10",
          background: "var(--px-accent)",
          textDecoration: "none",
          transition: "all 120ms ease",
          marginTop: "4px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-2px, -2px)";
          e.currentTarget.style.boxShadow = "4px 4px 0 rgba(0,180,216,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        <DownloadIcon />
        DOWNLOAD RESUME
      </a>
    </div>
  );
}
