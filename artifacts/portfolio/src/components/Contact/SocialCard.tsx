import { type ReactElement } from "react";

interface SocialCardProps {
  label: string;
  href: string;
  iconKey: string;
  handle: string;
  color: string;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="0" width="8" height="2" />
      <rect x="2" y="2" width="12" height="2" />
      <rect x="1" y="4" width="14" height="6" />
      <rect x="2" y="10" width="12" height="2" />
      <rect x="4" y="12" width="3" height="4" />
      <rect x="9" y="12" width="3" height="4" />
      <rect x="6" y="6" width="4" height="3" fill="var(--px-surface)" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="1" width="14" height="14" />
      <rect x="3" y="5" width="2" height="8" fill="var(--px-surface)" />
      <rect x="7" y="5" width="6" height="8" fill="var(--px-surface)" />
      <rect x="7" y="7" width="3" height="1" />
      <rect x="3" y="2" width="2" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="3" width="14" height="10" />
      <rect x="3" y="5" width="4" height="3" fill="var(--px-surface)" />
      <rect x="9" y="5" width="4" height="3" fill="var(--px-surface)" />
      <rect x="6" y="7" width="4" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="4" width="4" height="4" />
      <rect x="4" y="0" width="4" height="4" />
      <rect x="2" y="2" width="4" height="4" />
      <rect x="3" y="3" width="2" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

const icons: Record<string, () => ReactElement> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

export function SocialCard({ label, href, iconKey, handle, color }: SocialCardProps) {
  const Icon = icons[iconKey] ?? MailIcon;

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      className="flex items-center gap-3 px-4 py-3 transition-all"
      style={{
        border: "1px solid var(--px-border)",
        background: "var(--px-surface)",
        textDecoration: "none",
        color: "var(--px-text)",
        transitionDuration: "120ms",
        transitionTimingFunction: "ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = color;
        el.style.transform = "translate(-2px, -2px)";
        el.style.boxShadow = `3px 3px 0px ${color}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--px-border)";
        el.style.transform = "";
        el.style.boxShadow = "";
      }}
    >
      <div className="flex-shrink-0 text-[var(--px-text)]">
        <Icon />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-mono font-medium" style={{ fontSize: "12px", color: "var(--px-text)" }}>
          {label}
        </div>
        <div style={{ fontSize: "11px", color: "var(--px-muted)", fontFamily: "Inter, sans-serif" }}>
          {handle}
        </div>
      </div>
      <div className="flex-shrink-0 text-[var(--px-muted)]">
        <ExternalLinkIcon />
      </div>
    </a>
  );
}
