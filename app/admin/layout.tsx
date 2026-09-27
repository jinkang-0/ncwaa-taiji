import type { Metadata, Viewport } from "next";

// site metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Content Manager",
  robots: {
    follow: false,
    index: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link href="admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </head>
      <body>{children}</body>
    </html>
  );
}
