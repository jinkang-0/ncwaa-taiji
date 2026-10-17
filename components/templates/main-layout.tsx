import Footer from "../ui/footer";
import { DefaultHero } from "../ui/hero";
import Navbar from "../ui/navbar";

export default function MainLayout({
  children,
  showHero,
}: {
  children: React.ReactNode;
  showHero?: boolean;
}) {
  return (
    <>
      {showHero ? <DefaultHero /> : null}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
