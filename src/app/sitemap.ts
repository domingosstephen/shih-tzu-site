import type { MetadataRoute } from "next";
import { puppies } from "@/lib/puppies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shihtzuwelpen.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/welpen`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...puppies.map((p) => ({
      url: `${baseUrl}/welpen#${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
