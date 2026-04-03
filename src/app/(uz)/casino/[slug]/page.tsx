import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/content/brands";
import { siteSettings } from "@/content/site-settings";
import { getArticleUz } from "@/content/articles-uz";
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

  if (!brand) return { title: "Kazino topilmadi", description: "Bunday kazino mavjud emas." };

  const article = getArticleUz(slug);

  return {
    title: article?.metaTitle ?? brand.metaTitle ?? `${brand.name} Sharhi 2026 | To'liq Tahlil`,
    description: article?.metaDescription ?? brand.metaDescription ?? `${brand.name} kazinosi to'liq sharhi va tahlili.`,
    alternates: {
      canonical: `${siteSettings.siteUrl}/casino/${brand.slug}`,
      languages: { ru: `${siteSettings.siteUrl}/ru/casino/${brand.slug}` },
    },
    openGraph: {
      title: article?.metaTitle ?? brand.metaTitle ?? `${brand.name} Sharhi 2026`,
      description: article?.metaDescription ?? brand.metaDescription ?? `${brand.name} kazinosi to'liq sharhi.`,
      url: `${siteSettings.siteUrl}/casino/${brand.slug}`,
      locale: "uz_UZ",
      type: "article",
    },
  };
}

export default async function CasinoPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const article = getArticleUz(slug);

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
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: siteSettings.siteUrl },
      { "@type": "ListItem", position: 2, name: "Kazinolar", item: `${siteSettings.siteUrl}/casinos` },
      { "@type": "ListItem", position: 3, name: brand.name, item: `${siteSettings.siteUrl}/casino/${brand.slug}` },
    ],
  };

  return (
    <>
      {brand.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#16192b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="bg-white py-6 px-6 sm:px-10">
            <nav className="text-sm text-gray-500 mb-4">
              <a href="/" className="hover:text-pink-600">Bosh sahifa</a>
              <span className="mx-2">›</span>
              <a href="/casinos" className="hover:text-pink-600">Kazinolar</a>
              <span className="mx-2">›</span>
              <span className="text-gray-800 font-medium">{brand.name}</span>
            </nav>
            <BrandReviewHero brand={brand} />
          </div>

          {/* Key facts */}
          <div className="bg-white mt-px py-6 px-6 sm:px-10">
            <KeyFactsTable facts={brand.keyFacts} />
          </div>

          {/* Table of contents + sections */}
          {article && article.sections.length > 0 && (
            <>
              <div className="bg-white mt-px py-4 px-6 sm:px-10">
                <TableOfContents sections={article.sections} />
              </div>

              <div className="bg-white mt-px py-6 px-6 sm:px-10">
                <div className="space-y-8">
                  {article.sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                      <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
                      />
                    </section>
                  ))}
                </div>
              </div>
            </>
          )}
          {!article && brand.sections.length > 0 && (
            <>
              <div className="bg-white mt-px py-4 px-6 sm:px-10">
                <TableOfContents sections={brand.sections} />
              </div>
              <div className="bg-white mt-px py-6 px-6 sm:px-10">
                <div className="space-y-8">
                  {brand.sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                      <div className="text-gray-600 leading-relaxed">
                        {section.body.split("\n").map((para, i) =>
                          para.trim() ? <p key={i} className="mb-3">{para}</p> : null
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Pros/Cons */}
          <div className="bg-white mt-px py-6 px-6 sm:px-10">
            <ProsCons pros={brand.pros} cons={brand.cons} />
          </div>

          {/* FAQ */}
          {brand.faq.length > 0 && (
            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <FaqAccordion items={brand.faq} />
            </div>
          )}

          {/* Related */}
          <div className="bg-white mt-px py-6 px-6 sm:px-10">
            <RelatedLinks brands={brands} currentSlug={brand.slug} />
          </div>

          {/* Bottom CTA */}
          <div className="bg-white mt-px py-8 px-6 sm:px-10 text-center">
            <p className="text-gray-600 mb-4 text-lg font-medium">{brand.name} da o&apos;ynashga tayyormisiz?</p>
            <CtaButton href={`/go/${brand.slug}`} label={`${brand.name} da o'ynash →`} variant="primary" />
          </div>
        </div>
      </div>
    </>
  );
}
