import rawLandingContent from "@/content/page/landing.yml";
import Gallery from "../ui/gallery";
import { Hero } from "../ui/hero";
import { Info_LandingSection } from "@/lib/cms";

const landingContent = rawLandingContent as unknown as Info_LandingSection;

export function GalleryLoader() {
  return <Gallery items={landingContent.communityPhotos} />;
}

export function HeroLoader() {
  return (
    <Hero
      heroImage={landingContent.landingPhoto}
      title={landingContent.title}
      subtitle={landingContent.subtitle}
    />
  );
}
