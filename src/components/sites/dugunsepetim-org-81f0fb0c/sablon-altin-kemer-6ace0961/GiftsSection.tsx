"use client";

import { useEffect, useRef, useState } from "react";
import type { InvitationContent } from "./content";

export function GiftsSection({ gifts }: { gifts: InvitationContent["gifts"] }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    const value = gifts.iban.replace(/\s+/g, "");
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Older iOS / non-secure contexts: fall back to a temporary textarea.
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="ak-section ak-gifts">
      <div className="ak-gifts__inner">
        <div className="ak-reveal ak-gifts__head">
          <h2>{gifts.title}</h2>
          <p>
            {gifts.intro[0]}
            <br />
            {gifts.intro[1]}
          </p>
        </div>
        <div className="ak-reveal ak-gifts__box">
          <button
            type="button"
            className="ak-gifts__toggle"
            aria-expanded={open}
            aria-controls="ak-gifts-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{gifts.toggleLabel}</span>
            <span className="ak-gifts__chev" aria-hidden="true">
              ⌄
            </span>
          </button>
          <div id="ak-gifts-panel" className={`ak-gifts__panel${open ? " is-open" : ""}`} aria-hidden={!open}>
            <div className="ak-gifts__panel-inner">
              <p>{gifts.paragraphs[0]}</p>
              <p>{gifts.paragraphs[1]}</p>
              <div className="ak-gifts__iban">
                <div>
                  <p>{gifts.iban}</p>
                  <button type="button" className="ak-btn-soft" onClick={copy} tabIndex={open ? 0 : -1}>
                    {copied ? "Kopyalandı" : "IBAN’ı Kopyala"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
