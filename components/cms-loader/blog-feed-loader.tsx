import { getBlogs } from "@/data/cms-blogs";
import BlogFeed from "../blog/blog-feed";

export default async function BlogFeedLoader() {
  const blogs = await getBlogs();
  return <BlogFeed blogs={blogs} />;
}
