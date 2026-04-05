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
    title: "Polityka prywatności",
    lastUpdated: "2026-01-01",
    metaTitle: "Polityka prywatności | Kazino Online O'zbek",
    metaDescription:
      "Polityka prywatności serwisu Kazino Online. Dowiedz się, jakie dane zbieramy, jak je wykorzystujemy i chronimy Twoje informacje osobowe.",
    sections: [
      {
        heading: "Postanowienia ogólne",
        body: "Niniejsza Polityka prywatności opisuje, w jaki sposób serwis kazino-online-ozbek.com (\"Serwis\") zbiera, wykorzystuje i chroni informacje użytkowników. Korzystając z Serwisu, wyrażasz zgodę na warunki niniejszej Polityki. Serwis ma charakter informacyjny i nie świadczy usług hazardowych bezpośrednio.",
      },
      {
        heading: "Zbieranie danych",
        body: "Zbieramy minimalną ilość danych niezbędnych do prawidłowego funkcjonowania Serwisu: adres IP, typ i wersja przeglądarki, system operacyjny, odwiedzane strony oraz czas wizyty. Dane osobowe (imię, adres e-mail) są zbierane wyłącznie w przypadku dobrowolnego kontaktu za pośrednictwem formularza kontaktowego.",
      },
      {
        heading: "Pliki cookie",
        body: "Serwis wykorzystuje techniczne i analityczne pliki cookie w celu poprawy doświadczeń użytkownika oraz analizy ruchu. Techniczne pliki cookie są niezbędne do działania Serwisu i nie mogą zostać wyłączone. Analityczne pliki cookie możesz wyłączyć w ustawieniach przeglądarki. Kontynuując korzystanie z Serwisu, wyrażasz zgodę na stosowanie plików cookie.",
      },
      {
        heading: "Usługi zewnętrzne",
        body: "Serwis korzysta z Google Analytics i podobnych narzędzi analitycznych w celu badania ruchu i ulepszania treści. Usługi te zbierają zanonimizowane statystyki zgodnie z własną polityką prywatności. Ponadto Serwis zawiera linki partnerskie do kasyn i bukmacherów; korzystanie z nich podlega polityce prywatności odpowiednich operatorów.",
      },
      {
        heading: "Ochrona danych",
        body: "Do ochrony przesyłanych danych stosowane jest szyfrowanie TLS/SSL (HTTPS). Nie przekazujemy ani nie sprzedajemy danych osobowych użytkowników osobom trzecim, z wyjątkiem przypadków przewidzianych przez prawo.",
      },
      {
        heading: "Prawa użytkowników",
        body: "Masz prawo żądać dostępu do swoich danych, ich poprawienia lub usunięcia, wysyłając zapytanie za pośrednictwem strony kontaktowej. Rozpatrzymy Twoje zgłoszenie w rozsądnym terminie. Niniejsza Polityka prywatności może być aktualizowana; aktualna wersja jest zawsze dostępna na tej stronie.",
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
