export interface HomeContent {
  lang: "uz" | "ru";
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  introHeading: string;
  introText: string;
  topCasinosHeading: string;
  allCasinosLinkText: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const homeContentUz: HomeContent = {
  lang: "uz",
  heroTitle: "O'zbekiston uchun Eng Yaxshi Onlayn Kazinolar",
  heroSubtitle:
    "Ishonchli sharh va reytinglar asosida eng yaxshi onlayn kazinolarni toping. Bonus va aksiyalarni solishtiring.",
  heroCta: "Barcha Kazinolarni Ko'rish",
  introHeading: "Nima uchun bizga ishonishingiz mumkin?",
  introText:
    "Biz har bir kazinoni sinchkovlik bilan tekshiramiz: litsenziya, bonus shartlari, to'lov tezligi va mijozlar xizmatini baholaymiz. Faqat ishonchli va tasdiqlangan kazinolar ro'yxatimizga kiradi. Bizning maqsadimiz — O'zbekiston o'yinchilariga xavfsiz va qulay kazino topishda yordam berish.",
  topCasinosHeading: "Top Kazinolar — 2026",
  allCasinosLinkText: "Barcha kazinolarni ko'rish →",
  metaTitle: "Eng Yaxshi Onlayn Kazinolar O'zbekiston 2026 | Kazino Online",
  metaDescription:
    "O'zbekiston uchun eng yaxshi onlayn kazinolar reytingi 2026. Bonus, litsenziya va ishonchlilik bo'yicha to'liq sharh va taqqoslash.",
  ogTitle: "Eng Yaxshi Onlayn Kazinolar O'zbekiston 2026",
  ogDescription:
    "O'zbekiston uchun eng yaxshi onlayn kazinolar reytingi, bonus va sharhlar.",
};

export const homeContentRu: HomeContent = {
  lang: "ru",
  heroTitle: "Лучшие Онлайн Казино для Узбекистана",
  heroSubtitle:
    "Найдите лучшие онлайн казино на основе честных обзоров и рейтингов. Сравнивайте бонусы и акции.",
  heroCta: "Все Казино",
  introHeading: "Почему нам можно доверять?",
  introText:
    "Мы тщательно проверяем каждое казино: лицензию, условия бонусов, скорость выплат и качество поддержки. В наш список попадают только надёжные и проверенные казино. Наша цель — помочь игрокам из Узбекистана найти безопасное и удобное казино.",
  topCasinosHeading: "Топ Казино — 2026",
  allCasinosLinkText: "Все казино →",
  metaTitle: "Лучшие Онлайн Казино Узбекистан 2026 | Kazino Online",
  metaDescription:
    "Рейтинг лучших онлайн казино для Узбекистана 2026. Полные обзоры, бонусы, лицензии и надёжность.",
  ogTitle: "Лучшие Онлайн Казино Узбекистан 2026",
  ogDescription: "Рейтинг лучших онлайн казино для Узбекистана с бонусами.",
};
