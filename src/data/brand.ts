export interface NavigationItem {
  name: string;
  href: string;
}

export interface BrandConfiguration {
  studioName: string;
  studioFullName: string;
  studioTagline: string;
  studioDescription: string;
  city: string;
  country: string;
  locationDetails: string;
  instagramUrl: string;
  instagramHandle: string;
  founderName: string;
  founderRole: string;
  founderInstagramUrl: string;
  founderInstagramHandle: string;
  bookingActionLabel: string;
  primaryNavigationItems: NavigationItem[];
  footerNavigationItems: NavigationItem[];
}

export const brandConfiguration: BrandConfiguration = {
  studioName: "Balance",
  studioFullName: "Balance — Студия горячей йоги в Одессе",
  studioTagline: "Quiet Luxury · Hot Yoga · Одесса",
  studioDescription: "Единственная специализированная студия горячей йоги в Одессе. Спокойное пространство премиального уровня, созданное для глубокой практики при температуре 38–40°C.",
  city: "Одесса",
  country: "Украина",
  locationDetails: "Точный адрес и ориентиры студии высылаются в Instagram Direct при подтверждении визита.",
  instagramUrl: "https://www.instagram.com/yoga_balance_odessa/",
  instagramHandle: "@yoga_balance_odessa",
  founderName: "Мария Миронова",
  founderRole: "Основательница студии и ведущий инструктор",
  founderInstagramUrl: "https://www.instagram.com/m8mironova/",
  founderInstagramHandle: "@m8mironova",
  bookingActionLabel: "Записаться на практику",
  primaryNavigationItems: [
    { name: "О студии", href: "/studio" },
    { name: "Направления", href: "/practices" },
    { name: "Расписание", href: "/schedule" },
    { name: "Цены", href: "/pricing" },
    { name: "Преподаватели", href: "/teachers" },
    { name: "Журнал", href: "/journal" },
    { name: "Контакты", href: "/contacts" }
  ],
  footerNavigationItems: [
    { name: "О студии", href: "/studio" },
    { name: "Практики", href: "/practices" },
    { name: "Расписание", href: "/schedule" },
    { name: "Стоимость", href: "/pricing" },
    { name: "Команда", href: "/teachers" },
    { name: "Журнал", href: "/journal" },
    { name: "Контакты", href: "/contacts" },
    { name: "Политика конфиденциальности", href: "/privacy" }
  ]
};
