/* ==========================================================================
   Innamora — product catalogue (B2B)
   Single source of truth for the home carousel, the products page, every
   product detail page, the packaging atelier and the contact form.

   NOTE FOR THE TEAM: botanical sources, process notes and specifications are
   written to industry convention. Confirm each line against your own
   production and COA before launch (see README → "Verify before launch").
   ========================================================================== */

import rosewater from "../assets/images/products/rosewater.jpg";
import khus from "../assets/images/products/khus.jpg";
import mitti from "../assets/images/products/attar-mitti.jpg";
import rajnigandha from "../assets/images/products/rajnigandha.jpg";
import rosemary from "../assets/images/products/rosemary.jpg";
import chandan from "../assets/images/products/chandan.jpg";
import jasmine from "../assets/images/products/jasmine.jpg";
import jasmineBottle from "../assets/images/bottles/jasmine.jpg";
import still from "../assets/images/site/copper-still.jpg";
import stills from "../assets/images/site/copper-stills-close.jpg";
import clay from "../assets/images/site/clay-vessels.jpg";
import oil from "../assets/images/site/hero-oil.jpg";
import champa from "../assets/images/products/champa.jpg";
import raatKiRani from "../assets/images/products/raat-rani.jpg";

/* Traditional attar method, shared by every deg-bhapka product. */
const DEG_BHAPKA =
  "Fresh botanicals are loaded with water into a copper deg (still) and the lid is sealed with clay. A slow wood fire releases the aromatic vapours, which travel through a bamboo pipe (chonga) into a copper bhapka (receiver) holding the base oil, cooled in a water bath. The oil absorbs the fragrance; the charge is repeated with fresh material over several days until the base is saturated, then the attar is rested to mature. No alcohol, solvents or synthetic carriers are used at any stage.";

