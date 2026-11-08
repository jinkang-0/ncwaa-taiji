import styles from "./feed.module.scss";
import DraftBlogFeed from "@/components/blog/draft-feed";
import BlogFeed from "@/components/blog/blog-feed";
import ButtonCreateBlog from "@/components/blog/button-create-blog";
import { getSession } from "@/actions/auth";
import { Metadata } from "next";
import SessionRefresher from "@/components/auth/session-refresher";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest blogs from NCWAA Taiji.",
};

export default async function Page() {
  const session = await getSession();
  const isAdmin = !!session.user;

  return (
    <div className={styles.feed}>
      {/* admin only components */}
      {isAdmin && (
        <>
          <SessionRefresher user={session.user} />
          <ButtonCreateBlog />
          <DraftBlogFeed />
        </>
      )}
      {/* blog feed */}
      <BlogFeed />
    </div>
  );
}
