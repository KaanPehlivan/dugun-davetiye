# HeroSection Specification
## Overview
- **Target file:** `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/HeroSection.tsx` (+ `HeroArch.tsx` SVG backdrop replacing hero.mp4)
- **Screenshot:** `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-hero-with-sales-panel.png`, `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/desktop-1440-scroll-00.png`
- **Interaction model:** time-driven entrance + click (scroll to RSVP)
## Computed Styles
- section: relative; min-height 100dvh; flex col; align center; justify center; overflow hidden; padding calc(env(safe-area-inset-top) + 32px) 20px 48px; bg #fbf9f4.
- media wrapper: absolute; inset -8%; 116%×116%; ak-hero-drift 22s ease-in-out infinite; media object-fit cover; filter saturate(1.12) contrast(1.05). Optional `heroImage` prop (photo) else SVG arch scene (sky #4f8fd6→#9cc4ec, white stone arch, greenery + white roses, falling petals).
- overlay: absolute inset 0; linear-gradient(rgba(44,38,31,.18) 0%, rgba(44,38,31,.08) 42%, rgba(44,38,31,.55) 100%).
- spacer flex 1, min-height 48px; content: relative z10 center max-width 420px width 100% padding 40px 8px 24px; spacer flex 1.
- eyebrow p: margin 0 0 18px; clamp(16px,4.4vw,20px); ls .28em; uppercase; #fff; Playfair 600; text-shadow 0 2px 16px rgba(0,0,0,.45); delay 0s.
- h1: Allura 400; clamp(52px,15vw,76px); lh 1.02; #fff; ls .02em; text-shadow 0 3px 22px rgba(0,0,0,.42); delay .1s. Names display block; "&" span: block; .42em; lh 1; margin .14em 0; #d8c49a.
- divider row: flex center gap 14px margin 14px 0 8px; lines 56×1 rgba(255,255,255,.72) ak-line-expand delay .25s (origin right / left); star "✦" #d8c49a 20px text-shadow 0 2px 10px rgba(0,0,0,.35) ak-star-appear delay .35s.
- date p: clamp(15px,4.2vw,19px); ls .22em; uppercase; #fff; Playfair 600; text-shadow 0 2px 14px rgba(0,0,0,.4); delay .5s.
- CTA wrap: relative z10 center, delay .6s. Button: no bg/border; #fff; 14px; ls .24em; uppercase; Playfair 600; padding 8px 12px; text-shadow 0 2px 12px rgba(0,0,0,.4). Arrow "↓": margin-top 8px; rgba(255,255,255,.85); 20px; ak-bounce-soft 1.8s ease-in-out infinite.
- .ak-animate: opacity 0; ak-luxury-reveal .55s cubic-bezier(.22,1,.36,1) forwards (only starts after intro closes).
## Text Content
"Evleniyoruz", "Gizem", "&", "Kaan", "✦", "4 Eylül 2027", "Katılımı Onayla", "↓"
## Responsive
Same at all widths; fluid type.
