"use client";

import { useEffect, useState } from "react";
import type { InvitationContent, Wish } from "./content";
import { RSVP_EVENT, loadResponses, responsesToWishes } from "./rsvp-store";

export function WishesSection({ wishes }: { wishes: InvitationContent["wishes"] }) {
  const [local, setLocal] = useState<Wish[]>([]);

  useEffect(() => {
    const sync = () => setLocal(responsesToWishes(loadResponses()));
    sync();
    window.addEventListener(RSVP_EVENT, sync);
    return () => window.removeEventListener(RSVP_EVENT, sync);
  }, []);

  const items = [...local.slice().reverse(), ...wishes.items];

  return (
    <section className="ak-section ak-wishes" data-invitation-rsvp-thoughts="">
      <div className="ak-wishes__inner">
        <div className="ak-wishes__head">
          <p className="ak-wishes__eyebrow">{wishes.eyebrow}</p>
          <h2>{wishes.title}</h2>
          <p className="ak-wishes__intro">{wishes.intro}</p>
        </div>
        <div className="ak-wishes__list">
          {items.map((w, i) => (
            <article key={`${i}-${w.name}`} className="ak-wish">
              <span className="ak-wish__quote" aria-hidden="true">
                “
              </span>
              <p className="ak-wish__msg">{w.message}</p>
              <p className="ak-wish__name">{w.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
