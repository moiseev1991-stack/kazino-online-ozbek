export interface FaqItem {
  question: string;
  answer: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  body: string;
}

export interface Brand {
  slug: string;
  name: string;
  url: string;
  logo: string;
  rating: number;
  bonus: string;
  bonusCode?: string;
  established?: number;
  licenseInfo?: string;
  pros: string[];
  cons: string[];
  keyFacts: KeyFact[];
  sections: ContentSection[];
  faq: FaqItem[];
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
}

export const brands: Brand[] = [
  {
    slug: "22bet",
    name: "22Bet Casino",
    url: "/go/22bet",
    logo: "/logos/22bet.jpg",
    rating: 9.2,
    bonus: "100% up to $300 + 50 FS",
    established: 2017,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Katta o'yin tanlovi — 1000+ o'yinlar",
      "Tez to'lovlar (24 soat ichida)",
      "Mobil qulay interfeys",
      "Ko'plab to'lov usullari",
    ],
    cons: [
      "Qo'llab-quvvatlash 24/7 emas",
      "Bonus shartlari biroz murakkab",
    ],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $300 + 50 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto, UzCard" },
      { label: "Valyuta", value: "USD, EUR, UZS" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus va aksiyalar",
        body: "22Bet yangi o'yinchilarga ajoyib xush kelibsiz bonusi taklif etadi: birinchi depozitga 100% bonus va 50 ta bepul aylanishlar. Bonus olish uchun minimal depozit $10 ni tashkil etadi.",
      },
      {
        id: "games",
        heading: "O'yin katalogi",
        body: "22Bet kazinosi 1000+ slot, jonli diler o'yinlari, video poker va stol o'yinlarini taklif etadi. Yetakchi provayderlar: NetEnt, Microgaming, Pragmatic Play, Evolution Gaming.",
      },
      {
        id: "payments",
        heading: "To'lov usullari",
        body: "22Bet Visa, Mastercard, kriptovalyutalar va mahalliy to'lov tizimlari orqali pul kiritish va chiqarishni qo'llab-quvvatlaydi. Minimal depozit $1.",
      },
    ],
    faq: [
      {
        question: "22Bet O'zbekistonda qonuniymi?",
        answer: "22Bet xalqaro Curaçao litsenziyasi asosida ishlaydi. Xalqaro o'yinchilar platformadan foydalanishlari mumkin.",
      },
      {
        question: "22Bet da minimal depozit qancha?",
        answer: "22Bet da minimal depozit atigi $1 (yoki ekvivalenti). Bu sohada eng past minimal depozitlardan biri.",
      },
    ],
    metaTitle: "22Bet Casino Sharhi 2026 | Bonus $300 + 50 FS",
    metaDescription: "22Bet kazinosi to'liq sharhi: bonus shartlari, o'yin katalogi, to'lov usullari. O'zbekiston uchun eng yaxshi onlayn kazino.",
    tags: ["slots", "sports-betting", "live-casino", "crypto"],
  },
  {
    slug: "pin-up",
    name: "Pin-Up Casino",
    url: "/go/pin-up",
    logo: "/logos/pin-up.png",
    rating: 8.9,
    bonus: "120% up to $500 + 250 FS",
    established: 2016,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Katta xush kelibsiz bonusi (250 FS)",
      "Chiroyli va qulay dizayn",
      "Ko'plab to'lov usullari",
      "Kuchli mobil versiya",
    ],
    cons: [
      "Ayrim mamlakatlarda cheklangan",
      "KYC jarayoni biroz uzoq",
    ],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "120% up to $500 + 250 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto, E-wallet" },
      { label: "Valyuta", value: "USD, EUR, RUB, UZS" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Xush kelibsiz bonusi",
        body: "Pin-Up yangi a'zolarga 120% bonus va 250 ta bepul aylanishlar taklif etadi. Birinchi depozitga 120% bonus qo'shiladi, bepul aylanishlar esa mashhur slotlarda beriladi.",
      },
      {
        id: "games",
        heading: "O'yin tanlovi",
        body: "Pin-Up 5000+ slot va stol o'yinlarini taqdim etadi. Pragmatic Play, NetEnt, Play'n GO kabi yetakchi provayderlarning o'yinlari mavjud.",
      },
      {
        id: "mobile",
        heading: "Mobil versiya",
        body: "Pin-Up iOS va Android uchun maxsus ilovaga ega. Ilova orqali barcha o'yinlarga kirish, depozit qilish va yechib olish mumkin.",
      },
    ],
    faq: [
      {
        question: "Pin-Up Casino ishonchli kazinomi?",
        answer: "Ha, Pin-Up Casino Curaçao litsenziyasi asosida ishlaydi va 2016 yildan beri faoliyat yuritmoqda.",
      },
      {
        question: "Pin-Up da to'lovlar qanchalik tez?",
        answer: "Elektron hamyonlar va kriptovalyuta orqali to'lovlar 1-24 soat ichida amalga oshiriladi.",
      },
    ],
    metaTitle: "Pin-Up Casino Sharhi 2026 | Bonus 250 FS",
    metaDescription: "Pin-Up Casino to'liq sharhi: 250 FS bonus, 5000+ o'yin, tez to'lovlar. O'zbekiston o'yinchilari uchun batafsil tahlil.",
    tags: ["slots", "live-casino", "mobile"],
  },
  {
    slug: "mostbet",
    name: "Mostbet Casino",
    url: "/go/mostbet",
    logo: "/logos/mostbet.webp",
    rating: 9.0,
    bonus: "125% up to $300 + 250 FS",
    established: 2009,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Katta sport stavkalari bo'limi",
      "Tez ro'yxatdan o'tish",
      "Ko'p valyutali qo'llab-quvvatlash",
    ],
    cons: ["Ba'zi o'yinlarda cheklashlar mavjud", "Bonus wagering talablari yuqori"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "125% up to $300 + 250 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto, UzCard" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus va aksiyalar",
        body: "Mostbet yangi o'yinchilarga 125% bonus va 250 bepul aylanish taklif etadi. Sport stavkalari uchun ham alohida bonuslar mavjud.",
      },
      {
        id: "games",
        heading: "O'yin katalogi",
        body: "Mostbet 1000+ slot, jonli kazino va virtual sport o'yinlarini taqdim etadi. Pragmatic Play, Evolution Gaming kabi yetakchi provayderlar bilan hamkorlik.",
      },
    ],
    faq: [
      {
        question: "Mostbet qanday litsenziyaga ega?",
        answer: "Mostbet Curaçao litsenziyasi asosida 2009 yildan faoliyat yuritadi.",
      },
    ],
    metaTitle: "Mostbet Casino Sharhi 2026 | Bonus 250 FS",
    metaDescription: "Mostbet kazinosi to'liq sharhi: 250 FS bonus, sport stavkalari, tez to'lovlar. O'zbekiston uchun tavsiya.",
    tags: ["slots", "sports-betting", "live-casino"],
  },
  {
    slug: "melbet",
    name: "Melbet Casino",
    url: "/go/melbet",
    logo: "/logos/melbet.png",
    rating: 8.8,
    bonus: "100% up to $100 + 30 FS",
    established: 2012,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Keng sport stavkalari bozori",
      "Tez to'lovlar",
      "24/7 qo'llab-quvvatlash",
    ],
    cons: ["Kazino bo'limi kichikroq", "Yuqori wagering talablari"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $100 + 30 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Xush kelibsiz bonusi",
        body: "Melbet yangi a'zolarga birinchi depozitga 100% bonus taklif etadi. Bepul aylanishlar mashhur slotlarda beriladi.",
      },
      {
        id: "sports",
        heading: "Sport stavkalari",
        body: "Melbet 1000+ sport tadbiriga stavka qo'yish imkonini beradi. Jonli stavkalar va keng koeffitsiyentlar mavjud.",
      },
    ],
    faq: [
      {
        question: "Melbet da pul yechib olish qancha vaqt oladi?",
        answer: "Elektron hamyonlar orqali 15 daqiqadan 24 soatgacha, bank kartalari orqali 1-5 ish kuni.",
      },
    ],
    metaTitle: "Melbet Casino Sharhi 2026 | Bonus + 30 FS",
    metaDescription: "Melbet kazinosi to'liq sharhi: bonus, sport stavkalari, to'lov usullari. O'zbekiston uchun tavsiya.",
    tags: ["slots", "sports-betting"],
  },
  {
    slug: "1xbet",
    name: "1xBet Casino",
    url: "/go/1xbet",
    logo: "/logos/1xbet.png",
    rating: 8.7,
    bonus: "100% up to $100",
    established: 2007,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Juda katta sport stavkalari bozori",
      "Ko'plab aksiyalar va promo kodlar",
      "Ko'p tilli qo'llab-quvvatlash",
    ],
    cons: ["Murakkab interfeys", "Katta bonus wagering talablari"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $100" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "100+ usul" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "1xBet yangi foydalanuvchilarga 100% bonus taklif etadi. Shuningdek, muntazam aksiyalar va cashback taklif etiladi.",
      },
      {
        id: "sports",
        heading: "Sport stavkalari",
        body: "1xBet dunyodagi eng katta sport stavkalari platformalaridan biri. 1000+ sport turi va jonli stavkalar mavjud.",
      },
    ],
    faq: [
      {
        question: "1xBet ga qanday ro'yxatdan o'tish mumkin?",
        answer: "Saytga kiring, 'Ro'yxatdan o'tish' tugmasini bosing, ma'lumotlarni to'ldiring va hisobni tasdiqlang.",
      },
    ],
    metaTitle: "1xBet Casino Sharhi 2026 | Katta Sport Stavkalari",
    metaDescription: "1xBet to'liq sharhi: sport stavkalari, kazino o'yinlari, bonus taklifi. O'zbekiston uchun batafsil tahlil.",
    tags: ["sports-betting", "slots", "live-casino"],
  },
  {
    slug: "1win",
    name: "1Win Casino",
    url: "/go/1win",
    logo: "/logos/1win.jpg",
    rating: 8.6,
    bonus: "500% up to $1000",
    established: 2016,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Juda katta xush kelibsiz bonusi",
      "Qulay mobil ilova",
      "Tez ro'yxatdan o'tish",
    ],
    cons: ["Nisbatan yangi platforma", "Cheklangan jonli kazino"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "500% up to $1000" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Katta xush kelibsiz bonusi",
        body: "1Win 500% bonus taklif etadi — bu sohada eng katta bonuslardan biri. Dastlabki 4 ta depozitga bonus qo'shiladi.",
      },
    ],
    faq: [
      {
        question: "1Win bonus qanday ishlaydi?",
        answer: "Ro'yxatdan o'tib, 4 ta depozit qiling. Har biriga bonus qo'shiladi — jami 500% gacha.",
      },
    ],
    metaTitle: "1Win Casino Sharhi 2026 | Bonus 500% up to $1000",
    metaDescription: "1Win kazinosi to'liq sharhi: 500% bonus, kazino o'yinlari, to'lov usullari. O'zbekiston tavsiyasi.",
    tags: ["slots", "sports-betting", "live-casino"],
  },
  {
    slug: "vavada",
    name: "Vavada Casino",
    url: "/go/vavada",
    logo: "/logos/vavada.png",
    rating: 8.7,
    bonus: "100 FS ro'yxatdan o'tishda",
    established: 2017,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Depozitsiz 100 FS bonusi",
      "Katta slot katalogi",
      "Tez ro'yxatdan o'tish",
    ],
    cons: ["Sport stavkalari yo'q", "Cheklangan to'lov usullari"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100 FS (depozitsiz)" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Depozitsiz bonus",
        body: "Vavada ro'yxatdan o'tgan har bir yangi o'yinchiga 100 bepul aylanish taqdim etadi — depozit talab qilinmaydi.",
      },
      {
        id: "games",
        heading: "O'yin katalogi",
        body: "Vavada faqat slotlarga ixtisoslashgan. 3000+ slot o'yini mavjud bo'lib, ularning aksariyati mashhur provayderlardan.",
      },
    ],
    faq: [
      {
        question: "Vavada da depozitsiz bonus qanday olish mumkin?",
        answer: "Ro'yxatdan o'ting, emailni tasdiqlang — 100 FS avtomatik beriladi.",
      },
    ],
    metaTitle: "Vavada Casino Sharhi 2026 | 100 FS Depozitsiz",
    metaDescription: "Vavada kazinosi to'liq sharhi: 100 FS depozitsiz bonus, 3000+ slot. O'zbekiston uchun tavsiya.",
    tags: ["slots", "no-deposit"],
  },
  {
    slug: "spinbetter",
    name: "SpinBetter Casino",
    url: "/go/spinbetter",
    logo: "/logos/spinbetter.jpg",
    rating: 8.5,
    bonus: "100% up to $200 + 200 FS",
    established: 2021,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Katta FS bonusi",
      "Zamonaviy interfeys",
      "Sport stavkalari mavjud",
    ],
    cons: ["Nisbatan yangi platforma", "Cheklangan aksiyalar"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $200 + 200 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$20" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "SpinBetter 100% bonus va 200 FS taklif etadi. Bepul aylanishlar mashhur Pragmatic Play slotlarida beriladi.",
      },
    ],
    faq: [
      {
        question: "SpinBetter ishonchli kazinomi?",
        answer: "Ha, SpinBetter Curaçao litsenziyasi bilan ishlaydi va zamonaviy xavfsizlik texnologiyalaridan foydalanadi.",
      },
    ],
    metaTitle: "SpinBetter Casino Sharhi 2026 | 200 FS Bonus",
    metaDescription: "SpinBetter kazinosi to'liq sharhi: 200 FS bonus, sport stavkalari, to'lov usullari.",
    tags: ["slots", "sports-betting"],
  },
  {
    slug: "megapari",
    name: "MegaPari Casino",
    url: "/go/megapari",
    logo: "/logos/megapari.png",
    rating: 8.4,
    bonus: "100% up to $150 + 150 FS",
    established: 2019,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Kriptovalyuta to'lovlari",
      "Ko'plab sport stavkalari",
      "Keng o'yin katalogi",
    ],
    cons: ["Interfeys biroz murakkab", "Sekin qo'llab-quvvatlash"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $150 + 150 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Crypto, Visa, Mastercard" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Xush kelibsiz bonusi",
        body: "MegaPari birinchi depozitga 100% bonus va 150 FS taklif etadi. Kriptovalyuta bilan depozit qilganlar uchun qo'shimcha bonus mavjud.",
      },
    ],
    faq: [
      {
        question: "MegaPari da kriptovalyuta bilan o'ynash mumkinmi?",
        answer: "Ha, MegaPari Bitcoin, Ethereum, USDT va boshqa 100+ kriptovalyutani qabul qiladi.",
      },
    ],
    metaTitle: "MegaPari Casino Sharhi 2026 | Crypto Casino",
    metaDescription: "MegaPari kazinosi to'liq sharhi: 150 FS bonus, kriptovalyuta to'lovlari, sport stavkalari.",
    tags: ["slots", "crypto", "sports-betting"],
  },
  {
    slug: "betwinner",
    name: "BetWinner Casino",
    url: "/go/betwinner",
    logo: "/logos/betwinner.webp",
    rating: 8.5,
    bonus: "100% up to $140",
    established: 2018,
    licenseInfo: "Curaçao eGaming",
    pros: [
      "Keng sport stavkalari",
      "Ko'plab to'lov usullari",
      "Tez ro'yxatdan o'tish",
    ],
    cons: ["Murakkab bonus shartlari", "Sekin qo'llab-quvvatlash"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $140" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto, UzCard" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "BetWinner birinchi depozitga 100% bonus taklif etadi. Shuningdek, muntazam cashback va reload bonuslar mavjud.",
      },
    ],
    faq: [
      {
        question: "BetWinner da minimal depozit qancha?",
        answer: "BetWinner da minimal depozit atigi $1 ni tashkil etadi.",
      },
    ],
    metaTitle: "BetWinner Casino Sharhi 2026 | Bonus $140",
    metaDescription: "BetWinner kazinosi to'liq sharhi: 100% bonus, sport stavkalari, to'lov usullari.",
    tags: ["slots", "sports-betting"],
  },
  {
    slug: "parimatch",
    name: "Parimatch Casino",
    url: "/go/parimatch",
    logo: "/logos/parimatch.png",
    rating: 8.3,
    bonus: "100% up to $100 + 60 FS",
    established: 1994,
    licenseInfo: "Malta (MGA)",
    pros: [
      "Eski va ishonchli platforma",
      "Keng sport stavkalari",
      "MGA litsenziyasi",
    ],
    cons: ["Kam kazino o'yinlari", "Yuqori wagering"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $100 + 60 FS" },
      { label: "Litsenziya", value: "MGA (Malta)" },
      { label: "Minimal depozit", value: "$5" },
      { label: "To'lov usullari", value: "Visa, Mastercard, E-wallet" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Xush kelibsiz bonusi",
        body: "Parimatch birinchi depozitga 100% bonus va 60 FS taklif etadi. MGA litsenziyasi bilan ishonchli platforma.",
      },
    ],
    faq: [
      {
        question: "Parimatch qachon tashkil etilgan?",
        answer: "Parimatch 1994 yilda tashkil etilgan va dunyoning eng eski bukmekerlik kompaniyalaridan biri hisoblanadi.",
      },
    ],
    metaTitle: "Parimatch Casino Sharhi 2026 | MGA Litsenziyali",
    metaDescription: "Parimatch kazinosi to'liq sharhi: MGA litsenziyasi, 60 FS bonus, sport stavkalari.",
    tags: ["sports-betting", "slots"],
  },
  {
    slug: "20bet",
    name: "20Bet Casino",
    url: "/go/20bet",
    logo: "/logos/20bet.jpg",
    rating: 8.2,
    bonus: "100% up to $120 + 120 FS",
    established: 2020,
    licenseInfo: "Curaçao eGaming",
    pros: ["Qulay interfeys", "Ko'plab slot o'yinlari", "Tez to'lovlar"],
    cons: ["Yangi platforma", "Sport stavkalari cheklangan"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $120 + 120 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$20" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "20Bet birinchi depozitga 100% bonus va 120 FS taklif etadi. Qulay interfeys va keng o'yin katalogi.",
      },
    ],
    faq: [
      {
        question: "20Bet da qanday o'yinlar mavjud?",
        answer: "20Bet 2000+ slot, jonli kazino o'yinlari va stol o'yinlarini taqdim etadi.",
      },
    ],
    metaTitle: "20Bet Casino Sharhi 2026 | 120 FS Bonus",
    metaDescription: "20Bet kazinosi to'liq sharhi: 120 FS bonus, 2000+ o'yin, tez to'lovlar.",
    tags: ["slots", "live-casino"],
  },
  {
    slug: "vave",
    name: "Vave Casino",
    url: "/go/vave",
    logo: "/logos/vave.png",
    rating: 8.1,
    bonus: "100% up to $400 + 125 FS",
    established: 2020,
    licenseInfo: "Curaçao eGaming",
    pros: ["Kriptovalyutaga ixtisoslashgan", "Tez to'lovlar", "Qulay dizayn"],
    cons: ["Fiat to'lovlar cheklangan", "Yangi platforma"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $400 + 125 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "0.001 BTC" },
      { label: "To'lov usullari", value: "Bitcoin, Ethereum, USDT va boshqalar" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Crypto Casino Bonusi",
        body: "Vave kriptovalyuta o'yinchilariga ixtisoslashgan. Birinchi depozitga 100% bonus va 125 FS taklif etadi.",
      },
    ],
    faq: [
      {
        question: "Vave faqat kriptovalyuta qabul qiladimi?",
        answer: "Vave asosan kriptovalyutalarga yo'naltirilgan, lekin ba'zi fiat to'lov usullari ham qo'llab-quvvatlanadi.",
      },
    ],
    metaTitle: "Vave Casino Sharhi 2026 | Crypto Casino",
    metaDescription: "Vave kazinosi to'liq sharhi: crypto casino, 125 FS bonus, tez to'lovlar.",
    tags: ["crypto", "slots"],
  },
  {
    slug: "marathonbet",
    name: "Marathonbet Casino",
    url: "/go/marathonbet",
    logo: "/logos/marathonbet.png",
    rating: 8.0,
    bonus: "50% up to $50",
    established: 1997,
    licenseInfo: "UK Gambling Commission",
    pros: ["Eski va ishonchli bukmeker", "UK litsenziyasi", "Jonli stavkalar"],
    cons: ["Kichik kazino bo'limi", "Kam slot o'yinlari"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "50% up to $50" },
      { label: "Litsenziya", value: "UKGC" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, E-wallet" },
    ],
    sections: [
      {
        id: "sports",
        heading: "Sport stavkalari",
        body: "Marathonbet 1997 yildan beri sport stavkalari sohasida faoliyat yuritadi. 40+ sport turi va jonli stavkalar mavjud.",
      },
    ],
    faq: [
      {
        question: "Marathonbet qanday litsenziyaga ega?",
        answer: "Marathonbet UK Gambling Commission litsenziyasiga ega — bu sohada eng nufuzli litsenziyalardan biri.",
      },
    ],
    metaTitle: "Marathonbet Casino Sharhi 2026 | UKGC Litsenziyali",
    metaDescription: "Marathonbet to'liq sharhi: UKGC litsenziyasi, sport stavkalari, kazino o'yinlari.",
    tags: ["sports-betting"],
  },
  {
    slug: "win-win",
    name: "Win Win Casino",
    url: "/go/win-win",
    logo: "/logos/win-win.webp",
    rating: 8.0,
    bonus: "100% up to $200 + 50 FS",
    established: 2018,
    licenseInfo: "Curaçao eGaming",
    pros: ["O'zbekistonga yo'naltirilgan", "UzCard qabul qilinadi", "O'zbek tili"],
    cons: ["Kichik o'yin katalogi", "Cheklangan aksiyalar"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $200 + 50 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$5" },
      { label: "To'lov usullari", value: "UzCard, Humo, Visa" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Mahalliy o'yinchilar uchun",
        body: "Win Win Casino O'zbekiston bozori uchun maxsus moslashtirilgan. UzCard va Humo orqali to'lovlar qabul qilinadi.",
      },
    ],
    faq: [
      {
        question: "Win Win da UzCard bilan to'lov qilish mumkinmi?",
        answer: "Ha, Win Win Casino UzCard va Humo kartalarini qabul qiladi.",
      },
    ],
    metaTitle: "Win Win Casino Sharhi 2026 | UzCard Qabul Qilinadi",
    metaDescription: "Win Win kazinosi to'liq sharhi: UzCard to'lovlar, 50 FS bonus, o'zbek tili.",
    tags: ["slots", "uzcard"],
  },
  {
    slug: "888starz",
    name: "888Starz Casino",
    url: "/go/888starz",
    logo: "/logos/888starz.png",
    rating: 8.3,
    bonus: "100% up to $140 + 30 FS",
    established: 2018,
    licenseInfo: "Curaçao eGaming",
    pros: ["Katta o'yin katalogi", "Crypto qabul qilinadi", "Sport stavkalari"],
    cons: ["Murakkab interfeys", "Sekin qo'llab-quvvatlash"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $140 + 30 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$1" },
      { label: "To'lov usullari", value: "Visa, Crypto, E-wallet" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "888Starz birinchi depozitga 100% bonus va 30 FS taklif etadi. Kriptovalyuta bilan depozit uchun qo'shimcha imtiyozlar.",
      },
    ],
    faq: [
      {
        question: "888Starz da qanday o'yinlar bor?",
        answer: "888Starz 3000+ slot, jonli kazino va sport stavkalari bo'limlarini o'z ichiga oladi.",
      },
    ],
    metaTitle: "888Starz Casino Sharhi 2026 | Bonus $140",
    metaDescription: "888Starz kazinosi to'liq sharhi: 30 FS bonus, 3000+ o'yin, sport stavkalari.",
    tags: ["slots", "crypto", "sports-betting"],
  },
  {
    slug: "pokerdom",
    name: "Pokerdom Casino",
    url: "/go/pokerdom",
    logo: "/logos/pokerdom.jpg",
    rating: 8.1,
    bonus: "100% up to $600 + 200 FS",
    established: 2014,
    licenseInfo: "Curaçao eGaming",
    pros: ["Katta poker bo'limi", "Katta xush kelibsiz bonusi", "O'zbek tili mavjud"],
    cons: ["Asosan poker uchun", "Ba'zi o'yinlarda cheklash"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $600 + 200 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$5" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "poker",
        heading: "Poker bo'limi",
        body: "Pokerdom poker o'yinlariga ixtisoslashgan. Texas Hold'em, Omaha va boshqa poker turlari mavjud.",
      },
      {
        id: "bonus",
        heading: "Katta bonus taklifi",
        body: "Birinchi depozitga 100% bonus va 200 FS. Bu sohada eng katta bonuslardan biri.",
      },
    ],
    faq: [
      {
        question: "Pokerdom da faqat poker o'ynasiladimi?",
        answer: "Yo'q, Pokerdom slot o'yinlari, jonli kazino va sport stavkalarini ham taqdim etadi.",
      },
    ],
    metaTitle: "Pokerdom Casino Sharhi 2026 | 200 FS Bonus",
    metaDescription: "Pokerdom kazinosi to'liq sharhi: poker, 200 FS bonus, katta o'yin katalogi.",
    tags: ["poker", "slots"],
  },
  {
    slug: "pinco",
    name: "Pinco Casino",
    url: "/go/pinco",
    logo: "/logos/pinco.png",
    rating: 8.0,
    bonus: "100% up to $500 + 200 FS",
    established: 2019,
    licenseInfo: "Curaçao eGaming",
    pros: ["Chiroyli dizayn", "Katta FS bonusi", "Tez to'lovlar"],
    cons: ["Yangi platforma", "Cheklangan aksiyalar"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $500 + 200 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Xush kelibsiz bonusi",
        body: "Pinco 100% bonus va 200 FS taklif etadi. Chiroyli interfeys va qulay navigatsiya.",
      },
    ],
    faq: [
      {
        question: "Pinco Casino ishonchli kazinomi?",
        answer: "Pinco Casino Curaçao litsenziyasi asosida ishlaydi va zamonaviy SSL shifrlashdan foydalanadi.",
      },
    ],
    metaTitle: "Pinco Casino Sharhi 2026 | 200 FS Bonus",
    metaDescription: "Pinco kazinosi to'liq sharhi: 200 FS bonus, chiroyli dizayn, tez to'lovlar.",
    tags: ["slots", "live-casino"],
  },
  {
    slug: "paripulse",
    name: "PariPulse Casino",
    url: "/go/paripulse",
    logo: "/logos/paripulse.jpg",
    rating: 7.9,
    bonus: "150% up to $300",
    established: 2021,
    licenseInfo: "Curaçao eGaming",
    pros: ["Yuqori bonus foizi", "Zamonaviy platforma", "Crypto qabul qilinadi"],
    cons: ["Yangi platforma", "Kichik o'yin katalogi"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "150% up to $300" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$20" },
      { label: "To'lov usullari", value: "Crypto, Visa, Mastercard" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "150% Bonus taklifi",
        body: "PariPulse 150% xush kelibsiz bonusi bilan ajralib turadi. Bu sohada yuqori bonus foizlaridan biri.",
      },
    ],
    faq: [
      {
        question: "PariPulse qancha vaqtdan beri ishlaydi?",
        answer: "PariPulse 2021 yilda tashkil etilgan — nisbatan yangi, lekin Curaçao litsenziyali platforma.",
      },
    ],
    metaTitle: "PariPulse Casino Sharhi 2026 | 150% Bonus",
    metaDescription: "PariPulse kazinosi to'liq sharhi: 150% bonus, crypto to'lovlari, zamonaviy platforma.",
    tags: ["slots", "crypto"],
  },
  {
    slug: "coldbet",
    name: "ColdBet Casino",
    url: "/go/coldbet",
    logo: "/logos/coldbet.jpg",
    rating: 7.8,
    bonus: "100% up to $200 + 100 FS",
    established: 2020,
    licenseInfo: "Curaçao eGaming",
    pros: ["Qulay interfeys", "100 FS bonusi", "Tez to'lovlar"],
    cons: ["Kichik platforma", "Cheklangan sport stavkalari"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $200 + 100 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "ColdBet birinchi depozitga 100% bonus va 100 FS taklif etadi. Qulay interfeys va tez ro'yxatdan o'tish.",
      },
    ],
    faq: [
      {
        question: "ColdBet da pul yechib olish qancha vaqt oladi?",
        answer: "ColdBet da pul yechib olish odatda 24-48 soat ichida amalga oshiriladi.",
      },
    ],
    metaTitle: "ColdBet Casino Sharhi 2026 | 100 FS Bonus",
    metaDescription: "ColdBet kazinosi to'liq sharhi: 100 FS bonus, qulay interfeys, tez to'lovlar.",
    tags: ["slots"],
  },
  {
    slug: "dbbet",
    name: "DBBet Casino",
    url: "/go/dbbet",
    logo: "/logos/dbbet.png",
    rating: 7.7,
    bonus: "100% up to $150",
    established: 2020,
    licenseInfo: "Curaçao eGaming",
    pros: ["Sport stavkalari", "Crypto qabul qilinadi", "Tez ro'yxatdan o'tish"],
    cons: ["Kichik kazino bo'limi", "Kam aksiyalar"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $150" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Crypto, Visa" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "DBBet birinchi depozitga 100% bonus taklif etadi. Sport stavkalari va kazino o'yinlari birlashtirilgan platforma.",
      },
    ],
    faq: [
      {
        question: "DBBet da qanday sport turlariga stavka qo'yish mumkin?",
        answer: "DBBet futbol, tennis, basketbol, xokkey va boshqa 20+ sport turiga stavka qo'yish imkonini beradi.",
      },
    ],
    metaTitle: "DBBet Casino Sharhi 2026 | Sport + Kazino",
    metaDescription: "DBBet kazinosi to'liq sharhi: sport stavkalari, 100% bonus, crypto to'lovlari.",
    tags: ["sports-betting", "crypto"],
  },
  {
    slug: "cactus-casino",
    name: "Cactus Casino",
    url: "/go/cactus-casino",
    logo: "/logos/cactus-casino.png",
    rating: 7.8,
    bonus: "200% up to $500",
    established: 2021,
    licenseInfo: "Curaçao eGaming",
    pros: ["Yuqori bonus foizi", "Chiroyli dizayn", "Katta slot katalogi"],
    cons: ["Yangi platforma", "Cheklangan to'lov usullari"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "200% up to $500" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$20" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "200% Mega Bonus",
        body: "Cactus Casino 200% xush kelibsiz bonusi taklif etadi — bu sohada eng yuqori bonus foizlaridan biri.",
      },
    ],
    faq: [
      {
        question: "Cactus Casino da 200% bonus qanday ishlaydi?",
        answer: "Birinchi depozit miqdorining 200%i bonus sifatida qo'shiladi. Masalan, $100 depozit qilsangiz, $200 bonus olasiz.",
      },
    ],
    metaTitle: "Cactus Casino Sharhi 2026 | 200% Bonus",
    metaDescription: "Cactus kazinosi to'liq sharhi: 200% bonus, katta slot katalogi, chiroyli dizayn.",
    tags: ["slots"],
  },
  {
    slug: "olymp-casino",
    name: "Olymp Casino",
    url: "/go/olymp-casino",
    logo: "/logos/olymp-casino.jpg",
    rating: 8.0,
    bonus: "100% up to $300 + 100 FS",
    established: 2018,
    licenseInfo: "Curaçao eGaming",
    pros: ["O'zbek tiliga yo'naltirilgan", "UzCard qabul qilinadi", "Tez to'lovlar"],
    cons: ["Cheklangan xalqaro qamrov", "Kichik o'yin katalogi"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $300 + 100 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$5" },
      { label: "To'lov usullari", value: "UzCard, Humo, Visa, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "Olymp Casino O'zbekiston bozori uchun maxsus moslashtirilgan. 100% bonus va 100 FS taklif etadi.",
      },
    ],
    faq: [
      {
        question: "Olymp Casino O'zbekistonda ishlaydi?",
        answer: "Ha, Olymp Casino O'zbekiston o'yinchilariga xizmat ko'rsatadi va mahalliy to'lov usullarini qabul qiladi.",
      },
    ],
    metaTitle: "Olymp Casino Sharhi 2026 | 100 FS + UzCard",
    metaDescription: "Olymp kazinosi to'liq sharhi: UzCard to'lovlar, 100 FS bonus, O'zbekiston uchun.",
    tags: ["slots", "uzcard"],
  },
  {
    slug: "yohohobet",
    name: "YoHohoBet Casino",
    url: "/go/yohohobet",
    logo: "/logos/yohohobet.jpg",
    rating: 8.0,
    bonus: "100% up to $200 + 100 FS",
    established: 2020,
    licenseInfo: "Curaçao eGaming",
    pros: ["Qulay interfeys", "Tez ro'yxatdan o'tish", "Katta slot katalogi"],
    cons: ["Yangi platforma", "Cheklangan aksiyalar"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $200 + 100 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
      { label: "Mobil ilova", value: "Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "YoHohoBet birinchi depozitga 100% bonus va 100 FS taklif etadi. Qulay interfeys va keng o'yin katalogi yangi o'yinchilarni jalb etadi.",
      },
      {
        id: "games",
        heading: "O'yin katalogi",
        body: "YoHohoBet 2000+ slot va jonli kazino o'yinlarini taqdim etadi. Mashhur Pragmatic Play, NetEnt va boshqa provayderlar o'yinlari mavjud.",
      },
    ],
    faq: [
      {
        question: "YoHohoBet ishonchli kazinomi?",
        answer: "Ha, YoHohoBet Curaçao litsenziyasi asosida ishlaydi va zamonaviy SSL shifrlashdan foydalanadi.",
      },
    ],
    metaTitle: "YoHohoBet Casino Sharhi 2026 | 100 FS Bonus",
    metaDescription: "YoHohoBet kazinosi to'liq sharhi: 100 FS bonus, katta o'yin katalogi, tez to'lovlar. O'zbekiston tavsiyasi.",
    tags: ["slots", "live-casino"],
  },
  {
    slug: "funpari",
    name: "FunPari Casino",
    url: "/go/funpari",
    logo: "/logos/funpari.png",
    rating: 8.1,
    bonus: "100% up to $250 + 150 FS",
    established: 2019,
    licenseInfo: "Curaçao eGaming",
    pros: ["O'zbekistonga yo'naltirilgan", "UzCard qabul qilinadi", "Qulay mobil ilova"],
    cons: ["Cheklangan xalqaro qamrov", "Kichik bonus miqdori"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $250 + 150 FS" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$5" },
      { label: "To'lov usullari", value: "UzCard, Humo, Visa, Crypto" },
      { label: "Mobil ilova", value: "iOS va Android" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Mahalliy o'yinchilar uchun bonus",
        body: "FunPari O'zbekiston bozori uchun maxsus moslashtirilgan. 100% bonus va 150 FS birinchi depozitga beriladi.",
      },
      {
        id: "payments",
        heading: "To'lov usullari",
        body: "FunPari UzCard va Humo kartalarini qabul qiladi. Bu O'zbekiston o'yinchilari uchun juda qulay.",
      },
    ],
    faq: [
      {
        question: "FunPari da UzCard bilan to'lov qilish mumkinmi?",
        answer: "Ha, FunPari UzCard va Humo kartalarini qabul qiladi — O'zbekistonlik o'yinchilar uchun maxsus.",
      },
    ],
    metaTitle: "FunPari Casino Sharhi 2026 | UzCard | 150 FS Bonus",
    metaDescription: "FunPari kazinosi to'liq sharhi: UzCard to'lovlar, 150 FS bonus, O'zbekiston o'yinchilari uchun.",
    tags: ["slots", "uzcard", "mobile"],
  },
  {
    slug: "betjam",
    name: "BetJam Casino",
    url: "/go/betjam",
    logo: "/logos/betjam.png",
    rating: 7.9,
    bonus: "100% up to $300",
    established: 2020,
    licenseInfo: "Curaçao eGaming",
    pros: ["Qulay interfeys", "Sport stavkalari mavjud", "Tez to'lovlar"],
    cons: ["Yangi platforma", "Cheklangan aksiyalar"],
    keyFacts: [
      { label: "Xush kelibsiz bonusi", value: "100% up to $300" },
      { label: "Litsenziya", value: "Curaçao eGaming" },
      { label: "Minimal depozit", value: "$10" },
      { label: "To'lov usullari", value: "Visa, Mastercard, Crypto" },
    ],
    sections: [
      {
        id: "bonus",
        heading: "Bonus taklifi",
        body: "BetJam birinchi depozitga 100% bonus taklif etadi. Sport stavkalari va kazino o'yinlari bitta platformada.",
      },
    ],
    faq: [
      {
        question: "BetJam da qanday o'yinlar mavjud?",
        answer: "BetJam 1500+ slot, jonli kazino o'yinlari va sport stavkalarini taqdim etadi.",
      },
    ],
    metaTitle: "BetJam Casino Sharhi 2026 | 100% Bonus",
    metaDescription: "BetJam kazinosi to'liq sharhi: 100% bonus, sport stavkalari, kazino o'yinlari.",
    tags: ["slots", "sports-betting"],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
