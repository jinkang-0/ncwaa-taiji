import rawLandingContent from "@/content/page/landing.yml";
import Gallery from "../ui/gallery";
import { Hero } from "../ui/hero";
import { Landing } from "@/lib/cms";

const landingContent = rawLandingContent as unknown as Landing;

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
