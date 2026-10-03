# Footer + MusicButton Specification
## Overview
- **Target files:** `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/InvitationFooter.tsx`, `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/MusicButton.tsx`; **Screenshot:** `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-390-scroll-06.png`
## Footer
- footer: bg #5a6650; #d8c49a; padding 36px 20px calc(env(safe-area-inset-bottom) + 36px); center.
- h2: margin 0 0 10px; Allura 400 36px #d8c49a; "&" span block .45em margin .1em 0 #c2a878.
- date p: margin 0 0 16px; rgba(216,188,134,.7); 14px. note p: rgba(216,188,134,.55); 12px; "Özel günümüz için ♥ ile hazırlandı".
## MusicButton
- fixed; bottom calc(env(safe-area-inset-bottom) + 20px); right 16px; z50; 48×48; radius 999px; border 1px solid rgba(168,184,151,.34); bg rgba(250,244,235,.88); blur(8px); #7d8b6f; 16px; shadow 0 4px 18px rgba(61,52,40,.12).
- states: playing "♪" aria "Sesi kapat"; muted "🔇" aria "Sesi aç". Rendered only if a music src is configured (proprietary track not copied).
