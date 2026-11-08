import { useStyleLinker } from "@/hooks";
import { Landing } from "@/lib/cms";
import { PreviewTemplateProps } from "@/lib/types";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import BaseTemplatePreview from "../base-template-preview";
import { Hero } from "@/components/ui/hero";
import HomePreview from "./home-preview";
import Gallery from "@/components/ui/gallery";

export function LandingPreviewTemplate(props: PreviewTemplateComponentProps) {
  const data = props.entry.get("data")?.toJS() as Landing;
  if (!data) return null;
  return <LandingPreview data={data} {...props} />;
}

export default function LandingPreview({
  data,
  ...props
}: PreviewTemplateProps<Landing>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        heroImage={data.landingPhoto}
      />
      <HomePreview>
        <Gallery items={data.communityPhotos} />
      </HomePreview>
    </BaseTemplatePreview>
  );
}
