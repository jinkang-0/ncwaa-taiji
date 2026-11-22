import { notFound } from "next/navigation";
import { GenerateMetadataProps } from "@/lib/types";
import { getBlog } from "@/data/cms-blogs";
import BlogReader from "@/components/blog/blog-reader";

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { id } = await params;

  return {
    alternates: {
      canonical: `/blog/${id}`,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);
  if (!blog) return notFound();

  return <BlogReader blog={blog} />;
}
