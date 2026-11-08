import styles from "./events-section.module.scss";
import LeavesIcon from "@/icons/leaves";
import EventCard, { EventItem } from "./event-card";
import EventListClient from "./event-list-client";

export interface EventsSectionProps {
  title: string;
  events: EventItem[];
}

export default function EventsSection({ title, events }: EventsSectionProps) {
  const hasOverflow = events.length > 3;

  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      {events.length > 0 ? (
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
      )}
    </section>
  );
}
