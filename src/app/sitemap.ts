import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shrotihost.in";

  const coreRoutes = [
    "",
    "/shared-hosting",
    "/wordpress-hosting",
    "/unlimited-hosting",
    "/reseller-hosting",
    "/vps",
    "/domains",
    "/services",
    "/web-development",
    "/app-development",
    "/ecommerce-development",
    "/saas-development",
    "/whmcs-modules",
    "/about",
    "/contact",
    "/careers",
    "/blog",
    "/terms",
    "/privacy",
    "/refund",
    "/acceptable-use-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.includes("hosting") || route.includes("vps") || route.includes("domains") ? 0.9 : 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...blogRoutes];
}

