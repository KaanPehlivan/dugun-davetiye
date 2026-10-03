import type { InvitationContent } from "./content";

export function FamiliesSection({ families }: { families: InvitationContent["families"] }) {
  return (
    <section className="ak-section ak-families">
      <div className="ak-families__inner">
        <div className="ak-reveal ak-families__head">
          <h2>{families.title}</h2>
          <div className="ak-divider" />
        </div>
        <div className="ak-reveal ak-families__grid">
          {families.sides.map((side) => (
            <div key={side.label} className="ak-families__card">
              <p className="ak-families__label">{side.label}</p>
              <p className="ak-families__names">{side.names}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
