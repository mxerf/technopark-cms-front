import { getEvents } from "@/lib/api/events";
import { groupEventsByDate } from "@/lib/utils/group-events.util";
import { EventsSliderGroup } from "./EventsSliderGroup";

export async function EventsSection() {
  const events = await getEvents();
  const grouped = groupEventsByDate(events);

  return (
    <section className="space-y-6">
      {Object.entries(grouped).map(([label, events]) => (
        <EventsSliderGroup key={label} title={label} events={events} />
      ))}
    </section>
  );
}
