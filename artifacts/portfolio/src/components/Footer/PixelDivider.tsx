export function PixelDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: "4px",
        backgroundImage: "repeating-linear-gradient(90deg, var(--px-border) 0px, var(--px-border) 4px, transparent 4px, transparent 12px)",
      }}
    />
  );
}
