import aboutContent from "@/content/page/about.yml";
import { AboutSection } from "../home/about-section";

export default function AboutSectionLoader() {
  return (
    <AboutSection
      title={aboutContent.title as string}
      introVideo={aboutContent.introVideo as string}
      showIntroVideo={aboutContent.showIntroVideo as boolean}
      sectionOneText={aboutContent.section1Text as string}
      sectionTwoText={aboutContent.section2Text as string}
    />
  );
}
