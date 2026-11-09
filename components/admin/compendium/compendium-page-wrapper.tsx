import styles from "@/app/(root)/(main)/(tabbed)/compendium/page.module.scss";

export default function CompendiumPagePreviewWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
