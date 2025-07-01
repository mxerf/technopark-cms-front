import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Event } from "@/lib/api/events";
import { EventCard } from "./EventCard";

type Props = {
  title: string;
  events: Event[];
};

export function EventsSliderGroup({ title, events }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold px-1">{title}</h3>
      <ScrollArea scrollHideDelay={0} className="w-full whitespace-nowrap pb-2">
        <div className="flex gap-x-4">
          {events.map((event) => (
            <div key={event.id}>
              <EventCard event={event} className="w-[360px]" />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
