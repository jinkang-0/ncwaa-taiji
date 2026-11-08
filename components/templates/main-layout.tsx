import Footer from "../ui/footer";
import { HeroLoader } from "../cms-loader/landing-loader";
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
      {showHero ? <HeroLoader /> : null}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
