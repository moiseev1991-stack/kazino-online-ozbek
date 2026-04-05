import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalPage } from "@/content/legal";
import { siteSettings } from "@/content/site-settings";
import LegalPageTemplate from "@/components/shared/LegalPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getLegalPage("privacy-policy-ru");
  if (!page) return { title: "Политика конфиденциальности" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteSettings.siteUrl}/ru/privacy-policy`,
      languages: { uz: `${siteSettings.siteUrl}/privacy-policy` },
    },
  };
}

export default function RuPrivacyPolicyPage() {
  const page = getLegalPage("privacy-policy-ru");
  if (!page) notFound();
  return <LegalPageTemplate page={page} />;
}
