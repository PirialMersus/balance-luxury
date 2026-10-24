export interface TeacherDetail {
  slug: string;
  fullName: string;
  role: string;
  instagramHandle: string;
  instagramUrl: string;
  photoUrl: string;
  experienceDescription: string;
  teachingPhilosophy: string;
  leadPractices: string[];
}

export const studioTeachersList: TeacherDetail[] = [
  {
    slug: "maria-mironova",
    fullName: "Мария Миронова",
    role: "Основательница Balance & ведущий инструктор горячей йоги",
    instagramHandle: "@m8mironova",
    instagramUrl: "https://www.instagram.com/m8mironova/",
    photoUrl: "/images/teacher-maria.webp",
    experienceDescription: "Практик с многолетним опытом погружения в телесные дисциплины и дыхательные практики. Создала первое в Одессе специализированное пространство горячей йоги как отклик на собственную потребность в бескомпромиссном качестве микроклимата, эстетики и глубины процесса.",
    teachingPhilosophy: "«Горячая йога — это пространство абсолютной искренности. Здесь невозможно сымитировать присутствие. Жарко, влажно, моментами очень непросто — но то состояние тишины и обновления, которое наступает после финальной шавасаны, стоит каждого сделанного вдоха».",
    leadPractices: [
      "Горячая йога (Hot Yoga 38–40°C)",
      "Индивидуальные сессии отстройки асан и дыхания",
      "Корректная адаптация нагрузки для новичков"
    ]
  }
];

export function findTeacherBySlug(slug: string): TeacherDetail | undefined {
  return studioTeachersList.find((teacherItem) => teacherItem.slug === slug);
}
