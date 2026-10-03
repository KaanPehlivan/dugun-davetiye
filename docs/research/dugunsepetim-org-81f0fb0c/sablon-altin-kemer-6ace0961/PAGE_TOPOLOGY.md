# Page Topology (top → bottom)

| # | Section | Bg | Inner max-w | Model |
|---|---|---|---|---|
| 0 | IntroOverlay (fixed, z9999) | #5a6650 | full | click + time |
| 0b | MusicButton (fixed, z50) | — | — | click |
| 1 | Hero (min-h 100dvh) | video/arch | 420 | time (entrance) |
| 2 | Program "Etkinlik Programı" | #fffcf7 | 440 | scroll reveal |
| 3 | Invitation "Davet / Sizi Bekliyoruz" | #f4f1ea, card rgba(255,252,247,.92) | 640 | scroll reveal |
| 4 | Families "Ailelerimiz" | #fbf9f4 | 560 | scroll reveal |
| 5 | Gifts "Hediyeler" (order 1 in flex col) | #fffcf7 | 480 | click accordion |
| 6 | Details "Etkinlik Detayları" `#ak-details` (order 2) | #ffffff | 560 | static + links |
| 7 | RSVP "Katılım Bildirimi" `#ak-rsvp` | #fffcf7 | 480 | form |
| 8 | Wishes "Mesajlarınız" | linear-gradient(#fff, #fffcf7) | 520 | static (+ new local entries) |
| 9 | Footer | #5a6650 | — | static |

Sections 2–8 are `position:relative; z-index:10`. Page wrapper fades in after intro.
