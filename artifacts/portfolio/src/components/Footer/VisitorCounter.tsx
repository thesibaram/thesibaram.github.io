import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const recorded = sessionStorage.getItem("visitor_recorded");
    if (!recorded) {
      fetch("/api/visitors", { method: "POST" })
        .then((r) => r.json())
        .then((d) => {
          setCount(d.count);
          sessionStorage.setItem("visitor_recorded", "1");
        })
        .catch(() => {});
    } else {
      fetch("/api/visitors")
        .then((r) => r.json())
        .then((d) => setCount(d.count))
        .catch(() => {});
    }
  }, []);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        border: "1px solid var(--px-border)",
        padding: "5px 10px",
        marginTop: "8px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "5px",
          height: "5px",
          background: "var(--px-accent)",
          animation: "blink 1.2s step-start infinite",
        }}
      />
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)" }}>
        VISITORS
      </span>
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-accent)", fontWeight: 700 }}>
        {count !== null ? count.toLocaleString() : "···"}
      </span>
    </div>
  );
}
