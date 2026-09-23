import CONFIG from "@/data/config";
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: CONFIG.siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${CONFIG.siteUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${CONFIG.siteUrl}/compendium`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6
    }
  ];

  return sitemap;
}
