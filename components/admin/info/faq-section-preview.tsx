"use client";

import { FAQSection as FAQSectionType } from "@/lib/cms";
import FAQSection from "@/components/home/faq-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import { PreviewTemplateProps } from "@/lib/types";
import { useStyleLinker } from "@/hooks";
import BaseTemplatePreview from "../base-template-preview";
import MainPreview from "../main-preview";
import HomeContentPreview from "./home-content-preview";

export function FAQSectionPreviewTemplate(
  props: PreviewTemplateComponentProps,
) {
  const data = props.entry.get("data")?.toJS() as FAQSectionType;
  if (!data) return null;
  return <FAQSectionPreview data={data} {...props} />;
}

export default function FAQSectionPreview({
  data,
  ...props
}: PreviewTemplateProps<FAQSectionType>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview centered>
        <HomeContentPreview>
          <FAQSection
            title={data.title}
            subtext={data.subtext}
            faqs={data.faqs || []}
          />
        </HomeContentPreview>
      </MainPreview>
    </BaseTemplatePreview>
  );
}
