import styles from "./page.module.scss";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.container}>{children}</main>;
}
