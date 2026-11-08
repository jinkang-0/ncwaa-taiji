"use client";

import { Info_InstructorsSection } from "@/lib/cms";
import InstructorsSection from "@/components/home/instructors-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function InstructorSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as Info_InstructorsSection;
  if (!data) return null;
  return <InstructorSectionPreview {...data} />;
}

export default function InstructorSectionPreview(
  data: Info_InstructorsSection
) {
  return (
    <InstructorsSection
      title={data.title}
      instructors={data.instructors || []}
    />
  );
}
