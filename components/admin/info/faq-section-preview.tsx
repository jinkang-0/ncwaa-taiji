import { Info } from "@/lib/cms";

export default function FAQSectionPreview(data: Info["faqSection"]) {
  return (
    <section className="padded">
      <h1 className="text-center">{data.title}</h1>
      {data.faqs.map((faq) => (
        <div key={faq.question}>
          <p>
            <strong>{faq.question}</strong>
          </p>
          <p>{faq.answer}</p>
        </div>
      ))}
      <p>{data.subtext}</p>
    </section>
  );
}
