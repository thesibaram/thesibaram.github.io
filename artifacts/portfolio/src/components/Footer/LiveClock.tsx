import { useState, useEffect } from "react";

function ClockIcon() {
  return (
    <svg viewBox="0 0 6 6" width="6" height="6" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="0" width="4" height="1" />
      <rect x="0" y="1" width="1" height="4" />
      <rect x="5" y="1" width="1" height="4" />
      <rect x="1" y="5" width="4" height="1" />
      <rect x="2" y="1" width="1" height="3" />
      <rect x="2" y="3" width="2" height="1" />
    </svg>
  );
}

function getIST(): string {
  const now = new Date();
  const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const h = String(ist.getHours()).padStart(2, "0");
  const m = String(ist.getMinutes()).padStart(2, "0");
  const s = String(ist.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s} IST`;
}

export function LiveClock() {
  const [time, setTime] = useState(getIST());

  useEffect(() => {
    const id = setInterval(() => setTime(getIST()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div style={{ color: "var(--px-muted)" }}><ClockIcon /></div>
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-accent)" }}>
        {time}
      </span>
    </div>
  );
}
