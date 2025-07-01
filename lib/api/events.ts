export type Event = {
  id: string;
  title: string;
  date: string; // ISO
  type: string;
  description: string;
  img: string;
};

const mockEvents: Event[] = [
  {
    id: "coding-camp-start",
    title: "Старт летнего IT-лагеря",
    date: "2025-07-01",
    type: "event" as const,
    description: "Первый день интенсива по программированию и робототехнике.",
    img: "/coding_camp.png",
  },
  {
    id: "science-project-pitch",
    title: "Презентации летних научных проектов",
    date: "2025-07-01",
    type: "presentation" as const,
    description:
      "Ученики покажут свои проекты после лагеря — от ИИ до экотехнологий.",
    img: "/science_day.png",
  },
  {
    id: "math-olymp-award",
    title: "Награждение призёров олимпиады",
    date: "2025-07-01",
    type: "ceremony" as const,
    description:
      "Церемония в актовом зале, вручаем грамоты и подарки победителям.",
    img: "/math_olymp.png",
  },
  {
    id: "chekhov-replay",
    title: "Повтор спектакля «Вишнёвый сад»",
    date: "2025-07-02",
    type: "theatre" as const,
    description: "По просьбам зрителей школьный театр снова ставит Чехова.",
    img: "/theatre.png",
  },
  {
    id: "coding-camp-final",
    title: "Финальный хакатон IT-лагеря",
    date: "2025-07-02",
    type: "hackathon" as const,
    description:
      "Командная защита проектов. Приглашены преподаватели и родители.",
    img: "/coding_camp.png",
  },
  {
    id: "school-open-day",
    title: "День открытых дверей",
    date: "2025-07-04",
    type: "open-day" as const,
    description:
      "Школа открыта для новых учеников и родителей. Экскурсия и выставки.",
    img: "/science_day.png",
  },
  {
    id: "august-parent-meeting",
    title: "Родительское собрание перед учебным годом",
    date: "2025-07-04",
    type: "meeting" as const,
    description: "Поговорим о планах, расписании и обновлениях платформы.",
    img: "/theatre.png",
  },
  {
    id: "new-semester-start",
    title: "Начало нового учебного года",
    date: "2025-07-05",
    type: "milestone" as const,
    description: "Торжественная линейка и старт занятий.",
    img: "/science_day.png",
  },
];

/**
 * Получает список новостей.
 * Сейчас возвращает мок, можно заменить на fetch.
 */
export async function getEvents(): Promise<Event[]> {
  // const res = await fetch("https://api.example.com/news");
  // if (!res.ok) throw new Error("Не удалось загрузить новости");
  // return res.json();

  // Пока возвращаем мок:
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockEvents), 300); // имитация загрузки
  });
}
