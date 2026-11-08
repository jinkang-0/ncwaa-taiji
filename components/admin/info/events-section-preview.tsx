"use client";

import { EventsSection as EventsSectionType } from "@/lib/cms";
import EventsSection from "@/components/home/events-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function EventsSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as EventsSectionType;
  if (!data) return null;
  return <EventsSectionPreview {...data} />;
}

export default function EventsSectionPreview(data: EventsSectionType) {
  return <EventsSection title={data.title} events={data.events || []} />;
}
