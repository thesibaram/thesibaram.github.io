import { contact } from "../../data/contact";

export function AvailabilityBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 font-mono"
      style={{ border: "1px solid #22C55E", fontSize: "11px" }}
    >
      <span
        className="w-2 h-2 rounded-none"
        style={{
          backgroundColor: "#22C55E",
          display: "inline-block",
          animation: "blink 1s step-start infinite",
          flexShrink: 0,
        }}
      />
      <span style={{ color: "#22C55E" }}>{contact.availability}</span>
    </div>
  );
}
