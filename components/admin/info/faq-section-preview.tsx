"use client";

import { Info_FAQSection } from "@/lib/cms";
import FAQSection from "@/components/home/faq-section";
import { PreviewTemplateComponentProps } from "decap-cms-core";

export function FAQSectionPreviewTemplate({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data")?.toJS() as Info_FAQSection;
  if (!data) return null;
  return <FAQSectionPreview {...data} />;
}

export default function FAQSectionPreview(data: Info_FAQSection) {
  return (
    <FAQSection
      title={data.title}
      subtext={data.subtext}
      faqs={data.faqs || []}
    />
  );
}
