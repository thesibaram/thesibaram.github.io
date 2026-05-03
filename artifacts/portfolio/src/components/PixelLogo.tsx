export function PixelLogo({ size = 40 }: { size?: number }) {
  const S = [
    [0,1,1,0],
    [1,0,0,0],
    [0,1,1,0],
    [0,0,0,1],
    [0,1,1,0],
  ];
  const B = [
    [1,1,1,0],
    [1,0,0,1],
    [1,1,1,0],
    [1,0,0,1],
    [1,1,1,0],
  ];

  const px = 2;
  const cols = 4;
  const rows = 5;
  const gap = 3;
  const totalW = cols * px + gap + cols * px;
  const totalH = rows * px;
  const ox = Math.floor((40 - totalW) / 2);
  const oy = Math.floor((40 - totalH) / 2);
  const bx = ox + cols * px + gap;

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      style={{ display: "block" }}
      aria-label="SB logo"
    >
      <rect x="2" y="2" width="2" height="2" fill="var(--px-accent)" opacity="0.8" />
      <rect x="36" y="2" width="2" height="2" fill="var(--px-accent)" opacity="0.8" />
      <rect x="2" y="36" width="2" height="2" fill="var(--px-accent)" opacity="0.8" />
      <rect x="36" y="36" width="2" height="2" fill="var(--px-accent)" opacity="0.8" />
      <rect x="6" y="2" width="4" height="1" fill="var(--px-accent)" opacity="0.3" />
      <rect x="30" y="2" width="4" height="1" fill="var(--px-accent)" opacity="0.3" />

      {S.map((row, ri) =>
        row.map((on, ci) =>
          on ? (
            <rect
              key={`s-${ri}-${ci}`}
              x={ox + ci * px}
              y={oy + ri * px}
              width={px}
              height={px}
              fill="var(--px-accent)"
            />
          ) : null
        )
      )}

      {B.map((row, ri) =>
        row.map((on, ci) =>
          on ? (
            <rect
              key={`b-${ri}-${ci}`}
              x={bx + ci * px}
              y={oy + ri * px}
              width={px}
              height={px}
              fill="currentColor"
            />
          ) : null
        )
      )}

      <rect x="19" y="36" width="2" height="2" fill="var(--px-accent)" opacity="0.5" />
    </svg>
  );
}
