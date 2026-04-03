import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TopCasinoCard from "@/components/home/TopCasinoCard";
import { SlotIcon, RouletteIcon, CardIcon, RocketIcon, LiveIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Kazino O'yinlari 2026 | Slotlar, Ruletka, Blackjack, Crash",
  description:
    "Onlayn kazino o'yinlari to'liq qo'llanmasi: slotlar, ruletka, blackjack, crash o'yinlar va jonli kazino. O'zbekiston o'yinchilari uchun.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/kazino-oyunlari`,
    languages: { ru: `${siteSettings.siteUrl}/ru/igry-kazino` },
  },
  openGraph: {
    title: "Kazino O'yinlari 2026 | Slotlar, Ruletka, Blackjack, Crash",
    description: "Onlayn kazino o'yinlari to'liq qo'llanmasi O'zbekiston uchun.",
    url: `${siteSettings.siteUrl}/kazino-oyunlari`,
    locale: "uz_UZ",
    type: "article",
  },
};

const gameTypes = [
  {
    id: "slotlar",
    icon: <SlotIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Slotlar (O'yin mashinalari)",
    description:
      "Slotlar onlayn kazinolardagi eng mashhur o'yin turi. Baraban aylantirasiz va ramzlar kombinatsiyasini kutasiz. RTP odatda 94–97%.",
    features: ["Oddiy qoidalar", "Turli mavzular", "Jackpot o'yinlari", "Bepul aylanishlar"],
    topGames: ["Book of Dead", "Gates of Olympus", "Sweet Bonanza", "Wolf Gold"],
    learnMore: "/kazino-oyunlari",
  },
  {
    id: "ruletka",
    icon: <RouletteIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Ruletka",
    description:
      "Ruletka eng ikonik kazino o'yinlaridan biri. Evropa (bir nol) va Amerika (ikki nol) turlari mavjud. Evropa ruletka yaxshiroq shartlar taklif etadi.",
    features: ["Evropa ruletka", "Amerika ruletka", "Fransuz ruletka", "Jonli ruletka"],
    topGames: ["Lightning Roulette", "Immersive Roulette", "Speed Roulette"],
    learnMore: "/ruletka",
  },
  {
    id: "blackjack",
    icon: <CardIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Blackjack (21 O'yini)",
    description:
      "Blackjack strategiya va matematik hisob-kitob talab qiluvchi o'yin. To'g'ri strategiya bilan uy ustunligi 0.5% gacha tushirilishi mumkin.",
    features: ["Classic Blackjack", "Spanish 21", "Double Down", "Split imkoniyati"],
    topGames: ["Classic Blackjack Gold", "Atlantic City Blackjack", "VIP Blackjack"],
    learnMore: "/kazino-oyunlari",
  },
  {
    id: "crash",
    icon: <RocketIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Crash O'yinlari",
    description:
      "Crash o'yinlari — zamonaviy va hayajonli janr. Aviator, Lucky Jet va Mines shu turkumga kiradi. O'yinchi koeffitsiyent tushishidan oldin chiqishi kerak.",
    features: ["Aviator", "Lucky Jet", "Mines", "JetX"],
    topGames: ["Aviator (Spribe)", "Lucky Jet", "Mines", "JetX"],
    learnMore: "/kazino-oyunlari",
  },
  {
    id: "live-kazino",
    icon: <LiveIcon className="w-8 h-8 text-[#ec4899]" />,
    title: "Jonli Kazino",
    description:
      "Jonli kazino — real dilerlar bilan onlayn o'ynash imkoniyati. HD video orqali real kazino atmosferasini his qiling.",
    features: ["Jonli Blackjack", "Jonli Ruletka", "Jonli Baccarat", "Jonli Poker"],
    topGames: ["Lightning Roulette", "Crazy Time", "Monopoly Live", "Dream Catcher"],
    learnMore: "/kazino-oyunlari",
  },
];

export default function KazinoOyunlariPage() {
  const topBrands = [...brands].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const breadcrumbs = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Kazino O'yinlari", href: "/kazino-oyunlari" },
  ];

  return (
    <div className="bg-[#16192b] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <Breadcrumbs items={breadcrumbs} />

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 mt-4 leading-tight tracking-tight">
            Onlayn Kazino O&apos;yinlari — To&apos;liq Qo&apos;llanma 2026
          </h1>
          <p className="text-gray-500 max-w-2xl mb-8">
            Slotlar, ruletka, blackjack, crash o&apos;yinlar va jonli kazino — barchasi haqida
            O&apos;zbekiston o&apos;yinchilari uchun batafsil qo&apos;llanma.
          </p>

          {/* Quick nav */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10">
            {gameTypes.map((game) => (
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
            {gameTypes.map((game) => (
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
                        <span
                          key={f}
                          className="bg-white text-gray-600 border border-gray-200 text-xs px-2.5 py-1 rounded-full font-medium"
                        >
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

                    {game.learnMore !== "/kazino-oyunlari" && (
                      <Link
                        href={game.learnMore}
                        className="inline-block mt-3 text-sm text-[#ec4899] hover:text-[#db2777] font-semibold"
                      >
                        Batafsil o&apos;qish →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top casinos */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            O&apos;yin uchun eng yaxshi kazinolar
          </h2>
          <div className="space-y-2">
            {topBrands.map((brand, index) => (
              <TopCasinoCard key={brand.slug} brand={brand} rank={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
