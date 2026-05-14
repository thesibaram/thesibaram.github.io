interface CategoryBadgeProps {
  category: "CV" | "ML" | "Web" | "Research" | "Systems";
}

const colorMap = {
  CV: "#00D4F5",
  ML: "#9B4FE8",
  Web: "#22C55E",
  Research: "#F59E0B",
  Systems: "#EF4444"
};

function getIcon(category: string) {
  switch (category) {
    case "CV":
      return (
        <>
          <rect x="6" y="6" width="15" height="3" />
          <rect x="3" y="9" width="3" height="3" />
          <rect x="9" y="9" width="3" height="3" />
          <rect x="15" y="9" width="3" height="3" />
          <rect x="21" y="9" width="3" height="3" />
          <rect x="6" y="12" width="15" height="3" />
        </>
      );
    case "ML":
      return (
        <>
          <rect x="6" y="6" width="3" height="3" />
          <rect x="18" y="6" width="3" height="3" />
          <rect x="12" y="15" width="3" height="3" />
          <rect x="7.5" y="7.5" width="6" height="9" fillOpacity="0.3" />
          <rect x="13.5" y="7.5" width="6" height="9" fillOpacity="0.3" />
          <rect x="7.5" y="7.5" width="12" height="1.5" />
        </>
      );
    case "Web":
      return (
        <>
          <rect x="6" y="3" width="12" height="3" />
          <rect x="3" y="6" width="3" height="12" />
          <rect x="18" y="6" width="3" height="12" />
          <rect x="6" y="18" width="12" height="3" />
          <rect x="3" y="9" width="18" height="2" />
          <rect x="3" y="14" width="18" height="2" />
        </>
      );
    case "Research":
      return (
        <>
          <rect x="9" y="3" width="6" height="3" />
          <rect x="10.5" y="6" width="3" height="6" />
          <rect x="7.5" y="12" width="9" height="3" />
          <rect x="4.5" y="15" width="15" height="6" />
        </>
      );
    case "Systems":
      return (
        <>
          <rect x="9" y="6" width="6" height="12" />
          <rect x="6" y="9" width="12" height="6" />
          <rect x="10.5" y="3" width="3" height="3" />
          <rect x="10.5" y="18" width="3" height="3" />
          <rect x="3" y="10.5" width="3" height="3" />
          <rect x="18" y="10.5" width="3" height="3" />
        </>
      );
    default:
      return null;
  }
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <div className="flex items-center gap-1" style={{ color: colorMap[category] }}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        {getIcon(category)}
      </svg>
      <span className="font-mono text-xs font-bold">{category.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}
