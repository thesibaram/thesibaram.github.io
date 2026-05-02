import { AvailabilityBadge } from "./AvailabilityBadge";
import { SocialCard } from "./SocialCard";
import { CRTMonitor } from "./CRTMonitor";
import { contact } from "../../data/contact";

function ClockIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art flex-shrink-0" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="4" height="1" />
      <rect x="0" y="2" width="1" height="4" />
      <rect x="7" y="2" width="1" height="4" />
      <rect x="2" y="7" width="4" height="1" />
      <rect x="3" y="2" width="1" height="3" />
      <rect x="3" y="4" width="2" height="1" />
    </svg>
  );
}

export function ContactLeft() {
  return (
    <div className="flex flex-col gap-5">
      <AvailabilityBadge />

      <div className="flex flex-col gap-1">
        <h3 style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(22px, 3vw, 28px)", color: "var(--px-text)", fontWeight: 700 }}>
          Let's Connect.
        </h3>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "var(--px-muted)" }}>
          I am actively looking for
        </p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "var(--px-accent)" }}>
          ML internships and research roles.
        </p>
      </div>

      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ border: "1px solid var(--px-border)", background: "var(--px-surface)" }}
      >
        <ClockIcon />
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-muted)" }}>
          {contact.responseTime}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {contact.socials.map((s) => (
          <SocialCard key={s.label} {...s} />
        ))}
      </div>

      <div className="flex justify-start mt-2">
        <CRTMonitor />
      </div>
    </div>
  );
}
