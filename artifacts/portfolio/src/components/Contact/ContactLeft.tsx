import { contact } from "../../data/contact";

function PingDot() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        background: "#22C55E",
        flexShrink: 0,
        animation: "blink 1.2s step-start infinite",
      }}
    />
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
      <rect x="3" y="0" width="4" height="1" /><rect x="1" y="1" width="8" height="4" /><rect x="3" y="5" width="4" height="1" /><rect x="4" y="6" width="2" height="4" />
    </svg>
  );
}

function TimeIcon() {
  return (
    <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
      <rect x="3" y="0" width="4" height="1" /><rect x="0" y="3" width="1" height="4" /><rect x="9" y="3" width="1" height="4" /><rect x="3" y="9" width="4" height="1" /><rect x="4" y="2" width="1" height="4" /><rect x="4" y="5" width="3" height="1" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="0" width="8" height="2" /><rect x="2" y="2" width="12" height="2" /><rect x="1" y="4" width="14" height="6" /><rect x="2" y="10" width="12" height="2" /><rect x="4" y="12" width="3" height="4" /><rect x="9" y="12" width="3" height="4" /><rect x="6" y="6" width="4" height="3" fill="var(--px-surface)" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="1" width="14" height="14" /><rect x="3" y="5" width="2" height="8" fill="var(--px-surface)" /><rect x="7" y="5" width="6" height="8" fill="var(--px-surface)" /><rect x="7" y="7" width="3" height="1" /><rect x="3" y="2" width="2" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="12" height="2" /><rect x="0" y="2" width="2" height="12" /><rect x="14" y="2" width="2" height="12" /><rect x="2" y="14" width="12" height="2" /><rect x="4" y="4" width="8" height="8" /><rect x="5" y="5" width="6" height="6" fill="var(--px-surface)" /><rect x="6" y="6" width="4" height="4" /><rect x="7" y="7" width="2" height="2" fill="var(--px-surface)" /><rect x="11" y="2" width="2" height="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="3" width="14" height="10" /><rect x="3" y="5" width="4" height="3" fill="var(--px-surface)" /><rect x="9" y="5" width="4" height="3" fill="var(--px-surface)" /><rect x="6" y="7" width="4" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

const SOCIALS = [
  { label: "GitHub",    href: contact.github,    handle: "@thesibaram",          Icon: GitHubIcon,    color: "#6E5494"          },
  { label: "LinkedIn",  href: contact.linkedin,  handle: "sibaram-eng",           Icon: LinkedInIcon,  color: "#0A66C2"          },
  { label: "Instagram", href: contact.instagram, handle: "@aarush.cla",           Icon: InstagramIcon, color: "#E1306C"          },
  { label: "Email",     href: `mailto:${contact.email}`, handle: contact.email,   Icon: MailIcon,      color: "var(--px-accent)" },
];

export function ContactLeft() {
  return (
    <div className="flex flex-col gap-8">
      {/* Main heading */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <PingDot />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              color: "#22C55E",
              letterSpacing: "0.12em",
            }}
          >
            ACCEPTING CONNECTIONS
          </span>
        </div>
        <h2
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "var(--px-text)",
            letterSpacing: "-0.02em",
          }}
        >
          GET IN
          <br />
          <span style={{ color: "var(--px-accent)" }}>TOUCH.</span>
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "var(--px-muted)",
            marginTop: "12px",
            lineHeight: 1.6,
            maxWidth: "340px",
          }}
        >
          Actively looking for ML internships and research roles. Open to remote or on-site across India.
        </p>
      </div>

      {/* Meta info */}
      <div
        className="flex flex-col gap-0"
        style={{
          border: "1px solid var(--px-border)",
          background: "var(--px-bg)",
        }}
      >
        {/* Terminal titlebar */}
        <div
          style={{
            padding: "8px 12px",
            borderBottom: "1px solid var(--px-border)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "var(--px-border)",
          }}
        >
          {["#EF4444","#F59E0B","#22C55E"].map((c) => (
            <span key={c} style={{ width: "6px", height: "6px", background: c, display: "inline-block" }} />
          ))}
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "var(--px-muted)",
              marginLeft: "6px",
            }}
          >
            connection_info.sh
          </span>
        </div>

        <div className="flex flex-col gap-0" style={{ padding: "14px 16px", gap: "10px" }}>
          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-accent)", minWidth: "16px" }}>$</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)" }}>ping location</span>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)", minWidth: "16px" }}>&gt;</span>
            <LocationIcon />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-text)" }}>Berhampur, Odisha, India</span>
          </div>

          <div style={{ borderTop: "1px dashed var(--px-border)", margin: "2px 0" }} />

          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-accent)", minWidth: "16px" }}>$</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)" }}>check reply_time</span>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)", minWidth: "16px" }}>&gt;</span>
            <TimeIcon />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-text)" }}>{contact.responseTime}</span>
          </div>

          <div style={{ borderTop: "1px dashed var(--px-border)", margin: "2px 0" }} />

          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-accent)", minWidth: "16px" }}>$</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)" }}>get status</span>
          </div>
          <div className="flex items-center gap-3">
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)", minWidth: "16px" }}>&gt;</span>
            <PingDot />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#22C55E" }}>{contact.availability}</span>
          </div>
        </div>
      </div>

      {/* Social links — big block style */}
      <div className="flex flex-col gap-2">
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            color: "var(--px-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          // CONNECT VIA
        </p>
        {SOCIALS.map(({ label, href, handle, Icon, color }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              textDecoration: "none",
              color: "var(--px-text)",
              border: "1px solid var(--px-border)",
              background: "var(--px-bg)",
              overflow: "hidden",
              transition: "all 120ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = color;
              el.style.transform = "translate(-3px, -3px)";
              el.style.boxShadow = `4px 4px 0px ${color}`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--px-border)";
              el.style.transform = "";
              el.style.boxShadow = "";
            }}
          >
            {/* Color bar */}
            <div style={{ width: "4px", alignSelf: "stretch", background: color, flexShrink: 0 }} />
            {/* Icon block */}
            <div
              style={{
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px solid var(--px-border)",
                color,
              }}
            >
              <Icon />
            </div>
            {/* Text */}
            <div style={{ padding: "12px 16px", flex: 1 }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 600, color: "var(--px-text)" }}>
                {label}
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "var(--px-muted)", marginTop: "2px" }}>
                {handle}
              </div>
            </div>
            {/* Arrow */}
            <div style={{ padding: "0 16px", color: "var(--px-muted)", fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}>
              →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
