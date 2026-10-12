import type { APIRoute } from "astro";

/* robots.txt generated at build time so the sitemap URL always matches `site`. */
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", site).href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
