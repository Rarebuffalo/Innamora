import Logo from "./Logo.jsx";

/* Product bottle shot, or — until one is supplied — a branded label tile in
   the same art direction (logo, name, script subtitle, "Pure · Natural · Timeless"). */
export default function ProductVisual({ p, lazy = true, large = false }) {
  if (p.img) return <img {...p.img} loading={lazy ? "lazy" : "eager"} decoding="async" fetchpriority={lazy ? undefined : "high"} />;
  return (
    <div className={`p-tile${large ? " p-tile--lg" : ""}`} style={{ "--c": p.color }} role="img" aria-label={`${p.name} ${p.subtitle} by Amora`}>
      <Logo tagline decorative className="p-tile__logo" />
      <div className="p-tile__label">
        <span className="p-tile__name">{p.name}</span>
        <span className="p-tile__sub">{p.subtitle}</span>
        <span className="p-tile__pure">Pure · Natural · Timeless</span>
      </div>
    </div>
  );
}
