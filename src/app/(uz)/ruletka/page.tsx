import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInfoPage } from "@/content/pages-info";
import { siteSettings } from "@/content/site-settings";
import InfoPageTemplate from "@/components/shared/InfoPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getInfoPage("ruletka");
  if (!page) return { title: "Ruletka" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteSettings.siteUrl}/ruletka`,
      languages: { ru: `${siteSettings.siteUrl}/ru/ruletka` },
    },
  };
}

export default function RuletkaPage() {
  const page = getInfoPage("ruletka");
  if (!page) notFound();
  return <InfoPageTemplate page={page} />;
}
