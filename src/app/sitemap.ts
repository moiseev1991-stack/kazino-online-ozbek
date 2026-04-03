import { MetadataRoute } from "next";
import { brands } from "@/content/brands";

export const dynamic = "force-static";
import { appPages } from "@/content/pages-apps";
import { siteSettings } from "@/content/site-settings";

const BASE = siteSettings.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/ru`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/casinos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ru/casinos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/kazino-oyunlari`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ru/igry-kazino`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ruletka`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ru/ruletka`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/apps`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ru/apps`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/1xbet-kirish-login`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/1xbet-royxatdan-otish`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ru/1xbet-kirish-login`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ru/1xbet-royxatdan-otish`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/ru/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy-policy-2`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const brandPagesUz: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${BASE}/casino/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const brandPagesRu: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${BASE}/ru/casino/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const appPagesList: MetadataRoute.Sitemap = appPages.map((p) => ({
    url: `${BASE}/app/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const appPagesRu: MetadataRoute.Sitemap = appPages.map((p) => ({
    url: `${BASE}/ru/app/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...brandPagesUz, ...brandPagesRu, ...appPagesList, ...appPagesRu];
}
