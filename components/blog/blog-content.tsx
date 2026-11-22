import { Value } from "@udecode/plate";
import { serializeValue } from "./editor/editor-config-static";
import styles from "./blog-content.module.scss";

export default async function BlogContent({
  blogContent,
}: {
  blogContent: Value;
}) {
  const serializedContent = await serializeValue(blogContent);

  return (
    <div
      className={styles.content}
      style={{
        position: "relative",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
      dangerouslySetInnerHTML={{ __html: serializedContent }}
    />
  );
}
