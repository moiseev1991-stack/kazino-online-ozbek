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
    title: "Maxfiylik Siyosati",
    lastUpdated: "2026-01-01",
    metaTitle: "Maxfiylik Siyosati | Kazino Online O'zbek",
    metaDescription:
      "Kazino Online saytining maxfiylik siyosati. Qanday ma'lumotlar to'planishi, qanday ishlatilishi va shaxsiy ma'lumotlaringiz qanday himoyalanishi haqida bilib oling.",
    sections: [
      {
        heading: "Umumiy qoidalar",
        body: "Ushbu Maxfiylik Siyosati kazino-online-ozbek.com sayti foydalanuvchilar haqida ma'lumot qanday to'planishini, ishlatilishini va himoyalanishini tavsiflaydi. Saytdan foydalanib, siz ushbu Siyosat shartlariga rozilik bildirasiz. Sayt faqat ma'lumot berish maqsadida yaratilgan va qimorbozlik xizmatlarini to'g'ridan-to'g'ri taqdim etmaydi.",
      },
      {
        heading: "Ma'lumot to'plash",
        body: "Biz Saytning to'g'ri ishlashi uchun zarur bo'lgan minimal ma'lumotlarni to'playmiz: IP-manzil, brauzer turi va versiyasi, operatsion tizim, tashrif sahifalari va tashrif vaqti. Shaxsiy ma'lumotlar (ism, e-mail) faqat aloqa formasi orqali ixtiyoriy murojaat qilingan taqdirda to'planadi.",
      },
      {
        heading: "Cookie fayllar",
        body: "Sayt foydalanuvchi tajribasini yaxshilash va trafikni tahlil qilish uchun texnik va analitik cookie-fayllardan foydalanadi. Texnik cookie-lar Saytning ishlashi uchun zarur va o'chirib bo'lmaydi. Analitik cookie-larni brauzer sozlamalarida o'chirishingiz mumkin. Saytdan foydalanishni davom ettirib, siz cookie-lardan foydalanishga rozilik bildirasiz.",
      },
      {
        heading: "Uchinchi tomon xizmatlari",
        body: "Sayt Google Analytics va shunga o'xshash veb-tahlil vositalaridan foydalanadi. Bundan tashqari, Sayt kazino va bukmekerlarga sheriklik havolalarini o'z ichiga oladi; ulardan foydalanish tegishli operatorlarning maxfiylik siyosati bilan tartibga solinadi.",
      },
      {
        heading: "Ma'lumot xavfsizligi",
        body: "Uzatiladigan ma'lumotlarni himoya qilish uchun TLS/SSL (HTTPS) protokoli bo'yicha shifrlash qo'llaniladi. Biz foydalanuvchilarning shaxsiy ma'lumotlarini qonunda nazarda tutilgan hollar bundan mustasno, uchinchi shaxslarga o'tkazmaymiz yoki sotmaymiz.",
      },
      {
        heading: "Foydalanuvchi huquqlari",
        body: "Siz aloqa sahifasi orqali ma'lumotlaringizga kirish, ularni tuzatish yoki o'chirish so'rovini yuborishingiz mumkin. Biz so'rovingizni oqilona muddatda ko'rib chiqamiz. Ushbu Maxfiylik Siyosati yangilanishi mumkin; dolzarb versiyasi har doim ushbu sahifada mavjud.",
      },
    ],
  },
  {
    slug: "privacy-policy-ru",
    title: "Политика конфиденциальности",
    lastUpdated: "2026-01-01",
    metaTitle: "Политика конфиденциальности | Kazino Online O'zbek",
    metaDescription:
      "Политика конфиденциальности сайта Kazino Online. Узнайте, какие данные мы собираем, как используем и защищаем вашу личную информацию.",
    sections: [
      {
        heading: "Общие положения",
        body: "Настоящая Политика конфиденциальности описывает, как сайт kazino-online-ozbek.com собирает, использует и защищает информацию пользователей. Используя Сайт, вы соглашаетесь с условиями данной Политики. Сайт носит информационный характер и не предоставляет услуги азартных игр напрямую.",
      },
      {
        heading: "Сбор данных",
        body: "Мы собираем минимальный объём данных, необходимых для корректной работы Сайта: IP-адрес, тип и версия браузера, операционная система, страницы посещения и время визита. Персональные данные (имя, e-mail) собираются только в случае добровольного обращения через контактную форму.",
      },
      {
        heading: "Файлы cookie",
        body: "Сайт использует технические и аналитические cookie-файлы для улучшения пользовательского опыта и анализа трафика. Технические cookie необходимы для работы Сайта и не могут быть отключены. Аналитические cookie вы можете отключить в настройках браузера. Продолжая использование Сайта, вы соглашаетесь с применением cookie.",
      },
      {
        heading: "Сторонние сервисы",
        body: "Сайт использует сервисы Google Analytics и аналогичные инструменты веб-аналитики для изучения аудитории и улучшения контента. Кроме того, Сайт содержит партнёрские ссылки на казино и букмекеров; переход по ним регулируется политикой конфиденциальности соответствующих операторов.",
      },
      {
        heading: "Защита данных",
        body: "Для защиты передаваемых данных применяется шифрование по протоколу TLS/SSL (HTTPS). Мы не передаём и не продаём персональные данные пользователей третьим лицам, за исключением случаев, предусмотренных законодательством.",
      },
      {
        heading: "Права пользователей",
        body: "Вы вправе запросить доступ к своим данным, их исправление или удаление, направив запрос через страницу контактов. Мы обработаем ваш запрос в разумные сроки. Настоящая Политика конфиденциальности может обновляться; актуальная версия всегда доступна на этой странице.",
      },
    ],
  },
  {
    slug: "terms-and-conditions-ru",
    title: "Условия использования",
    lastUpdated: "2026-01-01",
    metaTitle: "Условия использования | Kazino Online O'zbek",
    metaDescription:
      "Условия использования сайта Kazino Online O'zbek. Прочитайте правила и условия перед использованием сайта.",
    sections: [
      {
        heading: "Общие положения",
        body: "Используя сайт Kazino Online O'zbek, вы соглашаетесь с настоящими условиями. Сайт создан исключительно в информационных целях и не предоставляет услуги азартных игр напрямую.",
      },
      {
        heading: "Возрастное ограничение",
        body: "Для использования данного сайта вы должны быть старше 18 лет. Азартные игры запрещены для несовершеннолетних.",
      },
      {
        heading: "Партнёрские отношения",
        body: "Наш сайт получает доход через партнёрские ссылки. Обзоры рекомендуемых казино являются независимыми и объективными. Партнёрские отношения не влияют на качество обзоров.",
      },
      {
        heading: "Ограничение ответственности",
        body: "Информация на сайте предоставляется исключительно в общих информационных целях. Риски азартных игр вы оцениваете самостоятельно. Сайт не несёт ответственности за проигранные средства.",
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
