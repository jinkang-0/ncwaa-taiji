import { getBlogByBlogId } from "@/actions/db";
import { PreviewTemplateComponentProps } from "decap-cms-core";

// nextjs metadata generation props
interface GenerateMetadataProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// compendium
type CompendiumCardAlignment = "left" | "middle" | "right";

// database objects

type PopulatedBlog = Awaited<ReturnType<typeof getBlogByBlogId>>[0];

// utility types

type PreviewTemplateProps<T> = PreviewTemplateComponentProps & { data: T };

type Prettify<T> = {} & {
  [K in keyof T]: T[K];
};
