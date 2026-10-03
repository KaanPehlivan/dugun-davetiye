"use client";

import { useEffect, useRef, useState } from "react";
import "./altin-kemer.css";
import type { InvitationContent } from "./content";
import { DetailsSection } from "./DetailsSection";
import { FamiliesSection } from "./FamiliesSection";
import { GiftsSection } from "./GiftsSection";
import { HeroSection } from "./HeroSection";
import { IntroOverlay } from "./IntroOverlay";
import { InvitationFooter } from "./InvitationFooter";
import { InviteSection } from "./InviteSection";
import { MusicButton } from "./MusicButton";
import { ProgramSection } from "./ProgramSection";
import { RsvpSection } from "./RsvpSection";
import { VenueSection } from "./VenueSection";
import { WishesSection } from "./WishesSection";

export function Invitation({ content }: { content: InvitationContent }) {
  const { venue } = content;
  const venueLogo = venue && { src: venue.logo, alt: venue.name };
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // One-shot scroll reveal (measured trigger ≈ 60px inside the viewport).
  useEffect(() => {
    if (!ready || !pageRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("ak-show");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0 },
    );
    pageRef.current.querySelectorAll(".ak-reveal:not(.ak-show)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ready]);

  useEffect(() => () => audio.current?.pause(), []);

  function startMusic() {
    if (!content.music) return;
    audio.current ??= Object.assign(new Audio(content.music), { loop: true, preload: "auto" });
    audio.current.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }

  function toggleMusic() {
    if (playing) {
      audio.current?.pause();
      setPlaying(false);
    } else {
      startMusic();
    }
  }

  function scrollToRsvp() {
    document.getElementById("ak-rsvp")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="ak-root">
      <IntroOverlay
        bride={content.bride}
        groom={content.groom}
        dateLabel={content.dateLabel}
        image={content.introImage}
        logo={venueLogo}
        onStart={startMusic}
        onDone={() => setReady(true)}
      />
      <div ref={pageRef} className={`ak-page${ready ? " ak-ready" : ""}`}>
        {content.music && <MusicButton playing={playing} onToggle={toggleMusic} />}
        <HeroSection
          eyebrow={content.eyebrow}
          bride={content.bride}
          groom={content.groom}
          dateLabel={content.dateLabel}
          heroImage={content.heroImage}
          onRsvp={scrollToRsvp}
        />
        <ProgramSection items={content.program} />
        <InviteSection invite={content.invite} />
        <FamiliesSection families={content.families} />
        <GiftsSection gifts={content.gifts} />
        {venue && <VenueSection venue={venue} />}
        <DetailsSection
          details={content.details}
          calendarTitle={`${content.bride} & ${content.groom} — Düğün`}
          logo={venueLogo}
        />
        <RsvpSection rsvp={content.rsvp} />
        <WishesSection wishes={content.wishes} />
        <InvitationFooter
          bride={content.bride}
          groom={content.groom}
          dateLabel={content.dateLabel}
          note={content.footerNote}
          venue={venue && { name: venue.name, logo: venue.logoLight }}
        />
      </div>
    </div>
  );
}
