# RsvpSection Specification
## Overview
- **Target file:** `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/RsvpSection.tsx`; **Screenshot:** `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-390-scroll-04.png`, `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-rsvp-success.png`; **Interaction:** form submit
## Computed Styles
- section#ak-rsvp: relative z10; bg #fffcf7; padding 40px 20px 24px; inner max-width 480px.
- head (.ak-reveal) center mb 24px: eyebrow 11px ls .24em uppercase #a8b897 mb 8px; h2 Playfair clamp(32px,9vw,42px) #7d8b6f mb 14px; heart row flex center gap 12px mb 12px, lines 48×1 rgba(168,184,151,.267), "♥" #a8b897; p #8b9284 14px.
- card (.ak-reveal): bg #fff; radius 18px; padding 24px 18px; shadow 0 12px 40px rgba(61,52,40,.1).
- form grid gap 16px. label grid gap 6px; label text 13px #3a3f36. input: height 44px; radius 10px; border 1px solid rgba(168,184,151,.34); padding 0 12px; 15px Lora; bg #fbf9f4. radios: col gap 10px; label flex center gap 10px; text 14px. textarea: rows 4; radius 10px; same border; padding 12px; 14px Lora; bg #fbf9f4; resize none.
- submit: min-height 48px; radius 12px; no border; bg #7d8b6f; #fff; Playfair 16px; disabled opacity .6.
- success: card contains only p center #7d8b6f Allura 28px "Teşekkürler! Yanıtınız alındı."
## Behavior
Native required validation (name, attendance). On submit: persist {name, attending, message, at} to localStorage, notify Wishes list (if message non-empty), show success.
## Text
Misafirimiz olun; Katılım Bildirimi; ♥; Lütfen katılım durumunuzu bizimle paylaşın; Ad Soyad *; placeholder "Adınız ve soyadınız"; Katılacak mısınız? *; Sevinçle kabul ediyorum; Maalesef katılamıyorum; Çifte mesajınız; placeholder "Dileklerinizi paylaşın..."; Yanıtı Gönder
