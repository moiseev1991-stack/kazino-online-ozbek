import type { Metadata } from "next";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: "Контакты | Казино Онлайн Узбекистан",
  description: "Контактная информация сайта Kazino Online. Вопросы, сотрудничество и исправления.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/ru/contact`,
    languages: { uz: `${siteSettings.siteUrl}/contact` },
  },
};

export default function RuContactPage() {
  return (
    <div className="bg-[#16192b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/ru" className="hover:text-pink-600">Главная</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">Контакты</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h1>

          <div className="space-y-6 max-w-xl">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-2">Email</h2>
              <a
                href={`mailto:${siteSettings.supportEmail}`}
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                {siteSettings.supportEmail}
              </a>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-2">Часы работы</h2>
              <p className="text-gray-600">Понедельник — Пятница, 9:00 — 18:00 (UTC+5)</p>
              <p className="text-sm text-gray-500 mt-1">Обычно мы отвечаем в течение 24-48 часов.</p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-2">Редакция</h2>
              <p className="text-gray-600">
                Если у вас есть новая информация о казино, обновления или исправления — пишите нам.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-2">Партнёрство (Affiliate)</h2>
              <p className="text-gray-600">
                Если вы оператор казино или affiliate, свяжитесь с нами по указанному email.
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                18+ | Ответственная игра. Мы рекомендуем только лицензированные казино.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
