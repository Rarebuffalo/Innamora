/* Company details — replace placeholders before launch. */
export const SITE = {
  name: "Innamora Fragrances & Aromatics",
  brand: "Amora",
  shortName: "Innamora",
  tagline: "Traditional Indian attars, essential oils & aromatics for businesses",
  description:
    "Innamora Fragrances & Aromatics is a B2B manufacturer and supplier of alcohol-free traditional Indian attars, essential oils and hydrosols — bulk supply, private label and custom packaging.",
  email: "hello@innamora.in",
  phone: "+91 00000 00000",
  phoneHref: "+910000000000",
  whatsapp: "910000000000",
  address: { street: "Your street address", city: "City", region: "State", postalCode: "000000", country: "IN" },
  hours: "Mon – Sat, 10:00 – 19:00 IST",
  social: { instagram: "", linkedin: "", youtube: "" },
};

/* Marketing & analytics — leave an ID empty and nothing loads for it.
   Recommended: set only gtmId and configure GA4 / Google Ads / Meta Pixel
   inside Google Tag Manager. Direct IDs are a fallback when not using GTM. */
export const ANALYTICS = {
  gtmId: "",          // e.g. "GTM-XXXXXXX"
  ga4Id: "",          // e.g. "G-XXXXXXXXXX"   (only if not using GTM)
  googleAdsId: "",    // e.g. "AW-XXXXXXXXX"   (only if not using GTM)
  googleAdsLeadLabel: "", // conversion label for the enquiry form, e.g. "AbCdEfGhIj"
  metaPixelId: "",    // e.g. "123456789012345" (only if not using GTM)
  googleSiteVerification: "", // Search Console HTML-tag content value
  bingSiteVerification: "",   // Bing Webmaster Tools msvalidate.01 value
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/products#applications", label: "Applications" },
  { href: "/#packaging", label: "Packaging" },
];
