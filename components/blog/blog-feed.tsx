import { getBlogs } from "@/actions/db";
import BlogCard from "./blog-card";
import { isAdminSession } from "@/actions/auth";
import InkAndQuill from "@/icons/ink-and-quill";
import styles from "@/app/(root)/(main)/blog/feed.module.scss";

export default async function BlogFeed() {
  const isAdmin = await isAdminSession();
  const blogs = await getBlogs();
  const hasBlogs = blogs.length > 0;

  return (
    <>
      {hasBlogs && isAdmin && <h6>Published</h6>}

      {hasBlogs || isAdmin ? (
        blogs.map((b) => <BlogCard key={b._id} blog={b} />)
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
