import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalPage } from "@/content/legal";
import { siteSettings } from "@/content/site-settings";
import LegalPageTemplate from "@/components/shared/LegalPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getLegalPage("privacy-policy-2");
  if (!page) {
    return { title: "Maxfiylik Siyosati" };
  }
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteSettings.siteUrl}/privacy-policy-2`,
    },
  };
}

export default function PrivacyPolicyPage() {
  const page = getLegalPage("privacy-policy-2");
  if (!page) notFound();

  return <LegalPageTemplate page={page} />;
}
