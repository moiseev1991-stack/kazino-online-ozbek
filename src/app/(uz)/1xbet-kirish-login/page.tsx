import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInfoPage } from "@/content/pages-info";
import { siteSettings } from "@/content/site-settings";
import InfoPageTemplate from "@/components/shared/InfoPageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const page = getInfoPage("1xbet-kirish-login");
  if (!page) return { title: "1xBet Kirish" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${siteSettings.siteUrl}/1xbet-kirish-login` },
  };
}

export default function Page() {
  const page = getInfoPage("1xbet-kirish-login");
  if (!page) notFound();
  return <InfoPageTemplate page={page} />;
}
