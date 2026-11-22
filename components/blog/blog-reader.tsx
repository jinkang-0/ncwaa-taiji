import Link from "next/link";
import styles from "./blog.module.scss";
import Image from "next/image";
import LeftArrow from "@/icons/left-arrow";
import { formatList } from "@/lib/utils";
import { Blogs } from "@/lib/cms";
import BlogTimestamp from "./blog-timestamp";
import MarkdownParser from "../ui/markdown";

export default async function BlogReader({ blog }: { blog: Blogs }) {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog">
            <LeftArrow /> Back to blogs
          </Link>
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width="400"
            height="200"
            blurDataURL={blog.thumbnail}
            style={{
              objectPosition: `0% ${blog.imageOffset}%`,
            }}
          />
          <div className={styles.titles}>
            <h2>{blog.title}</h2>
            <span>
              {formatList(blog.authors.map((a) => a))} ·{" "}
              <BlogTimestamp
                visible={blog.visible}
                timeCreated={blog.timeCreated}
                timeEdited={blog.timeEdited}
              />
            </span>
          </div>
        </header>
        <MarkdownParser>{blog.content}</MarkdownParser>
      </article>
    </div>
  );
}
