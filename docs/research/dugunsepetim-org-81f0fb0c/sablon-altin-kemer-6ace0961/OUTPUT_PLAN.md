# Output Plan

| Item | Value |
|---|---|
| Source URL | https://dugunsepetim.org/sablon/altin-kemer?offer=dijital&from=basla |
| Query handling | `offer`/`from` only drive the site's sales panel → no state; ignored |
| app-root | `.` (fresh create-next-app scaffold, Next 16.3, Tailwind v4) |
| site-key | `dugunsepetim-org-81f0fb0c` |
| page-key | `sablon-altin-kemer-6ace0961` |
| Route | `/` → `src/app/page.tsx` (first clone in untouched template) |
| Research | `docs/research/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/` |
| Screenshots | `docs/design-references/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/` |
| Components | `src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/` |
| Assets | `public/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/` |
| Shared files touched | `src/app/layout.tsx` (fonts, metadata), `src/app/globals.css` (tokens, keyframes) |

## Scope decisions (approved by user)
- Previous `index.html` deleted (user choice).
- Site chrome NOT cloned: "← Geri" header, sales panel ("Bu Tasarımı Seç" / "WhatsApp ile sipariş · 650 TL"), DüğünSepetim watermark.

## IP decision
The page is a paid product (650 TL) with a hostname kill-switch script. Proprietary media
(`open.mp4`, `open-poster.jpg`, `hero.mp4`, `hero-poster.jpg`, `doves.png`, `feeling.m4a`) and JS are
NOT downloaded. Layout, typography, palette, spacing, and interactions are rebuilt with original
assets: CSS/SVG envelope intro, SVG floral arch hero with falling petals, SVG ornament instead of doves,
Google Maps embed instead of their static-map API, optional music (hidden when no file is configured).
