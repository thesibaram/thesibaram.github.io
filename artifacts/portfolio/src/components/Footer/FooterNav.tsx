import { projects } from "../../data/projects";
import { contact } from "../../data/contact";

const NAV_LINKS = [
  { label: "Hero",           href: "#hero"           },
  { label: "About",          href: "#about"          },
  { label: "Skills",         href: "#skills"         },
  { label: "Projects",       href: "#projects"       },
  { label: "Experience",     href: "#experience"     },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog",           href: "#blog"           },
  { label: "Resume",         href: "#resume"         },
  { label: "Contact",        href: "#contact"        },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="0" width="8" height="2" /><rect x="2" y="2" width="12" height="2" /><rect x="1" y="4" width="14" height="6" /><rect x="2" y="10" width="12" height="2" /><rect x="4" y="12" width="3" height="4" /><rect x="9" y="12" width="3" height="4" /><rect x="6" y="6" width="4" height="3" fill="var(--px-surface)" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="1" width="14" height="14" /><rect x="3" y="5" width="2" height="8" fill="var(--px-surface)" /><rect x="7" y="5" width="6" height="8" fill="var(--px-surface)" /><rect x="7" y="7" width="3" height="1" /><rect x="3" y="2" width="2" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="12" height="16" /><rect x="4" y="2" width="8" height="12" fill="var(--px-surface)" /><rect x="5" y="5" width="6" height="6" /><rect x="6" y="6" width="4" height="4" fill="var(--px-surface)" /><rect x="11" y="3" width="2" height="2" fill="var(--px-text)" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="3" width="14" height="10" /><rect x="3" y="5" width="4" height="3" fill="var(--px-surface)" /><rect x="9" y="5" width="4" height="3" fill="var(--px-surface)" /><rect x="6" y="7" width="4" height="2" fill="var(--px-surface)" />
    </svg>
  );
}

const SOCIALS = [
  { href: contact.github,                  Icon: GitHubIcon,    label: "GitHub",    color: "#6E5494" },
  { href: contact.linkedin,                Icon: LinkedInIcon,  label: "LinkedIn",  color: "#0A66C2" },
  { href: contact.instagram,               Icon: InstagramIcon, label: "Instagram", color: "#E1306C" },
  { href: `mailto:${contact.email}`,       Icon: MailIcon,      label: "Email",     color: "var(--px-accent)" },
];

const FEATURED = projects.filter((p) => p.featured).slice(0, 4);

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function FooterNav() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", gridColumn: "span 2" }}>

      {/* Navigate column */}
      <div className="flex flex-col gap-1">
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
          // NAVIGATE
        </p>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => { e.preventDefault(); scrollTo(href); }}
            style={{
              display: "block",
              padding: "3px 0",
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
      </div>

      {/* Projects + Socials column */}
      <div className="flex flex-col gap-4">
        <div>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            // PROJECTS
          </p>
          {FEATURED.map((p) => (
            <a
              key={p.id}
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }}
              style={{
                display: "block",
                padding: "3px 0",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                color: "var(--px-muted)",
                textDecoration: "none",
                transition: "all 100ms",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
              {p.title}
            </a>
          ))}
        </div>

        <div style={{ borderTop: "1px dashed var(--px-border)" }} />

        <div>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9px", color: "var(--px-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            // SOCIALS
          </p>
          <div className="flex gap-2 flex-wrap">
            {SOCIALS.map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                title={label}
                style={{
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--px-border)",
                  color: "var(--px-muted)",
                  transition: "all 100ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = color;
                  el.style.color = color;
                  el.style.transform = "translate(-2px, -2px)";
                  el.style.boxShadow = `3px 3px 0 ${color}`;
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
      </div>
    </div>
  );
}
