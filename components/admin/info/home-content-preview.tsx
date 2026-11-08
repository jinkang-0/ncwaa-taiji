import styles from "@/app/(root)/(main)/page.module.scss";

export default function HomeContentPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.content}>
      <article>{children}</article>
    </div>
  );
}
