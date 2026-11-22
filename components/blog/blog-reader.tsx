import Link from "next/link";
import styles from "./blog.module.scss";
import contentStyles from "./blog-content.module.scss";
import Image from "next/image";
import LeftArrow from "@/icons/left-arrow";
import { formatList } from "@/lib/utils";
import { Blogs } from "@/lib/cms";
import BlogTimestamp from "./blog-timestamp";
import MarkdownParser from "../ui/markdown";
import clsx from "clsx";

interface BlogReaderProps {
  blog: Blogs;
  showBackLink?: boolean;
  style?: "default" | "minimal";
}

export default function BlogReader({
  blog,
  showBackLink = true,
  style,
}: BlogReaderProps) {
  return (
    <div
      className={clsx(styles.container, style === "minimal" && styles.minimal)}
    >
      <article
        className={clsx(styles.article, style === "minimal" && styles.minimal)}
      >
        <header className={styles.header}>
          {showBackLink ? (
            <Link href="/blog">
              <LeftArrow /> Back to blogs
            </Link>
          ) : null}
          <Image
            src={blog.thumbnail ?? null}
            alt={blog.title}
            width="400"
            height="200"
            blurDataURL={blog.thumbnail ?? undefined}
            style={{
              objectPosition: `0% ${blog.imageOffset}%`,
            }}
          />
          <div className={styles.titles}>
            <h2>{blog.title}</h2>
            <span>
              {blog.authors && formatList(blog.authors.map((a) => a))} ·{" "}
              <BlogTimestamp
                visible={blog.visible}
                timeCreated={blog.timeCreated}
                timeEdited={blog.timeEdited}
              />
            </span>
          </div>
        </header>
        <div className={contentStyles.content}>
          <MarkdownParser>{blog.content}</MarkdownParser>
        </div>
      </article>
    </div>
  );
}
