import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import CasinoCard from "@/components/home/CasinoCard";
import { SlotIcon, RouletteIcon, CardIcon, RocketIcon, LiveIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Игры казино онлайн 2026 | Слоты, рулетка, блэкджек",
  description:
    "Полное руководство по играм онлайн казино: слоты, живые дилеры, рулетка, блэкджек и другие. Для игроков из Узбекистана.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/ru/igry-kazino`,
    languages: { uz: `${siteSettings.siteUrl}/kazino-oyunlari` },
  },
};

const gameCategories = [
  {
    icon: <SlotIcon className="w-7 h-7 text-[#ec4899]" />,
    title: "Слоты",
    description: "Самые популярные игры казино. Простые правила, разнообразные темы и высокий RTP 94-97%.",
    features: ["5-барабанные слоты", "Прогрессивный джекпот", "Мегавэйз слоты", "Бонусные раунды"],
  },
  {
    icon: <RouletteIcon className="w-7 h-7 text-[#ec4899]" />,
    title: "Рулетка",
    description: "Классическая игра казино. Европейская рулетка с преимуществом казино всего 2.7%.",
    features: ["Европейская рулетка", "Американская рулетка", "Французская рулетка", "Живая рулетка"],
  },
  {
    icon: <CardIcon className="w-7 h-7 text-[#ec4899]" />,
    title: "Блэкджек",
    description: "Игра на 21 очко. При правильной стратегии преимущество казино снижается до 0.5%.",
    features: ["Классический блэкджек", "Европейский блэкджек", "Блэкджек с боковыми ставками", "Живой блэкджек"],
  },
  {
    icon: <RocketIcon className="w-7 h-7 text-[#ec4899]" />,
    title: "Краш-игры",
    description: "Игра с нарастающим множителем. Aviator — самая популярная краш-игра в Узбекистане.",
    features: ["Aviator", "JetX", "Spaceman", "Мгновенные выплаты"],
  },
  {
    icon: <LiveIcon className="w-7 h-7 text-[#ec4899]" />,
    title: "Живое казино",
    description: "Реальные дилеры в прямом эфире. Атмосфера настоящего казино онлайн.",
    features: ["Живая рулетка", "Живой блэкджек", "Баккара", "Покер с дилером"],
  },
];

export default function RuIgryKazinoPage() {
  const topBrands = [...brands].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="bg-[#16192b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/ru" className="hover:text-pink-600">Главная</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">Игры казино</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Онлайн Игры Казино — Полное Руководство 2026
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Мир онлайн казино огромен и разнообразен. Здесь мы рассмотрим самые популярные виды игр,
            их правила и стратегии для игроков из Узбекистана.
          </p>

          {/* Quick navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {gameCategories.map((cat) => (
              <div key={cat.title} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-pink-50 cursor-pointer transition-colors">
                <div className="mb-1">{cat.icon}</div>
                <div className="text-xs font-medium text-gray-700">{cat.title}</div>
              </div>
            ))}
          </div>

          {/* Game categories */}
          <div className="space-y-8 mb-10">
            {gameCategories.map((cat) => (
              <div key={cat.title} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span>{cat.icon}</span>
                  <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.features.map((f) => (
                    <span key={f} className="bg-pink-50 text-pink-700 border border-pink-200 text-xs font-medium px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Лучшие казино для игр</h2>
            <Link href="/ru/igry-kazino" className="text-sm text-pink-600 hover:text-pink-700">
              Все казино →
            </Link>
          </div>
          <div className="space-y-3">
            {topBrands.map((brand, i) => (
              <CasinoCard key={brand.slug} brand={brand} rank={i + 1} locale="ru" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
