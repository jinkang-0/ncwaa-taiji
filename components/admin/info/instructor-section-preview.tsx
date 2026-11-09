"use client";

import { InstructorsSection as InstructorsSectionType } from "@/lib/cms";
import InstructorsSection from "@/components/home/instructors-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import { PreviewTemplateProps } from "@/lib/types";
import { useStyleLinker } from "@/hooks";
import BaseTemplatePreview from "../base-template-preview";
import HomeContentPreview from "./home-content-preview";
import MainPreview from "../main-preview";

export function InstructorSectionPreviewTemplate(
  props: PreviewTemplateComponentProps,
) {
  const data = props.entry.get("data")?.toJS() as InstructorsSectionType;
  if (!data) return null;
  return <InstructorSectionPreview data={data} {...props} />;
}

export default function InstructorSectionPreview({
  data,
  ...props
}: PreviewTemplateProps<InstructorsSectionType>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview centered>
        <HomeContentPreview>
          <InstructorsSection
            title={data.title}
            instructors={data.instructors || []}
          />
        </HomeContentPreview>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
