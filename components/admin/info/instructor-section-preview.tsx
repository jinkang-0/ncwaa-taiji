"use client";

import { InstructorsSection as InstructorsSectionType } from "@/lib/cms";
import InstructorsSection from "@/components/home/instructors-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function InstructorSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as InstructorsSectionType;
  if (!data) return null;
  return <InstructorSectionPreview {...data} />;
}

export default function InstructorSectionPreview(data: InstructorsSectionType) {
  return (
    <InstructorsSection
      title={data.title}
      instructors={data.instructors || []}
    />
  );
}
