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
        body: "Настоящая Политика конфиденциальности описывает, как сайт kazino-online-ozbek.com собирает, использует и защищает информацию пользователей. Используя Сайт, вы соглашаетесь с условиями данной Политики. Сайт носит информационный характер и не предоставляет услуги азартных игр напрямую.\n\nUshbu Maxfiylik Siyosati kazino-online-ozbek.com sayti foydalanuvchilar haqida ma'lumot qanday to'planishini, ishlatilishini va himoyalanishini tavsiflaydi. Saytdan foydalanib, siz ushbu Siyosat shartlariga rozilik bildirasiz.",
      },
      {
        heading: "Сбор данных / Ma'lumot to'plash",
        body: "Мы собираем минимальный объём данных, необходимых для корректной работы Сайта: IP-адрес, тип и версия браузера, операционная система, страницы посещения и время визита. Персональные данные (имя, e-mail) собираются только в случае добровольного обращения через контактную форму.\n\nBiz Saytning to'g'ri ishlashi uchun zarur bo'lgan minimal ma'lumotlarni to'playmiz: IP-manzil, brauzer turi va versiyasi, operatsion tizim, tashrif sahifalari va tashrif vaqti. Shaxsiy ma'lumotlar (ism, e-mail) faqat aloqa formasi orqali ixtiyoriy murojaat qilingan taqdirda to'planadi.",
      },
      {
        heading: "Файлы cookie / Cookie fayllar",
        body: "Сайт использует технические и аналитические cookie-файлы для улучшения пользовательского опыта и анализа трафика. Технические cookie необходимы для работы Сайта и не могут быть отключены. Аналитические cookie вы можете отключить в настройках браузера.\n\nSayt foydalanuvchi tajribasini yaxshilash va trafikni tahlil qilish uchun texnik va analitik cookie-fayllardan foydalanadi. Texnik cookie-lar Saytning ishlashi uchun zarur va o'chirib bo'lmaydi. Analitik cookie-larni brauzer sozlamalarida o'chirishingiz mumkin.",
      },
      {
        heading: "Сторонние сервисы / Uchinchi tomon xizmatlari",
        body: "Сайт использует сервисы Google Analytics и аналогичные инструменты веб-аналитики. Кроме того, Сайт содержит партнёрские ссылки на казино и букмекеров; переход по ним регулируется политикой конфиденциальности соответствующих операторов.\n\nSayt Google Analytics va shunga o'xshash veb-tahlil vositalaridan foydalanadi. Bundan tashqari, Sayt kazino va bukmekerlarga sheriklik havolalarini o'z ichiga oladi; ulardan foydalanish tegishli operatorlarning maxfiylik siyosati bilan tartibga solinadi.",
      },
      {
        heading: "Защита данных / Ma'lumot xavfsizligi",
        body: "Для защиты передаваемых данных применяется шифрование по протоколу TLS/SSL (HTTPS). Мы не передаём и не продаём персональные данные пользователей третьим лицам, за исключением случаев, предусмотренных законодательством.\n\nUzatiladigan ma'lumotlarni himoya qilish uchun TLS/SSL (HTTPS) protokoli bo'yicha shifrlash qo'llaniladi. Biz foydalanuvchilarning shaxsiy ma'lumotlarini qonunda nazarda tutilgan hollar bundan mustasno, uchinchi shaxslarga o'tkazmaymiz yoki sotmaymiz.",
      },
      {
        heading: "Права пользователей / Foydalanuvchi huquqlari",
        body: "Вы вправе запросить доступ к своим данным, их исправление или удаление через страницу контактов. Настоящая Политика конфиденциальности может обновляться; актуальная версия всегда доступна на этой странице.\n\nSiz aloqa sahifasi orqali ma'lumotlaringizga kirish, ularni tuzatish yoki o'chirish so'rovini yuborishingiz mumkin. Ushbu Maxfiylik Siyosati yangilanishi mumkin; dolzarb versiyasi har doim ushbu sahifada mavjud.",
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
