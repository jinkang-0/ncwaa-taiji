import { getBlogByObjectId } from "@/actions/db";
import { notFound } from "next/navigation";
import BlogReader from "@/components/blog/blog-reader";
import { isAdminSession } from "@/actions/auth";

export default async function DraftBlogPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const isAdmin = await isAdminSession();
  if (!isAdmin) return notFound();

  const { id } = await params;
  const blogData = await getBlogByObjectId(id);
  if (blogData.length !== 1 || !blogData[0]) return notFound();

  const blog = blogData[0];

  return <BlogReader blog={blog} editable={isAdmin} />;
}
