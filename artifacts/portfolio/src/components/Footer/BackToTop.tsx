export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "10px",
        color: "var(--px-muted)",
        border: "1px solid var(--px-border)",
        padding: "4px 10px",
        background: "none",
        borderRadius: 0,
        cursor: "pointer",
        transition: "all 120ms ease",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--px-accent)";
        el.style.color = "var(--px-accent)";
        el.style.transform = "translate(-2px, -2px)";
        el.style.boxShadow = "3px 3px 0 var(--px-accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--px-border)";
        el.style.color = "var(--px-muted)";
        el.style.transform = "";
        el.style.boxShadow = "";
      }}
    >
      [ ^ TOP ]
    </button>
  );
}
