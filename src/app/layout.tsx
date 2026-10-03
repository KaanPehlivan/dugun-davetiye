import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const allura = Allura({
  variable: "--font-allura",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Gizem & Kaan — Düğün Davetiyesi",
  description: "4 Eylül 2027 · Yalı Kır Düğünevi, Çerkezköy — Gizem & Kaan'ın düğününe davetlisiniz.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3e4836",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${allura.variable} ${playfair.variable} ${lora.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
