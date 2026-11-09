"use client";

import { ScheduleSection as ScheduleSectionType } from "@/lib/cms";
import ScheduleSection from "@/components/home/schedule-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import { PreviewTemplateProps } from "@/lib/types";
import { useStyleLinker } from "@/hooks";
import BaseTemplatePreview from "../base-template-preview";
import MainPreview from "../main-preview";
import HomeContentPreview from "./home-content-preview";

export function ScheduleSectionPreviewTemplate(
  props: PreviewTemplateComponentProps,
) {
  const data = props.entry.get("data")?.toJS() as ScheduleSectionType;
  if (!data) return null;
  return <ScheduleSectionPreview data={data} {...props} />;
}

export default function ScheduleSectionPreview({
  data,
  ...props
}: PreviewTemplateProps<ScheduleSectionType>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview centered>
        <HomeContentPreview>
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
        </HomeContentPreview>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
