import { contact } from "../../data/contact";

interface FormSuccessProps {
  onReset: () => void;
}

function CheckmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#22C55E" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="12" width="4" height="4" />
      <rect x="6" y="16" width="4" height="4" />
      <rect x="10" y="12" width="4" height="4" />
      <rect x="14" y="8" width="4" height="4" />
      <rect x="18" y="4" width="4" height="4" />
    </svg>
  );
}

export function FormSuccess({ onReset }: FormSuccessProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-6 gap-3"
      style={{ border: "1px solid #22C55E", background: "var(--px-surface)" }}
    >
      <CheckmarkIcon />
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "16px", color: "var(--px-text)" }}>
        Message received.
      </p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--px-muted)" }}>
        I will get back to you within 24 hours.
      </p>
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)" }}>
        {contact.responseTime}
      </p>
      <button
        onClick={onReset}
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "var(--px-accent)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
          textDecoration: "underline",
        }}
      >
        [Send another]
      </button>
    </div>
  );
}
