import { getEvents } from "@/actions/spreadsheet";
import EventListClient from "./event-list-client";
import { Event } from "@/lib/types";
import styles from "./events-section.module.scss";
import LeavesIcon from "@/icons/leaves";
import { compareDate, getTime } from "@/lib/utils";
import EventCard from "./event-card";

export const EventListPlaceholder = () => {
  return (
    <div className={styles.eventsList}>
      <div className={styles.placeholder}></div>
      <div className={styles.placeholder}></div>
      <div className={styles.placeholder}></div>
    </div>
  );
};

export default async function EventList() {
  const eventsData = await getEvents();
  const today = new Date();
  const events: Event[] = eventsData
    .map((ev) => ({
      fromDate: ev.Date,
      toDate: ev["To Date"],
      from: ev.From,
      to: ev.To,
      location: ev.Location,
      name: ev.Name,
      attachments: ev.Attachments ? ev.Attachments.split("\n") : []
    }))
    .filter((ev) => compareDate(today, ev.toDate || ev.fromDate, ev.to))
    .sort((e1, e2) => getTime(e1.fromDate) - getTime(e2.fromDate))
    .slice(0, 15);
  const hasOverflow = events.length > 3;

  return events.length > 0 ? (
    <div className={styles.eventsList}>
      {events.slice(0, 3).map((ev, idx) => (
        <EventCard event={ev} key={ev.name + idx} />
      ))}
      {hasOverflow ? (
        <EventListClient>
          {events.slice(3).map((ev, idx) => (
            <EventCard event={ev} key={ev.name + idx} />
          ))}
        </EventListClient>
      ) : null}
    </div>
  ) : (
    <div className={styles.emptyAnnouncer}>
      <LeavesIcon />
      <p>No upcoming events right now, check back later!</p>
    </div>
  );
}
