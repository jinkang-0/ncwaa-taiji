import BlogCard from "./blog-card";
import InkAndQuill from "@/icons/ink-and-quill";
import styles from "@/app/(root)/(main)/(tabbed)/blog/feed.module.scss";
import { Blogs } from "@/lib/cms";

export default async function BlogFeed({ blogs }: { blogs: Blogs[] }) {
  const hasBlogs = blogs.length > 0;

  return (
    <>
      {hasBlogs && <h6>Published</h6>}
      {hasBlogs ? (
        blogs.map((b) => <BlogCard key={b.id} blog={b} />)
      ) : (
        <div className={styles.noBlogs}>
          <InkAndQuill />
          <p>
            We don&apos;t have any blogs yet,
            <br /> check back later!
          </p>
        </div>
      )}
    </>
  );
}
