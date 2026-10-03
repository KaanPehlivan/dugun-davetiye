"use client";

import { useRef, useState } from "react";
import type { Venue } from "./content";

export function VenueSection({ venue }: { venue: Venue }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const el = track.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    if (!slide) return;
    const step = slide.offsetWidth + 12;
    setActive(Math.min(venue.photos.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  }

  function goTo(i: number) {
    const el = track.current;
    const slide = el?.children[i] as HTMLElement | undefined;
    if (!el || !slide) return;
    el.scrollTo({ left: slide.offsetLeft - el.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2, behavior: "smooth" });
  }

  return (
    <section className="ak-section ak-venue">
      <div className="ak-venue__inner">
        <div className="ak-reveal ak-venue__head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ak-venue__logo" src={venue.logo} alt={venue.name} width={768} height={510} />
          <p className="ak-venue__eyebrow">{venue.eyebrow}</p>
          <h2>{venue.title}</h2>
          <div className="ak-divider" />
          <p className="ak-venue__text">{venue.description}</p>
        </div>
      </div>
      <div className="ak-reveal">
        <div ref={track} className="ak-venue__track" onScroll={onScroll} aria-label={`${venue.name} fotoğrafları`}>
          {venue.photos.map((photo) => (
            <figure key={photo.src} className="ak-venue__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="ak-venue__dots">
          {venue.photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className={i === active ? "is-active" : undefined}
              aria-label={`${i + 1}. fotoğraf`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
