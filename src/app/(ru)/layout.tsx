import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { siteSettings } from "@/content/site-settings";
import Header from "@/components/layout/Header";
import FooterRu from "@/components/layout/FooterRu";

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
    default: "Лучшие онлайн казино Узбекистан 2026 | Kazino Online",
    template: "%s | Kazino Online",
  },
  description:
    "Рейтинг лучших онлайн казино для Узбекистана 2026. Полный обзор по бонусам, лицензиям и надёжности.",
  openGraph: {
    siteName: siteSettings.siteName,
    locale: "ru_RU",
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

export default function RuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#16192b]">
        <Header />
        <main className="flex-1">{children}</main>
        <FooterRu />
      </body>
    </html>
  );
}
