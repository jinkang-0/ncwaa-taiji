"use client";

import styles from "./events-section.module.scss";
import LeavesIcon from "@/icons/leaves";
import EventCard, { EventItem } from "./event-card";
import { useMemo, useState } from "react";
import { ButtonGhost } from "../ui/button";
import { compareDate } from "@/lib/utils";

export interface EventsSectionProps {
  title: string;
  events: EventItem[];
}

export default function EventsSection({ title, events }: EventsSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const filteredEvents = useMemo(
    () =>
      events.filter((ev) => {
        const now = new Date();
        const dateStr = ev.endDate || ev.date;
        const timeStr = ev.endTime || ev.startTime || "23:59:59";
        return compareDate(now, dateStr, timeStr);
      }),
    [events],
  );
  const hasOverflow = useMemo(
    () => filteredEvents.length > 3,
    [filteredEvents],
  );

  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      {filteredEvents.length > 0 ? (
        <div className={styles.eventsList}>
          {filteredEvents.slice(0, 3).map((ev, idx) => (
            <EventCard event={ev} key={ev.name + idx} />
          ))}
          {hasOverflow ? (
            <>
              <div
                className={`${styles.extras} ${expanded ? styles.expanded : ""}`}
              >
                {filteredEvents.slice(3).map((ev, idx) => (
                  <EventCard event={ev} key={ev.name + idx} />
                ))}
              </div>
              <ButtonGhost onClick={() => setExpanded((prev) => !prev)}>
                {expanded ? "show less" : "show more"}
              </ButtonGhost>
            </>
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
