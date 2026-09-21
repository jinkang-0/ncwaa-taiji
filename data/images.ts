import PhotoBanquet from "@/assets/community_photos/banquet.webp";
import PhotoGuangbo from "@/assets/community_photos/clark_kerr_sun_guangbo.webp";
import PhotoClub from "@/assets/community_photos/club_photo.webp";
import PhotoLunch from "@/assets/community_photos/lunch_after_practice.webp";
import PhotoSifu from "@/assets/community_photos/sf_kungfu_festival_sifu.webp";
import PhotoRuler from "@/assets/community_photos/tenderloin_ruler.webp";
import PhotoYMCA from "@/assets/community_photos/ymca.webp";
import PhotoCrabCove from "@/assets/community_photos/crabcove.webp";
import PhotoHuining from "@/assets/community_photos/huining.webp";
import PhotoPicnic from "@/assets/community_photos/picnic.webp";
import PhotoClass from "@/assets/community_photos/class.webp";
import { GalleryItem } from "@/lib/types";

export const COMMUNITY_PHOTOS: GalleryItem[] = [
  {
    image: PhotoGuangbo,
    caption: "Performing at the Clark Kerr campus"
  },
  {
    image: PhotoLunch,
    caption: "Enjoying lunch after practice"
  },
  {
    image: PhotoSifu,
    caption: "Sifu Bryant Fong at the SF Kungfu Festival"
  },
  {
    image: PhotoRuler,
    caption: "Performing at the SF Tenderloin Community Center"
  },
  {
    image: PhotoBanquet,
    caption: "UCMAP banquet"
  },
  {
    image: PhotoClub,
    caption: "End of year group photo"
  },
  {
    image: PhotoHuining,
    caption: "Celebration of lineage ancestors"
  },
  {
    image: PhotoYMCA,
    caption: "Performance at the San Francisco YMCA"
  },
  {
    image: PhotoCrabCove,
    caption: "Outdoors practice in Alameda"
  },
  {
    image: PhotoPicnic,
    caption: "Spring picnic with community members"
  },
  {
    image: PhotoClass,
    caption: "Class in session"
  }
];
