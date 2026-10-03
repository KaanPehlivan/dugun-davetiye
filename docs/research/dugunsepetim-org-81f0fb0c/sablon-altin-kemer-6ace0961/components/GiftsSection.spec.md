# GiftsSection Specification
## Overview
- **Target file:** `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/GiftsSection.tsx`; **Screenshot:** `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-390-scroll-03.png`, `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-gift-open.png`; **Interaction:** click accordion
## Computed Styles
- section: relative z10; bg #fffcf7; padding 36px 20px 40px; inner max-width 480px.
- head (.ak-reveal) center mb 24px. h2: margin 0 0 14px; Allura; clamp(36px,11vw,48px); #7d8b6f (weight normal). p: #8b9284; lh 1.65; 15px.
- box (.ak-reveal): radius 16px; border 2px solid #7d8b6f; overflow hidden; bg #7d8b6f.
- header button: width 100%; flex space-between center; padding 18px 20px; bg #7d8b6f; no border; Playfair 17px; #fff; left. chevron "⌄" rgba(255,255,255,.7); transition transform .3s; open: rotate(180deg).
- panel: max-height 0 / 420px; opacity 0 / 1; overflow hidden; transition max-height .35s, opacity .3s; bg #fff. inner padding 8px 20px 20px; border-top 1px solid rgba(168,184,151,.34).
- p: #8b9284 14px lh 1.6, margins 0 0 8px / 0 0 16px. IBAN p: 13px; ls .04em; #3a3f36; break-all; center.
- copy btn: mt 10px; width 100%; min-height 42px; radius 10px; border 1px solid rgba(168,184,151,.34); bg #fbf9f4; #7d8b6f; Playfair 13px. After copy label "Kopyalandı" ~2s.
## Text
Hediyeler; "Varlığınız bizim için en değerli hediyedir." <br> "Dilerseniz size en uygun şekilde hediye gönderebilirsiniz."; Katkı; "Dilerseniz hediyenizi nakit olarak da iletebilirsiniz."; "Size daha uygunsa banka havalesi de yapabilirsiniz:"; TR00 0000 0000 0000 0000 0000 00; IBAN’ı Kopyala
