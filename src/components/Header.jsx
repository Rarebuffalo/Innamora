import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import { NAV } from "../data/site.js";

export default function Header({ path = "/" }) {
  const current = (href) => (href === "/" ? path === "/" : !href.includes("#") && path.startsWith(href));
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="/" aria-label="Innamora Fragrances & Aromatics — home">
          <span className="brand__mark">
            <Logo decorative />
            <span className="brand__tag">Innamora Fragrances &amp; Aromatics</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={current(n.href) ? "page" : undefined}>{n.label}</a>
          ))}
          <a className="btn btn--sm" href="/contact">Contact Us</a>
        </nav>
        <details className="mnav">
          <summary aria-label="Menu"><Icon name="menu" /></summary>
          <nav className="mnav__panel" aria-label="Mobile">
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            <a className="btn" href="/contact">Contact Us</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
