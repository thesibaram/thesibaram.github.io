import { PixelChip } from "../ui/PixelChip";

export function FooterBio() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--px-text)",
            border: "1px solid var(--px-accent)",
            padding: "4px 8px",
            display: "inline-block",
            boxShadow: "2px 2px 0 var(--px-accent)",
          }}
        >
          SN
        </span>
      </div>

      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-muted)" }}>
        B.Tech EE @ PMEC
      </p>

      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--px-text)" }}>
        Building ML systems from Odisha.
      </p>

      <div className="flex flex-wrap gap-1.5">
        {["TensorFlow", "React", "Python"].map((chip) => (
          <PixelChip key={chip} color="var(--px-muted)">{chip}</PixelChip>
        ))}
      </div>

      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", marginTop: "auto" }}>
        // built with React + Vite + caffeine
      </p>
    </div>
  );
}
