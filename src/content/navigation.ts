export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

// ─── UZ dropdown nav ─────────────────────────────────────────────────────────

export const navGroupsUz: NavGroup[] = [
  {
    label: "Kazino",
    dropdown: [
      { label: "Barcha kazinolar", href: "/casinos" },
      { label: "Mostbet", href: "/casino/mostbet" },
      { label: "Melbet", href: "/casino/melbet" },
      { label: "Pin-Up", href: "/casino/pin-up" },
      { label: "MegaPari", href: "/casino/megapari" },
      { label: "1xBet", href: "/casino/1xbet" },
      { label: "1Win", href: "/casino/1win" },
      { label: "Vavada", href: "/casino/vavada" },
      { label: "22Bet", href: "/casino/22bet" },
      { label: "20Bet", href: "/casino/20bet" },
      { label: "SpinBetter", href: "/casino/spinbetter" },
      { label: "BetWinner", href: "/casino/betwinner" },
    ],
  },
  {
    label: "Kazino Kirish",
    dropdown: [
      { label: "1xBet Kirish", href: "/1xbet-kirish-login" },
      { label: "1xBet Ro'yxatdan O'tish", href: "/1xbet-royxatdan-otish" },
    ],
  },
  {
    label: "Kazino Apk",
    dropdown: [
      { label: "Barcha ilovalar", href: "/apps" },
      { label: "1xBet App", href: "/app/1xbet-app-mobil" },
      { label: "888Starz Apk", href: "/app/pin-up-apk-mobile" },
      { label: "MegaPari App", href: "/app/megapari-app" },
      { label: "Mostbet App", href: "/app/mostbet-app" },
      { label: "Pin-Up Apk", href: "/app/pin-up-apk-mobile" },
      { label: "FunPari App", href: "/app/funpari-app" },
    ],
  },
  {
    label: "Onlayn Kazino O'yinlari",
    dropdown: [
      { label: "Kazino O'yinlari", href: "/kazino-oyunlari" },
      { label: "Ruletka", href: "/ruletka" },
    ],
  },
];

// ─── RU dropdown nav ─────────────────────────────────────────────────────────

export const navGroupsRu: NavGroup[] = [
  {
    label: "Казино",
    dropdown: [
      { label: "Все казино", href: "/ru/casinos" },
      { label: "Mostbet", href: "/ru/casino/mostbet" },
      { label: "Melbet", href: "/ru/casino/melbet" },
      { label: "Pin-Up", href: "/ru/casino/pin-up" },
      { label: "MegaPari", href: "/ru/casino/megapari" },
      { label: "1xBet", href: "/ru/casino/1xbet" },
      { label: "1Win", href: "/ru/casino/1win" },
      { label: "Vavada", href: "/ru/casino/vavada" },
      { label: "22Bet", href: "/ru/casino/22bet" },
      { label: "20Bet", href: "/ru/casino/20bet" },
      { label: "SpinBetter", href: "/ru/casino/spinbetter" },
      { label: "BetWinner", href: "/ru/casino/betwinner" },
    ],
  },
  {
    label: "Казино Вход",
    dropdown: [
      { label: "Вход 1xBet", href: "/ru/1xbet-kirish-login" },
      { label: "Регистрация 1xBet", href: "/ru/1xbet-royxatdan-otish" },
    ],
  },
  {
    label: "Казино Apk",
    dropdown: [
      { label: "Все приложения", href: "/ru/apps" },
      { label: "1xBet App", href: "/ru/app/1xbet-app-mobil" },
      { label: "MegaPari App", href: "/ru/app/megapari-app" },
      { label: "Mostbet App", href: "/ru/app/mostbet-app" },
      { label: "Pin-Up Apk", href: "/ru/app/pin-up-apk-mobile" },
      { label: "FunPari App", href: "/ru/app/funpari-app" },
    ],
  },
  {
    label: "Онлайн казино игры",
    dropdown: [
      { label: "Игры казино", href: "/ru/igry-kazino" },
      { label: "Рулетка онлайн", href: "/ru/ruletka" },
    ],
  },
];

// ─── Footer links ─────────────────────────────────────────────────────────────

export const footerLinksUz: NavLink[] = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Barcha Kazinolar", href: "/casinos" },
  { label: "Kazino O'yinlari", href: "/kazino-oyunlari" },
  { label: "Ruletka", href: "/ruletka" },
  { label: "Mobil Ilovalar", href: "/apps" },
  { label: "Aloqa", href: "/contact" },
  { label: "Maxfiylik siyosati", href: "/privacy-policy-2" },
  { label: "Foydalanish shartlari", href: "/terms-and-conditions" },
];

export const footerLinksRu: NavLink[] = [
  { label: "Главная", href: "/ru" },
  { label: "Все казино", href: "/ru/casinos" },
  { label: "Игры казино", href: "/ru/igry-kazino" },
  { label: "Рулетка", href: "/ru/ruletka" },
  { label: "Мобильные приложения", href: "/ru/apps" },
  { label: "Контакты", href: "/ru/contact" },
  { label: "Политика конфиденциальности", href: "/privacy-policy-2" },
  { label: "Условия использования", href: "/terms-and-conditions" },
];

export const footerInfoLinksUz: NavLink[] = [
  { label: "1xBet Kirish", href: "/1xbet-kirish-login" },
  { label: "1xBet Ro'yxatdan O'tish", href: "/1xbet-royxatdan-otish" },
  { label: "Pin-Up APK", href: "/app/pin-up-apk-mobile" },
  { label: "1xBet Ilova", href: "/app/1xbet-app-mobil" },
  { label: "MegaPari Ilova", href: "/app/megapari-app" },
  { label: "Mostbet Ilova", href: "/app/mostbet-app" },
];

export const footerInfoLinksRu: NavLink[] = [
  { label: "Вход 1xBet", href: "/ru/1xbet-kirish-login" },
  { label: "Регистрация 1xBet", href: "/ru/1xbet-royxatdan-otish" },
  { label: "Pin-Up APK", href: "/ru/app/pin-up-apk-mobile" },
  { label: "1xBet Приложение", href: "/ru/app/1xbet-app-mobil" },
  { label: "MegaPari Приложение", href: "/ru/app/megapari-app" },
  { label: "Mostbet Приложение", href: "/ru/app/mostbet-app" },
];
