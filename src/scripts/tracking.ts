/* Marketing attribution + conversion events (tiny, no dependencies).
   - Stores first-touch UTM / gclid / fbclid / referrer / landing page for 90 days
     so enquiries can be attributed to the campaign that brought the visitor.
   - Pushes events to dataLayer (GTM), and to gtag / fbq when loaded directly. */
type Params = Record<string, string | number | undefined>;
const KEY = "inn_attribution";
const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"];

function capture() {
  try {
    const q = new URLSearchParams(location.search);
    const hit = KEYS.some((k) => q.get(k));
    const prev = JSON.parse(localStorage.getItem(KEY) || "null");
    const fresh = !prev || Date.now() - prev.ts > 90 * 864e5;
    if (hit || fresh) {
      const data: Record<string, string | number> = { ts: Date.now(), landing_page: location.pathname, referrer: document.referrer || "(direct)" };
      KEYS.forEach((k) => { const v = q.get(k); if (v) data[k] = v; });
      if (hit || !prev) localStorage.setItem(KEY, JSON.stringify(data));
    }
  } catch { /* storage unavailable — attribution simply skipped */ }
}

export function attribution(): Record<string, string> {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || "{}");
    delete d.ts;
    return d;
  } catch { return {}; }
}

export function track(event: string, params: Params = {}) {
  const w = window as any;
  const cfg = w.INNAMORA_ANALYTICS || {};
  (w.dataLayer ||= []).push({ event, ...params });
  if (!cfg.gtm && typeof w.gtag === "function") {
    w.gtag("event", event, params);
    if (event === "generate_lead" && cfg.ads && cfg.adsLead) w.gtag("event", "conversion", { send_to: `${cfg.ads}/${cfg.adsLead}` });
  }
  if (!cfg.gtm && typeof w.fbq === "function") {
    const fb: Record<string, string> = { generate_lead: "Lead", contact_click: "Contact", request_quote_click: "Lead" };
    if (fb[event]) w.fbq("track", fb[event], params);
  }
}

capture();
(window as any).innamoraTrack = track;

/* Delegated click tracking for contact intents and key CTAs. */
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest("a");
  if (!a) return;
  const href = a.getAttribute("href") || "";
  const where = location.pathname;
  if (href.startsWith("https://wa.me")) track("contact_click", { method: "whatsapp", page: where });
  else if (href.startsWith("tel:")) track("contact_click", { method: "phone", page: where });
  else if (href.startsWith("mailto:")) track("contact_click", { method: "email", page: where });
  else if (href.startsWith("/contact")) {
    const type = new URL(href, location.href).searchParams.get("type") || "general";
    track(type === "packaging" ? "packaging_design_request" : "request_quote_click", { enquiry_type: type, page: where, cta: a.textContent?.trim().slice(0, 40) });
  }
});
