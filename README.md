# Düğün Davetiyesi — Yalı Kır Düğünevi

Mobil öncelikli dijital düğün davetiyesi (Next.js 16 + Tailwind v4, statik export).
Düzen ve etkileşimler DüğünSepetim "Altın Kemer" şablonundan yeniden kurulmuştur. Şablonun
video, müzik ve görsellerinin yerine özgün CSS/SVG animasyonları ve Yalı Kır Düğünevi fotoğrafları kullanılmıştır.

## Bilgileri düzenleme

Tüm metinler tek dosyada:
`src/components/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/content.ts`

- Çift adları, tarih, program, aile isimleri, IBAN, etkinlik saati/adresi (`start`/`end` takvim linkini üretir).
- `music`: `public/` içine bir mp3/m4a koyup yolunu yazarsanız müzik butonu görünür (boşsa gizlidir).
- `heroImage`, `introImage`, `venue.photos`: görseller `public/sites/.../yali/` klasöründedir.

## Çalıştırma

```bash
npm run dev     # geliştirme: http://localhost:3000
npm run build   # ./out klasörüne statik site üretir (Netlify, Vercel, GitHub Pages vb.)
```

## Notlar

- Katılım formu sunucuya gönderim yapmaz; yanıtlar ziyaretçinin tarayıcısında saklanır ve
  "Mesajlarınız" listesine eklenir. Yanıtları toplamak için bir form servisi bağlanmalıdır.
- Araştırma notları ve ekran görüntüleri: `docs/research/` ve `docs/design-references/`.
