import CMSLoader from "@/components/admin/loader";

export default function Page() {
  return (
    <html>
      <head
        dangerouslySetInnerHTML={{
          __html: `
          <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="robots" content="noindex" />
              <title>Content Manager</title>
              <link href="admin/config.yml" type="text/yaml" rel="cms-config-url">
          </head>        
        `,
        }}
      />
      <body>
        <CMSLoader />
      </body>
    </html>
  );
}
