"use client";

import { Info_AboutSection } from "@/lib/cms";
import { AboutSection } from "@/components/home/about-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function AboutSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as Info_AboutSection;
  if (!data) return null;
  return <AboutSectionPreview {...data} />;
}

export default function AboutSectionPreview(data: Info_AboutSection) {
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
