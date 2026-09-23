import { Info } from "@/lib/cms";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import AboutSectionPreview from "./about-section-preview";
import ScheduleSectionPreview from "./schedule-section-preview";
import EventsSectionPreview from "./events-section-preview";
import FAQSectionPreview from "./faq-section-preview";
import InstructorSectionPreview from "./instructor-section-preview";

export default function InfoPagePreview({
  entry,
}: PreviewTemplateComponentProps) {
  const data = entry.get("data").toJS() as Info;

  return (
    <main>
      <div className="relative">
        <div className="absolute mr-auto mt-auto color-white z-1 flex justify-end flex-col">
          <h1>{data.title}</h1>
          <h3>{data.subtitle}</h3>
        </div>
        <img className="w-full" src={data.landingPhoto} alt="Landing photo" />
      </div>
      <div className="carousel">
        {data.communityPhotos.map(({ image, caption }, idx: number) => (
          <div className="flex flex-col carousel-item" key={image}>
            <img src={image} alt={`Community photo ${idx}`} />
            <p>{caption}</p>
          </div>
        ))}
      </div>
      <AboutSectionPreview {...data.aboutSection} />
      <ScheduleSectionPreview {...data.scheduleSection} />
      <EventsSectionPreview {...data.eventsSection} />
      <FAQSectionPreview {...data.faqSection} />
      <InstructorSectionPreview {...data.instructorsSection} />
    </main>
  );
}
