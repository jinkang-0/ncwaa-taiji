"use client";

import styles from "./events-section.module.scss";
import LeavesIcon from "@/icons/leaves";
import EventCard, { EventItem } from "./event-card";
import { useState } from "react";
import { ButtonGhost } from "../ui/button";

export interface EventsSectionProps {
  title: string;
  events: EventItem[];
}

export default function EventsSection({ title, events }: EventsSectionProps) {
  const [expanded, setExpanded] = useState(false);
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
            <>
              <div
                className={`${styles.extras} ${expanded ? styles.expanded : ""}`}
              >
                {events.slice(3).map((ev, idx) => (
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
