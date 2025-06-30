import { cn } from "@/lib/utils"
import { CalendarDays, PartyPopper, User, Users } from "lucide-react"

type EventItemProps = {
  title: string
  date: string
  type: "birthday" | "vacation" | "meeting" | "corporate"
  className?: string
}

const iconMap = {
  birthday: <PartyPopper className="h-4 w-4 text-pink-500" />,
  vacation: <User className="h-4 w-4 text-blue-500" />,
  meeting: <CalendarDays className="h-4 w-4 text-emerald-500" />,
  corporate: <Users className="h-4 w-4 text-purple-500" />
}

const typeMap: Record<EventItemProps["type"], string> = {
  birthday: "День рождения",
  vacation: "Отпуск",
  meeting: "Собрание",
  corporate: "Корпоратив"
}

export function EventItem({ title, date, type, className }: EventItemProps) {
  return (
    <div className={cn("flex items-start gap-2 px-3 py-2 rounded-md hover:bg-muted cursor-pointer transition", className)}>
      <div className="mt-1">{iconMap[type]}</div>
      <div className="space-y-0.5">
        <p className="text-sm font-medium leading-tight">{title}</p>
        <p className="text-xs text-muted-foreground">{typeMap[type]} • {date}</p>
      </div>
    </div>
  )
}