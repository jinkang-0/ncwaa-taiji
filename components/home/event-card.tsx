import MapIcon from "@/icons/map";
import { getDate, getMonth } from "@/lib/utils";
import styles from "./events-section.module.scss";
import EventAttachmentItem, {
  EventAttachmentItemType,
} from "./event-attachment-item";

export interface EventItem {
  name: string;
  date: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location: string;
  locationUrl?: string;
  attachments?: EventAttachmentItemType[];
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

function EventTime({ event }: EventCardProps) {
  if (event.startTime && event.endTime) {
    const timeText =
      event.startTime === event.endTime
        ? event.startTime
        : `${event.startTime} - ${event.endTime}`;
    return <span>{timeText}</span>;
  }
  if (event.startTime) {
    return <span>{event.startTime}</span>;
  }
  if (event.endTime) {
    return <span>{event.endTime}</span>;
  }
  return null;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className={styles.card}>
      <EventDate event={event} />
      <div className={styles.cardBody}>
        <div className={styles.cardDetails}>
          <b>{event.name}</b>
          <EventTime event={event} />
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
            event.attachments.map((item) => (
              <EventAttachmentItem key={item.url} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
