import type { CSSProperties } from "react";

// Deterministic pseudo-random so server and client render the same petals.
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

interface PetalsProps {
  count?: number;
  className?: string;
  /** Multiplier for fall duration (higher = slower). */
  speed?: number;
}

export function Petals({ count = 18, className = "", speed = 1 }: PetalsProps) {
  return (
    <div className={`ak-petals ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const size = 8 + seeded(i, 1) * 10;
        const style = {
          left: `${(seeded(i, 2) * 100).toFixed(2)}%`,
          width: `${size.toFixed(1)}px`,
          height: `${(size * 0.78).toFixed(1)}px`,
          animationDuration: `${((7 + seeded(i, 3) * 6) * speed).toFixed(2)}s`,
          animationDelay: `${(-seeded(i, 4) * 12).toFixed(2)}s`,
          "--sway": `${(seeded(i, 5) * 70 - 35).toFixed(0)}px`,
          "--o": (0.65 + seeded(i, 6) * 0.35).toFixed(2),
        } as CSSProperties;
        return <span key={i} className="ak-petal" style={style} />;
      })}
    </div>
  );
}
