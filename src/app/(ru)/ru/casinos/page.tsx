import type { Metadata } from "next";
import { brands } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import CasinoCard from "@/components/home/CasinoCard";

export const metadata: Metadata = {
  title: "Все онлайн казино 2026 | Рейтинг и обзоры | Узбекистан",
  description:
    "Рейтинг лучших онлайн казино для Узбекистана 2026. Бонусы, лицензии и способы оплаты — полное сравнение.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/ru/casinos`,
    languages: { uz: `${siteSettings.siteUrl}/casinos` },
  },
  openGraph: {
    title: "Все онлайн казино 2026",
    description: "Рейтинг лучших онлайн казино для Узбекистана.",
    url: `${siteSettings.siteUrl}/ru/casinos`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RuCasinosPage() {
  const sortedBrands = [...brands].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-[#16192b] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-400 mb-5 flex items-center gap-2">
            <a href="/ru" className="hover:text-[#ec4899] transition-colors font-medium">Главная</a>
            <span className="text-gray-300">›</span>
            <span className="text-gray-700 font-semibold">Казино</span>
          </nav>

          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                Все онлайн казино — 2026
              </h1>
              <p className="text-gray-400 text-sm">
                Найдено {sortedBrands.length} казино · Отсортировано по рейтингу
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {sortedBrands.map((brand, i) => (
              <CasinoCard key={brand.slug} brand={brand} rank={i + 1} locale="ru" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
