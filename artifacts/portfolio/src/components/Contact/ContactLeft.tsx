import { contact } from "../../data/contact";

const INFO_ROWS = [
  { label: "EMAIL", getValue: () => contact.email, href: () => `mailto:${contact.email}` },
  { label: "LOCATION", getValue: () => contact.location, href: () => null },
  { label: "STATUS", getValue: () => contact.availability, href: () => null },
  { label: "RESPONSE", getValue: () => contact.responseTime, href: () => null },
];

export function ContactLeft() {
  return (
    <div className="flex flex-col gap-10">
      {/* Heading block */}
      <div>
        <p className="font-mono text-[10px] text-[var(--px-accent)] tracking-[0.3em] uppercase mb-5">
          // CONTACT.SYS
        </p>
        <h2
          className="font-mono font-black text-[var(--px-text)] leading-[0.92] tracking-tight mb-5"
          style={{ fontSize: "clamp(30px, 4.5vw, 54px)" }}
        >
          Let's Build<br />
          <span style={{ color: "var(--px-accent)" }}>Something</span><br />
          Together.
        </h2>
        <p className="font-sans text-[14px] text-[var(--px-muted)] leading-relaxed max-w-xs">
          Actively looking for ML internships and research roles. Open to remote or on-site across India.
        </p>
      </div>

      {/* Contact info rows */}
      <div className="flex flex-col">
        {INFO_ROWS.map(({ label, getValue, href }, i) => {
          const value = getValue();
          const link = href();
          return (
            <div
              key={label}
              className="flex flex-col gap-1 py-4"
              style={{
                borderBottom: i < INFO_ROWS.length - 1 ? "1px solid var(--px-border)" : "none",
              }}
            >
              <span className="font-mono text-[9px] text-[var(--px-muted)] tracking-[0.25em] uppercase">
                {label}
              </span>
              {link ? (
                <a
                  href={link}
                  className="font-mono text-[13px] text-[var(--px-text)] hover:text-[var(--px-accent)]"
                  style={{ textDecoration: "none", transition: "color 150ms ease" }}
                >
                  {value}
                </a>
              ) : (
                <span className="font-mono text-[13px] text-[var(--px-text)]">{value}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Social links */}
      <div>
        <p className="font-mono text-[9px] text-[var(--px-muted)] tracking-[0.25em] uppercase mb-4">
          // Socials
        </p>
        <div className="flex flex-wrap gap-2">
          {contact.socials.map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="font-mono text-[11px] px-4 py-2 border border-[var(--px-border)] text-[var(--px-muted)]"
              style={{ textDecoration: "none", transition: "all 140ms ease" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = color;
                el.style.color = color;
                el.style.transform = "translate(-2px,-2px)";
                el.style.boxShadow = `3px 3px 0 ${color}40`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--px-border)";
                el.style.color = "var(--px-muted)";
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
