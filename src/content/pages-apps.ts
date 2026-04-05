export interface AppPage {
  slug: string;
  brandSlug: string;
  brandName: string;
  platform: "android" | "ios" | "both";
  title: string;
  heading: string;
  version?: string;
  fileSize?: string;
  androidVersion?: string;
  steps: string[];
  features: string[];
  body: string;
  bodyHtmlUz?: string;
  bodyHtmlRu?: string;
  ctaUrl?: string;
  metaTitle: string;
  metaDescription: string;
}

export const appPages: AppPage[] = [
  {
    slug: "pin-up-apk-mobile",
    brandSlug: "pin-up",
    brandName: "Pin-Up Casino",
    platform: "android",
    title: "Pin-Up APK Yuklab Olish",
    heading: "Pin-Up Casino APK — Android Ilovasi Yuklab Olish 2026",
    version: "3.2.1",
    fileSize: "42 MB",
    androidVersion: "Android 5.0+",
    steps: [
      "pin-up.com saytiga kiring",
      "Sahifaning pastiga o'ting va 'Mobil ilova' tugmasini bosing",
      "APK faylini yuklab oling",
      "Qurilma sozlamalarida 'Noma'lum manbalardan o'rnatish'ga ruxsat bering",
      "APK faylni oching va o'rnating",
    ],
    features: [
      "Barcha kazino o'yinlari",
      "Jonli kazino",
      "Depozit va yechib olish",
      "Bonus va aksiyalar",
      "24/7 qo'llab-quvvatlash",
    ],
    body: "Pin-Up Casino Android ilovasi sizga istalgan joyda va istalgan vaqtda sevimli kazino o'yinlaringizni o'ynash imkonini beradi. Ilova rasmiy saytdan bepul yuklab olinadi va barcha Android qurilmalarida ishlaydi.",
    metaTitle: "Pin-Up APK Yuklab Olish 2026 | Android Ilovasi",
    metaDescription: "Pin-Up Casino APK faylini yuklab oling. Android ilovasi o'rnatish bo'yicha to'liq qo'llanma. Bepul, rasmiy versiya.",
  },
  {
    slug: "megapari-app",
    brandSlug: "megapari",
    brandName: "MegaPari Casino",
    platform: "both",
    title: "MegaPari App Yuklab Olish",
    heading: "MegaPari Mobil Ilovasi — iOS va Android 2026",
    version: "2.8.0",
    fileSize: "38 MB",
    androidVersion: "Android 6.0+",
    steps: [
      "megapari.com rasmiy saytiga kiring",
      "Mobil ilova bo'limiga o'ting",
      "Qurilmangiz uchun versiyani tanlang (iOS/Android)",
      "Faylni yuklab oling va o'rnating",
      "Hisobingizga kiring yoki ro'yxatdan o'ting",
    ],
    features: [
      "1000+ slot o'yinlari",
      "Jonli kazino",
      "Sport stavkalari",
      "Kriptovalyuta to'lovlari",
      "Tez depozit va yechib olish",
    ],
    body: "MegaPari mobil ilovasi iOS va Android platformalari uchun mavjud. Ilova barcha asosiy funksiyalarni o'z ichiga oladi: kazino o'yinlari, sport stavkalari va kriptovalyuta to'lovlari.",
    metaTitle: "MegaPari App Yuklab Olish 2026 | iOS va Android",
    metaDescription: "MegaPari mobil ilovasini yuklab oling. iOS va Android versiyalari. Sport stavkalari va kazino bitta ilovada.",
  },
  {
    slug: "1xbet-app-mobil",
    brandSlug: "1xbet",
    brandName: "1xBet",
    platform: "both",
    title: "1xBet Mobil Ilova",
    heading: "1xBet App Yuklab Olish — Android va iOS 2026",
    version: "5.1.2",
    fileSize: "56 MB",
    androidVersion: "Android 5.0+",
    steps: [
      "1xbet.com rasmiy saytiga kiring",
      "'Mobil ilovalar' bo'limiga o'ting",
      "Qurilmangiz uchun versiyani tanlang",
      "APK (Android) yoki App Store (iOS) orqali o'rnating",
      "Hisobingizga kiring",
    ],
    features: [
      "1000+ sport turi",
      "Jonli stavkalar",
      "Kazino va jonli kazino",
      "Tezkor to'lovlar",
      "Bir nechta valyuta",
    ],
    body: "1xBet mobil ilovasi dunyoning eng ko'p yuklab olinadigan stavkalar ilovalaridan biri. Android va iOS uchun mavjud bo'lib, sport stavkalari va kazino o'yinlarini birlashtiради.",
    metaTitle: "1xBet App Yuklab Olish 2026 | Android APK va iOS",
    metaDescription: "1xBet mobil ilovasini yuklab oling. Android APK va iOS versiyalari. Sport stavkalari va kazino bitta ilovada.",
  },
  {
    slug: "winwin-app",
    brandSlug: "win-win",
    brandName: "Win Win Casino",
    platform: "android",
    title: "Win Win App Yuklab Olish",
    heading: "Win Win Casino Android Ilovasi 2026",
    version: "1.5.0",
    fileSize: "28 MB",
    androidVersion: "Android 6.0+",
    steps: [
      "Win Win Casino rasmiy saytiga kiring",
      "Mobil ilova sahifasiga o'ting",
      "APK faylni yuklab oling",
      "Noma'lum manbalardan o'rnatishga ruxsat bering",
      "O'rnating va hisobingizga kiring",
    ],
    features: [
      "UzCard va Humo to'lovlari",
      "O'zbek tilida interfeys",
      "Kazino o'yinlari",
      "Tez depozit",
      "24/7 qo'llab-quvvatlash",
    ],
    body: "Win Win Casino Android ilovasi O'zbekiston foydalanuvchilari uchun maxsus moslashtirilgan. UzCard va Humo kartalar bilan to'lovlar qabul qilinadi.",
    metaTitle: "Win Win App Yuklab Olish 2026 | Android | UzCard",
    metaDescription: "Win Win Casino Android ilovasini yuklab oling. UzCard va Humo to'lovlari. O'zbek tili.",
  },
  {
    slug: "mostbet-app",
    brandSlug: "mostbet",
    brandName: "Mostbet",
    platform: "both",
    title: "Mostbet App Yuklab Olish",
    heading: "Mostbet Mobil Ilovasi — Android va iOS 2026",
    version: "4.3.1",
    fileSize: "45 MB",
    androidVersion: "Android 5.0+",
    steps: [
      "mostbet.com rasmiy saytiga kiring",
      "Mobil ilova bo'limiga o'ting",
      "Qurilmangiz uchun versiyani tanlang",
      "Faylni yuklab oling va o'rnating",
      "Ro'yxatdan o'ting yoki kiring",
    ],
    features: [
      "1000+ sport turi",
      "Jonli stavkalar",
      "1000+ slot o'yini",
      "Jonli kazino",
      "Tezkor to'lovlar",
    ],
    body: "Mostbet mobil ilovasi sport stavkalari va kazino o'yinlarini birlashtiради. Android va iOS qurilmalarida silliq ishlaydi.",
    metaTitle: "Mostbet App Yuklab Olish 2026 | Android va iOS",
    metaDescription: "Mostbet mobil ilovasini yuklab oling. Android va iOS. Sport stavkalari va kazino bitta ilovada.",
  },
  {
    slug: "funpari-app",
    brandSlug: "funpari",
    brandName: "FunPari Casino",
    platform: "both",
    title: "FunPari App Yuklab Olish",
    heading: "FunPari Mobil Ilovasi — iOS va Android 2026",
    version: "2.1.0",
    fileSize: "32 MB",
    androidVersion: "Android 6.0+",
    steps: [
      "FunPari rasmiy saytiga kiring",
      "Mobil ilova bo'limiga o'ting",
      "Qurilmangiz uchun versiyani tanlang",
      "Faylni yuklab oling va o'rnating",
      "Hisobingizga kiring yoki yangi hisob yarating",
    ],
    features: [
      "UzCard va Humo to'lovlari",
      "O'zbek tilida interfeys",
      "1500+ slot o'yini",
      "Jonli kazino",
      "Tez depozit va yechib olish",
    ],
    body: "FunPari mobil ilovasi O'zbekiston o'yinchilari uchun maxsus moslashtirilgan. UzCard va Humo orqali to'lovlar qabul qilinadi, o'zbek tili mavjud.",
    metaTitle: "FunPari App Yuklab Olish 2026 | iOS va Android | UzCard",
    metaDescription: "FunPari mobil ilovasini yuklab oling. UzCard va Humo to'lovlari. O'zbek tili. iOS va Android.",
  },
  {
    slug: "888starz-apk",
    brandSlug: "888starz",
    brandName: "888Starz",
    platform: "android",
    title: "888Starz APK Yuklab Olish",
    heading: "888Starz APK — Android Ilovasi Yuklab Olish 2026",
    version: "3.5.0",
    fileSize: "44 MB",
    androidVersion: "Android 5.0+",
    ctaUrl: "https://888starzuz.bet/apk/",
    steps: [
      "888starzuz.bet rasmiy saytiga kiring",
      "Sahifaning pastiga o'ting va 'Android APK' tugmasini bosing",
      "APK faylini yuklab oling",
      "Qurilma sozlamalarida 'Noma'lum manbalardan o'rnatish'ga ruxsat bering",
      "APK faylni oching va o'rnating",
      "Hisobingizga kiring yoki ro'yxatdan o'ting",
    ],
    features: [
      "3000+ slot o'yinlari",
      "Jonli kazino",
      "Sport stavkalari",
      "Kriptovalyuta to'lovlari",
      "Tez depozit va yechib olish",
      "24/7 qo'llab-quvvatlash",
    ],
    body: "888Starz Android ilovasi sizga istalgan joyda sport stavkalarini qo'yish va kazino o'yinlarini o'ynash imkonini beradi. Rasmiy APK faylni 888starzuz.bet saytidan bepul yuklab oling.",
    bodyHtmlUz: `888Starz Android ilovasi sizga istalgan joyda sport stavkalarini qo'yish va kazino o'yinlarini o'ynash imkonini beradi. Rasmiy APK faylni <a href="https://888starzuz.bet/apk/" rel="nofollow noopener" target="_blank">888starz yuklab oling</a> — bu havola orqali eng so'nggi versiyani oling.`,
    bodyHtmlRu: `Официальное приложение 888Starz для Android доступно для скачивания по ссылке: <a href="https://888starzuz.bet/apk/" rel="nofollow noopener" target="_blank">888starz скачать</a>. Устанавливайте только с официального источника.`,
    metaTitle: "888Starz APK Yuklab Olish 2026 | Android Ilovasi",
    metaDescription: "888Starz Casino Android APK faylini yuklab oling. O'rnatish bo'yicha to'liq qo'llanma. Bepul, rasmiy versiya. Sport stavkalari va kazino bitta ilovada.",
  },
];

export function getAppPage(slug: string): AppPage | undefined {
  return appPages.find((p) => p.slug === slug);
}
