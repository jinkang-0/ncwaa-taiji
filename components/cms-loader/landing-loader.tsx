import landingContent from "@/content/page/landing.yml";
import Gallery from "../ui/gallery";
import { GalleryItem } from "@/lib/types";

export function GalleryLoader() {
  return <Gallery items={landingContent.communityPhotos as GalleryItem[]} />;
}
