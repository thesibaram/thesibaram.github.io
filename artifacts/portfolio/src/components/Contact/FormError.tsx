import { contact } from "../../data/contact";

interface FormErrorProps {
  onReset: () => void;
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#EF4444" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="10" y="2" width="4" height="12" />
      <rect x="10" y="18" width="4" height="4" />
    </svg>
  );
}

export function FormError({ onReset }: FormErrorProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-6 gap-3"
      style={{ border: "1px solid #EF4444", background: "var(--px-surface)" }}
    >
      <ErrorIcon />
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "14px", color: "var(--px-text)" }}>
        Something went wrong.
      </p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--px-muted)" }}>
        Try emailing directly:{" "}
        <a
          href={`mailto:${contact.email}`}
          style={{ color: "var(--px-accent)", textDecoration: "underline" }}
        >
          {contact.email}
        </a>
      </p>
      <button
        onClick={onReset}
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "var(--px-muted)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
          textDecoration: "underline",
        }}
      >
        [Try again]
      </button>
    </div>
  );
}
