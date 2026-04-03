import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInfoPage } from "@/content/pages-info";
import { siteSettings } from "@/content/site-settings";
import InfoPageTemplate from "@/components/shared/InfoPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getInfoPage("ru-1xbet-registraciya");
  if (!page) return { title: "1xBet Регистрация" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${siteSettings.siteUrl}/ru/1xbet-royxatdan-otish` },
  };
}

export default function Page() {
  const page = getInfoPage("ru-1xbet-registraciya");
  if (!page) notFound();
  return <InfoPageTemplate page={page} />;
}
