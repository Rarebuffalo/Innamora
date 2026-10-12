// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

/* Public site URL — drives canonical URLs, Open Graph tags, sitemap.xml and
   robots.txt. Order of precedence:
   1. SITE_URL env var (set this in Vercel → Settings → Environment Variables
      once the custom domain is live, e.g. https://www.innamora.in)
   2. Vercel's production URL (automatic on Vercel builds)
   3. Fallback for local builds */
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "https://www.innamora.in";

export default defineConfig({
  site,
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "auto" },
  integrations: [react(), sitemap({ filter: (page) => !page.includes("/404") })],
  image: { layout: "constrained" },
  devToolbar: { enabled: false },
});
