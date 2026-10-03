// Illustrated floral arch over a summer sky — an original stand-in for the template's hero video.
// Two compositions: a portrait one for phones and a landscape one for wide screens (CSS picks one).

interface ArchSpec {
  id: string;
  W: number;
  H: number;
  left: number;
  right: number;
  /** y where the arch starts curving */
  spring: number;
  /** flowers climb the pillars down to here */
  pillarEnd: number;
  /** horizon (top of the sea band) */
  horizon: number;
  /** size multiplier for flowers and leaves */
  k: number;
}

const PORTRAIT: ArchSpec = { id: "p", W: 400, H: 860, left: 58, right: 342, spring: 300, pillarEnd: 610, horizon: 716, k: 1 };
const LANDSCAPE: ArchSpec = { id: "l", W: 1440, H: 900, left: 250, right: 1190, spring: 560, pillarEnd: 860, horizon: 780, k: 1.55 };

function rand(i: number, salt: number) {
  const x = Math.sin(i * 91.17 + salt * 17.31) * 24634.6345;
  return x - Math.floor(x);
}

const r1 = (n: number) => Math.round(n * 10) / 10;

function buildArch(spec: ArchSpec) {
  const { left, right, spring, pillarEnd, k } = spec;
  const R = (right - left) / 2;
  const cx = left + R;
  const pillar = pillarEnd - spring;
  const arc = Math.PI * R;
  const total = pillar * 2 + arc;

  /** Point on the opening edge at distance s (left pillar bottom → arch → right pillar bottom), with outward normal. */
  const edge = (s: number) => {
    if (s < pillar) return { x: left, y: pillarEnd - s, nx: -1, ny: 0 };
    if (s < pillar + arc) {
      const a = Math.PI - ((s - pillar) / arc) * Math.PI; // π → 0
      const nx = Math.cos(a);
      const ny = -Math.sin(a);
      return { x: cx + R * nx, y: spring + R * ny, nx, ny };
    }
    return { x: right, y: spring + (s - pillar - arc), nx: 1, ny: 0 };
  };

  const roseCount = Math.round(total / (23 * k));
  const roses = Array.from({ length: roseCount }, (_, i) => {
    const s = (i / (roseCount - 1)) * total + (rand(i, 1) - 0.5) * 18 * k;
    const p = edge(Math.min(total, Math.max(0, s)));
    const off = (2 + rand(i, 2) * 16) * k;
    return {
      x: r1(p.x + p.nx * off),
      y: r1(p.y + p.ny * off),
      r: r1((8 + rand(i, 3) * 8) * k),
      rot: Math.round(rand(i, 4) * 360),
      tint: rand(i, 5) > 0.78,
    };
  });

  const leaves = Array.from({ length: Math.round(roseCount * 1.6) }, (_, i) => {
    const p = edge(rand(i, 6) * total);
    const off = (-4 + rand(i, 7) * 26) * k;
    const ang = (Math.atan2(p.ny, p.nx) * 180) / Math.PI + (rand(i, 8) - 0.5) * 140;
    return {
      x: r1(p.x + p.nx * off),
      y: r1(p.y + p.ny * off),
      rot: Math.round(ang),
      len: r1((7 + rand(i, 9) * 7) * k),
      shade: rand(i, 10) > 0.5 ? "#5d7a46" : "#7f9a5e",
    };
  });

  const vineCount = Math.round(arc / (40 * k));
  const vines = Array.from({ length: vineCount }, (_, i) => {
    const p = edge(pillar + arc * (0.05 + (i / (vineCount - 1)) * 0.9 + (rand(i, 14) - 0.5) * 0.03));
    const sx = p.x - p.nx * 4 * k;
    const sy = p.y - p.ny * 4 * k;
    const len = (40 + rand(i, 11) * 140 * (1 - Math.abs(p.nx) * 0.55)) * k;
    const sway = (rand(i, 12) - 0.5) * 22 * k;
    const steps = Math.max(2, Math.floor(len / (12 * k)));
    return {
      d: `M${r1(sx)} ${r1(sy)} q${r1(sway)} ${r1(len / 2)} ${r1(sway / 3)} ${r1(len)}`,
      leaves: Array.from({ length: steps }, (_, j) => {
        const t = (j + 1) / (steps + 1);
        return {
          x: r1(sx + sway * t * (1 - t) * 1.4 + (j % 2 ? 3 : -3) * k),
          y: r1(sy + len * t),
          rot: (j % 2 ? 35 : -35) + Math.round((rand(i * 13 + j, 15) - 0.5) * 30),
          blossom: rand(i * 7 + j, 13) > 0.5,
          dark: rand(i * 5 + j, 16) > 0.6,
        };
      }),
    };
  });

  return { R, roses, leaves, vines };
}

function Rose({ x, y, r, rot, tint, id }: { x: number; y: number; r: number; rot: number; tint: boolean; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <circle r={r} fill={`url(#ak-${id}-${tint ? "blush" : "rose"})`} stroke="#e2d2b6" strokeWidth={0.6} />
      <path
        d={`M${r1(-r * 0.55)} 0 a${r1(r * 0.55)} ${r1(r * 0.55)} 0 1 1 ${r1(r * 0.55)} ${r1(r * 0.55)} M${r1(-r * 0.25)} ${r1(-r * 0.1)} a${r1(r * 0.28)} ${r1(r * 0.28)} 0 1 1 ${r1(r * 0.3)} ${r1(r * 0.3)}`}
        fill="none"
        stroke="#e4d4ba"
        strokeWidth={0.9}
        strokeLinecap="round"
      />
    </g>
  );
}

