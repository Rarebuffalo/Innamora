# Innamora Fragrances & Aromatics — B2B Company Website

The official B2B portfolio website for **Innamora Fragrances & Aromatics (brand: Amora)**, a manufacturer and supplier of alcohol-free traditional Indian attars, essential oils and rose water.

The site is built with **Astro + React**. Components are written in React and every page is pre-rendered to static HTML at build time, so pages load instantly, rank well in search, and ship JavaScript only where it's needed.

---

## 1. Quick start (for testers)

### Option A — test the ready-built site (no Node needed)

The `dist/` folder in the zip is the finished website. Serve it with any static server:

```bash
cd dist
python3 -m http.server 8080        # then open http://localhost:8080
```

> Open pages with a server rather than by double-clicking the HTML files, so the links and images resolve correctly.
> Clean URLs such as `/about` and `/products/khus` work on real hosting. With the simple Python server, use `/about.html` and `/products/khus.html`, or use Option B.

### Option B — run from source (recommended for developers)

**Requirements:** Node.js **22.12 or newer** (check with `node -v`) and npm.

```bash
npm install          # install dependencies (first time only)
npm run dev          # development server with live reload → http://localhost:4321
```

To build and test the production version:

```bash
npm run build        # outputs the static site to dist/
npm run preview      # serves dist/ with clean URLs → http://localhost:4321
```

---

## 2. What to test

| Area | What to check |
|---|---|
| **Home** `/` | Hero with Amora logo over the bottle · product carousel auto-slides every 3.5 s, with arrows, dots, a pause button and swipe on mobile (it pauses on hover) · industries · process · Packaging Atelier · CTAs |
| **Packaging Atelier** (`/#packaging`) | Choose fragrance, bottle, glass, closure and gift box, and type a brand name. The preview updates live. **Request this packaging** opens the contact form with the design pre-filled |
| **About** `/about` | Story, deg-bhapka method, values, sourcing |
| **Products** `/products` | All 9 products: Rosewater, Khus, Attar Mitti, Rajnigandha, Rosemary, Chandan, Jasmine, Champa, Raat Rani · applications by industry · supply-formats table |
| **Product pages** `/products/<name>` | Bottle visual · specifications table · fragrance notes · applications · supply · 5-step **"How it's made"** gallery with images · quote, sample and WhatsApp buttons · related products |
| **Contact** `/contact` | Enquiry form validation (name, company, email and requirement are required) · pre-fill from product, atelier and "Request a Sample" links · FAQ |
| **Mobile** | All pages at phone width; the menu opens from the ☰ button |
| **404** | Any unknown URL shows the branded "page not found" page |

**Expected behaviour of the contact form:** until a form service is connected (see section 6), submitting opens the visitor's email app with the full enquiry pre-written, addressed to the company inbox. This is intentional.

---

## 3. How the site works

```
src/
  data/
    products.js      ← ALL product content: names, specs, process, applications, images, SEO text
    site.js          ← company details (phone, email, address, WhatsApp) + analytics IDs
    logo.js          ← Amora logo as vector paths (traced from the original logo)
  layouts/
    BaseLayout.astro ← <head> SEO tags, structured data, fonts, analytics, header/footer
  components/        ← React components (rendered to static HTML)
    Header.jsx, Footer.jsx, Logo.jsx, Icon.jsx
    ProductCard.jsx, ProductVisual.jsx
    ProductCarousel.jsx   ← interactive island (home)
    PackagingAtelier.jsx  ← interactive island (home)
    Analytics.astro       ← loads GTM / GA4 / Ads / Meta Pixel only if IDs are set
  pages/             ← one file per URL
    index.astro, about.astro, contact.astro, 404.astro
    products/index.astro, products/[slug].astro  (one page per product, generated)
  scripts/tracking.ts ← campaign attribution + conversion events
  lib/               ← image helpers, packaging SVG renderer
  styles/global.css  ← the whole design system (colours, type, layout)
  assets/images/     ← source photos (optimised automatically at build time)
  pages/robots.txt.ts ← robots.txt generated from the site URL
public/              ← copied as-is: favicon, logo SVGs
vercel.json          ← Vercel config: clean URLs, caching & security headers
dist/                ← build output (the deployable website)
```

- **Static first:** every page is plain HTML and CSS. Only two components hydrate in the browser (the carousel and the atelier, home page only), and only when they scroll into view. Other pages ship about 2 KB of JavaScript.
- **Images:** photos in `src/assets/images/` are automatically resized and converted to WebP in several sizes, so each device downloads only what it needs.
- **Fonts:** self-hosted (Cormorant Garamond + Jost), with the key files preloaded. There are no external font requests and no layout shift.

