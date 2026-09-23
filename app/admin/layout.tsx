import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Manager",
  robots: "noindex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
