import SingleWhip from "@/icons/single-whip";
import styles from "./about-section.module.scss";
import YinYang from "@/icons/yinyang";
import Link from "next/link";
import { LINKS } from "@/data/links";
import IntroVideo from "./intro-video";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <h3>About</h3>
      <div className={styles.about}>
        <IntroVideo />
        <YinYang className={styles.yinyang} />
        <p>
          Tai chi, as a practice, is popularly regarded as a health and wellness
          exercise and martial arts technique. In our class, we place an
          emphasis on health and wellness to help our students improve their
          physical abilities and manage daily stress through moving meditation
          and exercises.
          <br /> <br />
          For the advanced or ambitious students, we also offer opportunities to
          deepen your understanding of tai chi as a martial art. This varies
          across weapons, unhanded combat techniques, and soft energy skills.
          <br /> <br />
          We welcome all students, regardless of prior experience, age, or
          physical aptitude. Whether you are a beginner or an experienced
          practitioner, you will find a place in our community.
        </p>
        <hr />
        <p className={styles.dim}>
          The National Chinese Wushu Association of America, headed by Bryant
          Fong, traces its origins as an established association to 1978, while
          its official 501(c)(3) federal tax-exempt nonprofit status was
          formally issued by the IRS in July 2008. It is one of the oldest
          recorded Wushu associations in the United States, dedicated to
          traditional and modern wushu promotion.
          <br /> <br />
          Our taiji program was established in 1969 as part of the{" "}
          <Link href={LINKS.ucmap}>
            University of California Martial Arts Program (UCMAP)
          </Link>{" "}
          at the University of California, Berkeley. As such, we have also
          assumed names such as CalTaiji or UC Berkeley Taiji to represent our
          affiliation.
        </p>
        <SingleWhip className={styles.singlewhip} />
      </div>
    </section>
  );
}
