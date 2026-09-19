import { EMAIL, LINKS } from "@/data/links";
import styles from "./schedule-section.module.scss";
import Link from "next/link";
import { LinkButtonOutline, LinkButtonPrimary } from "../ui/button";
import ExternalIcon from "@/icons/external";
import PRACTICE_SCHEDULE from "@/data/schedule";
import { getSchedule, loadScheduleSettings } from "@/actions/spreadsheet";
import { Suspense } from "react";
import { ScheduleItem, ScheduleSettings } from "@/lib/types";
import Callout from "../ui/callout";
import { parseDateObj } from "@/lib/utils";

//
// Class Schedule Components
//

interface ScheduleProps {
  items: ScheduleItem[];
}

function ScheduleTemplate({ items }: ScheduleProps) {
  return (
    <div className={styles.scheduleTable}>
      <div className={styles.scheduleTable}>
        {items.map((sched) => (
          <div
            key={sched.Day + sched.From + sched.To}
            className={styles.scheduleBlock}
          >
            <p>{sched.Day}</p>
            <span>
              {sched.From} - {sched.To}
            </span>
            <div>
              <p>{sched.Location}</p>
              {sched.Alternative ? <p>({sched.Alternative})</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DefaultSchedule() {
  return <ScheduleTemplate items={PRACTICE_SCHEDULE} />;
}

async function Schedule() {
  const schedule = (await getSchedule()) as ScheduleItem[];
  const config = await loadScheduleSettings();

  return config.showSchedule ? <ScheduleTemplate items={schedule} /> : null;
}

//
// Registration Components
//

function RegistrationTemplate({ config }: { config: ScheduleSettings }) {
  const today = new Date();

  const classUpcoming = config.classStartDate && today < config.classStartDate;
  const classEnded = config.classEndDate && today > config.classEndDate;
  const classInSession =
    config.classStartDate &&
    config.classEndDate &&
    today > config.classStartDate &&
    today < config.classEndDate;

  const registrationOpen = config.registrationOpen;

  return (
    <>
      {config.announcement ? (
        <Callout type="warning">{config.announcement}</Callout>
      ) : null}
      {!classInSession ? (
        <Callout type={config.registrationOpen ? "success" : "warning"}>
          {/* class ended */}
          {classEnded && (
            <>
              Class has ended!{" "}
              {config.classStartDate &&
              config.classEndDate &&
              today < config.classEndDate
                ? `We will resume on ${parseDateObj(config.classStartDate)}.`
                : "We will resume next semester."}
            </>
          )}
          {/* class upcoming */}
          {classUpcoming && (
            <>
              Registration is open!{" "}
              {config.classStartDate
                ? `Classes start ${parseDateObj(config.classStartDate)}.`
                : "Classes start soon."}
            </>
          )}
        </Callout>
      ) : null}
      <div className={styles.buttonGroup}>
        <LinkButtonPrimary
          className={registrationOpen && !classEnded ? "" : "disabled"}
          href={LINKS.registration}
          target="_blank"
        >
          Register <ExternalIcon />
        </LinkButtonPrimary>
        <LinkButtonOutline
          className={registrationOpen && !classEnded ? "" : "disabled"}
          href={LINKS.registration_online_only}
          target="_blank"
        >
          Register for Online-only* <ExternalIcon />
        </LinkButtonOutline>
      </div>
    </>
  );
}

async function Registration() {
  const config = await loadScheduleSettings();

  return <RegistrationTemplate config={config} />;
}

//
// Main Schedule Section Component
//

export default function ScheduleSection() {
  return (
    <section className={styles.section}>
      <h3>Schedule</h3>
      <div className={styles.schedule}>
        <p>
          In person practice is held at the{" "}
          <Link href={LINKS.location}>Recreational Sports Facility (RSF)</Link>{" "}
          on the UC Berkeley campus. All skill levels are welcome! New members
          can try out their first week of classes for free.
        </p>
        <Suspense fallback={<DefaultSchedule />}>
          <Schedule />
        </Suspense>
        <footer>
          <Registration />
          <p className={styles.note}>
            Online-only members and UC Berkeley students, alumni, and faculty
            can receive discounts. Regular members can attend both in person and
            online classes.
          </p>
          <p className={styles.note}>
            * For online-only members, please email us at{" "}
            <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link> for the Zoom
            information after signing up.
          </p>
        </footer>
      </div>
    </section>
  );
}
