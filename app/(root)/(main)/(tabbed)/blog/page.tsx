import styles from "./feed.module.scss";
import BlogFeedLoader from "@/components/cms-loader/blog-feed-loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest blogs from NCWAA Taiji.",
};

export default async function Page() {
  return (
    <div className={styles.feed}>
      <BlogFeedLoader />
    </div>
  );
}
