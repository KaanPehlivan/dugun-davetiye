import type { EventDetail, InvitationContent } from "./content";

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function embedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

/** Google Calendar wants UTC; event times are entered as Europe/Istanbul (UTC+3, no DST). */
function toUtcStamp(local: string) {
  return new Date(`${local}:00+03:00`).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function calendarUrl(title: string, event: EventDetail) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toUtcStamp(event.start)}/${toUtcStamp(event.end)}`,
    details: "Düğün daveti",
    location: event.mapQuery,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

interface DetailsSectionProps {
  details: InvitationContent["details"];
  calendarTitle: string;
  /** Venue logo shown in place of the ✦ icon. */
  logo?: { src: string; alt: string };
}

export function DetailsSection({ details, calendarTitle, logo }: DetailsSectionProps) {
  return (
    <section id="ak-details" className="ak-section ak-details">
      <div className="ak-details__inner">
        <div className="ak-reveal ak-details__head">
          <p className="ak-eyebrow">{details.eyebrow}</p>
          <h2>{details.title}</h2>
          <p>{details.intro}</p>
        </div>
        {details.events.map((event) => (
          <div key={event.title} className="ak-reveal ak-details__card">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="ak-details__logo" src={logo.src} alt={logo.alt} loading="lazy" />
            ) : (
              <div className="ak-details__icon" aria-hidden="true">
                ✦
              </div>
            )}
            <h3>{event.title}</h3>
            <p className="ak-details__when">🕐 {event.when}</p>
            <p className="ak-details__venue">📍 {event.venue}</p>
            <p className="ak-details__addr">{event.address}</p>
            <div className="ak-map">
              <iframe
                src={embedUrl(event.mapQuery)}
                title={`${event.venue} haritası`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
              />
              <a
                className="ak-map__link"
                href={mapsUrl(event.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${event.venue} — Haritada aç`}
              />
              <span className="ak-map__pill">Haritada aç</span>
            </div>
            <div className="ak-details__actions">
              <a href={mapsUrl(event.mapQuery)} target="_blank" rel="noopener noreferrer">
                Haritada Aç
              </a>
              <a href={calendarUrl(calendarTitle, event)} target="_blank" rel="noopener noreferrer">
                Takvime Ekle
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
