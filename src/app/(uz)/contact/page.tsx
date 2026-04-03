import type { Metadata } from "next";
import { getInfoPage } from "@/content/pages-info";
import { siteSettings } from "@/content/site-settings";
import InfoPageTemplate from "@/components/shared/InfoPageTemplate";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aloqa | Kazino Online O'zbek",
  description:
    "Kazino Online O'zbek saytining aloqa ma'lumotlari. Savollar va hamkorlik uchun murojaat qiling.",
  alternates: {
    canonical: `${siteSettings.siteUrl}/contact`,
    languages: { ru: `${siteSettings.siteUrl}/ru/contact` },
  },
};

export default function ContactPage() {
  const page = getInfoPage("contact");

  if (page) {
    return <InfoPageTemplate page={page} />;
  }

  const breadcrumbs = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Aloqa", href: "/contact" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Biz bilan Bog&apos;laning</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <p className="text-gray-600 mb-4">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${siteSettings.supportEmail}`}
            className="text-blue-600 hover:underline"
          >
            {siteSettings.supportEmail}
          </a>
        </p>
        <p className="text-gray-600">
          <strong>Ish vaqti:</strong> Dushanba — Juma, 9:00 — 18:00 (UTC+5)
        </p>
      </div>
    </div>
  );
}
