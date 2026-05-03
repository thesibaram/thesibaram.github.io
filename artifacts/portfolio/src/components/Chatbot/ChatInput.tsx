import { useState, type KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (msg: string) => void;
  disabled: boolean;
}

function SendIcon() {
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="5" width="10" height="2" />
      <rect x="8" y="3" width="2" height="2" />
      <rect x="8" y="7" width="2" height="2" />
      <rect x="10" y="4" width="2" height="4" />
      <rect x="12" y="5" width="2" height="2" />
    </svg>
  );
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isMobile && !disabled && value.trim()) {
      e.preventDefault();
      onSend(value.trim());
      setValue("");
    }
  };

  const handleSend = () => {
    if (!disabled && value.trim()) {
      onSend(value.trim());
      setValue("");
    }
  };

  return (
    <div
      style={{
        height: "64px",
        borderTop: "1px solid var(--px-border)",
        background: "var(--px-surface)",
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexShrink: 0,
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about Sibaram..."
        style={{
          flex: 1,
          background: "var(--px-bg)",
          border: "1px solid var(--px-border)",
          borderRadius: 0,
          padding: "8px 12px",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "16px",
          color: "var(--px-text)",
          caretColor: "var(--px-accent)",
          outline: "none",
          opacity: disabled ? 0.6 : 1,
          WebkitAppearance: "none",
          transition: "border-color 120ms",
          // Ensure placeholder is always readable
          ["--placeholder-color" as string]: "var(--px-muted)",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--px-accent)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--px-border)"; }}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        style={{
          width: "36px",
          height: "36px",
          background: "var(--px-accent)",
          border: "none",
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0D0D10",
          cursor: disabled || !value.trim() ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          transition: "all 100ms",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.transform = "translate(-1px, -1px)";
            e.currentTarget.style.boxShadow = "2px 2px 0 rgba(0,180,216,0.5)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        <SendIcon />
      </button>
    </div>
  );
}
