import { PixelBotIcon } from "./PixelBotIcon";

export function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "12px" }}>
      <div style={{ flexShrink: 0, color: "var(--px-accent)", marginTop: "4px" }}>
        <PixelBotIcon size={16} />
      </div>
      <div
        style={{
          background: "var(--px-surface)",
          border: "1px solid var(--px-border)",
          borderLeft: "3px solid var(--px-accent)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "4px",
              height: "4px",
              background: "var(--px-accent)",
              animation: `typing-dot 0.9s step-start ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
