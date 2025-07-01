import { format, isToday, isTomorrow, isYesterday, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export const formatNewsDate = (isoDate: string): string => {
  const date = parseISO(isoDate);

  if (isToday(date)) return "Сегодня";
  if (isTomorrow(date)) return "Завтра";
  if (isYesterday(date)) return "Вчера";

  return format(date, "d MMMM yyyy", { locale: ru });
};
