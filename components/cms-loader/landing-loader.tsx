import landingContent from "@/content/page/landing.yml";
import Gallery from "../ui/gallery";
import { GalleryItem } from "@/lib/types";
import { Hero } from "../ui/hero";
import { StaticImageData } from "next/image";

export function GalleryLoader() {
  return <Gallery items={landingContent.communityPhotos as GalleryItem[]} />;
}

export function HeroLoader() {
  return (
    <Hero
      heroImage={landingContent.landingPhoto as StaticImageData}
      title={landingContent.title as string}
      subtitle={landingContent.subtitle as string}
    />
  );
}
