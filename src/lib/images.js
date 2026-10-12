import { getImage } from "astro:assets";

const CARD_SIZES = "(min-width: 1280px) 25vw, (min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw";

/* Optimised WebP for a product's bottle shot. Returns null when the product
   has no bottle photo yet (the card then shows a branded label tile). */
export async function bottleImage(product, { width = 800, height = 1000, sizes = CARD_SIZES } = {}) {
  if (!product.bottle) return null;
  const img = await getImage({ src: product.bottle, widths: [360, 560, 800, 1100].filter((w) => w <= width * 1.4), width, height, fit: "cover", position: "top", format: "webp", quality: 76 });
  return { src: img.src, srcSet: img.srcSet.attribute, sizes, width, height, alt: product.bottleAlt };
}

export const subtitleFor = (p) => (p.type === "Attar" ? "Attar" : p.type === "Hydrosol" ? "Hydrosol" : "Essential Oil");

export async function cardProps(product) {
  const { slug, name, type, botanical, summary, color } = product;
  return { slug, name, type, botanical, summary, color, subtitle: subtitleFor(product), img: await bottleImage(product) };
}
