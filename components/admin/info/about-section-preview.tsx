"use client";

import { AboutSection as AboutSectionType } from "@/lib/cms";
import { AboutSection } from "@/components/home/about-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import { useStyleLinker } from "@/hooks";
import { PreviewTemplateProps } from "@/lib/types";
import BaseTemplatePreview from "../base-template-preview";
import MainPreview from "../main-preview";
import HomeContentPreview from "./home-content-preview";

export function AboutSectionPreviewTemplate(
  props: PreviewTemplateComponentProps,
) {
  const data = props.entry.get("data")?.toJS() as AboutSectionType;
  if (!data) return null;
  return <AboutSectionPreview data={data} {...props} />;
}

export default function AboutSectionPreview({
  data,
  ...props
}: PreviewTemplateProps<AboutSectionType>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview centered>
        <HomeContentPreview>
          <AboutSection
            title={data.title}
            introVideo={data.introVideo}
            showIntroVideo={data.showIntroVideo}
            sectionOneText={data.section1Text}
            sectionTwoText={data.section2Text}
          />
        </HomeContentPreview>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
