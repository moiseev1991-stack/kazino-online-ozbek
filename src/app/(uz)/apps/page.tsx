import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { appPages } from "@/content/pages-apps";
import { getBrandBySlug } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SmartphoneIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Kazino Mobil Ilovalar 2026 | APK Yuklab Olish | Android & iOS",
  description:
    "Onlayn kazino mobil ilovalarini yuklab oling. Pin-Up, 1xBet, MegaPari, Mostbet va boshqalar uchun Android APK va iOS ilovalar.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/apps`,
    languages: { ru: `${siteSettings.siteUrl}/ru/apps` },
  },
};

const platformLabel = {
  android: "Android",
  ios: "iOS",
  both: "Android + iOS",
};

export default function AppsPage() {
  const breadcrumbs = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Mobil Ilovalar", href: "/apps" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Kazino Mobil Ilovalar — 2026
        </h1>
        <p className="text-gray-500 text-lg">
          Istalgan joyda o&apos;ynang. Eng yaxshi kazino ilovalarini yuklab oling.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appPages.map((app) => {
          const brand = getBrandBySlug(app.brandSlug);
          return (
          <Link
            key={app.slug}
            href={`/${app.slug}`}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-pink-200 transition-all p-6 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                {brand?.logo ? (
                  <Image src={brand.logo} alt={app.brandName} width={56} height={56} className="w-full h-full object-contain p-1" />
                ) : (
                  <SmartphoneIcon className="w-7 h-7 text-[#ec4899]" />
                )}
              </div>
              <div>
                <h2 className="font-bold text-gray-900 group-hover:text-[#ec4899] transition-colors">
                  {app.brandName}
                </h2>
                <p className="text-xs text-blue-600 font-medium">
                  {platformLabel[app.platform]}
                </p>
              </div>
            </div>

            <div className="space-y-1.5 mb-4">
              {app.version && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Versiya</span>
                  <span className="font-medium text-gray-700">v{app.version}</span>
                </div>
              )}
              {app.fileSize && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Hajmi</span>
                  <span className="font-medium text-gray-700">{app.fileSize}</span>
                </div>
              )}
              {app.androidVersion && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Talab</span>
                  <span className="font-medium text-gray-700">{app.androidVersion}</span>
                </div>
              )}
            </div>

            <div className="bg-[#ec4899] text-white text-sm font-semibold py-2.5 px-4 rounded-lg text-center group-hover:bg-[#db2777] transition-colors">
              Yuklab Olish →
            </div>
          </Link>
          );
        })}
      </div>
    </div>
  );
}
