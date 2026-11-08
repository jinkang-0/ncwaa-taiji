"use client";

import { AboutSection as AboutSectionType } from "@/lib/cms";
import { AboutSection } from "@/components/home/about-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function AboutSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as AboutSectionType;
  if (!data) return null;
  return <AboutSectionPreview {...data} />;
}

export default function AboutSectionPreview(data: AboutSectionType) {
  return (
    <AboutSection
      title={data.title}
      introVideo={data.introVideo}
      showIntroVideo={data.showIntroVideo}
      sectionOneText={data.section1Text}
      sectionTwoText={data.section2Text}
    />
  );
}
