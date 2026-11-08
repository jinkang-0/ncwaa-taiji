"use client";

import { Info_EventsSection } from "@/lib/cms";
import EventsSection from "@/components/home/events-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function EventsSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as Info_EventsSection;
  if (!data) return null;
  return <EventsSectionPreview {...data} />;
}

export default function EventsSectionPreview(data: Info_EventsSection) {
  return (
    <EventsSection
      title={data.title}
      events={data.events || []}
    />
  );
}
