import rawFAQContent from "@/content/page/faqs.yml";
import { Info_FAQSection } from "@/lib/cms";
import FAQSection from "../home/faq-section";

const faqContent = rawFAQContent as unknown as Info_FAQSection;

export default function FAQSectionLoader() {
  return (
    <FAQSection
      title={faqContent.title}
      subtext={faqContent.subtext}
      faqs={faqContent.faqs}
    />
  );
}
