import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalPage } from "@/content/legal";
import { siteSettings } from "@/content/site-settings";
import LegalPageTemplate from "@/components/shared/LegalPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getLegalPage("terms-and-conditions");
  if (!page) {
    return { title: "Foydalanish Shartlari" };
  }
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteSettings.siteUrl}/terms-and-conditions`,
    },
  };
}

export default function TermsPage() {
  const page = getLegalPage("terms-and-conditions");
  if (!page) notFound();

  return <LegalPageTemplate page={page} />;
}
