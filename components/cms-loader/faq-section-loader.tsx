import rawFAQContent from "@/content/page/faqs.yml";
import { FAQSection as FAQSectionType } from "@/lib/cms";
import FAQSection from "../home/faq-section";

const faqContent = rawFAQContent as unknown as FAQSectionType;

export default function FAQSectionLoader() {
  return (
    <FAQSection
      title={faqContent.title}
      subtext={faqContent.subtext}
      faqs={faqContent.faqs}
    />
  );
}
