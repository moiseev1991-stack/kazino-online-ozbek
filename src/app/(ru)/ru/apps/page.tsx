import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { appPages } from "@/content/pages-apps";
import { getBrandBySlug } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import { SmartphoneIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Мобильные приложения казино 2026 | Android и iOS",
  description:
    "Скачайте лучшие мобильные приложения казино. Android APK и iOS для игроков из Узбекистана.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/ru/apps`,
    languages: { uz: `${siteSettings.siteUrl}/apps` },
  },
};

export default function RuAppsPage() {
  return (
    <div className="bg-[#16192b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-6 sm:px-10">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/ru" className="hover:text-pink-600">Главная</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">Мобильные приложения</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Мобильные Приложения Казино 2026
          </h1>
          <p className="text-gray-600 mb-8">
            Играйте в любимые игры казино где угодно. Скачайте официальные приложения для Android и iOS.
          </p>

          <div className="space-y-4">
            {appPages.map((app) => {
              const brand = getBrandBySlug(app.brandSlug);
              return (
              <div key={app.slug} className="border border-gray-200 rounded-xl p-5 hover:border-pink-300 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {brand?.logo ? (
                        <Image src={brand.logo} alt={app.brandName} width={56} height={56} className="w-full h-full object-contain p-1" />
                      ) : (
                        <SmartphoneIcon className="w-7 h-7 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-lg mb-1">{app.brandName}</h2>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          app.platform === "android" ? "bg-green-100 text-green-700" :
                          app.platform === "ios" ? "bg-blue-100 text-blue-700" :
                          "bg-purple-100 text-purple-700"
                        }`}>
                          {app.platform === "android" ? "Android" : app.platform === "ios" ? "iOS" : "Android + iOS"}
                        </span>
                        {app.version && (
                          <span className="text-xs text-gray-500">v{app.version}</span>
                        )}
                        {app.fileSize && (
                          <span className="text-xs text-gray-500">{app.fileSize}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{app.body}</p>
                    </div>
                  </div>
                  <Link
                    href={`/ru/${app.slug}`}
                    className="flex-shrink-0 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Скачать
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
