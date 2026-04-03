import type { LegalPage } from "@/content/legal";
import Breadcrumbs from "./Breadcrumbs";

interface LegalPageTemplateProps {
  page: LegalPage;
}

export default function LegalPageTemplate({ page }: LegalPageTemplateProps) {
  const breadcrumbs = [
    { label: "Bosh sahifa", href: "/" },
    { label: page.title, href: `/${page.slug}` },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{page.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        Oxirgi yangilanish: {new Date(page.lastUpdated).toLocaleDateString("uz-UZ")}
      </p>

      <div className="prose prose-blue max-w-none">
        {page.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {section.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
