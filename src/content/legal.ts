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
    slug: "privacy-policy",
    title: "Политика конфиденциальности / Maxfiylik Siyosati",
    lastUpdated: "2026-01-01",
    metaTitle: "Политика конфиденциальности | Kazino Online O'zbek",
    metaDescription:
      "Политика конфиденциальности сайта Kazino Online. Узнайте, какие данные мы собираем, как используем и защищаем вашу личную информацию.",
    sections: [
      {
        heading: "Общие положения / Umumiy qoidalar",
        body: "Настоящая Политика конфиденциальности описывает, как сайт kazino-online-ozbek.com («Сайт») собирает, использует и защищает информацию пользователей. Используя Сайт, вы соглашаетесь с условиями данной Политики. Сайт носит информационный характер и не предоставляет услуги азартных игр напрямую.",
      },
      {
        heading: "Сбор данных / Ma'lumot to'plash",
        body: "Мы собираем минимальный объём данных, необходимых для корректной работы Сайта: IP-адрес, тип и версия браузера, операционная система, страницы посещения и время визита. Персональные данные (имя, e-mail) собираются только в случае добровольного обращения через контактную форму.",
      },
      {
        heading: "Файлы cookie / Cookie fayllar",
        body: "Сайт использует технические и аналитические cookie-файлы для улучшения пользовательского опыта и анализа трафика. Технические cookie необходимы для работы Сайта и не могут быть отключены. Аналитические cookie вы можете отключить в настройках браузера. Продолжая использование Сайта, вы соглашаетесь с применением cookie.",
      },
      {
        heading: "Сторонние сервисы / Uchinchi tomon xizmatlari",
        body: "Сайт использует сервисы Google Analytics и аналогичные инструменты веб-аналитики для изучения аудитории и улучшения контента. Данные сервисы собирают обезличенную статистику согласно собственной политике конфиденциальности. Кроме того, Сайт содержит партнёрские ссылки на казино и букмекеров; переход по ним регулируется политикой конфиденциальности соответствующих операторов.",
      },
      {
        heading: "Защита данных / Ma'lumot xavfsizligi",
        body: "Для защиты передаваемых данных применяется шифрование по протоколу TLS/SSL (HTTPS). Мы не передаём и не продаём персональные данные пользователей третьим лицам, за исключением случаев, предусмотренных законодательством.",
      },
      {
        heading: "Права пользователей / Foydalanuvchi huquqlari",
        body: "Вы вправе запросить доступ к своим данным, их исправление или удаление, направив запрос через страницу контактов. Мы обработаем ваш запрос в разумные сроки. Настоящая Политика конфиденциальности может обновляться; актуальная версия всегда доступна на этой странице.",
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
