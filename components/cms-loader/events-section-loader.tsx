import rawEventsContent from "@/content/page/events.yml";
import { Info_EventsSection, Info_EventsSection_Events } from "@/lib/cms";
import EventsSection from "../home/events-section";

const eventsContent = rawEventsContent as unknown as Info_EventsSection;

export function filterUpcomingEvents(
  events: Info_EventsSection_Events[],
  maxEvents: number,
  now: Date = new Date()
): Info_EventsSection_Events[] {
  return events
    .filter((ev) => {
      const dateStr = ev.endDate || ev.date;
      const timeStr = ev.endTime || ev.startTime || "23:59:59";
      const end = new Date(`${dateStr} ${timeStr}`);
      if (!isNaN(end.getTime())) {
        return end >= now;
      }
      const fallback = new Date(dateStr);
      fallback.setHours(23, 59, 59, 999);
      return !isNaN(fallback.getTime()) ? fallback >= now : true;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, maxEvents);
}

export default function EventsSectionLoader() {
  const upcomingEvents = filterUpcomingEvents(
    eventsContent.events || [],
    eventsContent.maxEvents || 15
  );

  return (
    <EventsSection
      title={eventsContent.title}
      events={upcomingEvents}
    />
  );
}
