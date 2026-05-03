import { useEffect, useState } from "react";

interface VisitorData {
  total: number;
  daily: number;
}

export function VisitorCounter() {
  const [data, setData] = useState<VisitorData | null>(null);

  useEffect(() => {
    const recorded = sessionStorage.getItem("visitor_recorded");
    if (!recorded) {
      fetch("/api/visitors", { method: "POST" })
        .then((r) => r.json())
        .then((d) => {
          setData({ total: d.total, daily: d.daily });
          sessionStorage.setItem("visitor_recorded", "1");
        })
        .catch(() => {});
    } else {
      fetch("/api/visitors")
        .then((r) => r.json())
        .then((d) => setData({ total: d.total, daily: d.daily }))
        .catch(() => {});
    }
  }, []);

  const fmt = (n: number | undefined) =>
    n !== undefined ? n.toLocaleString() : "···";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        marginTop: "10px",
        border: "1px solid var(--px-border)",
        padding: "8px 12px",
        background: "var(--px-bg)",
      }}
    >
      {/* Today */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: "5px",
            height: "5px",
            background: "var(--px-accent)",
            display: "inline-block",
            animation: "blink 1.2s step-start infinite",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            color: "var(--px-muted)",
            minWidth: "48px",
          }}
        >
          TODAY
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "var(--px-accent)",
            fontWeight: 700,
          }}
        >
          {fmt(data?.daily)}
        </span>
      </div>

      {/* Total */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: "5px",
            height: "5px",
            background: "var(--px-accent2)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            color: "var(--px-muted)",
            minWidth: "48px",
          }}
        >
          TOTAL
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "var(--px-accent2)",
            fontWeight: 700,
          }}
        >
          {fmt(data?.total)}
        </span>
      </div>
    </div>
  );
}
