import rawEventsContent from "@/content/page/events.yml";
import {
  EventsSection as EventsSectionType,
  EventsSection_Events,
} from "@/lib/cms";
import EventsSection from "../home/events-section";
import { compareDate } from "@/lib/utils";

const eventsContent = rawEventsContent as unknown as EventsSectionType;

function filterUpcomingEvents(
  events: EventsSection_Events[],
  maxEvents: number,
): EventsSection_Events[] {
  const now = new Date();
  return events
    .filter((ev) => {
      const dateStr = ev.endDate || ev.date;
      const timeStr = ev.endTime || ev.startTime || "23:59:59";
      return compareDate(now, dateStr, timeStr);
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, maxEvents);
}

export default function EventsSectionLoader() {
  const upcomingEvents = filterUpcomingEvents(
    eventsContent.events || [],
    eventsContent.maxEvents || 15,
  );

  return <EventsSection title={eventsContent.title} events={upcomingEvents} />;
}
