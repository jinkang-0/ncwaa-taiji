import styles from "@/components/compendium/content.module.scss";

export default function FormDialogWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.dialogContent}>{children}</div>
    </div>
  );
}
