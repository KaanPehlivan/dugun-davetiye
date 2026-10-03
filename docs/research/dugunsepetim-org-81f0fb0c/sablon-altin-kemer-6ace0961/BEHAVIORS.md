# Behaviors — Altın Kemer

## Global
- No smooth-scroll library. Native scroll. No scroll-snap.
- Page wrapper `.ak-page`: opacity 0 / translateY(16px) → `.ak-ready` opacity 1 / none, `transition: opacity .35s ease, transform .35s ease` (after intro closes).
- Root: `min-height:100dvh; background:#fbf9f4; color:#3a3f36; font-family: Lora; overflow-x:hidden`.
- Fonts: Allura (script), Playfair Display 400/500/600 (+italic), Lora 400/500/600/700 (+italic), Cormorant Garamond 400/500/600 (+italic). Pinyon Script loaded but unused.

## Intro overlay (time-driven + click)
- `position:fixed; inset:0; z-index:9999; background:#5a6650; cursor:pointer; transition: opacity .28s, transform .28s`. role=button, aria-label "Davetiyeyi görüntüle".
- Idle: poster image with `ak-open-breathe 3.6s ease-in-out infinite` (scale 1→1.045). Light sweep layer `inset:-20%; z 15; linear-gradient(105deg, transparent 35%, rgba(255,240,210,.28) 50%, transparent 65%); ak-light-sweep 4.2s ease-in-out infinite`.
- Prompt layer z20: flex column, justify end, `padding-bottom: calc(safe-bottom + 56px)`, gap 18px, `background: linear-gradient(transparent 42%, rgba(44,38,31,.55) 100%)`, `transition: opacity .35s`.
  - Seal: 64×64 wrapper; dashed ring `1px dashed rgba(255,255,255,.45)`, `ak-ring-spin 10s linear infinite`; inner 52×52 circle `border:1.5px solid #d8c49a; background: rgba(196,162,101,.28); backdrop-filter: blur(4px); box-shadow: 0 8px 24px rgba(0,0,0,.25); ak-seal-pulse 1.8s ease-in-out infinite`.
  - Text "Zarfa dokunun": Playfair 15px, lh 1.8, ls .2em, uppercase, white, `text-shadow: 0 2px 18px rgba(0,0,0,.5)`, `ak-premium-text-float 2.4s ease-in-out infinite`.
- "Geç" button: abs top calc(safe-top + 1rem), right 1rem, z30, `background: rgba(44,38,31,.45); backdrop-filter: blur(8px)`, white, Playfair .72rem, ls .16em, uppercase, padding 8px 14px, radius 999px. Skips straight to invitation.
- Tap anywhere: prompt fades (opacity .35s), 10s cinematic plays (~8.9s), then overlay → opacity 0 + scale (0.28s) and is unmounted; music starts on tap.
- REBUILD: envelope (SVG/CSS) opens on tap: flap rotates, card rises, petals fall; total ≈ 4.2s then overlay fades .28s.

## Hero (time-driven)
- Video layer wrapper `inset:-8%; 116%×116%`, `ak-hero-drift 22s ease-in-out infinite`; video `filter: saturate(1.12) contrast(1.05)`.
- Overlay gradient `linear-gradient(rgba(44,38,31,.18) 0%, rgba(44,38,31,.08) 42%, rgba(44,38,31,.55) 100%)`.
- Text entrance `.ak-animate` = `ak-luxury-reveal .55s cubic-bezier(.22,1,.36,1) forwards` with delays 0 / .1 / .25 (lines, ak-line-expand) / .35 (star, ak-star-appear) / .5 / .6.
- "Katılımı Onayla" → smooth-scrolls to `#ak-rsvp` (section top aligned to viewport top). Arrow ↓ `ak-bounce-soft 1.8s infinite`.

## Scroll reveal (scroll-driven, IntersectionObserver)
- `.ak-reveal`: opacity 0, translateY(42px), `transition: opacity .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1)`; `.ak-show` → opacity 1, none. One-shot.
- Measured trigger: element becomes `.ak-show` when its (transformed) box is ~60–100px inside the viewport bottom → IO `rootMargin: 0px 0px -60px 0px`, threshold 0.

## Music button (click)
- fixed bottom calc(safe-bottom + 20px), right 16px, z50, 48×48, radius 999px, `border:1px solid rgba(168,184,151,.34)`, `background: rgba(250,244,235,.88)`, blur(8px), color #7d8b6f, 16px, `box-shadow: 0 4px 18px rgba(61,52,40,.12)`.
- Playing: "♪", aria "Sesi kapat". Muted: "🔇", aria "Sesi aç". No hover styles.

## Gift accordion (click)
- Header button toggles; chevron span `transform: none → rotate(180deg)`, `transition: transform .3s`.
- Panel `max-height: 0 → 420px; opacity 0 → 1; transition: max-height .35s, opacity .3s`.
- "IBAN’ı Kopyala" → clipboard; label becomes "Kopyalandı" (reverts after ~2s).

## RSVP form (click)
- Submit (native validation: name required, radio required) → form card content replaced by
  `<p>` "Teşekkürler! Yanıtınız alındı." (Allura 28px, #7d8b6f, centered) inside the same card.
- REBUILD: no backend — saves to localStorage and appends the message to "Mesajlarınız" list.

## Map / calendar
- Map card: 16/10, radius 12, shadow `0 8px 24px rgba(61,52,40,.12)`, full overlay link to maps, pill "Haritada aç" bottom-right.
- Google Calendar template link (dates in UTC: 17:00 TR = 14:00Z, 3h).

## Responsive
- Mobile-first single column. All sections full-bleed backgrounds; inner `max-width` 420–640px, centered. Desktop (1440) = same layout centered; no breakpoint changes. Fluid type via clamp().
