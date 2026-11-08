import styles from "./schedule-section.module.scss";
import { LinkButtonOutline, LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import Callout from "../ui/callout";
import { parseDateObj } from "@/lib/utils";
import MarkdownParser from "../ui/markdown";
import { Info_ScheduleSection_Schedule } from "@/lib/cms";

export interface ScheduleSectionProps {
  title: string;
  introText: string;
  subtext: string;
  showSchedule: boolean;
  schedule: Info_ScheduleSection_Schedule[];
  showSpecialAnnouncement: boolean;
  specialAnnouncement: string;
  classStartDate?: string;
  classEndDate?: string;
  registrationStartDate?: string;
  forceClassInSession?: boolean;
  registrationLink: string;
  registrationLinkSecondary?: string;
}

function parseDateString(dateStr: string): Date | undefined {
  if (!dateStr) return undefined;
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) return d;
  const dWithTime = new Date(`${dateStr}T00:00`);
  return !isNaN(dWithTime.getTime()) ? dWithTime : undefined;
}

function ScheduleTable({ items }: { items: Info_ScheduleSection_Schedule[] }) {
  return (
    <div className={styles.scheduleTable}>
      {items.map((sched) => (
        <div
          key={sched.day + sched.startTime + sched.endTime}
          className={styles.scheduleBlock}
        >
          <p>{sched.day}</p>
          <span>
            {sched.startTime} - {sched.endTime}
          </span>
          <div>
            <p>{sched.location}</p>
            {sched.locationAlternative ? (
              <p>({sched.locationAlternative})</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ScheduleSection({
  title,
  introText,
  subtext,
  showSchedule,
  schedule,
  showSpecialAnnouncement,
  specialAnnouncement,
  classStartDate,
  classEndDate,
  registrationStartDate,
  forceClassInSession,
  registrationLink,
  registrationLinkSecondary,
}: ScheduleSectionProps) {
  const startDate = classStartDate ? parseDateString(classStartDate) : undefined;
  const endDate = classEndDate ? parseDateString(classEndDate) : undefined;
  const regStartDate = registrationStartDate
    ? parseDateString(registrationStartDate)
    : undefined;

  const today = new Date();

  const classUpcoming = Boolean(startDate && today < startDate);
  const classEnded = Boolean(endDate && today > endDate);
  let classInSession = Boolean(
    startDate && endDate && today >= startDate && today <= endDate
  );
  if (forceClassInSession) {
    classInSession = true;
  }

  // Derive registration open from registrationStartDate when present;
  // otherwise keep enabled whenever class has not ended.
  const registrationOpen = regStartDate ? today >= regStartDate : !classEnded;
  const isRegistrationEnabled = registrationOpen && !classEnded;

  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.schedule}>
        <MarkdownParser>{introText}</MarkdownParser>
        {showSchedule && schedule && schedule.length > 0 ? (
          <ScheduleTable items={schedule} />
        ) : null}
        <footer>
          {showSpecialAnnouncement && specialAnnouncement ? (
            <Callout type="warning">{specialAnnouncement}</Callout>
          ) : null}
          {!classInSession ? (
            <Callout type={registrationOpen ? "success" : "warning"}>
              {classEnded && (
                <>
                  Class has ended!{" "}
                  {startDate && endDate && today < endDate
                    ? `We will resume on ${parseDateObj(startDate)}.`
                    : "We will resume next semester."}
                </>
              )}
              {classUpcoming && (
                <>
                  Registration is open!{" "}
                  {startDate
                    ? `Classes start ${parseDateObj(startDate)}.`
                    : "Classes start soon."}
                </>
              )}
            </Callout>
          ) : null}
          <div className={styles.buttonGroup}>
            <LinkButtonPrimary
              className={isRegistrationEnabled ? "" : "disabled"}
              href={registrationLink}
              target="_blank"
            >
              Register <ExternalIcon />
            </LinkButtonPrimary>
            {registrationLinkSecondary ? (
              <LinkButtonOutline
                className={isRegistrationEnabled ? "" : "disabled"}
                href={registrationLinkSecondary}
                target="_blank"
              >
                Register for Online-only* <ExternalIcon />
              </LinkButtonOutline>
            ) : null}
          </div>
          <div className={styles.note}>
            <MarkdownParser>{subtext}</MarkdownParser>
          </div>
        </footer>
      </div>
    </section>
  );
}
