import { MetadataRoute } from "next";
import { siteSettings } from "@/content/site-settings";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/go/", "/api/", "/_next/"],
      },
    ],
    sitemap: `${siteSettings.siteUrl}/sitemap.xml`,
    host: siteSettings.siteUrl,
  };
}
