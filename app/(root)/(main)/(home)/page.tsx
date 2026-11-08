import styles from "../page.module.scss";
import { GalleryLoader } from "@/components/cms-loader/landing-loader";
import AboutSectionLoader from "@/components/cms-loader/about-section-loader";
import ScheduleSectionLoader from "@/components/cms-loader/schedule-section-loader";
import EventsSectionLoader from "@/components/cms-loader/events-section-loader";
import FAQSectionLoader from "@/components/cms-loader/faq-section-loader";
import InstructorsSectionLoader from "@/components/cms-loader/instructors-section-loader";

// revalidate cache every hour (3600s)
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <GalleryLoader />

      <div className={styles.content}>
        <article>
          <AboutSectionLoader />
          <ScheduleSectionLoader />
          <EventsSectionLoader />
          <FAQSectionLoader />
          <InstructorsSectionLoader />
        </article>
      </div>
    </>
  );
}
