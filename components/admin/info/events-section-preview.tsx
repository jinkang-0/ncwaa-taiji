"use client";

import { EventsSection as EventsSectionType } from "@/lib/cms";
import EventsSection from "@/components/home/events-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import { PreviewTemplateProps } from "@/lib/types";
import { useStyleLinker } from "@/hooks";
import BaseTemplatePreview from "../base-template-preview";
import MainPreview from "../main-preview";
import HomeContentPreview from "./home-content-preview";

export function EventsSectionPreviewTemplate(
  props: PreviewTemplateComponentProps,
) {
  const data = props.entry.get("data")?.toJS() as EventsSectionType;
  if (!data) return null;
  return <EventsSectionPreview data={data} {...props} />;
}

export default function EventsSectionPreview({
  data,
  ...props
}: PreviewTemplateProps<EventsSectionType>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview centered>
        <HomeContentPreview>
          <EventsSection title={data.title} events={data.events || []} />
        </HomeContentPreview>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
