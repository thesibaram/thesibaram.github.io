import { VisitorCounter } from "./VisitorCounter";

export function FooterBio() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--px-text)",
            border: "1px solid var(--px-accent)",
            padding: "4px 10px",
            display: "inline-block",
            boxShadow: "3px 3px 0 var(--px-accent)",
          }}
        >
          SN
        </span>
      </div>

      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-accent)", letterSpacing: "0.1em" }}>
        // SIBARAM BEHERA
      </p>

      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--px-text)", lineHeight: 1.6, maxWidth: "260px" }}>
        B.Tech EE student at PMEC, Berhampur. Building ML systems and computer vision projects from Odisha.
      </p>

      <div className="flex flex-wrap gap-1.5">
        {["TensorFlow", "Python", "React", "OpenCV"].map((chip) => (
          <span
            key={chip}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "var(--px-muted)",
              border: "1px solid var(--px-border)",
              padding: "2px 7px",
              background: "var(--px-bg)",
            }}
          >
            {chip}
          </span>
        ))}
      </div>

      <VisitorCounter />

      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", marginTop: "4px" }}>
        // built with React + Vite + ☕
      </p>
    </div>
  );
}
