interface InvitationFooterProps {
  bride: string;
  groom: string;
  dateLabel: string;
  note: string;
  venue?: { name: string; logo: string };
}

export function InvitationFooter({ bride, groom, dateLabel, note, venue }: InvitationFooterProps) {
  return (
    <footer className="ak-footer">
      <h2>
        {bride}
        <span>&amp;</span>
        {groom}
      </h2>
      <p className="ak-footer__date">{dateLabel}</p>
      <p className="ak-footer__note">{note}</p>
      {venue && (
        <div className="ak-footer__venue">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={venue.logo} alt={venue.name} loading="lazy" />
        </div>
      )}
    </footer>
  );
}
