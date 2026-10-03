"use client";

import { useState, type FormEvent } from "react";
import type { InvitationContent } from "./content";
import { saveResponse } from "./rsvp-store";

export function RsvpSection({ rsvp }: { rsvp: InvitationContent["rsvp"] }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    saveResponse({
      name: String(data.get("fullName") ?? ""),
      attending: data.get("attendance") === "yes",
      message: String(data.get("thoughts") ?? ""),
      at: new Date().toISOString(),
    });
    setSent(true);
  }

  return (
    <section id="ak-rsvp" className="ak-section ak-rsvp">
      <div className="ak-rsvp__inner">
        <div className="ak-reveal ak-rsvp__head">
          <p className="ak-eyebrow">{rsvp.eyebrow}</p>
          <h2>{rsvp.title}</h2>
          <div className="ak-rsvp__heart" aria-hidden="true">
            <i />
            <span>♥</span>
            <i />
          </div>
          <p>{rsvp.intro}</p>
        </div>
        <div className="ak-reveal ak-rsvp__card">
          {sent ? (
            <p className="ak-rsvp__thanks" role="status">
              Teşekkürler! Yanıtınız alındı.
            </p>
          ) : (
            <form className="ak-rsvp__form" onSubmit={onSubmit}>
              <label className="ak-field">
                <span>Ad Soyad *</span>
                <input required maxLength={200} placeholder="Adınız ve soyadınız" name="fullName" autoComplete="name" />
              </label>
              <div className="ak-field-group" role="radiogroup" aria-label="Katılacak mısınız?">
                <span>Katılacak mısınız? *</span>
                <div className="ak-radios">
                  <label>
                    <input required type="radio" name="attendance" value="yes" />
                    <span>Sevinçle kabul ediyorum</span>
                  </label>
                  <label>
                    <input type="radio" name="attendance" value="no" />
                    <span>Maalesef katılamıyorum</span>
                  </label>
                </div>
              </div>
              <label className="ak-field">
                <span>Çifte mesajınız</span>
                <textarea name="thoughts" maxLength={2000} rows={4} placeholder="Dileklerinizi paylaşın..." />
              </label>
              <button type="submit" className="ak-submit">
                Yanıtı Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
