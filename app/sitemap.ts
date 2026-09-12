import { MetadataRoute } from "next";

const BASE_URL = "https://www.thewoolgatherers.co";

const blogSlugs = [
  "top-creative-marketing-agencies-in-bangalore",
  "best-digital-agencies-in-bangalore-for-f-and-b-brands",
  "complete-brand-identity-checklist-for-d2c-f-and-b-startups",
  "small-digital-agencies-in-bangalore-worth-knowing",
  "top-creative-marketing-agencies-in-chennai",
  "how-much-does-a-digital-marketing-agency-in-bangalore-charge",
];

const workSlugs = [
  "cureveda",
  "kumbaya",
  "miscellaneous",
  "motion",
  "mtr-foods",
  "peps",
  "santhi",
  "sie-branding",
  "sie-website",
  "tavana",
  "vahdam",
  "wingreens",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
