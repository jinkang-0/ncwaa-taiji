import { CompendiumProvider } from "@/components/compendium/compendium-context";

export default function CompendiumLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <CompendiumProvider>{children}</CompendiumProvider>;
}