export const PRODUCTS = [
  {
    slug: "rosewater",
    metaTitle: "Rose Water Hydrosol Supplier — Bulk & Private Label",
    metaDescription: "Pure, alcohol-free rose water distilled from Damask rose petals. Bulk rose hydrosol for cosmetics, skincare and hospitality from Innamora, India.",
    harvest: "Damask rose petals are hand-picked at dawn, when their oil content is highest, and taken to the still the same morning.",
    name: "Rosewater",
    native: "गुलाब जल",
    type: "Hydrosol",
    family: "Floral",
    botanical: "Rosa damascena",
    part: "Fresh petals",
    method: "Traditional hydro-distillation",
    base: "Pure distillate water — no added base",
    appearance: "Clear, colourless liquid",
    odour: "Fresh, dewy rose with a soft green facet",
    notes: { top: ["Fresh rose petal", "Dew"], heart: ["Damask rose"], base: ["Soft green"] },
    tagline: "Pure rose distillate for cosmetic, wellness and ritual use.",
    summary:
      "Alcohol-free rose hydrosol distilled from fresh Damask rose petals — a clean, consistent rose water for skincare, toners, mists and pooja.",
    process:
      "Freshly picked Damask rose petals are hydro-distilled in copper stills. The fragrant distillate water is collected, rested and filtered — nothing is added. The result is a true rose hydrosol, not rose-flavoured water.",
    applications: ["Cosmetics & skincare", "Face mists & toners", "Aromatherapy", "Pooja & rituals", "Hospitality amenities"],
    supply: ["5 L / 25 L / 50 L HDPE carboys", "200 L drums", "Retail-ready bottles on request"],
    ingredient: rosewater,
    ingredientAlt: "Pink Damask rose — the source of Innamora rose water hydrosol",
    color: "#E7B3B8",
  },
  {
    slug: "khus",
    metaTitle: "Khus (Vetiver) Attar — Bulk Supplier & Manufacturer",
    metaDescription: "Alcohol-free khus attar distilled from vetiver roots by traditional deg-bhapka. Bulk, private-label and custom-packed supply from Innamora, India.",
    harvest: "Mature vetiver roots are dug, washed free of soil and dried in the shade, then chopped and soaked before distillation.",
    name: "Khus",
    native: "ख़स",
    type: "Attar",
    family: "Earthy",
    botanical: "Chrysopogon zizanioides (Vetiver)",
    part: "Roots",
    method: "Deg-bhapka distillation",
    base: "Sandalwood oil (traditional) or customer-specified base",
    appearance: "Pale yellow to greenish-brown oil",
    odour: "Cool, green, earthy vetiver with a smoky woody depth",
    notes: { top: ["Wet grass", "Green"], heart: ["Vetiver root", "Cool earth"], base: ["Smoky wood"] },
    tagline: "Cooling vetiver root attar — India's classic summer fragrance.",
    summary:
      "A cool, green and earthy attar distilled from vetiver roots in the deg-bhapka tradition. Ideal for attars, cooling sherbet-style fragrances, soaps and home fragrance.",
    process: DEG_BHAPKA,
    applications: ["Attar & perfumery", "Soaps & toiletries", "Home fragrance", "Incense & dhoop", "Aromatherapy"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 6–12 ml on request"],
    ingredient: khus,
    ingredientAlt: "Dried golden vetiver (khus) roots used to distil khus attar",
    color: "#8AA36A",
  },
  {
    slug: "attar-mitti",
    metaTitle: "Mitti Attar (Petrichor) — Bulk Supplier, India",
    metaDescription: "Traditional mitti attar distilled from sun-baked clay — the scent of first rain. Alcohol-free bulk and private-label supply from Innamora, India.",
    harvest: "Fine riverbed clay is shaped into discs and baked in the summer sun or a kiln until it holds the scent of parched earth.",
    name: "Attar Mitti",
    native: "मिट्टी अत्तर",
    type: "Attar",
    family: "Earthy",
    botanical: "Sun-baked earth (clay)",
    part: "Baked clay discs",
    method: "Deg-bhapka distillation",
    base: "Sandalwood oil (traditional) or customer-specified base",
    appearance: "Pale yellow to light brown oil",
    odour: "Petrichor — the scent of first rain on dry, sun-baked earth",
    notes: { top: ["Rain", "Petrichor"], heart: ["Baked clay", "Mineral"], base: ["Soft woods"] },
    tagline: "The first rain on parched earth, captured in oil.",
    summary:
      "A rare earth attar made by distilling sun-baked clay, recreating the petrichor of the first monsoon rain. A signature of Indian perfumery for niche perfumes and home scents.",
    process:
      "Clay from riverbeds is shaped into discs and baked in the summer sun or a kiln. The baked earth is then distilled in copper degs, and its vapours are absorbed into the base oil in the bhapka — the same patient deg-bhapka method used for flower attars. No alcohol or solvents are used.",
    applications: ["Niche perfumery", "Attar", "Home fragrance & diffusers", "Candles", "Hospitality signature scents"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 6–12 ml on request"],
    ingredient: mitti,
    ingredientAlt: "Terracotta clay vessel representing the baked earth used in mitti attar",
    color: "#B97A55",
  },
  {
    slug: "rajnigandha",
    metaTitle: "Rajnigandha (Tuberose) Attar — Bulk Supplier",
    metaDescription: "Creamy tuberose attar, deg-bhapka distilled and alcohol-free. Bulk supply for perfumery, hair oil and personal care from Innamora, India.",
    harvest: "Tuberose spikes are cut in the evening as the florets open and carried to the stills while their scent is at its richest.",
    name: "Rajnigandha",
    native: "रजनीगंधा",
    type: "Attar",
    family: "Floral",
    botanical: "Polianthes tuberosa (Tuberose)",
    part: "Fresh flowers",
    method: "Deg-bhapka distillation",
    base: "Sandalwood oil (traditional) or customer-specified base",
    appearance: "Pale yellow to golden oil",
    odour: "Rich, creamy, honeyed white floral",
    notes: { top: ["Green stem"], heart: ["Tuberose", "White floral"], base: ["Creamy", "Honey"] },
    tagline: "Creamy tuberose attar with exceptional diffusion.",
    summary:
      "A rich, creamy white-floral attar distilled from fresh tuberose blooms — a mainstay of Indian bridal perfumery and a powerful heart note for fine fragrance and personal care.",
    process: DEG_BHAPKA,
    applications: ["Attar & perfumery", "Fine fragrance compounding", "Hair oils", "Soaps & lotions", "Incense"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 6–12 ml on request"],
    ingredient: rajnigandha,
    ingredientAlt: "Fresh white tuberose (rajnigandha) flower stems",
    color: "#E6D9B4",
  },
  {
    slug: "rosemary",
    metaTitle: "Rosemary Essential Oil — Bulk Supplier, India",
    metaDescription: "Pure steam-distilled rosemary essential oil for hair care, aromatherapy and cosmetics. Bulk and private-label supply from Innamora, India.",
    harvest: "Leaves and flowering tops are harvested at peak growth and lightly wilted to concentrate the essential oil.",
    name: "Rosemary",
    native: "रोज़मेरी",
    type: "Essential Oil",
    family: "Herbal",
    botanical: "Salvia rosmarinus (Rosmarinus officinalis)",
    part: "Leaves & flowering tops",
    method: "Steam distillation",
    base: "100% essential oil — no carrier",
    appearance: "Colourless to pale yellow mobile liquid",
    odour: "Fresh, camphoraceous, herbaceous and woody",
    notes: { top: ["Camphor", "Fresh herb"], heart: ["Rosemary leaf"], base: ["Woody"] },
    tagline: "Clear, herbaceous essential oil for hair, wellness and care.",
    summary:
      "Pure steam-distilled rosemary essential oil — fresh, camphoraceous and clean. Widely used in hair-care, aromatherapy and functional personal-care formulations.",
    process:
      "Leaves and flowering tops are steam-distilled; the essential oil separates naturally from the water and is collected, rested and filtered. It is supplied neat, without any carrier or alcohol, ready for your formulation.",
    applications: ["Hair oils & shampoos", "Aromatherapy blends", "Massage oils", "Soaps", "Cleaning & home care"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 10–30 ml on request"],
    ingredient: rosemary,
    ingredientAlt: "Fresh rosemary sprigs used for rosemary essential oil",
    color: "#97AE93",
  },
  {
    slug: "chandan",
    metaTitle: "Chandan (Sandalwood) Oil — Bulk Supplier, India",
    metaDescription: "Sandalwood oil distilled from mature heartwood — attar base, fixative and skincare ingredient. Bulk and private-label supply from Innamora, India.",
    harvest: "Mature sandalwood heartwood is selected, chipped and powdered so the oil can be released evenly.",
    name: "Chandan",
    native: "चंदन",
    type: "Essential Oil",
    family: "Woody",
    botanical: "Santalum album (Sandalwood)",
    part: "Heartwood",
    method: "Steam / hydro-distillation",
    base: "100% sandalwood oil",
    appearance: "Pale yellow to yellow viscous oil",
    odour: "Soft, creamy, milky and long-lasting woody",
    notes: { top: ["Soft spice"], heart: ["Creamy sandalwood"], base: ["Milky wood", "Balsamic"] },
    tagline: "Creamy sandalwood — the heart and base of Indian perfumery.",
    summary:
      "Sandalwood oil distilled from mature heartwood: the traditional base for Indian attars and a prized fixative for fine fragrance, skincare, incense and ritual use.",
    process:
      "Mature heartwood is chipped and slowly distilled; the viscous oil is separated, rested and filtered. Chandan is also the traditional base oil into which our floral attars are distilled — it fixes and rounds every fragrance it carries.",
    applications: ["Attar base oil", "Fine fragrance fixative", "Skincare", "Incense & dhoop", "Pooja & rituals"],
    supply: ["Bulk: 1 kg aluminium bottles", "Smaller bulk lots on request", "Retail-ready 6–12 ml on request"],
    ingredient: chandan,
    ingredientAlt: "Cross-section of a sandalwood (chandan) log showing the fragrant heartwood",
    color: "#D2A46A",
  },
  {
    slug: "jasmine",
    metaTitle: "Jasmine (Mogra) Attar — Bulk Supplier, India",
    metaDescription: "Alcohol-free mogra jasmine attar, traditionally deg-bhapka distilled. Bulk, private-label and custom-packed supply from Innamora, India.",
    harvest: "Mogra buds are picked in the early evening just before they open and loaded into the deg as they bloom.",
    name: "Jasmine",
    native: "मोगरा",
    type: "Attar",
    family: "Floral",
    botanical: "Jasminum sambac (Mogra)",
    part: "Fresh flower buds",
    method: "Deg-bhapka distillation",
    base: "Sandalwood oil (traditional) or customer-specified base",
    appearance: "Golden yellow oil",
    odour: "Radiant, sweet and green mogra jasmine",
    notes: { top: ["Green leaf"], heart: ["Mogra jasmine"], base: ["Soft amber", "Sandalwood"] },
    tagline: "Pure · Natural · Timeless mogra attar.",
    summary:
      "A radiant mogra attar distilled from freshly opened Jasminum sambac buds — pure, natural and timeless. A favourite for attar, hair oil, incense and fine-fragrance houses.",
    process: DEG_BHAPKA,
    applications: ["Attar & perfumery", "Hair oils", "Incense & agarbatti", "Soaps & toiletries", "Pooja & rituals"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 6–12 ml on request"],
    bottle: jasmineBottle,
    bottleAlt: "Amora Jasmine Attar in an ornate gold bottle with fresh mogra flowers",
    ingredient: jasmine,
    ingredientAlt: "Fresh white mogra (Jasminum sambac) flowers in a brass bowl",
    color: "#E9D9A6",
  },
  {
    slug: "champa",
    metaTitle: "Champa Attar — Bulk Supplier & Manufacturer",
    metaDescription: "Golden champa attar — warm, fruity and honeyed. Alcohol-free, deg-bhapka distilled, for attar, incense and perfumery. Bulk supply from India.",
    harvest: "Golden champa blossoms are gathered by hand at first bloom and distilled without delay to keep their fruity heart.",
    name: "Champa",
    native: "चंपा",
    type: "Attar",
    family: "Floral",
    botanical: "Magnolia champaca (Golden champa)",
    part: "Fresh flowers",
    method: "Deg-bhapka distillation",
    base: "Sandalwood oil (traditional) or customer-specified base",
    appearance: "Golden to amber oil",
    odour: "Warm, fruity-floral with tea-like and honeyed facets",
    notes: { top: ["Apricot", "Tea"], heart: ["Golden champa"], base: ["Honey", "Warm woods"] },
    tagline: "Golden champa — warm, fruity and honey-rich.",
    summary:
      "A luminous attar from golden champa blossoms: warm, fruity-floral and gently honeyed. Prized in incense, attar and fine fragrance for its rich, sunlit character.",
    process: DEG_BHAPKA,
    applications: ["Attar & perfumery", "Incense & agarbatti", "Fine fragrance compounding", "Hair oils", "Pooja & rituals"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 6–12 ml on request"],
    ingredient: champa,
    ingredientAlt: "Golden yellow champa (Magnolia champaca) flower",
    color: "#E5B04F",
  },
  {
    slug: "raat-rani",
    metaTitle: "Raat Rani Attar — Bulk Supplier & Manufacturer",
    metaDescription: "Heady raat rani (night jasmine) attar, alcohol-free and deg-bhapka distilled. Bulk and private-label supply for perfumery and incense, India.",
    harvest: "Raat rani releases its scent after dark, so clusters are gathered at night and taken straight to the stills.",
    name: "Raat Rani",
    native: "रात रानी",
    type: "Attar",
    family: "Floral",
    botanical: "Cestrum nocturnum (Night-blooming jasmine)",
    part: "Night-picked flowers",
    method: "Deg-bhapka distillation",
    base: "Sandalwood oil (traditional) or customer-specified base",
    appearance: "Pale yellow to golden oil",
    odour: "Intense, sweet, heady night-blooming floral",
    notes: { top: ["Night air", "Green"], heart: ["Raat rani"], base: ["Sweet musk", "Sandalwood"] },
    tagline: "The queen of the night — heady and long-lasting.",
    summary:
      "An intense, heady floral attar from raat rani, the flower that releases its fragrance only after dark. Exceptional strength and longevity for attar, incense and evening fragrances.",
    process:
      "Raat rani releases its scent after sunset, so blossoms are gathered at night and distilled without delay. The fragrant vapours are absorbed into the base oil through the deg-bhapka method, then the attar is rested to mature. No alcohol or solvents are used.",
    applications: ["Attar & perfumery", "Incense & agarbatti", "Home fragrance", "Soaps", "Hospitality signature scents"],
    supply: ["Bulk: 1 kg / 5 kg aluminium bottles", "25 kg HDPE drums", "Retail-ready 6–12 ml on request"],
    ingredient: raatKiRani,
    ingredientAlt: "Clusters of white raat rani (night-blooming jasmine) flowers",
    color: "#B6A6C9",
  },
];

export const TYPES = ["Attar", "Essential Oil", "Hydrosol"];

export const INDUSTRIES = [
  { icon: "drop", title: "Perfumery & Attar Houses", text: "Natural attars and oils for attar brands, fine-fragrance houses and compounders." },
  { icon: "flask", title: "Cosmetics & Personal Care", text: "Soaps, lotions, hair oils, skincare and toiletries — consistent, batch-matched supply." },
  { icon: "flame", title: "Incense & Pooja", text: "Agarbatti, dhoop and ritual oils with authentic, long-lasting character." },
  { icon: "leaf", title: "Wellness & Aromatherapy", text: "Pure essential oils and hydrosols for spas, wellness brands and therapists." },
  { icon: "home", title: "Home Fragrance", text: "Diffuser oils, room mists and candles for home-fragrance labels." },
  { icon: "gift", title: "Hospitality & Corporate", text: "Signature scents for hotels and retail spaces, and custom-branded corporate gifts." },
];

/* Step-by-step manufacturing story shown on each product page.
   The first step uses the product's own ingredient photo. */
export function processSteps(p) {
  const harvest = { title: p.slug === "attar-mitti" ? "Prepare the earth" : "Harvest", text: p.harvest, image: p.ingredient, alt: p.ingredientAlt };
  if (p.type === "Attar")
    return [
      harvest,
      { title: "Load the deg", text: "The botanical is loaded with water into a copper deg and the lid is sealed with clay so no vapour escapes.", image: still, alt: "Copper deg over a traditional brick furnace" },
      { title: "Distil into the base", text: "A slow wood fire carries the aromatic vapour through a bamboo chonga into a copper bhapka holding natural sandalwood oil (or your chosen base), cooled in water. The oil absorbs the fragrance — no alcohol or solvents.", image: stills, alt: "Copper distillation vessels" },
      { title: "Repeat & mature", text: "Fresh charges are distilled over several days until the base is saturated. The attar is then rested so the notes settle and round.", image: clay, alt: "Traditional vessels used to rest and mature attar" },
      { title: "Test & fill", text: "Each batch is checked for odour, colour and clarity against the approved standard, filtered and filled into bulk or retail packaging.", image: oil, alt: "Finished golden attar oil in a glass bottle" },
    ];
  if (p.type === "Essential Oil")
    return [
      harvest,
      { title: "Steam distil", text: "Steam passes through the plant material in the still, releasing the volatile aromatic oil.", image: stills, alt: "Copper distillation vessels" },
      { title: "Separate", text: "The vapour condenses and the essential oil separates naturally from the water and is drawn off — nothing is added.", image: still, alt: "Traditional copper still" },
      { title: "Rest & filter", text: "The oil is rested and filtered to remove moisture and fine particles.", image: clay, alt: "Vessels for resting oils" },
      { title: "Test & fill", text: "Checked against specification and filled neat into aluminium bottles, drums or retail packaging.", image: oil, alt: "Finished oil in a glass bottle" },
    ];
  return [
    harvest,
    { title: "Hydro-distil", text: "Petals are gently distilled in water in copper stills at low heat to protect their delicate scent.", image: still, alt: "Traditional copper still" },
    { title: "Collect the distillate", text: "The fragrant distillate water — the true hydrosol — is collected as it condenses.", image: stills, alt: "Copper distillation vessels" },
    { title: "Rest & filter", text: "The rose water is rested and filtered. No alcohol, fragrance or preservative is added at this stage.", image: clay, alt: "Vessels for resting rose water" },
    { title: "Test & fill", text: "Checked for clarity and odour, then filled into carboys, drums or retail bottles.", image: oil, alt: "Finished product in glass" },
  ];
}

export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
