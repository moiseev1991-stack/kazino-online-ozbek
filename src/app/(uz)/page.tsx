import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/content/brands";
import { homeContentUz } from "@/content/pages-home";
import { siteSettings } from "@/content/site-settings";
import TopCasinoCard from "@/components/home/TopCasinoCard";
import { ShieldCheckIcon, GiftIcon, StarFilledIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: homeContentUz.metaTitle,
  description: homeContentUz.metaDescription,
  alternates: {
    canonical: siteSettings.siteUrl,
    languages: { ru: `${siteSettings.siteUrl}/ru` },
  },
  openGraph: {
    title: homeContentUz.ogTitle ?? homeContentUz.metaTitle,
    description: homeContentUz.ogDescription ?? homeContentUz.metaDescription,
    url: siteSettings.siteUrl,
    locale: "uz_UZ",
    type: "website",
  },
};

export default function HomePage() {
  const topBrands = [...brands].sort((a, b) => b.rating - a.rating);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSettings.siteName,
    url: siteSettings.siteUrl,
    description: homeContentUz.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="bg-[#16192b] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero block */}
          <div className="bg-white px-6 sm:px-10 pt-8 pb-6">
            {/* Trust bar */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full">
                <ShieldCheckIcon className="w-3.5 h-3.5" /> Litsenziyalangan
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-full">
                <StarFilledIcon className="w-3.5 h-3.5" /> Mustaqil reyting
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full">
                <GiftIcon className="w-3.5 h-3.5" /> Eksklyuziv bonuslar
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full">
                18+
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight">
              {homeContentUz.heroTitle}
            </h1>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-2xl">
              {homeContentUz.heroSubtitle}
            </p>
          </div>

          {/* Casino ranking */}
          <div className="bg-white mt-px py-6 px-6 sm:px-10 pb-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">
                  {homeContentUz.topCasinosHeading}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">{new Date().getFullYear()} yil reytingi</p>
              </div>
              <Link href="/casinos" className="text-sm text-[#ec4899] hover:text-[#db2777] font-semibold flex items-center gap-1 transition-colors">
                {homeContentUz.allCasinosLinkText} →
              </Link>
            </div>

            {/* Column headers — desktop */}
            <div className="hidden sm:grid grid-cols-[40px_80px_1fr_auto] gap-4 px-3 pb-2.5 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              <span>#</span>
              <span>Kazino</span>
              <span>Bonus</span>
              <span>Harakat</span>
            </div>

            <div className="space-y-2 mt-2">
              {topBrands.map((brand, index) => (
                <TopCasinoCard key={brand.slug} brand={brand} rank={index + 1} locale="uz" />
              ))}
            </div>
          </div>

          {/* Info block */}
          <div className="bg-white mt-px py-8 px-6 sm:px-10">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{homeContentUz.introHeading}</h2>
            <p className="text-gray-500 leading-relaxed text-sm">{homeContentUz.introText}</p>
            <div className="mt-5 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="text-xs text-gray-500">
                18+ | Mas&apos;uliyatli o&apos;yin. Faqat litsenziyalangan kazinolar tavsiya etiladi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
