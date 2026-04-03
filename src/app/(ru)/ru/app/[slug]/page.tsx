import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { appPages, getAppPage } from "@/content/pages-apps";
import { getBrandBySlug } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaButton from "@/components/shared/CtaButton";
import { SmartphoneIcon, DownloadIcon, PackageIcon } from "@/components/shared/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return appPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAppPage(slug);
  if (!page) return { title: "Приложение не найдено" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteSettings.siteUrl}/ru/app/${slug}`,
    },
  };
}

export default async function AppPageRu({ params }: Props) {
  const { slug } = await params;
  const page = getAppPage(slug);
  if (!page) notFound();

  const brand = getBrandBySlug(page.brandSlug);

  const breadcrumbs = [
    { label: "Главная", href: "/ru" },
    { label: page.brandName, href: `/ru/casino/${page.brandSlug}` },
    { label: page.title, href: `/ru/app/${slug}` },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
            {brand?.logo ? (
              <Image src={brand.logo} alt={page.brandName} width={64} height={64} className="w-full h-full object-contain p-1.5" />
            ) : (
              <SmartphoneIcon className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{page.heading}</h1>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
              {page.version && <span>v{page.version}</span>}
              {page.fileSize && <span className="flex items-center gap-1"><PackageIcon className="w-3.5 h-3.5" />{page.fileSize}</span>}
              {page.androidVersion && <span className="flex items-center gap-1"><DownloadIcon className="w-3.5 h-3.5" />{page.androidVersion}</span>}
              <span className="font-medium">
                {page.platform === "android"
                  ? "Android"
                  : page.platform === "ios"
                  ? "iOS"
                  : "Android + iOS"}
              </span>
            </div>
          </div>
        </div>
        <CtaButton
          href={`/go/${page.brandSlug}`}
          label={`Скачать ${page.brandName} →`}
          variant="cta"
          size="lg"
          external
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Инструкция по установке
          </h2>
          <ol className="space-y-3">
            {page.steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#ec4899] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-600 text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Возможности приложения
          </h2>
          <ul className="space-y-2">
            {page.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <p className="text-gray-600 leading-relaxed">{page.body}</p>
      </div>

      {brand && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            О казино {brand.name}
          </h2>
          <p className="text-[#ec4899] font-semibold mb-4">{brand.bonus}</p>
          <div className="flex gap-3">
            <CtaButton
              href={`/ru/casino/${brand.slug}`}
              label="Полный обзор"
              variant="outline"
              size="md"
            />
            <CtaButton
              href={`/go/${brand.slug}`}
              label="Перейти на сайт →"
              variant="cta"
              size="md"
              external
            />
          </div>
        </div>
      )}
    </div>
  );
}
