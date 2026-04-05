import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import TopCasinoCard from "@/components/home/TopCasinoCard";
import { SlotIcon, RouletteIcon, CardIcon, RocketIcon, LiveIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Игры казино онлайн 2026 | Слоты, рулетка, блэкджек | Узбекистан",
  description:
    "Полное руководство по играм онлайн казино: слоты, рулетка, блэкджек, краш-игры и живое казино. Для игроков из Узбекистана.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/ru/igry-kazino`,
    languages: { uz: `${siteSettings.siteUrl}/kazino-oyunlari` },
  },
};

const gameCategories = [
  {
    id: "sloty",
    icon: <SlotIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Слоты (Игровые автоматы)",
    description:
      "Слоты — самые популярные игры в онлайн казино. Вы вращаете барабаны и ждёте комбинацию символов. RTP обычно составляет 94–97%.",
    features: ["Простые правила", "Разнообразные темы", "Прогрессивный джекпот", "Бесплатные вращения"],
    topGames: ["Book of Dead", "Gates of Olympus", "Sweet Bonanza", "Wolf Gold"],
    learnMore: "",
  },
  {
    id: "ruletka",
    icon: <RouletteIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Рулетка",
    description:
      "Рулетка — одна из самых культовых игр казино. Доступны европейская (одно зеро) и американская (двойное зеро) версии. Европейская рулетка предлагает лучшие условия.",
    features: ["Европейская рулетка", "Американская рулетка", "Французская рулетка", "Живая рулетка"],
    topGames: ["Lightning Roulette", "Immersive Roulette", "Speed Roulette"],
    learnMore: "/ru/ruletka",
  },
  {
    id: "blackjack",
    icon: <CardIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Блэкджек (21)",
    description:
      "Блэкджек требует стратегии и математического расчёта. При правильной стратегии преимущество казино снижается до 0.5%.",
    features: ["Классический блэкджек", "Европейский блэкджек", "Double Down", "Split"],
    topGames: ["Classic Blackjack Gold", "Atlantic City Blackjack", "VIP Blackjack"],
    learnMore: "",
  },
  {
    id: "krash",
    icon: <RocketIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Краш-игры",
    description:
      "Краш-игры — современный и захватывающий жанр. Aviator, Lucky Jet и Mines относятся к этой категории. Игрок должен выйти до падения коэффициента.",
    features: ["Aviator", "Lucky Jet", "Mines", "JetX"],
    topGames: ["Aviator (Spribe)", "Lucky Jet", "Mines", "JetX"],
    learnMore: "",
  },
  {
    id: "zhivoe-kazino",
    icon: <LiveIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Живое казино",
    description:
      "Живое казино — возможность играть с настоящими дилерами онлайн. Атмосфера реального казино через HD-видео.",
    features: ["Живой блэкджек", "Живая рулетка", "Живая баккара", "Живой покер"],
    topGames: ["Lightning Roulette", "Crazy Time", "Monopoly Live", "Dream Catcher"],
    learnMore: "",
  },
];

export default function RuKazinoOyunlariPage() {
  const topBrands = [...brands].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="bg-[#16192b] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/ru" className="hover:text-pink-600">Главная</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">Игры казино</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 mt-4 leading-tight tracking-tight">
            Онлайн Игры Казино — Полное Руководство 2026
          </h1>
          <p className="text-gray-500 max-w-2xl mb-8">
            Слоты, рулетка, блэкджек, краш-игры и живое казино — подробное руководство для игроков из Узбекистана.
          </p>

          {/* Quick nav */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10">
            {gameCategories.map((game) => (
              <a
                key={game.id}
                href={`#${game.id}`}
                className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:border-[#ec4899] hover:bg-pink-50 transition-all group"
              >
                <div className="mb-1.5 flex justify-center group-hover:scale-110 transition-transform">{game.icon}</div>
                <p className="text-xs font-semibold text-gray-600 group-hover:text-[#ec4899] leading-tight">{game.title.split(" ")[0]}</p>
              </a>
            ))}
          </div>

          {/* Game types */}
          <div className="space-y-6 mb-10">
            {gameCategories.map((game) => (
              <div
                key={game.id}
                id={game.id}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6 scroll-mt-24 hover:border-pink-200 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    {game.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{game.title}</h2>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">{game.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {game.features.map((f) => (
                        <span key={f} className="bg-white text-gray-600 border border-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {game.topGames.map((g) => (
                        <span key={g} className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="text-amber-400">★</span> {g}
                        </span>
                      ))}
                    </div>
                    {game.learnMore && (
                      <Link href={game.learnMore} className="inline-block mt-3 text-sm text-[#ec4899] hover:text-[#db2777] font-semibold">
                        Подробнее →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top casinos */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Лучшие казино для игр</h2>
          <div className="space-y-2">
            {topBrands.map((brand, index) => (
              <TopCasinoCard key={brand.slug} brand={brand} rank={index + 1} locale="ru" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
