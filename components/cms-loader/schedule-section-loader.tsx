import rawScheduleContent from "@/content/page/schedule.yml";
import { ScheduleSection as ScheduleSectionType } from "@/lib/cms";
import ScheduleSection from "../home/schedule-section";

const scheduleContent = rawScheduleContent as unknown as ScheduleSectionType;

export default function ScheduleSectionLoader() {
  return (
    <ScheduleSection
      title={scheduleContent.title}
      introText={scheduleContent.introText}
      subtext={scheduleContent.subtext}
      showSchedule={scheduleContent.showSchedule}
      schedule={scheduleContent.schedule}
      showSpecialAnnouncement={scheduleContent.showSpecialAnnouncement}
      specialAnnouncement={scheduleContent.specialAnnouncement}
      classStartDate={scheduleContent.classStartDate}
      classEndDate={scheduleContent.classEndDate}
      registrationStartDate={scheduleContent.registrationStartDate}
      forceClassInSession={scheduleContent.forceClassInSession}
      registrationLink={scheduleContent.registrationLink}
      registrationLinkSecondary={scheduleContent.registrationLinkSecondary}
    />
  );
}
