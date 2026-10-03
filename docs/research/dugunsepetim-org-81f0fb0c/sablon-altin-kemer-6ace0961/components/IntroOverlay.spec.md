# IntroOverlay Specification
## Overview
- **Target file:** `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/IntroOverlay.tsx`
- **Screenshot:** `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-intro-tap.png`, `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/mobile-intro-playing.png`
- **Interaction model:** click + time-driven
## DOM Structure
div[role=button][aria-label="Davetiyeyi görüntüle"] > (button "Geç") + (scene layer: envelope SVG — replaces proprietary video) + (light sweep) + (prompt layer: seal + text)
## Computed Styles
- Container: fixed; inset 0; z 9999; overflow hidden; cursor pointer; background #5a6650 (rebuild: radial-gradient(120% 80% at 50% 30%, #6b7560 0%, #5a6650 40%, #2c261f 100%)); transition opacity .28s, transform .28s. Closing: opacity 0, scale(1.04).
- Geç: absolute; top calc(env(safe-area-inset-top) + 1rem); right 1rem; z30; border none; bg rgba(44,38,31,.45); backdrop blur(8px); color #fff; Playfair Display .72rem; ls .16em; uppercase; padding 8px 14px; radius 999px.
- Scene: absolute inset 0; animation ak-open-breathe 3.6s ease-in-out infinite (scale 1→1.045→1).
- Light sweep: absolute inset -20%; z15; pointer-events none; linear-gradient(105deg, transparent 35%, rgba(255,240,210,.28) 50%, transparent 65%); ak-light-sweep 4.2s ease-in-out infinite.
- Prompt: absolute inset 0; z20; flex col; align center; justify flex-end; padding-bottom calc(env(safe-area-inset-bottom) + 56px); gap 18px; bg linear-gradient(transparent 42%, rgba(44,38,31,.55) 100%); transition opacity .35s; hidden (opacity 0) once tapped.
- Seal wrap 64×64 grid center; ring: absolute inset 0, radius 999, 1px dashed rgba(255,255,255,.45), ak-ring-spin 10s linear infinite; core 52×52 radius 999, 1.5px solid #d8c49a, bg rgba(196,162,101,.28), blur(4px), ak-seal-pulse 1.8s ease-in-out infinite, shadow 0 8px 24px rgba(0,0,0,.25).
- Text: padding 0 24px; center; 15px; lh 1.8; ls .2em; uppercase; #fff; Playfair; ak-premium-text-float 2.4s ease-in-out infinite; text-shadow 0 2px 18px rgba(0,0,0,.5).
## States & Behaviors
- idle → tap: prompt fades; envelope flap opens (rotateX 0→180deg, .9s), card rises (translateY, 1s, delay .7s), petals fall; at ~4.2s closing state; unmount after .28s; onOpen() callback (starts music, reveals page).
- Geç: stopPropagation, close immediately.
- Keyboard: Enter/Space opens. Body scroll locked while visible.
## Text Content
"Geç", "Zarfa dokunun"
## Responsive
Full-screen at all widths; envelope width min(78vw, 360px).
