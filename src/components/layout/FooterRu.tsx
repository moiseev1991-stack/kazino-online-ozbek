import Link from "next/link";
import { footerLinksRu, footerInfoLinksRu } from "@/content/navigation";
import { siteSettings } from "@/content/site-settings";
import { SlotIcon, WarningIcon } from "@/components/shared/Icons";

export default function FooterRu() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#16192b] text-gray-300 mt-auto border-t border-[#252944]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-black text-lg mb-4 flex items-center gap-2">
              <div className="w-7 h-7 bg-[#ec4899] rounded-lg flex items-center justify-center"><SlotIcon className="w-4 h-4 text-white" /></div>
              Kazino<span className="text-[#ec4899]">Online</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Надёжная платформа обзоров и рейтингов казино для Узбекистана.
              Мы рекомендуем только лицензированные казино.
            </p>
            <div className="mt-4 p-3 bg-[#0f1120] rounded-lg">
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <WarningIcon className="w-3.5 h-3.5 flex-shrink-0" /> 18+ Ответственная игра.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Страницы</h4>
            <ul className="space-y-2">
              {footerLinksRu.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Полезные ссылки</h4>
            <ul className="space-y-2">
              {footerInfoLinksRu.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <p className="text-sm text-gray-400 mb-3">
              <a href={`mailto:${siteSettings.supportEmail}`} className="hover:text-white transition-colors">
                {siteSettings.supportEmail}
              </a>
            </p>
            <p className="text-xs text-gray-500">Часы работы: Пн–Пт, 9:00–18:00</p>
          </div>
        </div>

        <div className="border-t border-[#252944] mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {year} {siteSettings.siteName}. Все права защищены.
            Сайт создан исключительно в информационных целях.
          </p>
        </div>
      </div>
    </footer>
  );
}
