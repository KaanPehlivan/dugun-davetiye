import type { InvitationContent } from "./content";
import { Ornament } from "./Ornament";

export function InviteSection({ invite }: { invite: InvitationContent["invite"] }) {
  return (
    <section className="ak-section ak-invite">
      <div className="ak-invite__card">
        <div className="ak-reveal ak-invite__head">
          <p className="ak-invite__eyebrow">{invite.eyebrow}</p>
          <h2 className="ak-invite__title">{invite.title}</h2>
          <div className="ak-divider" />
        </div>
        <div className="ak-reveal ak-invite__body">
          {invite.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="ak-reveal ak-invite__art">
          <Ornament />
        </div>
      </div>
    </section>
  );
}
