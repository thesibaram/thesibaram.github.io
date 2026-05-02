import { ContactForm } from "./ContactForm";

export function ContactRight() {
  return (
    <div
      className="flex flex-col"
      style={{
        border: "1px solid var(--px-border)",
        background: "var(--px-bg)",
        overflow: "hidden",
      }}
    >
      {/* Panel header */}
      <div
        style={{
          padding: "0",
          borderBottom: "1px solid var(--px-border)",
          background: "var(--px-surface)",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, var(--px-accent), var(--px-accent2, #7B2FBE))",
          }}
        />
        {/* Titlebar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--px-text)",
                letterSpacing: "0.05em",
              }}
            >
              COMPOSE_MESSAGE.txt
            </span>
          </div>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "var(--px-muted)",
            }}
          >
            // no spam, just real conversation
          </span>
        </div>
      </div>

      {/* Form body */}
      <div style={{ padding: "24px 24px 28px" }}>
        <ContactForm />
      </div>
    </div>
  );
}
