import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/content/brands";
import { appPages, getAppPage } from "@/content/pages-apps";
import { siteSettings } from "@/content/site-settings";
import { getArticleRu } from "@/content/articles-ru";
import Image from "next/image";
import Link from "next/link";
import BrandReviewHero from "@/components/brand/BrandReviewHero";
import KeyFactsTable from "@/components/brand/KeyFactsTable";
import TableOfContents from "@/components/brand/TableOfContents";
import ProsCons from "@/components/brand/ProsCons";
import FaqAccordion from "@/components/brand/FaqAccordion";
import RelatedLinks from "@/components/brand/RelatedLinks";
import CtaButton from "@/components/shared/CtaButton";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SmartphoneIcon, DownloadIcon, PackageIcon } from "@/components/shared/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const brandParams = brands.map((brand) => ({ slug: brand.slug }));
  const appParams = appPages.map((p) => ({ slug: p.slug }));
  return [...brandParams, ...appParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (brand) {
    const article = getArticleRu(slug);
    return {
      title: article?.metaTitle ?? `${brand.name} — Обзор казино 2026 | Бонусы, игры, отзывы`,
      description: article?.metaDescription ?? `Полный обзор казино ${brand.name}. Бонусы, игры, методы оплаты, плюсы и минусы для игроков из Узбекистана.`,
      alternates: {
        canonical: `${siteSettings.siteUrl}/ru/${brand.slug}`,
        languages: { uz: `${siteSettings.siteUrl}/${brand.slug}` },
      },
      openGraph: {
        title: article?.metaTitle ?? `${brand.name} — Обзор 2026`,
        description: article?.metaDescription ?? `Полный обзор казино ${brand.name}.`,
        url: `${siteSettings.siteUrl}/ru/${brand.slug}`,
        locale: "ru_RU",
        type: "article",
      },
    };
  }
  const page = getAppPage(slug);
  if (page) {
    return {
      title: page.metaTitle,
      description: page.metaDescription,
      alternates: {
        canonical: `${siteSettings.siteUrl}/ru/${slug}`,
      },
    };
  }
  return { title: "Не найдено" };
}

export default async function RuCasinoOrAppPage({ params }: Props) {
  const { slug } = await params;

  // ── Casino brand page ──────────────────────────────────────────────────────
  const brand = getBrandBySlug(slug);
  if (brand) {
    const article = getArticleRu(slug);
    const related = brands.filter((b) => b.slug !== brand.slug).sort((a, b) => b.rating - a.rating).slice(0, 5);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: brand.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${siteSettings.siteUrl}/ru` },
        { "@type": "ListItem", position: 2, name: "Казино", item: `${siteSettings.siteUrl}/ru/casinos` },
        { "@type": "ListItem", position: 3, name: brand.name, item: `${siteSettings.siteUrl}/ru/${brand.slug}` },
      ],
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <div className="bg-[#16192b]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white py-6 px-6 sm:px-10">
              <nav className="text-sm text-gray-500 mb-4">
                <Link href="/ru" className="hover:text-[#ec4899]">Главная</Link>
                <span className="mx-2">›</span>
                <Link href="/ru/casinos" className="hover:text-[#ec4899]">Казино</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-800 font-medium">{brand.name}</span>
              </nav>
              <BrandReviewHero brand={brand} locale="ru" />
            </div>

            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <KeyFactsTable facts={brand.keyFacts} />
            </div>

            {article && article.sections.length > 0 && (
              <div className="bg-white mt-px py-6 px-6 sm:px-10">
                <TableOfContents sections={article.sections} title="Содержание" />
                <div className="space-y-8">
                  {article.sections.map((section) => (
                    <div key={section.id} id={section.id} className="scroll-mt-20">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                      <div className="article-body" dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!article && brand.sections.length > 0 && (
              <div className="bg-white mt-px py-6 px-6 sm:px-10">
                <TableOfContents sections={brand.sections} title="Содержание" />
                <div className="space-y-8">
                  {brand.sections.map((section) => (
                    <div key={section.id} id={section.id}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                      {section.body.split("\n").filter(Boolean).map((para, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed mb-3">{para}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <ProsCons pros={brand.pros} cons={brand.cons} locale="ru" />
            </div>

            {brand.faq.length > 0 && (
              <div className="bg-white mt-px py-6 px-6 sm:px-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
                <FaqAccordion items={brand.faq} />
              </div>
            )}

            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Другие казино</h2>
              <RelatedLinks brands={related} locale="ru" />
            </div>

            <div className="bg-white mt-px py-8 px-6 sm:px-10 text-center">
              <p className="text-gray-600 mb-4 text-lg font-medium">Готовы начать игру в {brand.name}?</p>
              <CtaButton href={`/go/${brand.slug}`} label={`Играть в ${brand.name} →`} variant="cta" external />
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── App page ───────────────────────────────────────────────────────────────
  const page = getAppPage(slug);
  if (page) {
    const appBrand = getBrandBySlug(page.brandSlug);
    const breadcrumbs = [
      { label: "Главная", href: "/ru" },
      { label: page.brandName, href: `/ru/${page.brandSlug}` },
      { label: page.title, href: `/ru/${slug}` },
    ];

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              {appBrand?.logo ? (
                <Image src={appBrand.logo} alt={page.brandName} width={64} height={64} className="w-full h-full object-contain p-1.5" />
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
                  {page.platform === "android" ? "Android" : page.platform === "ios" ? "iOS" : "Android + iOS"}
                </span>
              </div>
            </div>
          </div>
          <CtaButton href={`/go/${page.brandSlug}`} label={`Скачать ${page.brandName} →`} variant="cta" size="lg" external />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Инструкция по установке</h2>
            <ol className="space-y-3">
              {page.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#ec4899] text-white rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
                  <span className="text-gray-600 text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Возможности приложения</h2>
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

        {appBrand && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">О казино {appBrand.name}</h2>
            <p className="text-[#ec4899] font-semibold mb-4">{appBrand.bonus}</p>
            <div className="flex gap-3">
              <CtaButton href={`/ru/${appBrand.slug}`} label="Полный обзор" variant="outline" size="md" />
              <CtaButton href={`/go/${appBrand.slug}`} label="Перейти на сайт →" variant="cta" size="md" external />
            </div>
          </div>
        )}
      </div>
    );
  }

  notFound();
}
