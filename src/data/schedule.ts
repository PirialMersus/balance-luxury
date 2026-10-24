export interface ScheduleSlot {
  timePeriod: string;
  practiceTitle: string;
  instructorName: string;
  intensityLevel: string;
  classDuration: string;
}

export interface DaySchedule {
  dayOfWeek: string;
  dayShort: string;
  scheduleSlots: ScheduleSlot[];
}

export interface SchedulePolicy {
  overviewNote: string;
  reservationGuidance: string;
  capacityLimitText: string;
  cancellationPolicyText: string;
}

export const studioSchedulePolicy: SchedulePolicy = {
  overviewNote: "Группы камерные — до 10–12 человек в зале, чтобы обеспечить индивидуальное внимание инструктора и идеальный микроклимат 38–40°C.",
  reservationGuidance: "Актуальная сетка занятий на текущую неделю и доступные свободные коврики публикуются в историях официального Instagram-профиля. Запись осуществляется персонально в Direct.",
  capacityLimitText: "Количество мест строго ограничено вместимостью нагретого зала.",
  cancellationPolicyText: "Отмена или перенос бронирования принимаются не позднее чем за 6 часов до начала практики."
};

export const studioWeeklySchedule: DaySchedule[] = [
  {
    dayOfWeek: "Понедельник",
    dayShort: "Пн",
    scheduleSlots: [
      {
        timePeriod: "09:30 — 11:00",
        practiceTitle: "Hot Yoga Morning Flow",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      },
      {
        timePeriod: "19:00 — 20:30",
        practiceTitle: "Hot Yoga Evening Detox",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  },
  {
    dayOfWeek: "Вторник",
    dayShort: "Вт",
    scheduleSlots: [
      {
        timePeriod: "18:30 — 20:00",
        practiceTitle: "Hot Yoga Alignment & Mobility",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  },
  {
    dayOfWeek: "Среда",
    dayShort: "Ср",
    scheduleSlots: [
      {
        timePeriod: "09:30 — 11:00",
        practiceTitle: "Hot Yoga Energy Wakeup",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      },
      {
        timePeriod: "19:00 — 20:30",
        practiceTitle: "Hot Yoga Deep Release",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  },
  {
    dayOfWeek: "Четверг",
    dayShort: "Чт",
    scheduleSlots: [
      {
        timePeriod: "18:30 — 20:00",
        practiceTitle: "Hot Yoga Core & Balance",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  },
  {
    dayOfWeek: "Пятница",
    dayShort: "Пт",
    scheduleSlots: [
      {
        timePeriod: "09:30 — 11:00",
        practiceTitle: "Hot Yoga Dynamic Flow",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      },
      {
        timePeriod: "19:00 — 20:30",
        practiceTitle: "Hot Yoga Silent Recharge",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  },
  {
    dayOfWeek: "Суббота",
    dayShort: "Сб",
    scheduleSlots: [
      {
        timePeriod: "11:00 — 12:30",
        practiceTitle: "Weekend Hot Yoga Intensive",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  },
  {
    dayOfWeek: "Воскресенье",
    dayShort: "Вс",
    scheduleSlots: [
      {
        timePeriod: "11:30 — 13:00",
        practiceTitle: "Hot Yoga Restoration & Breath",
        instructorName: "Мария Миронова",
        intensityLevel: "Все уровни",
        classDuration: "90 минут"
      }
    ]
  }
];
