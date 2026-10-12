import { useMemo, useState } from "react";
import { bottleSVG, boxSVG, shade } from "../lib/packaging.js";
import Icon from "./Icon.jsx";

/* Packaging Atelier — clients compose bottle, glass, closure, gift box and
   branding, then send the specification with their enquiry. */
const SHAPES = [
  { id: "facet", label: "Attar Facet", size: "6 ml" },
  { id: "roll", label: "Roll-on", size: "8 ml" },
  { id: "dome", label: "Moon Dome", size: "12 ml" },
  { id: "apothecary", label: "Apothecary", size: "30 ml" },
  { id: "spray", label: "Atomiser", size: "50 ml" },
];
const GLASS = [
  { id: "clear", label: "Crystal clear" },
  { id: "amber", label: "Amber" },
  { id: "frost", label: "Frosted" },
  { id: "smoke", label: "Smoked" },
];
const CAPS = [
  { id: "gold", label: "Antique gold", sw: "linear-gradient(135deg,#f5d58e,#b98a3e 55%,#7a5520)" },
  { id: "rose", label: "Rose gold", sw: "linear-gradient(135deg,#f6c9b5,#c98a72 55%,#8c5444)" },
  { id: "silver", label: "Silver", sw: "linear-gradient(135deg,#ffffff,#b8bcc2 55%,#6f747b)" },
  { id: "black", label: "Matte black", sw: "linear-gradient(135deg,#4a4440,#1c1916 60%,#0b0a09)" },
  { id: "wood", label: "Sheesham wood", sw: "linear-gradient(135deg,#a7704a,#6e4126 55%,#40220f)" },
];
const BOXES = [
  { id: "ivory", label: "Ivory linen", fill: "#EFE6D6", ink: "#8E5A28", pattern: "linen" },
  { id: "kraft", label: "Kraft earth", fill: "#C19A6B", ink: "#3A2414", pattern: "fibre" },
  { id: "velvet", label: "Midnight velvet", fill: "#1E1A2B", ink: "#D9AE6E", pattern: "velvet" },
  { id: "jaali", label: "Jaali cut", fill: "#7A2E2A", ink: "#E8C58E", pattern: "jaali" },
  { id: "rosewood", label: "Rosewood chest", fill: "#5A3220", ink: "#E6C08A", pattern: "grain" },
];
const find = (arr, id) => arr.find((x) => x.id === id);

function Group({ title, value, children }) {
  return (
    <div className="opt-group" role="group" aria-label={title}>
      <div className="opt-group__head"><h3>{title}</h3><span>{value}</span></div>
      <div className="opts">{children}</div>
    </div>
  );
}

export default function PackagingAtelier({ products }) {
  const [s, setS] = useState({ scent: "jasmine", shape: "facet", glass: "clear", cap: "gold", box: "ivory", label: "", showBox: true });
  const set = (k, v) => setS((o) => ({ ...o, [k]: v }));
  const scent = products.find((p) => p.slug === s.scent) || products[0];
  const shape = find(SHAPES, s.shape), glass = find(GLASS, s.glass), cap = find(CAPS, s.cap), box = find(BOXES, s.box);
  const brand = s.label.trim();

  const bottle = useMemo(() => bottleSVG({ id: "atb", shape: s.shape, glass: s.glass, cap: s.cap, liquid: scent.color, level: 0.7, label: brand || scent.name }), [s.shape, s.glass, s.cap, scent, brand]);
  const giftbox = useMemo(() => boxSVG({ id: "atx", fill: box.fill, ink: box.ink, pattern: box.pattern, label: brand || "Innamora" }), [box, brand]);

  const code = ["INN", s.shape, s.glass, s.cap, s.box].map((x) => x.slice(0, 2)).join("-").toUpperCase();
  const summary = `${scent.name} · ${shape.label} ${shape.size} · ${glass.label} glass · ${cap.label} closure · ${s.showBox ? `${box.label} gift box` : "No gift box"}${brand ? ` · Branding: "${brand}"` : ""} (ref ${code})`;
  const href = `/contact?type=packaging&product=${scent.slug}&design=${encodeURIComponent(summary)}`;

  const press = (k, id) => ({ "aria-pressed": s[k] === id, onClick: () => set(k, id), type: "button" });

  return (
    <div className="atelier">
      <div className={`atelier__stage${s.showBox ? "" : " no-box"}`} aria-label={`Preview: ${summary}`} role="img">
        <div className="atelier__spec"><span><b>{shape.label}</b> · {shape.size}</span><span>{code}</span></div>
        <div className="atelier__box" dangerouslySetInnerHTML={{ __html: giftbox }} />
        <div className="atelier__bottle" dangerouslySetInnerHTML={{ __html: bottle }} />
        <button type="button" className="btn btn--light btn--sm atelier__toggle" aria-pressed={!s.showBox} onClick={() => set("showBox", !s.showBox)}>
          {s.showBox ? "Hide box" : "Show box"}
        </button>
      </div>

      <div>
        <Group title="Fragrance" value={scent.name}>
          {products.map((p) => (
            <button key={p.slug} className="opt opt--sw" title={p.name} aria-label={p.name}
              style={{ "--sw": `radial-gradient(circle at 35% 30%, ${shade(p.color, 0.4)}, ${p.color} 55%, ${shade(p.color, -0.3)})` }} {...press("scent", p.slug)} />
          ))}
        </Group>
        <Group title="Bottle" value={`${shape.label} · ${shape.size}`}>
          {SHAPES.map((x) => (
            <button key={x.id} className="opt opt--shape" aria-label={`${x.label}, ${x.size}`} {...press("shape", x.id)}>
              <span dangerouslySetInnerHTML={{ __html: bottleSVG({ id: `ats-${x.id}`, shape: x.id, liquid: "#D2A46A", level: 0.6 }) }} />
              <small>{x.label}</small>
            </button>
          ))}
        </Group>
        <Group title="Glass" value={glass.label}>
          {GLASS.map((x) => <button key={x.id} className="opt" {...press("glass", x.id)}>{x.label}</button>)}
        </Group>
        <Group title="Closure" value={cap.label}>
          {CAPS.map((x) => <button key={x.id} className="opt opt--sw" title={x.label} aria-label={x.label} style={{ "--sw": x.sw }} {...press("cap", x.id)} />)}
        </Group>
        <Group title="Gift box" value={box.label}>
          {BOXES.map((x) => (
            <button key={x.id} className="opt opt--sw" title={x.label} aria-label={x.label}
              style={{ "--sw": `linear-gradient(135deg, ${shade(x.fill, 0.15)}, ${x.fill} 50%, ${shade(x.fill, -0.2)})` }} {...press("box", x.id)} />
          ))}
        </Group>
        <div className="opt-group">
          <div className="field">
            <label htmlFor="atelier-brand">Your brand name on label &amp; box</label>
            <input id="atelier-brand" maxLength={14} placeholder="e.g. Your Brand" value={s.label} onChange={(e) => set("label", e.target.value)} autoComplete="off" />
          </div>
        </div>
        <div className="actions" style={{ marginTop: 26, alignItems: "center" }}>
          <a className="btn btn--gold" href={href}>Request this packaging <Icon name="arrow" /></a>
          <span className="form__note">MOQ, unit cost and lead time shared with your quote.</span>
        </div>
      </div>
    </div>
  );
}
