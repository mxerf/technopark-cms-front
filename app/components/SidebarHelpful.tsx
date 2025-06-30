import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Phone,
  ScrollText,
  Users
} from "lucide-react"
import { HelpfulLinkCard } from "./HelpfulLinkCard"

export function SidebarHelpful() {
  const links = [
    {
      title: "Бланки заявлений",
      description: "Скачать стандартные формы документов",
      href: "/docs/forms",
      icon: FileText
    },
    {
      title: "Телефонный справочник",
      description: "Контакты всех отделов и сотрудников",
      href: "/contacts",
      icon: Phone
    },
    {
      title: "Сотрудники",
      description: "Список всех работников школы",
      href: "/staff",
      icon: Users
    },
    {
      title: "График отпусков",
      description: "Актуальное расписание отпусков",
      href: "/vacations",
      icon: CalendarCheck
    },
    {
      title: "Регламенты и инструкции",
      description: "Внутренние нормативные документы",
      href: "/docs/regulations",
      icon: ScrollText
    },
    {
      title: "Задачи и поручения",
      description: "Контроль за текущими задачами",
      href: "/tasks",
      icon: ClipboardList
    }
  ]

  return (
    <aside className="border-l h-full overflow-y-auto p-2 space-y-2">
      <h2 className="text-sm font-semibold text-muted-foreground px-2 mb-2 uppercase tracking-wide">
        Полезная информация
      </h2>
      <div className="space-y-2">
        {links.map((link, i) => (
          <HelpfulLinkCard key={i} {...link} />
        ))}
      </div>
    </aside>
  )
}