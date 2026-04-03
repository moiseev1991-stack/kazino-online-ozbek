export interface SiteSettings {
  siteUrl: string;
  siteName: string;
  defaultLang: "uz" | "ru";
  supportEmail: string;
  defaultOgImage: string;
}

export const siteSettings: SiteSettings = {
  siteUrl: "https://kazino-online-ozbek.com",
  siteName: "Kazino Online O'zbek",
  defaultLang: "uz",
  supportEmail: "info@kazino-online-ozbek.com",
  defaultOgImage: "/og-default.png",
};
