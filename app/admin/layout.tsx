"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head
        dangerouslySetInnerHTML={{
          __html: `
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="noindex" />
            <title>Content Manager</title>
            <link href="admin/config.yml" type="text/yaml" rel="cms-config-url">
          `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
