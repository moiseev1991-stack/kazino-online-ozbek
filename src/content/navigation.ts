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
      { label: "Mostbet", href: "/mostbet" },
      { label: "Melbet", href: "/melbet" },
      { label: "Pin-Up", href: "/pin-up" },
      { label: "MegaPari", href: "/megapari" },
      { label: "1xBet", href: "/1xbet" },
      { label: "1Win", href: "/1win" },
      { label: "Vavada", href: "/vavada" },
      { label: "22Bet", href: "/22bet" },
      { label: "20Bet", href: "/20bet" },
      { label: "SpinBetter", href: "/spinbetter" },
      { label: "BetWinner", href: "/betwinner" },
      { label: "888Starz", href: "/888starz" },
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
      { label: "888Starz Apk", href: "/888starz-apk" },
      { label: "1xBet App", href: "/1xbet-app-mobil" },
      { label: "MegaPari App", href: "/megapari-app" },
      { label: "Mostbet App", href: "/mostbet-app" },
      { label: "Pin-Up Apk", href: "/pin-up-apk-mobile" },
      { label: "FunPari App", href: "/funpari-app" },
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
      { label: "Mostbet", href: "/ru/mostbet" },
      { label: "Melbet", href: "/ru/melbet" },
      { label: "Pin-Up", href: "/ru/pin-up" },
      { label: "MegaPari", href: "/ru/megapari" },
      { label: "1xBet", href: "/ru/1xbet" },
      { label: "1Win", href: "/ru/1win" },
      { label: "Vavada", href: "/ru/vavada" },
      { label: "22Bet", href: "/ru/22bet" },
      { label: "20Bet", href: "/ru/20bet" },
      { label: "SpinBetter", href: "/ru/spinbetter" },
      { label: "BetWinner", href: "/ru/betwinner" },
      { label: "888Starz", href: "/ru/888starz" },
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
      { label: "888Starz Apk", href: "/ru/888starz-apk" },
      { label: "1xBet App", href: "/ru/1xbet-app-mobil" },
      { label: "MegaPari App", href: "/ru/megapari-app" },
      { label: "Mostbet App", href: "/ru/mostbet-app" },
      { label: "Pin-Up Apk", href: "/ru/pin-up-apk-mobile" },
      { label: "FunPari App", href: "/ru/funpari-app" },
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
  { label: "Kazino O'yinlari", href: "/kazino-oyunlari" },
  { label: "Ruletka", href: "/ruletka" },
  { label: "Mobil Ilovalar", href: "/apps" },
  { label: "Aloqa", href: "/contact" },
  { label: "Maxfiylik siyosati", href: "/privacy-policy" },
  { label: "Foydalanish shartlari", href: "/terms-and-conditions" },
];

export const footerLinksRu: NavLink[] = [
  { label: "Главная", href: "/ru" },
  { label: "Игры казино", href: "/ru/igry-kazino" },
  { label: "Рулетка", href: "/ru/ruletka" },
  { label: "Мобильные приложения", href: "/ru/apps" },
  { label: "Контакты", href: "/ru/contact" },
  { label: "Политика конфиденциальности", href: "/privacy-policy" },
  { label: "Условия использования", href: "/terms-and-conditions" },
];

export const footerInfoLinksUz: NavLink[] = [
  { label: "1xBet Kirish", href: "/1xbet-kirish-login" },
  { label: "1xBet Ro'yxatdan O'tish", href: "/1xbet-royxatdan-otish" },
  { label: "Pin-Up APK", href: "/pin-up-apk-mobile" },
  { label: "1xBet Ilova", href: "/1xbet-app-mobil" },
  { label: "MegaPari Ilova", href: "/megapari-app" },
  { label: "Mostbet Ilova", href: "/mostbet-app" },
];

export const footerInfoLinksRu: NavLink[] = [
  { label: "Вход 1xBet", href: "/ru/1xbet-kirish-login" },
  { label: "Регистрация 1xBet", href: "/ru/1xbet-royxatdan-otish" },
  { label: "Pin-Up APK", href: "/ru/pin-up-apk-mobile" },
  { label: "1xBet Приложение", href: "/ru/1xbet-app-mobil" },
  { label: "MegaPari Приложение", href: "/ru/megapari-app" },
  { label: "Mostbet Приложение", href: "/ru/mostbet-app" },
];
