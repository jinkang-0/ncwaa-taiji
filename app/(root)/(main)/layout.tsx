import styles from "./page.module.scss";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ConditionalHero from "@/components/ui/conditional-hero";

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.container}>
      <ConditionalHero />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
