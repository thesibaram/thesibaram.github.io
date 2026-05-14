interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (f: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function ProjectFilter({
  activeFilter,
  onFilterChange,
  totalCount,
  filteredCount,
}: ProjectFilterProps) {
  const filters = ["All", "CV", "ML", "Research", "Web", "Systems"];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-8 mb-8">
      <div className="flex gap-2 flex-wrap" style={{ scrollbarWidth: "none" }}>
        {filters.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={isActive}
              onClick={() => onFilterChange(f)}
              data-testid={`filter-${f.toLowerCase()}`}
              style={{ transition: "all 120ms ease" }}
              className={`font-mono text-[11px] px-3 py-1.5 border ${
                isActive
                  ? "bg-[var(--px-accent)] text-black border-[var(--px-accent)]"
                  : "border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <span className="font-mono text-[10px] text-[var(--px-muted)] tracking-wider">
        {filteredCount === totalCount
          ? `${totalCount} projects`
          : `${filteredCount} of ${totalCount}`}
      </span>
    </div>
  );
}