function ArchScene({ spec }: { spec: ArchSpec }) {
  const { id, W, H, left, right, spring, horizon, k } = spec;
  const { R, roses, leaves, vines } = buildArch(spec);
  const u = (name: string) => `url(#ak-${id}-${name})`;
  const opening = (pad: number) => `M${left - pad} ${H}V${spring}A${R + pad} ${R + pad} 0 0 1 ${right + pad} ${spring}V${H}`;
  const cloudY = horizon - 70;
  const balusters = Math.ceil(W / 30);

  return (
    <svg
      className={`ak-arch ak-arch--${id === "p" ? "portrait" : "landscape"}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`ak-${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f78cf" />
          <stop offset="0.45" stopColor="#5b9be0" />
          <stop offset="0.78" stopColor="#a9cdf0" />
          <stop offset="1" stopColor="#e6f0f8" />
        </linearGradient>
        <linearGradient id={`ak-${id}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4d8cc4" />
          <stop offset="1" stopColor="#2f6aa3" />
        </linearGradient>
        <linearGradient id={`ak-${id}-stone`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#efe8dc" />
          <stop offset={r1((left / W) * 0.9 * 100) / 100} stopColor="#f8f4ec" />
          <stop offset={1 - r1(((W - right) / W) * 0.9 * 100) / 100} stopColor="#f8f4ec" />
          <stop offset="1" stopColor="#e9e1d2" />
        </linearGradient>
        <radialGradient id={`ak-${id}-rose`} cx="0.4" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="0.65" stopColor="#f7efe2" />
          <stop offset="1" stopColor="#e9dcc5" />
        </radialGradient>
        <radialGradient id={`ak-${id}-blush`} cx="0.4" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#fff8f3" />
          <stop offset="0.65" stopColor="#f5e1d6" />
          <stop offset="1" stopColor="#e6cbbd" />
        </radialGradient>
        <filter id={`ak-${id}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={7 * k} />
        </filter>
        <filter id={`ak-${id}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation={5 * k} />
        </filter>
      </defs>

      {/* sky, clouds, sea */}
      <rect width={W} height={H} fill={u("sky")} />
      <g fill="#fff" opacity="0.9" filter={u("soft")}>
        {[0.18, 0.38, 0.62, 0.8, 0.05, 0.95].map((fx, i) => (
          <ellipse
            key={i}
            cx={r1(W * fx)}
            cy={r1(cloudY + (i % 3) * 18 * k)}
            rx={r1((80 + rand(i, 20) * 50) * k)}
            ry={r1((18 + rand(i, 21) * 12) * k)}
          />
        ))}
      </g>
      <g fill="#fff" opacity="0.55" filter={u("soft")}>
        <ellipse cx={r1(W * 0.72)} cy={r1(spring - R * 0.35)} rx={60 * k} ry={12 * k} />
        <ellipse cx={r1(W * 0.3)} cy={r1(spring + 30)} rx={50 * k} ry={10 * k} />
      </g>
      <rect x="0" y={horizon} width={W} height={H - horizon} fill={u("sea")} />
      <g stroke="#a9cdee" strokeWidth="1" opacity="0.5" strokeLinecap="round">
        {Array.from({ length: Math.round(W / 70) }, (_, i) => (
          <path key={i} d={`M${r1(rand(i, 22) * W)} ${r1(horizon + 10 + rand(i, 23) * 50)}h${r1(24 + rand(i, 24) * 34)}`} />
        ))}
      </g>
      {/* terrace balustrade (only visible on tall crops) */}
      <rect x="0" y={horizon + 70} width={W} height={Math.max(0, H - horizon - 70)} fill="#f1ebe0" />
      <rect x="0" y={horizon + 66} width={W} height="9" rx="2" fill="#faf6ef" />
      <g fill="#e7dfd0">
        {Array.from({ length: balusters }, (_, i) => (
          <rect key={i} x={12 + i * 30} y={horizon + 80} width="10" height="38" rx="5" />
        ))}
      </g>

      {/* stone arch frame */}
      <path d={`M0 0H${W}V${H}H0Z ${opening(0)}Z`} fill={u("stone")} fillRule="evenodd" />
      <path d={opening(0)} fill="none" stroke="rgba(110,90,60,0.28)" strokeWidth={8 * k} filter={u("shadow")} />
      <path d={opening(12 * k)} fill="none" stroke="#ddd1bc" strokeWidth="2" />
      <path d={opening(22 * k)} fill="none" stroke="#e6dccb" strokeWidth="1.2" />

      {/* hanging vines */}
      {vines.map((v, i) => (
        <g key={i}>
          <path d={v.d} fill="none" stroke="#5f7a48" strokeWidth={k} opacity="0.85" />
          {v.leaves.map((l, j) => (
            <g key={j} transform={`translate(${l.x} ${l.y}) rotate(${l.rot})`}>
              <ellipse rx={r1(2.4 * k)} ry={r1(5 * k)} fill={l.dark ? "#58743f" : "#6f8c55"} />
              {l.blossom && <circle cx={r1(4 * k)} cy={r1(3 * k)} r={r1(2.3 * k)} fill="#fffaf2" />}
            </g>
          ))}
        </g>
      ))}

      {/* leaves + roses along the arch */}
      {leaves.map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx={l.len} ry={r1(l.len * 0.42)} fill={l.shade} transform={`rotate(${l.rot} ${l.x} ${l.y})`} />
      ))}
      {roses.map((r, i) => (
        <Rose key={i} id={id} {...r} />
      ))}
    </svg>
  );
}

export function HeroArch() {
  return (
    <>
      <ArchScene spec={PORTRAIT} />
      <ArchScene spec={LANDSCAPE} />
    </>
  );
}
