"use client";

import { FAQSection as FAQSectionType } from "@/lib/cms";
import FAQSection from "@/components/home/faq-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function FAQSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as FAQSectionType;
  if (!data) return null;
  return <FAQSectionPreview {...data} />;
}

export default function FAQSectionPreview(data: FAQSectionType) {
  return (
    <FAQSection
      title={data.title}
      subtext={data.subtext}
      faqs={data.faqs || []}
    />
  );
}
