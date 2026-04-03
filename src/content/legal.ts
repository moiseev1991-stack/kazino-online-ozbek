export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  metaTitle: string;
  metaDescription: string;
}

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy-2",
    title: "Maxfiylik Siyosati",
    lastUpdated: "2026-01-01",
    metaTitle: "Maxfiylik Siyosati | Kazino Online O'zbek",
    metaDescription:
      "Kazino Online O'zbek saytining maxfiylik siyosati. Shaxsiy ma'lumotlaringiz qanday to'planishi va ishlatilishi haqida.",
    sections: [
      {
        heading: "Ma'lumot to'plash",
        body: "Biz faqat sayt xizmatlarini ko'rsatish uchun zarur bo'lgan ma'lumotlarni to'playmiz. Bunga IP-manzil, brauzer turi va sahifaga kirish vaqti kiradi.",
      },
      {
        heading: "Cookie fayllar",
        body: "Sayt cookie fayllardan foydalanadi. Cookie fayllar sayt ishlashini yaxshilash va foydalanuvchi tajribasini takomillashtirish uchun ishlatiladi. Brauzer sozlamalaridan cookie fayllarni o'chirib qo'yishingiz mumkin.",
      },
      {
        heading: "Uchinchi tomon xizmatlari",
        body: "Biz Google Analytics va shunga o'xshash tahlil xizmatlaridan foydalanamiz. Ushbu xizmatlar o'z maxfiylik siyosatiga ega.",
      },
      {
        heading: "Ma'lumot xavfsizligi",
        body: "Shaxsiy ma'lumotlaringiz xavfsizligini ta'minlash uchun zamonaviy SSL shifrlash texnologiyasidan foydalanamiz.",
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Foydalanish Shartlari",
    lastUpdated: "2026-01-01",
    metaTitle: "Foydalanish Shartlari | Kazino Online O'zbek",
    metaDescription:
      "Kazino Online O'zbek saytidan foydalanish shartlari va qoidalari. Saytdan foydalanishdan oldin ushbu shartlarni o'qib chiqing.",
    sections: [
      {
        heading: "Umumiy qoidalar",
        body: "Kazino Online O'zbek saytidan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Sayt faqat ma'lumot berish maqsadida yaratilgan va hech qanday qimorbozlik xizmatlarini to'g'ridan-to'g'ri taqdim etmaydi.",
      },
      {
        heading: "Yosh cheklovi",
        body: "Ushbu saytdan foydalanish uchun 18 yoshdan katta bo'lishingiz shart. Voyaga etmaganlar uchun qimorbozlik xizmatlari taqiqlangan.",
      },
      {
        heading: "Affiliate aloqalar",
        body: "Saytimiz affiliate havolalar orqali daromad oladi. Biz tavsiya etgan kazinoların sharhlari mustaqil va halol. Affiliate aloqalar sharh sifatiga ta'sir etmaydi.",
      },
      {
        heading: "Mas'uliyat cheklovi",
        body: "Sayt ma'lumotlari faqat umumiy axborot maqsadida. Qimorbozlik xavf-xatarlarini o'zingiz baholashingiz kerak. Yutqazilgan pullar uchun sayt javobgar emas.",
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((p) => p.slug === slug);
}
