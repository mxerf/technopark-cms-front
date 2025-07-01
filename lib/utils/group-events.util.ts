import { format, isToday, isTomorrow, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { Event } from "../api/events";

type GroupedEvents = Record<string, Event[]>;

export function groupEventsByDate(events: Event[]): GroupedEvents {
  const result: GroupedEvents = {};

  events.forEach((event) => {
    const date = parseISO(event.date);
    let key: string;

    if (isToday(date)) {
      key = "Сегодня";
    } else if (isTomorrow(date)) {
      key = "Завтра";
    } else {
      key = format(date, "d MMMM yyyy", { locale: ru });
    }

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(event);
  });

  return result;
}
