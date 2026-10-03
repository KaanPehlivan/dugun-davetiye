export interface ProgramItem {
  time: string;
  title: string;
}

export interface FamilySide {
  label: string;
  names: string;
}

export interface Wish {
  message: string;
  name: string;
}

export interface EventDetail {
  title: string;
  /** Shown after the clock icon, e.g. "4 Eylül 2027 Cumartesi, 17:00". */
  when: string;
  venue: string;
  address: string;
  /** Free-text query for maps (name + address). */
  mapQuery: string;
  /** ISO local start/end (Europe/Istanbul) for the calendar link. */
  start: string;
  end: string;
}

export interface VenuePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface Venue {
  name: string;
  logo: string;
  /** Logo variant for dark backgrounds. */
  logoLight: string;
  eyebrow: string;
  title: string;
  description: string;
  photos: VenuePhoto[];
}

export interface InvitationContent {
  bride: string;
  groom: string;
  /** Short date shown in hero & footer, e.g. "4 Eylül 2027". */
  dateLabel: string;
  eyebrow: string;
  program: ProgramItem[];
  invite: { eyebrow: string; title: string; paragraphs: string[] };
  families: { title: string; sides: [FamilySide, FamilySide] };
  gifts: {
    title: string;
    intro: [string, string];
    toggleLabel: string;
    paragraphs: [string, string];
    iban: string;
  };
  details: { eyebrow: string; title: string; intro: string; events: EventDetail[] };
  rsvp: { eyebrow: string; title: string; intro: string };
  wishes: { eyebrow: string; title: string; intro: string; items: Wish[] };
  footerNote: string;
  /** Optional background music (mp3/m4a in /public). The music button only renders when set. */
  music?: string;
  /** Optional hero photo; when unset the illustrated floral arch is shown. */
  heroImage?: string;
  /** Optional photo behind the envelope on the intro screen. */
  introImage?: string;
  /** Optional venue showcase (logo, short story, photo carousel). */
  venue?: Venue;
}

const YALI = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/dugunsepetim-org-81f0fb0c/sablon-altin-kemer-6ace0961/yali`;

export const content: InvitationContent = {
  bride: "Gizem",
  groom: "Mehmet",
  dateLabel: "4 Eylül 2027",
  eyebrow: "Evleniyoruz",
  program: [
    { time: "17:00", title: "Ağaçların Altında Karşılama Kokteyli" },
    { time: "18:30", title: "Nikâh Töreni" },
    { time: "20:00", title: "Akşam Yemeği ve İlk Dans" },
    { time: "22:30", title: "Pasta Kesimi ve Eğlence" },
  ],
  invite: {
    eyebrow: "Davet",
    title: "Sizi Bekliyoruz",
    paragraphs: [
      "Bu özel günümüzde sizleri aramızda görmekten onur ve mutluluk duyarız.",
      "Doğanın kalbinde, ağaçların gölgesinde yeni bir hikayeye başlarken mutluluğumuzu sizinle paylaşmak isteriz.",
    ],
  },
  families: {
    title: "Ailelerimiz",
    sides: [
      { label: "Gelin Tarafı", names: "Gelin Tarafı" },
      { label: "Damat Tarafı", names: "Damat Tarafı" },
    ],
  },
  gifts: {
    title: "Hediyeler",
    intro: [
      "Varlığınız bizim için en değerli hediyedir.",
      "Dilerseniz size en uygun şekilde hediye gönderebilirsiniz.",
    ],
    toggleLabel: "Katkı",
    paragraphs: [
      "Dilerseniz hediyenizi nakit olarak da iletebilirsiniz.",
      "Size daha uygunsa banka havalesi de yapabilirsiniz:",
    ],
    iban: "TR00 0000 0000 0000 0000 0000 00",
  },
  details: {
    eyebrow: "Bizimle olun",
    title: "Etkinlik Detayları",
    intro: "Bu özel günü sizinle kutlamak için sabırsızlanıyoruz. Bilmeniz gereken her şey burada.",
    events: [
      {
        title: "Nikah Töreni",
        when: "4 Eylül 2027 Cumartesi, 17:00",
        venue: "Yalı Kır Düğünevi",
        address: "Veliköy Mah. 68. Cad., Çerkezköy / Tekirdağ",
        mapQuery: "Yalı Restaurant, Veliköy, 68. Cad., Çerkezköy, Tekirdağ",
        start: "2027-09-04T17:00",
        end: "2027-09-04T20:00",
      },
    ],
  },
  rsvp: {
    eyebrow: "Misafirimiz olun",
    title: "Katılım Bildirimi",
    intro: "Lütfen katılım durumunuzu bizimle paylaşın",
  },
  wishes: {
    eyebrow: "Sizden Gelenler",
    title: "Mesajlarınız",
    intro: "Katılım formundan bırakılan güzel dilekler burada görünür.",
    items: [
      {
        message: "Mutluluğunuz daim olsun — bu özel günde yanınızda olmaktan mutluluk duyuyoruz.",
        name: "Ayşe Yılmaz",
      },
      {
        message: "Güzel dileklerimiz sizinle. Ömür boyu sağlık ve neşe dileriz.",
        name: "Mehmet Kaya",
      },
    ],
  },
  footerNote: "Özel günümüz için ♥ ile hazırlandı",
  heroImage: `${YALI}/hero-dugun-masasi.jpg`,
  introImage: `${YALI}/intro-gece-isiklari.jpg`,
  venue: {
    name: "Yalı Kır Düğünevi",
    logo: `${YALI}/yali-kir-dugunevi-logo.png`,
    logoLight: `${YALI}/yali-kir-dugunevi-logo-light.png`,
    eyebrow: "Düğün Mekânımız",
    title: "Doğanın Kalbinde",
    description:
      "Düğünümüz, ormanlık bir alanın içinde, ağaçlarla çevrili amfi düzeniyle Yalı Kır Düğünevi'nde. Kuş sesleri, şelale şırıltısı ve rustik ışıkların altında bu özel günü birlikte kutlayalım.",
    photos: [
      { src: `${YALI}/mekan-gece.jpg`, alt: "Ağaçların arasında ışıklarla aydınlanan kır düğünevi", caption: "Rustik ışıklar" },
      { src: `${YALI}/mekan-fenerli-merdiven.jpg`, alt: "Fenerlerle aydınlatılmış taş merdiven", caption: "Fenerli taş yol" },
      { src: `${YALI}/mekan-pergola.jpg`, alt: "Ahşap pergola altında masalar", caption: "Pergola altında" },
      { src: `${YALI}/mekan-orman-isigi.jpg`, alt: "Ağaçların arasından süzülen güneş ışığı", caption: "Orman ışığı" },
      { src: `${YALI}/mekan-selale.jpg`, alt: "Yeşillikler arasında şelale", caption: "Şelale bahçesi" },
    ],
  },
};
