const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

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

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="3" width="14" height="10" /><rect x="3" y="5" width="4" height="3" fill="var(--px-surface)" /><rect x="9" y="5" width="4" height="3" fill="var(--px-surface)" /><rect x="6" y="7" width="4" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

const SOCIALS = [
  { href: "https://github.com/thesibaram", Icon: GitHubIcon, label: "GitHub" },
  { href: "#", Icon: LinkedInIcon, label: "LinkedIn" },
  { href: "mailto:placeholder@email.com", Icon: MailIcon, label: "Email" },
];

export function FooterNav() {
  return (
    <div className="flex flex-col gap-1">
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
        // NAVIGATE
      </p>

      {NAV_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            display: "block",
            padding: "4px 0",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "var(--px-muted)",
            textDecoration: "none",
            transition: "all 100ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--px-text)";
            e.currentTarget.style.transform = "translateX(4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--px-muted)";
            e.currentTarget.style.transform = "";
          }}
        >
          <span style={{ color: "var(--px-accent)" }}>{"> "}</span>
          {label}
        </a>
      ))}

      <div style={{ borderTop: "1px dashed var(--px-border)", margin: "12px 0" }} />

      <div className="flex gap-2">
        {SOCIALS.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            style={{
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--px-border)",
              color: "var(--px-muted)",
              transition: "all 100ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--px-accent)";
              el.style.color = "var(--px-accent)";
              el.style.transform = "translate(-1px, -1px)";
              el.style.boxShadow = "2px 2px 0 var(--px-accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--px-border)";
              el.style.color = "var(--px-muted)";
              el.style.transform = "";
              el.style.boxShadow = "";
            }}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
