export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  priceDisplay: string;
  priceNote: string;
  durationOrVisits: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isFeatured?: boolean;
}

export interface PricingPageData {
  sectionTitle: string;
  sectionSubtitle: string;
  guidelinesTitle: string;
  guidelines: string[];
  tiers: PricingTier[];
}

export const studioPricingData: PricingPageData = {
  sectionTitle: "Стоимость и форматы посещения",
  sectionSubtitle: "Прозрачные условия без скрытых доплат. В стоимость каждого класса включены коврик, два чистых полотенца, питьевая вода и душевые принадлежности.",
  guidelinesTitle: "Что важно знать перед визитом",
  guidelines: [
    "Все занятия проходят в микроклимате 38–40°C при влажности 40–50%",
    "Коврики и полотенца предоставляются студией бесплатно",
    "Рекомендуется приходить за 15 минут до начала занятия",
    "Срок действия абонементов активируется с даты первого посещения",
    "Перенос бронирования возможен не позднее чем за 6 часов"
  ],
  tiers: [
    {
      id: "trial-visit",
      name: "Первое занятие",
      badge: "Знакомство",
      priceDisplay: "Специальные условия",
      priceNote: "Уточняйте актуальные условия первого визита в Instagram Direct",
      durationOrVisits: "1 занятие (90 минут)",
      features: [
        "Вводный инструктаж по дыханию в нагретом зале",
        "Предоставление профессионального коврика и полотенца",
        "Индивидуальные рекомендации преподавателя",
        "Питьевая вода и доступ в душевые"
      ],
      ctaLabel: "Записаться на первое занятие",
      ctaHref: "https://www.instagram.com/yoga_balance_odessa/",
      isFeatured: false
    },
    {
      id: "single-visit",
      name: "Разовое посещение",
      priceDisplay: "По запросу в Direct",
      priceNote: "Оплата перед началом практики",
      durationOrVisits: "1 визит в удобное время",
      features: [
        "Участие в любом групповом классе расписания",
        "Коврик и полотенца студии",
        "Качественная косметика и душевые",
        "Без привязки к регулярному графику"
      ],
      ctaLabel: "Выбрать время",
      ctaHref: "https://www.instagram.com/yoga_balance_odessa/",
      isFeatured: false
    },
    {
      id: "pass-eight",
      name: "Абонемент на 8 занятий",
      badge: "Оптимальный выбор",
      priceDisplay: "Уточнить тариф",
      priceNote: "Рекомендуемый ритм: 2 раза в неделю",
      durationOrVisits: "8 занятий / срок 30 дней",
      features: [
        "Закреплённое место в группе при раннем бронировании",
        "Возможность 1 заморозки на срок до 7 дней",
        "Полный сервис студии (коврики, полотенца, вода)",
        "Максимальный терапевтический эффект детоксикации"
      ],
      ctaLabel: "Оформить абонемент",
      ctaHref: "https://www.instagram.com/yoga_balance_odessa/",
      isFeatured: true
    },
    {
      id: "private-session",
      name: "Персональная практика",
      badge: "Индивидуально",
      priceDisplay: "По согласованию",
      priceNote: "Индивидуальный график с Марией Мироновой",
      durationOrVisits: "1 индивидуальная сессия (90 минут)",
      features: [
        "Персональная настройка температуры и влажности зала",
        "Глубокая биомеханическая отстройка асан",
        "Работа с конкретными телесными запросами и осанкой",
        "Конфиденциальность и полное погружение"
      ],
      ctaLabel: "Согласовать время",
      ctaHref: "https://www.instagram.com/yoga_balance_odessa/",
      isFeatured: false
    }
  ]
};
