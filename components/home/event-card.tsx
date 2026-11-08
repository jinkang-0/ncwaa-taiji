import MapIcon from "@/icons/map";
import { getDate, getMonth } from "@/lib/utils";
import styles from "./events-section.module.scss";
import AttachmentIcon from "@/icons/attachment";
import ExternalIcon from "@/icons/external";
import { LinkButtonGhost } from "../ui/button";

export interface EventAttachmentItem {
  name: string;
  url: string;
  type?: "Website" | "File" | "Image" | "General";
}

export interface EventItem {
  name: string;
  date: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location: string;
  locationUrl?: string;
  attachments?: EventAttachmentItem[];
}

interface EventCardProps {
  event: EventItem;
}

function EventDate({ event }: EventCardProps) {
  const fromMonth = getMonth(event.date);
  const fromDate = getDate(event.date);
  const toMonth = event.endDate ? getMonth(event.endDate) : "";
  const toDate = event.endDate ? getDate(event.endDate) : "";

  if (!event.endDate)
    return (
      <div className={styles.cardHeader}>
        <p>{fromMonth}</p>
        <span>{fromDate}</span>
      </div>
    );

  if (fromMonth === toMonth)
    return (
      <div className={styles.cardHeader}>
        <p>{fromMonth}</p>
        <span>{fromDate}</span>
        <div className={styles.dateRangeDivider} />
        <span>{toDate}</span>
      </div>
    );

  return (
    <div className={styles.cardHeader}>
      <p>{fromMonth}</p>
      <span>{fromDate}</span>
      <div className={styles.dateRangeDivider} />
      <p>{toMonth}</p>
      <span>{toDate}</span>
    </div>
  );
}

export default function EventCard({ event }: EventCardProps) {
  const timeText =
    event.startTime && event.endTime
      ? event.startTime === event.endTime
        ? event.startTime
        : `${event.startTime} - ${event.endTime}`
      : event.startTime || event.endTime || "";

  return (
    <div className={styles.card}>
      <EventDate event={event} />
      <div className={styles.cardBody}>
        <div className={styles.cardDetails}>
          <b>{event.name}</b>
          {timeText ? <span>{timeText}</span> : null}
          <div className={styles.locationBox}>
            <div>
              <MapIcon />
            </div>
            {event.locationUrl ? (
              <a
                href={event.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.location}
              </a>
            ) : (
              <p>{event.location}</p>
            )}
          </div>
        </div>
        <div className={styles.cardAttachments}>
          {event.attachments &&
            event.attachments.length > 0 &&
            event.attachments.map((att) => (
              <LinkButtonGhost
                key={att.url}
                href={att.url}
                target="_blank"
                title={att.name || "Attachment"}
                aria-label={att.name || "Attachment"}
              >
                {att.type === "Website" ? <ExternalIcon /> : <AttachmentIcon />}
              </LinkButtonGhost>
            ))}
        </div>
      </div>
    </div>
  );
}
