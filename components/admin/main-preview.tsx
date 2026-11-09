import styles from "@/app/(root)/(main)/page.module.scss";
import clsx from "clsx";

export default function MainPreview({
  children,
  centered,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <main
      className={clsx(styles.container, centered && styles.centeredContainer)}
    >
      {children}
    </main>
  );
}
