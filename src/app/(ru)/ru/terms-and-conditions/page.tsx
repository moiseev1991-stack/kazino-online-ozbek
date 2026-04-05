import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalPage } from "@/content/legal";
import { siteSettings } from "@/content/site-settings";
import LegalPageTemplate from "@/components/shared/LegalPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getLegalPage("terms-and-conditions-ru");
  if (!page) return { title: "Условия использования" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteSettings.siteUrl}/ru/terms-and-conditions`,
      languages: { uz: `${siteSettings.siteUrl}/terms-and-conditions` },
    },
  };
}

export default function RuTermsPage() {
  const page = getLegalPage("terms-and-conditions-ru");
  if (!page) notFound();
  return <LegalPageTemplate page={page} />;
}
