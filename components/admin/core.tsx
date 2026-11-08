import CMS from "decap-cms-app";
import { AboutSectionPreviewTemplate } from "./info/about-section-preview";
import { ScheduleSectionPreviewTemplate } from "./info/schedule-section-preview";
import { EventsSectionPreviewTemplate } from "./info/events-section-preview";
import { FAQSectionPreviewTemplate } from "./info/faq-section-preview";
import { InstructorSectionPreviewTemplate } from "./info/instructor-section-preview";

CMS.registerPreviewTemplate("aboutSection", AboutSectionPreviewTemplate);
CMS.registerPreviewTemplate("scheduleSection", ScheduleSectionPreviewTemplate);
CMS.registerPreviewTemplate("eventsSection", EventsSectionPreviewTemplate);
CMS.registerPreviewTemplate("faqSection", FAQSectionPreviewTemplate);
CMS.registerPreviewTemplate("instructorsSection", InstructorSectionPreviewTemplate);

CMS.init();

export default function CMSCore() {
  return null;
}
