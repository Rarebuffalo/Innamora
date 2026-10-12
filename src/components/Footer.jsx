import Logo from "./Logo.jsx";
import { SITE } from "../data/site.js";
import { PRODUCTS } from "../data/products.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const a = SITE.address;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo tagline />
            <p style={{ marginTop: 22, maxWidth: "36ch", color: "var(--ink-2)" }}>
              Manufacturer &amp; supplier of alcohol-free traditional Indian attars, essential oils and hydrosols —
              for perfumers, brands and manufacturers.
            </p>
          </div>
          <div>
            <h2 className="footer-title">Company</h2>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/products#applications">Applications</a></li>
              <li><a href="/#packaging">Packaging &amp; Private Label</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Products</h2>
            <ul className="footer-links">
              {PRODUCTS.map((p) => <li key={p.slug}><a href={`/products/${p.slug}`}>{p.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Get in touch</h2>
            <address className="footer-links">
              <span style={{ color: "var(--ink-2)" }}>{a.street}, {a.city}, {a.region} {a.postalCode}, India</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              <span style={{ color: "var(--muted)", fontSize: ".85rem" }}>{SITE.hours}</span>
            </address>
            <a className="btn btn--light btn--sm" href="/contact" style={{ marginTop: 22 }}>Request a Quote</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Alcohol-free · Traditionally distilled in India</span>
        </div>
      </div>
    </footer>
  );
}
