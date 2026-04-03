import type { Metadata } from "next";
import { brands } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import CasinoCard from "@/components/home/CasinoCard";
import { ShieldCheckIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Barcha Onlayn Kazinolar 2026 | Reyting va Sharhlar",
  description:
    "O'zbekiston uchun barcha onlayn kazinolar reytingi. Bonus, litsenziya va to'lov usullari bo'yicha to'liq taqqoslash.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/casinos`,
    languages: { ru: `${siteSettings.siteUrl}/ru/casinos` },
  },
  openGraph: {
    title: "Barcha Onlayn Kazinolar 2026",
    description: "O'zbekiston uchun barcha onlayn kazinolar reytingi.",
    url: `${siteSettings.siteUrl}/casinos`,
    locale: "uz_UZ",
    type: "website",
  },
};

export default function CasinosPage() {
  const sortedBrands = [...brands].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-[#16192b] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-400 mb-5 flex items-center gap-2">
            <a href="/" className="hover:text-[#ec4899] transition-colors font-medium">Bosh sahifa</a>
            <span className="text-gray-300">›</span>
            <span className="text-gray-700 font-semibold">Kazinolar</span>
          </nav>

          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                Barcha Onlayn Kazinolar — 2026
              </h1>
              <p className="text-gray-400 text-sm">
                {sortedBrands.length} ta kazino · Reyting bo&apos;yicha tartiblangan
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl flex-shrink-0">
              <ShieldCheckIcon className="w-4 h-4" /> Mustaqil reyting
            </div>
          </div>

          <div className="space-y-3">
            {sortedBrands.map((brand, i) => (
              <CasinoCard key={brand.slug} brand={brand} rank={i + 1} locale="uz" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
