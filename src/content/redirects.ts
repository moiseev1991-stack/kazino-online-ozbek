export interface RedirectItem {
  slug: string;
  target: string;
  brand?: string;
}

export const redirects: RedirectItem[] = [
  { slug: "22bet", target: "https://22bet.com/?ref=uz-affiliate", brand: "22bet" },
  { slug: "pin-up", target: "https://pinup.com/?ref=uz-affiliate", brand: "pin-up" },
  { slug: "mostbet", target: "https://mostbet.com/?ref=uz-affiliate", brand: "mostbet" },
  { slug: "melbet", target: "https://melbet.com/?ref=uz-affiliate", brand: "melbet" },
  { slug: "1xbet", target: "https://1xbet.com/?ref=uz-affiliate", brand: "1xbet" },
  { slug: "1win", target: "https://1win.com/?ref=uz-affiliate", brand: "1win" },
  { slug: "vavada", target: "https://vavada.com/?ref=uz-affiliate", brand: "vavada" },
  { slug: "spinbetter", target: "https://spinbetter.com/?ref=uz-affiliate", brand: "spinbetter" },
  { slug: "megapari", target: "https://megapari.com/?ref=uz-affiliate", brand: "megapari" },
  { slug: "betwinner", target: "https://betwinner.com/?ref=uz-affiliate", brand: "betwinner" },
  { slug: "parimatch", target: "https://parimatch.com/?ref=uz-affiliate", brand: "parimatch" },
  { slug: "20bet", target: "https://20bet.com/?ref=uz-affiliate", brand: "20bet" },
  { slug: "vave", target: "https://vave.com/?ref=uz-affiliate", brand: "vave" },
  { slug: "marathonbet", target: "https://marathonbet.com/?ref=uz-affiliate", brand: "marathonbet" },
  { slug: "win-win", target: "https://winwin.com/?ref=uz-affiliate", brand: "win-win" },
  { slug: "888starz", target: "https://888starzuz.bet/", brand: "888starz" },
  { slug: "pokerdom", target: "https://pokerdom.com/?ref=uz-affiliate", brand: "pokerdom" },
  { slug: "pinco", target: "https://pinco.com/?ref=uz-affiliate", brand: "pinco" },
  { slug: "paripulse", target: "https://paripulse.com/?ref=uz-affiliate", brand: "paripulse" },
  { slug: "coldbet", target: "https://coldbet.com/?ref=uz-affiliate", brand: "coldbet" },
  { slug: "dbbet", target: "https://dbbet.com/?ref=uz-affiliate", brand: "dbbet" },
  { slug: "cactus-casino", target: "https://cactuscasino.com/?ref=uz-affiliate", brand: "cactus-casino" },
  { slug: "olymp-casino", target: "https://olympcasino.com/?ref=uz-affiliate", brand: "olymp-casino" },
  { slug: "yohohobet", target: "https://yohohobet.com/?ref=uz-affiliate", brand: "yohohobet" },
  { slug: "funpari", target: "https://funpari.com/?ref=uz-affiliate", brand: "funpari" },
  { slug: "betjam", target: "https://betjam.com/?ref=uz-affiliate", brand: "betjam" },
];

export function getRedirect(slug: string): RedirectItem | undefined {
  return redirects.find((r) => r.slug === slug);
}
