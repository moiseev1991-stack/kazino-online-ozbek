export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface InfoPage {
  slug: string;
  lang: "uz" | "ru";
  title: string;
  heading: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: BreadcrumbItem[];
}

export const infoPages: InfoPage[] = [
  {
    slug: "ruletka",
    lang: "uz",
    title: "Ruletka",
    heading: "Onlayn Ruletka — To'liq Qo'llanma 2026",
    body: `Ruletka dunyodagi eng mashhur kazino o'yinlaridan biri. Bu sahifada rulеtkaning barcha turlari, qoidalari va strategiyalari haqida to'liq ma'lumot beramiz.

**Ruletka turlari**

Evropa ruletka — eng mashhur va qulay tur. Bitta nol mavjud, bu esa uy ustunligini 2.7% ga tushiradi.

Amerika ruletka — ikki nol (0 va 00) mavjud. Uy ustunligi 5.26% ni tashkil etadi.

Fransuz ruletka — Evropa ruletkasiga o'xshash, lekin qo'shimcha La Partage qoidasi bor.

**Asosiy stavkalar**

Ruletka da turli xil stavkalar qo'yish mumkin: bitta raqam (35:1), qizil/qora (1:1), juft/toq (1:1), 1-18/19-36 (1:1), va boshqalar.

**Strategiyalar**

Martingale — har yutqazganda stavkani ikkilashtirish. Fibonacci — Fibonacci qatori asosida stavka tizimi. D'Alembert — stavkani sekin oshirish va kamaytirish.

**Maslahat**

Ruletka tasodif o'yini. Hech qanday strategiya 100% kafolat bermaydi. Mas'uliyatli o'ynang va byudjetingizni nazorat qiling.`,
    metaTitle: "Onlayn Ruletka 2026 | Qoidalar, Strategiyalar va Maslahatlar",
    metaDescription: "Onlayn ruletka to'liq qo'llanmasi: Evropa va Amerika ruletka farqlari, stavka turlari, strategiyalar. O'zbekiston o'yinchilari uchun.",
    breadcrumbs: [
      { label: "Bosh sahifa", href: "/" },
      { label: "Ruletka", href: "/ruletka" },
    ],
  },
  {
    slug: "kazino-oyunlari",
    lang: "uz",
    title: "Kazino O'yinlari",
    heading: "Onlayn Kazino O'yinlari To'liq Qo'llanma 2026",
    body: `Onlayn kazino o'yinlari dunyosi juda keng va xilma-xil. Bu sahifada eng mashhur kazino o'yin turlarini ko'rib chiqamiz.

**Slotlar (O'yin mashinalari)**

Slotlar eng mashhur kazino o'yinlari. Ular oddiy qoidalarga ega: baraban aylantirasiz va ramzlar kombinatsiyasini kutasiz. Zamonaviy slotlar turli mavzularda: film qahramonlari, tarix, mifologiya va boshqalar. RTP (qaytish foizi) odatda 94-97% ni tashkil etadi.

**Jonli Diler O'yinlari**

Jonli kazino — real dilerlar bilan onlayn o'ynash imkoniyati. Blackjack, ruletka, baccarat va poker — bularning barchasi jonli efirda. Bu o'yinlar qulay va xavfsiz muhitda kazino atmosferasini his qilish imkonini beradi.

**Blackjack**

21 o'yini sifatida ham tanilgan blackjack matematikani sevuvchilar uchun ideal. To'g'ri strategiya bilan uy ustunligi 0.5% gacha tushirilishi mumkin.

**Ruletka**

Ruletka eng ikonik kazino o'yinlaridan biri. Evropa ruletka (bir nol) va Amerika ruletka (ikki nol) turlari mavjud. Evropa ruletka yanada qulayroq shartlarga ega.`,
    metaTitle: "Kazino O'yinlari 2026 | Slotlar, Blackjack, Ruletka | O'zbek",
    metaDescription:
      "Onlayn kazino o'yinlari haqida to'liq ma'lumot: slotlar, jonli diler o'yinlari, blackjack va ruletka. O'zbekiston o'yinchilari uchun qo'llanma.",
    breadcrumbs: [
      { label: "Bosh sahifa", href: "/" },
      { label: "Kazino O'yinlari", href: "/kazino-oyunlari" },
    ],
  },
  {
    slug: "contact",
    lang: "uz",
    title: "Aloqa",
    heading: "Biz bilan Bog'laning",
    body: `Savolingiz bormi yoki hamkorlik qilmoqchimisiz? Biz bilan bog'laning.

**Email:** info@kazino-online-ozbek.com

**Ish vaqti:** Dushanba — Juma, 9:00 — 18:00 (UTC+5)

Biz odatda 24-48 soat ichida javob beramiz.

**Muharririyat bilan bog'laning:**
Agar kazino haqida yangi ma'lumot, yangilanish yoki tuzatish bo'lsa — bizga xabar yuboring.

**Affiliate hamkorlik:**
Agar siz kazino operatori yoki affiliate bo'lsangiz, hamkorlik takliflari uchun yuqoridagi email orqali murojaat qiling.`,
    metaTitle: "Aloqa | Kazino Online O'zbek",
    metaDescription:
      "Kazino Online O'zbek saytining aloqa ma'lumotlari. Savollar, hamkorlik va tuzatishlar uchun murojaat qiling.",
    breadcrumbs: [
      { label: "Bosh sahifa", href: "/" },
      { label: "Aloqa", href: "/contact" },
    ],
  },
  {
    slug: "1xbet-kirish-login",
    lang: "uz",
    title: "1xBet Kirish — Login",
    heading: "1xBet Kirish: Hisobingizga Qanday Kirish Mumkin?",
    body: `1xBet hisobingizga kirish uchun quyidagi qadamlarni bajaring.

**Rasmiy sayt orqali kirish**

1xbet.com rasmiy saytiga o'ting. Sahifaning o'ng yuqori qismidagi "Kirish" tugmasini bosing. Email yoki telefon raqami va parolingizni kiriting. "Kirish" tugmasini bosing.

**Mobil ilova orqali kirish**

1xBet mobil ilovasini oching. Login ma'lumotlaringizni kiriting. Barmoq izi yoki Face ID orqali tez kirish ham mavjud.

**Parolni unutdingizmi?**

"Parolni unutdim" havolasini bosing. Email yoki telefon raqamingizni kiriting. SMS yoki email orqali tasdiqlash kodini oling. Yangi parol o'rnating.

**Hisobot bloklangan bo'lsa**

Hisob bloklangan bo'lsa, 1xBet qo'llab-quvvatlash xizmatiga murojaat qiling. Live chat yoki email orqali yordam so'rang.

**Xavfsiz kirish maslahatlar**

Doim rasmiy domendan foydalaning. Parolingizni boshqalar bilan baham ko'rmang. Ikki faktorli autentifikatsiyani yoqing.`,
    metaTitle: "1xBet Kirish — Login 2026 | Hisobga Qanday Kirish",
    metaDescription: "1xBet hisobiga kirish bo'yicha to'liq qo'llanma. Rasmiy sayt, mobil ilova va parolni tiklash yo'llari.",
    breadcrumbs: [
      { label: "Bosh sahifa", href: "/" },
      { label: "1xBet", href: "/1xbet" },
      { label: "1xBet Kirish", href: "/1xbet-kirish-login" },
    ],
  },
  {
    slug: "1xbet-royxatdan-otish",
    lang: "uz",
    title: "1xBet Ro'yxatdan O'tish",
    heading: "1xBet Ro'yxatdan O'tish: Bosqichma-bosqich Qo'llanma",
    body: `1xBet da ro'yxatdan o'tish juda oddiy. Quyidagi usullardan birini tanlang.

**1 bosqich: Ro'yxatdan o'tish usulini tanlash**

1xBet da 4 xil ro'yxatdan o'tish usuli mavjud: bir klik bilan, telefon orqali, email orqali va ijtimoiy tarmoqlar orqali.

**Bir klik bilan ro'yxatdan o'tish**

Eng tez usul. Faqat mamlakatni va valyutani tanlang. Hisob darhol yaratiladi. Keyinroq to'liq ma'lumotlarni to'ldirish mumkin.

**Telefon orqali ro'yxatdan o'tish**

Telefon raqamingizni kiriting. SMS kod oling. Kodni tasdiqlang. Parol o'rnating.

**Email orqali ro'yxatdan o'tish**

Email manzilingizni kiriting. Parol yarating. Emailni tasdiqlang. Shaxsiy ma'lumotlarni to'ldiring.

**Ro'yxatdan o'tgandan so'ng**

Birinchi depozit qiling va xush kelibsiz bonusini oling. KYC tasdiqlovchi hujjatlarni yuklang. Sevimli o'yinlaringizni o'ynashni boshlang.`,
    metaTitle: "1xBet Ro'yxatdan O'tish 2026 | Qo'llanma + Bonus",
    metaDescription: "1xBet da ro'yxatdan o'tish bo'yicha to'liq qo'llanma. Barcha usullar: bir klik, telefon, email. Bonus olish.",
    breadcrumbs: [
      { label: "Bosh sahifa", href: "/" },
      { label: "1xBet", href: "/1xbet" },
      { label: "1xBet Ro'yxatdan O'tish", href: "/1xbet-royxatdan-otish" },
    ],
  },
  {
    slug: "ru-1xbet-vhod",
    lang: "ru",
    title: "1xBet Вход — Логин",
    heading: "1xBet Вход: Как Войти в Свой Аккаунт?",
    body: `Чтобы войти в аккаунт 1xBet, выполните следующие шаги.

**Вход через официальный сайт**

Перейдите на официальный сайт 1xbet.com. Нажмите кнопку «Войти» в правом верхнем углу. Введите email или номер телефона и пароль. Нажмите «Войти».

**Вход через мобильное приложение**

Откройте мобильное приложение 1xBet. Введите данные для входа. Доступен вход по отпечатку пальца или Face ID.

**Забыли пароль?**

Нажмите ссылку «Забыли пароль». Введите email или номер телефона. Получите код подтверждения по SMS или на email. Установите новый пароль.

**Аккаунт заблокирован**

Если аккаунт заблокирован, обратитесь в службу поддержки 1xBet через live chat или email.

**Советы по безопасному входу**

Всегда используйте официальный домен. Не сообщайте пароль третьим лицам. Включите двухфакторную аутентификацию.`,
    metaTitle: "1xBet Вход — Логин 2026 | Как Войти в Аккаунт",
    metaDescription: "Полное руководство по входу в аккаунт 1xBet. Официальный сайт, мобильное приложение, восстановление пароля.",
    breadcrumbs: [
      { label: "Главная", href: "/ru" },
      { label: "1xBet", href: "/ru/1xbet" },
      { label: "Вход 1xBet", href: "/ru/1xbet-kirish-login" },
    ],
  },
  {
    slug: "ru-1xbet-registraciya",
    lang: "ru",
    title: "1xBet Регистрация",
    heading: "1xBet Регистрация: Пошаговое Руководство",
    body: `Зарегистрироваться на 1xBet очень просто. Выберите один из способов ниже.

**Шаг 1: Выбор способа регистрации**

На 1xBet доступны 4 способа регистрации: в один клик, по телефону, по email и через социальные сети.

**Регистрация в один клик**

Самый быстрый способ. Выберите страну и валюту. Аккаунт создаётся мгновенно. Полные данные можно заполнить позже.

**Регистрация по телефону**

Введите номер телефона. Получите SMS-код. Подтвердите код. Установите пароль.

**Регистрация по email**

Введите адрес электронной почты. Придумайте пароль. Подтвердите email. Заполните личные данные.

**После регистрации**

Внесите первый депозит и получите приветственный бонус. Загрузите документы для верификации KYC. Начните играть в любимые игры.`,
    metaTitle: "1xBet Регистрация 2026 | Руководство + Бонус",
    metaDescription: "Полное руководство по регистрации на 1xBet. Все способы: один клик, телефон, email. Как получить бонус.",
    breadcrumbs: [
      { label: "Главная", href: "/ru" },
      { label: "1xBet", href: "/ru/1xbet" },
      { label: "Регистрация 1xBet", href: "/ru/1xbet-royxatdan-otish" },
    ],
  },
];

export function getInfoPage(slug: string): InfoPage | undefined {
  return infoPages.find((p) => p.slug === slug);
}
