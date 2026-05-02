interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (f: string) => void;
  featuredOnly: boolean;
  onFeaturedToggle: () => void;
}

export function ProjectFilter({
  activeFilter,
  onFilterChange,
  featuredOnly,
  onFeaturedToggle,
}: ProjectFilterProps) {
  const filters = ["All", "CV", "ML", "Research", "Web", "Systems"];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
      <div className="flex gap-2 flex-wrap overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {filters.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={isActive}
              onClick={() => onFilterChange(f)}
              data-testid={`filter-${f.toLowerCase()}`}
              className={`font-mono text-xs px-3 py-1.5 pixel-hover transition-colors ${
                isActive
                  ? "bg-[var(--px-accent)] text-black border-[var(--px-accent)] border"
                  : "border border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <button
        onClick={onFeaturedToggle}
        data-testid="filter-featured-toggle"
        className={`border font-mono text-xs px-3 py-1.5 pixel-hover transition-colors ${
          featuredOnly
            ? "bg-[var(--px-accent)] text-black border-[var(--px-accent)]"
            : "border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)]"
        }`}
      >
        ★ Featured only
      </button>
    </div>
  );
}
