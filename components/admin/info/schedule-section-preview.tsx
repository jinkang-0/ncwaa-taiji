"use client";

import { Info_ScheduleSection } from "@/lib/cms";
import ScheduleSection from "@/components/home/schedule-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function ScheduleSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as Info_ScheduleSection;
  if (!data) return null;
  return <ScheduleSectionPreview {...data} />;
}

export default function ScheduleSectionPreview(data: Info_ScheduleSection) {
  return (
    <ScheduleSection
      title={data.title}
      introText={data.introText}
      subtext={data.subtext}
      showSchedule={data.showSchedule}
      schedule={data.schedule || []}
      showSpecialAnnouncement={data.showSpecialAnnouncement}
      specialAnnouncement={data.specialAnnouncement}
      classStartDate={data.classStartDate}
      classEndDate={data.classEndDate}
      registrationStartDate={data.registrationStartDate}
      forceClassInSession={data.forceClassInSession}
      registrationLink={data.registrationLink}
      registrationLinkSecondary={data.registrationLinkSecondary}
    />
  );
}
