import { formatNewsDate } from "@/lib/utils/format-date.util";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";

type NewsItemProps = {
  id: string;
  title: string;
  date: string;
  className?: string;
};

// const iconMap = {
//   birthday: <PartyPopper className="h-4 w-4 text-pink-500" />,
//   vacation: <User className="h-4 w-4 text-blue-500" />,
//   meeting: <CalendarDays className="h-4 w-4 text-emerald-500" />,
//   corporate: <Users className="h-4 w-4 text-purple-500" />,
// };

// const typeMap: Record<NewsItemProps["type"], string> = {
//   birthday: "День рождения",
//   vacation: "Отпуск",
//   meeting: "Собрание",
//   corporate: "Корпоратив",
// };

export function NewsItem({ id, title, date, className }: NewsItemProps) {
  const formattedDate = formatNewsDate(date);

  return (
    <Link
      href={`/news/${id}`}
      className={cn(
        "block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition",
        className
      )}
    >
      <p className="text-sm font-medium leading-tight mb-1">{title}</p>
      <p className="text-xs text-muted-foreground">{formattedDate}</p>
    </Link>
  );
}
