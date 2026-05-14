import { PixelBotIcon } from "./PixelBotIcon";

interface ChatHeaderProps {
  onClose: () => void;
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="3" y="3" width="3" height="3" /><rect x="6" y="6" width="3" height="3" /><rect x="9" y="9" width="2" height="2" /><rect x="11" y="6" width="3" height="3" /><rect x="14" y="3" width="3" height="3" />
      <rect x="3" y="14" width="3" height="3" /><rect x="6" y="11" width="3" height="3" /><rect x="11" y="11" width="3" height="3" /><rect x="14" y="14" width="3" height="3" />
    </svg>
  );
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div style={{ flexShrink: 0 }}>
      {/* Accent bar */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, var(--px-accent), #7B2FBE)" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "var(--px-surface)",
          borderBottom: "1px solid var(--px-border)",
        }}
      >
        <div className="flex items-center gap-2">
          <div style={{ color: "var(--px-accent)" }}>
            <PixelBotIcon size={18} />
          </div>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px", color: "var(--px-text)", fontWeight: 800, letterSpacing: "0.05em" }}>
            DODO
          </span>
          <span style={{ color: "var(--px-border)", fontSize: "12px" }}>|</span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "var(--px-muted)" }}>
            AI assistant
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                background: "#22C55E",
                animation: "blink 1.2s step-start infinite",
              }}
            />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "8px", color: "#22C55E", letterSpacing: "0.1em" }}>
              ONLINE
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--px-muted)",
              padding: "2px",
              transition: "color 100ms",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--px-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--px-muted)"; }}
            aria-label="Close Dodo"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
