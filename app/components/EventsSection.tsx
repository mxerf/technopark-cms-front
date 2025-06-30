import { EventItem } from "./EventItem"

export function SidebarEvents() {
  const events = [
    {
      title: "День рождения Марии",
      date: "12 июня",
      type: "birthday" as const
    },
    {
      title: "Отпуск Иванова И.С.",
      date: "13–24 июня",
      type: "vacation" as const
    },
    {
      title: "Общее собрание",
      date: "14 июня в 10:00",
      type: "meeting" as const
    },
    {
      title: "Летний корпоратив",
      date: "30 июня",
      type: "corporate" as const
    },
    {
      title: "День рождения Петра",
      date: "18 июня",
      type: "birthday" as const
    },
    {
      title: "Отпуск Смирновой А.В.",
      date: "20 июня — 5 июля",
      type: "vacation" as const
    },
    {
      title: "Планёрка с завучем",
      date: "21 июня в 09:00",
      type: "meeting" as const
    },
    {
      title: "День рождения Дмитрия",
      date: "23 июня",
      type: "birthday" as const
    },
    {
      title: "Выезд на природу с классом",
      date: "25 июня",
      type: "corporate" as const
    },
    {
      title: "Финансовое собрание",
      date: "26 июня в 15:00",
      type: "meeting" as const
    },
    {
      title: "Отпуск Кузнецова Н.Н.",
      date: "1–15 июля",
      type: "vacation" as const
    },
    {
      title: "День рождения Ирины",
      date: "2 июля",
      type: "birthday" as const
    },
    {
      title: "Финансовое собрание",
      date: "26 июня в 15:00",
      type: "meeting" as const
    },
    {
      title: "Отпуск Кузнецова Н.Н.",
      date: "1–15 июля",
      type: "vacation" as const
    },
    {
      title: "День рождения Ирины",
      date: "2 июля",
      type: "birthday" as const
    }
  ]

  return (
    <aside className="border-r h-full overflow-y-auto p-2">
      <h2 className="text-sm font-semibold text-muted-foreground px-3 mb-2 uppercase tracking-wide">
        Ближайшие события
      </h2>
      <div className="space-y-1">
        {events.map((event, i) => (
          <EventItem key={i} {...event} />
        ))}
      </div>
    </aside>
  )
}