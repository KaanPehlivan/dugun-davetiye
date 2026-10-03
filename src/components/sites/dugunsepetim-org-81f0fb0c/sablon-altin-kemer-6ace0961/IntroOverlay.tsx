"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { Petals } from "./Petals";

type Phase = "idle" | "opening" | "closing" | "done";

const OPEN_DURATION = 3600; // envelope animation, then fade out
const FADE_DURATION = 280;

interface IntroOverlayProps {
  bride: string;
  groom: string;
  dateLabel: string;
  /** Optional photo behind the envelope. */
  image?: string;
  /** Optional venue logo badge (top-left). */
  logo?: { src: string; alt: string };
  /** Fired on the first tap (start music here — needs a user gesture). */
  onStart: () => void;
  /** Fired when the overlay has fully faded out. */
  onDone: () => void;
}

export function IntroOverlay({ bride, groom, dateLabel, image, logo, onStart, onDone }: IntroOverlayProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("ak-locked");
    const pending = timers.current;
    return () => {
      root.classList.remove("ak-locked");
      pending.forEach(clearTimeout);
    };
  }, []);

  function close() {
    setPhase("closing");
    document.documentElement.classList.remove("ak-locked");
    timers.current.push(
      window.setTimeout(() => {
        setPhase("done");
        onDone();
      }, FADE_DURATION),
    );
  }

  function open() {
    if (phase !== "idle") return;
    setPhase("opening");
    onStart();
    timers.current.push(window.setTimeout(close, OPEN_DURATION));
  }

  function skip(e: MouseEvent) {
    e.stopPropagation();
    if (phase === "closing" || phase === "done") return;
    timers.current.forEach(clearTimeout);
    if (phase === "idle") onStart();
    close();
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  }

  if (phase === "done") return null;

  const cls = ["ak-intro", phase !== "idle" && "is-opening", phase === "closing" && "is-closing"]
    .filter(Boolean)
    .join(" ");

  return (
    <div role="button" tabIndex={0} aria-label="Davetiyeyi görüntüle" className={cls} onClick={open} onKeyDown={onKey}>
      <button type="button" className="ak-intro__skip" onClick={skip}>
        Geç
      </button>

      {logo && (
        <span className="ak-intro__badge">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} />
        </span>
      )}

      <div className="ak-intro__scene">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="ak-intro__photo" src={image} alt="" draggable={false} fetchPriority="high" />
        )}
        <div className="ak-env">
          <div className="ak-env__back" />
          <div className="ak-env__card">
            <span className="ak-env__card-eyebrow">Davetlisiniz</span>
            <span className="ak-env__card-names">
              {bride}
              <span>&amp;</span>
              {groom}
            </span>
            <span className="ak-env__card-date">{dateLabel}</span>
          </div>
          <svg className="ak-env__front" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="ak-env-side" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#efe3cc" />
                <stop offset="1" stopColor="#e6d6b8" />
              </linearGradient>
              <linearGradient id="ak-env-bottom" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f6ecda" />
                <stop offset="1" stopColor="#eadcbf" />
              </linearGradient>
            </defs>
            <path d="M0 0L150 112L0 200Z" fill="url(#ak-env-side)" />
            <path d="M300 0L150 112L300 200Z" fill="url(#ak-env-side)" />
            <path d="M0 200L150 96L300 200Z" fill="url(#ak-env-bottom)" />
            <path d="M0 200L150 96L300 200" fill="none" stroke="rgba(160,130,80,.25)" strokeWidth="1" />
          </svg>
          <div className="ak-env__flap">
            <svg viewBox="0 0 300 112" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="ak-env-flap" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#e3d2b2" />
                  <stop offset="1" stopColor="#f3e8d3" />
                </linearGradient>
              </defs>
              <path d="M0 0H300L150 112Z" fill="url(#ak-env-flap)" stroke="rgba(160,130,80,.3)" strokeWidth="1" />
            </svg>
          </div>
          <div className="ak-env__wax" aria-hidden="true">
            {bride.charAt(0)}
            {groom.charAt(0)}
          </div>
        </div>
      </div>

      <Petals className="ak-intro__petals" count={22} speed={0.8} />
      <div className="ak-intro__sweep" aria-hidden="true" />

      <div className="ak-intro__prompt">
        <div className="ak-seal" aria-hidden="true">
          <div className="ak-seal__ring" />
          <div className="ak-seal__core" />
        </div>
        <div className="ak-intro__text">Zarfa dokunun</div>
      </div>
    </div>
  );
}