---

## 4. Editing content

| To change… | Edit |
|---|---|
| Product text, specs, applications, supply formats | `src/data/products.js` |
| Product page SEO title and description | `metaTitle` / `metaDescription` in `src/data/products.js` |
| Phone, WhatsApp, email, address, hours | `src/data/site.js` → `SITE` |
| Analytics / ads IDs | `src/data/site.js` → `ANALYTICS` |
| Colours and typography | `src/styles/global.css` (variables at the top) |
| Page wording | the matching file in `src/pages/` |

### Product images

Each product has two image types:

1. **Bottle shot** (cards, carousel, top of the product page). Jasmine uses the supplied photo. Products without a bottle photo show a branded Amora label tile.
   To add one, save it as `src/assets/images/bottles/<slug>.jpg`, import it at the top of `products.js`, and add `bottle: <import>, bottleAlt: "…"` to the product (copy the Jasmine entry).
2. **Ingredient photo** (`src/assets/images/products/`). This is used as step 1 of the "How it's made" gallery on each product page.

**AI prompt for matching bottle shots** (same style as the Jasmine creative, square 2048×2048):

> Luxury product photograph, square, an ornate faceted crystal attar bottle with an engraved gold dome cap and gold filigree, on warm cream marble, soft golden light through a jaali window, brass bowl and blurred brass lantern behind, warm ivory and gold grade, photorealistic. Top-left white "AMORA" script logo with "INNAMORA FRAGRANCES & AROMATICS"; title "[NAME]", script subtitle "Attar", and "PURE • NATURAL • TIMELESS". Add: **[ingredient]**.

| Slug | Name | Ingredient to add |
|---|---|---|
| rosewater | ROSE WATER (subtitle "Hydrosol") | clear flask, pink Damask rose petals |
| khus | KHUS | golden-green oil, bundles of dried vetiver roots |
| attar-mitti | MITTI | pale gold oil, terracotta kulhad and baked clay discs |
| rajnigandha | RAJNIGANDHA | white tuberose stems |
| rosemary | ROSEMARY (subtitle "Essential Oil") | gold dropper bottle, rosemary sprigs |
| chandan | CHANDAN (subtitle "Essential Oil") | sandalwood logs, chips and sandal paste |
| champa | CHAMPA | golden-orange champa flowers |
| raat-rani | RAAT RANI | tiny white night-blooming jasmine clusters, dusk light |

---

## 5. SEO — what's implemented

The site was audited on the production build. Lighthouse (mobile) gave 97–99 for Performance and 100 for Accessibility, Best Practices and SEO on every page tested, with 0 layout shift.

- **Every page:** a unique `<title>` (≤ 62 characters), a unique meta description (126–158 characters), a canonical URL, `lang="en-IN"`, Open Graph and Twitter cards (a 1200×630 share image is generated per page), and exactly one `<h1>` with a logical heading order.
- **Images:** descriptive `alt` text, explicit width and height (no layout shift), lazy loading below the fold, and the hero image is prioritised.
- **Structured data (JSON-LD):** `Organization` (all pages), `WebSite` (home), `ItemList` + `BreadcrumbList` (products), `Product` + `BreadcrumbList` (each product, with specs as properties), `AboutPage`, and `FAQPage` (contact).
- **Crawling:** `sitemap-index.xml` is generated automatically (the 404 page is excluded and `noindex`), and `robots.txt` points to the sitemap.
- **URLs:** clean, keyword-rich URLs such as `/products/khus` and `/products/raat-rani`.
- **Internal linking:** the header, footer (every product is linked), related products, breadcrumbs, and CTAs to the contact page.

**Before going live (SEO):**
1. Set the `SITE_URL` environment variable in Vercel to the real domain (see section 7). Canonical URLs, the sitemap and robots.txt all follow it.
2. Verify the site in **Google Search Console** and **Bing Webmaster Tools**. Paste the verification codes into `src/data/site.js` → `ANALYTICS.googleSiteVerification` / `bingSiteVerification`, then submit `https://<domain>/sitemap-index.xml`.
3. Create a **Google Business Profile** with the same name, address and phone as `site.js`.

---

## 6. Performance marketing — tracking setup

Everything is ready but **switched off until you add IDs** in `src/data/site.js` → `ANALYTICS`, so nothing loads (and nothing slows the site) until then.

| Setting | What it does |
|---|---|
| `gtmId` | **Recommended.** Loads Google Tag Manager; configure GA4, Google Ads, Meta Pixel and LinkedIn inside GTM |
| `ga4Id` | Google Analytics 4 directly (only if not using GTM) |
| `googleAdsId` + `googleAdsLeadLabel` | Google Ads conversion tracking for enquiries (only if not using GTM) |
| `metaPixelId` | Meta (Facebook/Instagram) Pixel (only if not using GTM) |

