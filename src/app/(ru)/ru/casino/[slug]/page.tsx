import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import { getArticleRu } from "@/content/articles-ru";
import Link from "next/link";
import BrandReviewHero from "@/components/brand/BrandReviewHero";
import KeyFactsTable from "@/components/brand/KeyFactsTable";
import TableOfContents from "@/components/brand/TableOfContents";
import ProsCons from "@/components/brand/ProsCons";
import FaqAccordion from "@/components/brand/FaqAccordion";
import RelatedLinks from "@/components/brand/RelatedLinks";
import CtaButton from "@/components/shared/CtaButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) return { title: "Казино не найдено" };

  const article = getArticleRu(slug);

  return {
    title: article?.metaTitle ?? `${brand.name} — Обзор казино 2026 | Бонусы, игры, отзывы`,
    description: article?.metaDescription ?? `Полный обзор казино ${brand.name}. Бонусы, игры, методы оплаты, плюсы и минусы для игроков из Узбекистана.`,
    alternates: {
      canonical: `${siteSettings.siteUrl}/ru/casino/${brand.slug}`,
      languages: { uz: `${siteSettings.siteUrl}/casino/${brand.slug}` },
    },
    openGraph: {
      title: article?.metaTitle ?? `${brand.name} — Обзор 2026`,
      description: article?.metaDescription ?? `Полный обзор казино ${brand.name}.`,
      url: `${siteSettings.siteUrl}/ru/casino/${brand.slug}`,
      locale: "ru_RU",
      type: "article",
    },
  };
}

export default async function RuCasinoPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const article = getArticleRu(slug);

  const related = brands
    .filter((b) => b.slug !== brand.slug)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

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
      { "@type": "ListItem", position: 3, name: brand.name, item: `${siteSettings.siteUrl}/ru/casino/${brand.slug}` },
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
                    <div
                      className="article-body"
                      dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
                    />
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
