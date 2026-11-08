import rawAboutContent from "@/content/page/about.yml";
import { AboutSection } from "../home/about-section";
import { Info_AboutSection } from "@/lib/cms";

const aboutContent = rawAboutContent as unknown as Info_AboutSection;

export default function AboutSectionLoader() {
  return (
    <AboutSection
      title={aboutContent.title}
      introVideo={aboutContent.introVideo}
      showIntroVideo={aboutContent.showIntroVideo}
      sectionOneText={aboutContent.section1Text}
      sectionTwoText={aboutContent.section2Text}
    />
  );
}
