import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { siteSettings } from "@/content/site-settings";
import Header from "@/components/layout/Header";
import FooterUz from "@/components/layout/FooterUz";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  title: {
    default: "Eng Yaxshi Onlayn Kazinolar O'zbekiston 2026 | Kazino Online",
    template: "%s | Kazino Online O'zbek",
  },
  description:
    "O'zbekiston uchun eng yaxshi onlayn kazinolar reytingi 2026. Bonus, litsenziya va ishonchlilik bo'yicha to'liq sharh.",
  openGraph: {
    siteName: siteSettings.siteName,
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: siteSettings.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteSettings.siteName,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "yY_Ako882_7lSnF_Mz27ZNM1kEzsZOPBQKiuJcaDEU4",
  },
};

export default function UzLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#16192b]">
        <Header />
        <main className="flex-1">{children}</main>
        <FooterUz />
      </body>
    </html>
  );
}
