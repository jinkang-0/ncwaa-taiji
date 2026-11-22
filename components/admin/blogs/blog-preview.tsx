import { useStyleLinker } from "@/hooks";
import { Blogs } from "@/lib/cms";
import { PreviewTemplateProps } from "@/lib/types";
import { PreviewTemplateComponentProps } from "decap-cms-core";
import BaseTemplatePreview from "../base-template-preview";
import MainPreview from "../main-preview";
import BlogReader from "@/components/blog/blog-reader";

export function BlogPreviewTemplate(props: PreviewTemplateComponentProps) {
  const data = props.entry.get("data")?.toJS() as Blogs;
  if (!data) return null;
  return <BlogPreview data={data} {...props} />;
}

export default function BlogPreview({
  data,
  ...props
}: PreviewTemplateProps<Blogs>) {
  useStyleLinker(props);

  return (
    <BaseTemplatePreview>
      <MainPreview centered>
        <BlogReader blog={data} style="minimal" showBackLink={false} />
      </MainPreview>
    </BaseTemplatePreview>
  );
}
