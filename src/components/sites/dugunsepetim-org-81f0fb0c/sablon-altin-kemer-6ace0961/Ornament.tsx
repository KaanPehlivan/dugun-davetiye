// Interlocked rings framed by olive sprigs and blossoms — an original stand-in for the template's doves image.

const LEAF_POINTS = [
  [0.12, -1], [0.22, 1], [0.32, -1], [0.42, 1], [0.52, -1], [0.62, 1], [0.72, -1], [0.82, 1],
] as const;

function Sprig({ flip = false }: { flip?: boolean }) {
  // Quadratic stem from (30,150) via (70,96) to (124,92)
  const pt = (t: number) => {
    const x = (1 - t) ** 2 * 30 + 2 * (1 - t) * t * 70 + t ** 2 * 124;
    const y = (1 - t) ** 2 * 150 + 2 * (1 - t) * t * 96 + t ** 2 * 92;
    return [x, y];
  };
  return (
    <g transform={flip ? "translate(340 0) scale(-1 1)" : undefined}>
      <path d="M30 150Q70 96 124 92" fill="none" stroke="#7d8b6f" strokeWidth="1.6" strokeLinecap="round" />
      {LEAF_POINTS.map(([t, side], i) => {
        const [x, y] = pt(t);
        const rot = side > 0 ? 40 : -60;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y + side * 6}
            rx="9"
            ry="3.6"
            fill={i % 2 ? "#a8b897" : "#8fa27d"}
            transform={`rotate(${rot} ${x} ${y + side * 6})`}
          />
        );
      })}
      <g>
        <circle cx="52" cy="118" r="6" fill="#f4dcd5" />
        <circle cx="52" cy="118" r="2.2" fill="#d8c49a" />
        <circle cx="96" cy="86" r="5" fill="#fbf3ea" stroke="#ead6c9" strokeWidth="0.8" />
        <circle cx="96" cy="86" r="1.8" fill="#d8c49a" />
        <circle cx="38" cy="140" r="4" fill="#fbf3ea" stroke="#ead6c9" strokeWidth="0.8" />
      </g>
    </g>
  );
}

export function Ornament() {
  return (
    <svg viewBox="0 0 340 200" role="img" aria-label="Alyanslar">
      <defs>
        <linearGradient id="ak-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecd9a8" />
          <stop offset="0.5" stopColor="#c2a878" />
          <stop offset="1" stopColor="#a8894f" />
        </linearGradient>
      </defs>
      <Sprig />
      <Sprig flip />
      <circle cx="150" cy="118" r="36" fill="none" stroke="url(#ak-ring)" strokeWidth="5" />
      <circle cx="190" cy="118" r="36" fill="none" stroke="url(#ak-ring)" strokeWidth="5" />
      {/* re-draw the overlap so the rings interlock */}
      <path d="M170 88A36 36 0 0 1 186 82" fill="none" stroke="url(#ak-ring)" strokeWidth="5" />
      <path d="M150 82A36 36 0 0 1 166 88" fill="none" stroke="#fffcf7" strokeWidth="1" opacity="0.7" />
      <path d="M190 82l7 -9h-14z" fill="#f6f1e6" stroke="#c2a878" strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M170 40c-4-7-15-6-15 2 0 6 9 11 15 16 6-5 15-10 15-16 0-8-11-9-15-2z"
        fill="none"
        stroke="#c2a878"
        strokeWidth="1.4"
      />
    </svg>
  );
}
