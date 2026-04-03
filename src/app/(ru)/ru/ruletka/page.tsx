import type { Metadata } from "next";
import { brands } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import CasinoCard from "@/components/home/CasinoCard";

export const metadata: Metadata = {
  title: "Рулетка онлайн 2026 | Правила, стратегии и лучшие казино",
  description:
    "Полное руководство по онлайн рулетке. Европейская и американская рулетка, ставки, стратегии для игроков из Узбекистана.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/ru/ruletka`,
    languages: { uz: `${siteSettings.siteUrl}/ruletka` },
  },
};

export default function RuRuletkePage() {
  const topBrands = [...brands].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="bg-[#16192b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/ru" className="hover:text-pink-600">Главная</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">Рулетка</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Рулетка онлайн — Полное руководство 2026
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Рулетка — одна из самых популярных игр в казино. В этом руководстве мы рассмотрим все виды рулетки, правила и стратегии.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Виды рулетки</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Европейская рулетка</strong> — самый популярный вид. Одно нулевое поле, преимущество казино составляет 2.7%.</p>
                <p><strong>Американская рулетка</strong> — два нулевых поля (0 и 00). Преимущество казино 5.26%.</p>
                <p><strong>Французская рулетка</strong> — похожа на европейскую, но с дополнительными правилами La Partage и En Prison.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Основные ставки</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border border-gray-200 font-semibold">Ставка</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold">Выплата</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Прямая (один номер)", "35:1"],
                      ["Красное/Чёрное", "1:1"],
                      ["Чётное/Нечётное", "1:1"],
                      ["1-18 / 19-36", "1:1"],
                      ["Дюжина (1-12, 13-24, 25-36)", "2:1"],
                    ].map(([bet, payout]) => (
                      <tr key={bet} className="hover:bg-gray-50">
                        <td className="p-3 border border-gray-200">{bet}</td>
                        <td className="p-3 border border-gray-200 font-medium text-pink-600">{payout}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Стратегии</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Мартингейл</strong> — удвоение ставки после каждого проигрыша.</p>
                <p><strong>Фибоначчи</strong> — система ставок по числам Фибоначчи.</p>
                <p><strong>Д&apos;Алембер</strong> — постепенное увеличение и уменьшение ставок.</p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                Рулетка — игра случайности. Никакая стратегия не гарантирует выигрыш.
                Играйте ответственно и контролируйте свой бюджет.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Лучшие казино для рулетки</h2>
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
