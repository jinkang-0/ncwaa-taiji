import MainLayout from "@/components/templates/main-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout showHero>{children}</MainLayout>;
}
