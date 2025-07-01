import { getNews } from "@/lib/api/news";
import { NewsItem } from "./NewsItem";

export async function SidebarNews() {
  const news = await getNews();

  return (
    <aside className="border-r h-full overflow-y-auto p-2">
      <h2 className="text-sm font-semibold text-muted-foreground px-3 my-2 uppercase tracking-wide">
        Новости
      </h2>
      <div className="space-y-1">
        {news
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .map((n, i) => (
            <NewsItem key={i} {...n} />
          ))}
      </div>
    </aside>
  );
}