**Events sent automatically** (to the `dataLayer`, and to GA4 / Ads / Pixel when loaded directly):

| Event | When | Parameters |
|---|---|---|
| `generate_lead` | Enquiry form submitted (mark as the **primary conversion**) | `enquiry_type`, `product`, `quantity` |
| `contact_click` | WhatsApp, phone or email link clicked | `method`, `page` |
| `request_quote_click` | Any "Request a quote / sample" button | `enquiry_type`, `page`, `cta` |
| `packaging_design_request` | "Request this packaging" in the Atelier | `enquiry_type`, `page` |

Meta Pixel mapping: `generate_lead` and `request_quote_click` → **Lead**; `contact_click` → **Contact**.

**Campaign attribution:** when a visitor arrives from an ad, the site stores (first touch, for 90 days) `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid`, `msclkid`, the landing page and the referrer. These are **sent with every enquiry**, so each lead shows which campaign it came from.

**Landing pages for ads:** each product page (e.g. `/products/khus`) is a self-contained landing page with a single focus, quote and sample CTAs, WhatsApp, and specs. Use them as ad destinations with UTM tags, e.g.
`https://<domain>/products/khus?utm_source=google&utm_medium=cpc&utm_campaign=khus-attar-bulk`

**Contact form delivery:** set `FORM_ENDPOINT` at the top of the script in `src/pages/contact.astro` (Formspree, Getform, HubSpot or your own API) to receive enquiries directly, including the attribution fields. Without it, the form opens the visitor's email app.

> If you target visitors in the EU or UK, add a cookie-consent banner (or a Consent Mode v2 setup in GTM) before enabling ads tags.

---

## 7. Deploying on Vercel

The repo is ready for Vercel, with zero configuration needed.

1. Push to GitHub (`main` branch).
2. In Vercel: **Add New → Project → Import** the `Innamora` repository. The settings are read from `vercel.json`:
   - Framework: **Astro** · Build command: `npm run build` · Output directory: `dist` · Node **22.x** (from `package.json`)
3. Click **Deploy**. Every push to `main` redeploys automatically, and pull requests get preview URLs.
4. After connecting your custom domain (**Settings → Domains**), add an environment variable:
   **Settings → Environment Variables → `SITE_URL` = `https://www.your-domain.com`** (Production), then redeploy.
   Until this is set, canonical URLs and the sitemap use the Vercel production URL automatically.

`vercel.json` also sets:
- **Clean URLs** (`/about` and `/products/khus`, no `.html`) with no trailing slash, matching the canonical URLs
- **Long-term caching** for hashed assets in `/_astro/` (1 year, immutable)
- **Security headers:** `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- The custom **404 page** is used automatically.

Other static hosts also work: upload `dist/` and enable `.html` extension fallback for clean URLs.

---

## 8. Verify before launch

- [ ] Company details in `src/data/site.js` (the phone, WhatsApp, email and address are currently placeholders)
- [ ] `SITE_URL` set in Vercel to the live domain
- [ ] `FORM_ENDPOINT` connected and a test enquiry received
- [ ] Analytics IDs added and test conversions seen in GTM Preview / GA4 DebugView
- [ ] Product facts confirmed against your production and COA: botanical sources, base oil, appearance, odour, pack sizes, and claims such as "COA & MSDS on request" and "pan-India & export"
- [ ] Bottle shots added for the 8 products still showing label tiles

---

## 9. Image credits

`bottles/jasmine.jpg` and `products/jasmine.jpg` come from Innamora's own creative. The other photos are free-licence images from [Unsplash](https://unsplash.com/license) (commercial use allowed, no attribution required):

| File | Photographer |
|---|---|
| products/rosewater.jpg | Teo Do Rio |
| products/khus.jpg | Andrew Dawes |
| products/attar-mitti.jpg | Allec Gomes |
| products/rajnigandha.jpg | Mohammad Hossein Jamaly |
| products/rosemary.jpg | Manuela Böhm |
| products/chandan.jpg | Sandalwood Australia |
| products/champa.jpg | Shraddha Kulkarni |
| products/raat-rani.jpg | Devon Rodvold (stand-in for *Cestrum nocturnum*) |
| site/hero-oil.jpg | Disha |
| site/copper-still.jpg | Michael Lock |
| site/harvest.jpg | EqualStock |
| site/clay-vessels.jpg | The Neek |
| site/copper-stills-close.jpg | François Hoppet |
