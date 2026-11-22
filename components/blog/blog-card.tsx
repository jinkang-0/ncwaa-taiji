import Image from "next/image";
import Link from "next/link";
import styles from "./blog-card.module.scss";
import { formatList } from "@/lib/utils";
import { Blogs } from "@/lib/cms";
import BlogTimestamp from "./blog-timestamp";

export default async function BlogCard({ blog }: { blog: Blogs }) {
  const link = `/blog/${blog.id}`;

  return (
    <div className={styles.blogCardContainer}>
      <Link className={styles.blogCard} href={link}>
        <Image
          src={blog.thumbnail}
          width="400"
          height="400"
          alt={blog.title}
          blurDataURL={blog.thumbnail}
          className={styles.blogCardImage}
        />
        <div className={styles.blogCardDetails}>
          <header>
            <p>{blog.title}</p>
            <span>
              {formatList(blog.authors.map((a) => a))} ·{" "}
              <BlogTimestamp
                visible={blog.visible}
                timeCreated={blog.timeCreated}
                timeEdited={blog.timeEdited}
              />
            </span>
          </header>
          <section>{blog.summary}</section>
        </div>
      </Link>
    </div>
  );
}
