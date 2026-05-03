import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 6 6" width="6" height="6" fill="#EF4444" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="2" height="3" />
      <rect x="2" y="4" width="2" height="2" />
    </svg>
  );
}

export function FormField({ name, label, type = "text", value, onChange, error, multiline, rows, maxLength }: FormFieldProps) {
  const [touched, setTouched] = useState(false);
  const isValid = touched && !error && value.length > 0;
  const isError = touched && !!error;

  const borderColor = isError ? "#EF4444" : isValid ? "#22C55E" : "var(--px-border)";
  const boxShadow = isError
    ? "0 0 0 1px #EF4444"
    : isValid
    ? "none"
    : "none";

  const sharedStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--px-bg)",
    border: `1px solid ${borderColor}`,
    borderRadius: 0,
    padding: "10px 12px",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "14px",
    color: "var(--px-text)",
    caretColor: "var(--px-accent)",
    boxShadow,
    outline: "none",
    WebkitAppearance: "none",
    transition: "border-color 120ms, box-shadow 120ms",
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "var(--px-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {`// ${label}`}
      </label>

      {multiline ? (
        <div className="relative">
          <textarea
            id={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setTouched(true)}
            onFocus={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--px-accent)";
              el.style.boxShadow = "0 0 0 1px var(--px-accent)";
            }}
            rows={rows || 5}
            maxLength={maxLength}
            style={{ ...sharedStyle, resize: "vertical", height: "120px" }}
          />
          {maxLength && (
            <div
              className="absolute bottom-2 right-2 font-mono"
              style={{
                fontSize: "11px",
                color:
                  value.length >= 490
                    ? "#EF4444"
                    : value.length >= 400
                    ? "#F59E0B"
                    : "var(--px-muted)",
                pointerEvents: "none",
              }}
            >
              {value.length} / {maxLength}
            </div>
          )}
        </div>
      ) : (
        <input
          id={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          onFocus={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--px-accent)";
            el.style.boxShadow = "0 0 0 1px var(--px-accent)";
          }}
          style={sharedStyle}
        />
      )}

      <AnimatePresence>
        {touched && error && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-1 pt-1">
              <WarningIcon />
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "#EF4444",
                }}
              >
                {error}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
