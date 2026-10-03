import type { CSSProperties } from "react";
import { HeroArch } from "./HeroArch";
import { Petals } from "./Petals";

interface HeroSectionProps {
  eyebrow: string;
  bride: string;
  groom: string;
  dateLabel: string;
  heroImage?: string;
  onRsvp: () => void;
}

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

export function HeroSection({ eyebrow, bride, groom, dateLabel, heroImage, onRsvp }: HeroSectionProps) {
  return (
    <section className={`ak-hero${heroImage ? " ak-hero--photo" : ""}`}>
      <div className="ak-hero__media">
        {heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={heroImage} alt="" />
        ) : (
          <HeroArch />
        )}
      </div>
      <Petals count={16} speed={1.3} />
      <div className="ak-hero__shade" />
      <div className="ak-hero__spacer" style={{ minHeight: 48 }} />
      <div className="ak-hero__content">
        <p className="ak-hero__eyebrow ak-animate" style={delay(0)}>
          {eyebrow}
        </p>
        <h1 className="ak-hero__names ak-animate" style={delay(0.1)}>
          <span>{bride}</span>
          <span className="ak-amp">&amp;</span>
          <span>{groom}</span>
        </h1>
        <div className="ak-hero__rule">
          <span className="ak-hero__line ak-animate" style={{ ...delay(0.25), transformOrigin: "right center" }} />
          <span className="ak-hero__star ak-animate" style={delay(0.35)}>
            ✦
          </span>
          <span className="ak-hero__line ak-animate" style={{ ...delay(0.25), transformOrigin: "left center" }} />
        </div>
        <p className="ak-hero__date ak-animate" style={delay(0.5)}>
          {dateLabel}
        </p>
      </div>
      <div className="ak-hero__spacer" />
      <div className="ak-hero__cta-wrap ak-animate" style={delay(0.6)}>
        <button type="button" className="ak-hero__cta" onClick={onRsvp}>
          Katılımı Onayla
        </button>
        <div className="ak-hero__arrow" aria-hidden="true">
          ↓
        </div>
      </div>
    </section>
  );
}
