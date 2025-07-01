export type News = {
  id: string;
  title: string;
  date: string; // ISO
  description: string;
  imageUrl: string;
  category: string;
};

const mockNews: News[] = [
  {
    id: "science-day",
    title: "В нашей школе прошёл День Науки",
    date: "2025-06-05",
    description:
      "Ученики представили собственные проекты — от роботов до экологических стартапов. Жюри высоко оценило креативность и научный подход.",
    imageUrl: "/science_day.png",
    category: "События",
  },
  {
    id: "theatre",
    title: "Школьный театр поставил спектакль по Чехову",
    date: "2025-05-28",
    description:
      "Постановка «Вишнёвого сада» прошла с аншлагом! Ученики 10–11 классов удивили зрелой игрой и атмосферной сценографией.",
    imageUrl: "/theatre.png",
    category: "Творчество",
  },
  {
    id: "coding-camp",
    title: "Открыт набор в летний IT-лагерь",
    date: "2025-05-15",
    description:
      "Приглашаем учеников 7–11 классов пройти интенсив по программированию, веб-дизайну и робототехнике. Старт — 1 июля.",
    imageUrl: "/coding_camp.png",
    category: "Объявления",
  },
  {
    id: "math-olymp",
    title: "Поздравляем победителей Олимпиады по математике!",
    date: "2025-06-03",
    description:
      "Наши ребята заняли призовые места на региональном этапе. Особая благодарность учителю Ивановой Н.В. за подготовку!",
    imageUrl: "/math_olymp.png",
    category: "Достижения",
  },
  {
    id: "eco-project-award",
    title: "Эко-проект нашей школы получил грант",
    date: "2025-06-20",
    description:
      "Проект по переработке пластиковых отходов и озеленению пришкольной территории получил поддержку от экологического фонда.",
    imageUrl: "/science_day.png",
    category: "Достижения",
  },
  {
    id: "summer-coding-intro",
    title: "Прошёл вводный день в IT-лагере",
    date: "2025-07-01",
    description:
      "Участники познакомились с наставниками и выбрали треки по интересам: веб, игры или робототехника.",
    imageUrl: "/coding_camp.png",
    category: "События",
  },
  {
    id: "math-club-started",
    title: "Стартовал летний математический кружок",
    date: "2025-06-25",
    description:
      "Для учеников 6–9 классов открылись занятия по олимпиадной математике. Занятия проходят дважды в неделю.",
    imageUrl: "/math_olymp.png",
    category: "Объявления",
  },
  {
    id: "theatre-casting",
    title: "Объявлен кастинг в школьный театр",
    date: "2025-06-28",
    description:
      "Все желающие ученики 8–11 классов могут пройти прослушивание на новую постановку. Репетиции начнутся в августе.",
    imageUrl: "/theatre.png",
    category: "Творчество",
  },
  {
    id: "it-camp-robotics-day",
    title: "День робототехники в IT-лагере",
    date: "2025-06-29",
    description:
      "Ученики собрали и запрограммировали своих первых роботов. Лучшие проекты отправятся на школьную выставку.",
    imageUrl: "/coding_camp.png",
    category: "События",
  },
  {
    id: "science-day-repeat",
    title: "День Науки: дополнительная сессия",
    date: "2025-06-18",
    description:
      "Для учеников, не попавших на первую волну, провели повторную презентацию проектов и научных опытов.",
    imageUrl: "/science_day.png",
    category: "События",
  },
  {
    id: "olymp-prep-start",
    title: "Началась подготовка к новой олимпиаде",
    date: "2025-06-30",
    description:
      "Старшие классы начали готовиться к осеннему этапу Всероссийской олимпиады. Работают профильные кружки.",
    imageUrl: "/math_olymp.png",
    category: "Объявления",
  },
];

/**
 * Получает список новостей.
 * Сейчас возвращает мок, можно заменить на fetch.
 */
export async function getNews(): Promise<News[]> {
  // const res = await fetch("https://api.example.com/news");
  // if (!res.ok) throw new Error("Не удалось загрузить новости");
  // return res.json();

  // Пока возвращаем мок:
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 300); // имитация загрузки
  });
}
