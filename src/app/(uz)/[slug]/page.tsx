import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/content/brands";
import { appPages, getAppPage } from "@/content/pages-apps";
import { siteSettings } from "@/content/site-settings";
import { getArticleUz } from "@/content/articles-uz";
import Image from "next/image";
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
    const article = getArticleUz(slug);
    return {
      title: article?.metaTitle ?? brand.metaTitle ?? `${brand.name} Sharhi 2026 | To'liq Tahlil`,
      description: article?.metaDescription ?? brand.metaDescription ?? `${brand.name} kazinosi to'liq sharhi va tahlili.`,
      alternates: {
        canonical: `${siteSettings.siteUrl}/${brand.slug}`,
        languages: { ru: `${siteSettings.siteUrl}/ru/${brand.slug}` },
      },
      openGraph: {
        title: article?.metaTitle ?? brand.metaTitle ?? `${brand.name} Sharhi 2026`,
        description: article?.metaDescription ?? brand.metaDescription ?? `${brand.name} kazinosi to'liq sharhi.`,
        url: `${siteSettings.siteUrl}/${brand.slug}`,
        locale: "uz_UZ",
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
        canonical: `${siteSettings.siteUrl}/${slug}`,
      },
    };
  }
  return { title: "Topilmadi" };
}

export default async function CasinoOrAppPage({ params }: Props) {
  const { slug } = await params;

  // ── Casino brand page ──────────────────────────────────────────────────────
  const brand = getBrandBySlug(slug);
  if (brand) {
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
        { "@type": "ListItem", position: 3, name: brand.name, item: `${siteSettings.siteUrl}/${brand.slug}` },
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

            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <KeyFactsTable facts={brand.keyFacts} />
            </div>

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
                        <div className="article-body" dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />
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

            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <ProsCons pros={brand.pros} cons={brand.cons} />
            </div>

            {brand.faq.length > 0 && (
              <div className="bg-white mt-px py-6 px-6 sm:px-10">
                <FaqAccordion items={brand.faq} />
              </div>
            )}

            <div className="bg-white mt-px py-6 px-6 sm:px-10">
              <RelatedLinks brands={brands} currentSlug={brand.slug} />
            </div>

            <div className="bg-white mt-px py-8 px-6 sm:px-10 text-center">
              <p className="text-gray-600 mb-4 text-lg font-medium">{brand.name} da o&apos;ynashga tayyormisiz?</p>
              <CtaButton href={`/go/${brand.slug}`} label={`${brand.name} da o'ynash →`} variant="primary" />
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
      { label: "Bosh sahifa", href: "/" },
      { label: page.brandName, href: `/${page.brandSlug}` },
      { label: page.title, href: `/${slug}` },
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
          <CtaButton href={page.ctaUrl ?? `/go/${page.brandSlug}`} label={`${page.brandName} ni Yuklab Olish →`} variant="cta" size="lg" external />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">O&apos;rnatish bo&apos;yicha qo&apos;llanma</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ilova imkoniyatlari</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-3">{appBrand.name} haqida</h2>
            <p className="text-[#ec4899] font-semibold mb-4">{appBrand.bonus}</p>
            <div className="flex gap-3">
              <CtaButton href={`/${appBrand.slug}`} label="To'liq sharh" variant="outline" size="md" />
              <CtaButton href={`/go/${appBrand.slug}`} label="Saytga o'tish →" variant="cta" size="md" external />
            </div>
          </div>
        )}
      </div>
    );
  }

  notFound();
}
