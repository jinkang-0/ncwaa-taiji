import styles from "./faq-section.module.scss";
import FAQCard, { FAQList } from "./faq-card";
import MarkdownParser from "../ui/markdown";
import { Info_FAQSection_FAQs } from "@/lib/cms";

export interface FAQSectionProps {
  title: string;
  subtext: string;
  faqs: Info_FAQSection_FAQs[];
}

export default function FAQSection({ title, subtext, faqs }: FAQSectionProps) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.faq}>
        <FAQList>
          {faqs.map((faq) => (
            <FAQCard key={faq.question} question={faq.question}>
              <MarkdownParser>{faq.answer}</MarkdownParser>
            </FAQCard>
          ))}
        </FAQList>
        <div className={styles.subtext}>
          <MarkdownParser>{subtext}</MarkdownParser>
        </div>
      </div>
    </section>
  );
}
