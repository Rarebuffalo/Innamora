import Icon from "./Icon.jsx";
import ProductVisual from "./ProductVisual.jsx";

export default function ProductCard({ p, lazy = true, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <article className="p-card">
      <a className="p-card__media" href={`/products/${p.slug}`} tabIndex={-1} aria-hidden="true">
        <ProductVisual p={p} lazy={lazy} />
      </a>
      <div className="p-card__body">
        <div className="p-card__meta"><span>{p.type}</span><span>Alcohol-free</span></div>
        <H><a href={`/products/${p.slug}`}>{p.name}</a></H>
        <p className="p-card__bot">{p.botanical}</p>
        <p className="p-card__text">{p.summary}</p>
        <a className="link-arrow" href={`/products/${p.slug}`} aria-label={`View ${p.name} specifications`}>
          Specifications <Icon name="arrow" />
        </a>
      </div>
    </article>
  );
}
