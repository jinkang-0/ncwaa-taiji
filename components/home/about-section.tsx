import SingleWhip from "@/icons/single-whip";
import styles from "./about-section.module.scss";
import YinYang from "@/icons/yinyang";
import IntroVideo from "./intro-video";
import { getYTEmbed } from "@/lib/utils";
import MarkdownParser from "../ui/markdown";

interface AboutSectionProps {
  title: string;
  introVideo: string;
  showIntroVideo: boolean;
  sectionOneText: string;
  sectionTwoText: string;
}

export function AboutSection({
  title,
  introVideo,
  showIntroVideo,
  sectionOneText,
  sectionTwoText,
}: AboutSectionProps) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.about}>
        {showIntroVideo ? <IntroVideo href={getYTEmbed(introVideo)} /> : null}
        <YinYang className={styles.yinyang} />
        <MarkdownParser>{sectionOneText}</MarkdownParser>
        <hr />
        <div className={styles.dim}>
          <MarkdownParser>{sectionTwoText}</MarkdownParser>
        </div>
        <SingleWhip className={styles.singlewhip} />
      </div>
    </section>
  );
}
