import styles from "./page.module.scss";
import Gallery from "@/components/ui/gallery";
import { COMMUNITY_PHOTOS } from "@/data/images";
import AboutSection from "@/components/home/about-section";
import ScheduleSection from "@/components/home/schedule-section";
import EventsSection from "@/components/home/events-section";
import FAQSection from "@/components/home/faq-section";
import InstructorsSection from "@/components/home/instructors-section";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Gallery items={COMMUNITY_PHOTOS} />

      <div className={styles.content}>
        <article>
          <AboutSection />
          <ScheduleSection />
          <EventsSection />
          <FAQSection />
          <InstructorsSection />
        </article>
      </div>
    </>
  );
}
