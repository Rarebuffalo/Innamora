/* Packaging Atelier renderers — SVG strings for bottles and gift boxes.
   Ported from the original design; used only by the PackagingAtelier island. */
import { LOGO } from "../data/logo.js";

let uid = 0;
const nextId = (p) => `${p}${++uid}`;

  function hexToRgb(h) {
  h = h.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
}
/* amt > 0 lightens toward white, amt < 0 darkens toward black */
function shade(hex, amt) {
  const [r, g, b] = hexToRgb(hex);
  const t = amt < 0 ? 0 : 255;
  const p = Math.abs(amt);
  return rgbToHex(r + (t - r) * p, g + (t - g) * p, b + (t - b) * p);
}
function mix(a, b, t) {
  const A = hexToRgb(a), B = hexToRgb(b);
  return rgbToHex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t);
}

/* ---------- bottle geometry (viewBox 0 0 200 320, base at y=300) ---------- */
const SHAPES = {
  facet: {
    body: "M74 160 H126 L148 184 V272 L128 300 H72 L52 272 V184 Z",
    neck: "M90 138 H110 V161 H90 Z",
    cap: [
      "M84 122 H116 V141 H84 Z",
      "M88 123 C88 92 100 60 100 34 C100 60 112 92 112 123 Z",
      "M95 30 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z",
    ],
    facets: "M74 160 L84 184 V272 L72 300 M126 160 L116 184 V272 L128 300 M84 184 H116 M84 272 H116",
    top: 160, label: { y: 228, w: 50, h: 34 },
  },
  roll: {
    body: "M72 128 H128 Q136 128 136 136 V292 Q136 300 128 300 H72 Q64 300 64 292 V136 Q64 128 72 128 Z",
    neck: "M86 114 H114 V129 H86 Z",
    cap: ["M76 42 Q76 32 86 32 H114 Q124 32 124 42 V114 H76 Z", "M76 100 H124 V104 H76 Z"],
    facets: "",
    top: 128, label: { y: 214, w: 56, h: 52 },
  },
  dome: {
    body: "M100 168 C150 168 172 204 172 238 C172 276 140 300 100 300 C60 300 28 276 28 238 C28 204 50 168 100 168 Z",
    neck: "M88 146 H112 V172 H88 Z",
    cap: ["M83 134 H117 V150 H83 Z", "M68 106 a32 32 0 1 0 64 0 a32 32 0 1 0 -64 0 Z"],
    facets: "",
    top: 168, label: { y: 240, w: 70, h: 34 },
  },
  apothecary: {
    body: "M58 142 H142 Q156 142 156 156 V286 Q156 300 142 300 H58 Q44 300 44 286 V156 Q44 142 58 142 Z",
    neck: "M84 122 H116 V144 H84 Z",
    cap: ["M70 116 H130 V84 L117 62 H83 L70 84 Z", "M78 112 H122 V126 H78 Z"],
    facets: "",
    top: 142, label: { y: 222, w: 84, h: 56 },
  },
  spray: {
    body: "M58 132 H142 Q150 132 150 140 V292 Q150 300 142 300 H58 Q50 300 50 292 V140 Q50 132 58 132 Z",
    neck: "M88 82 H112 V110 H88 Z M112 91 H121 V98 H112 Z",
    cap: ["M78 108 H122 V134 H78 Z"],
    facets: "M100 134 V292",
    top: 132, label: { y: 216, w: 70, h: 60 },
  },
};

const CAPS = {
  gold: ["#F7DD9C", "#C2954A", "#7A5520"],
  rose: ["#F8D3C2", "#C98A72", "#8C5444"],
  silver: ["#FFFFFF", "#B8BCC2", "#6F747B"],
  black: ["#4A4440", "#1C1916", "#0B0A09"],
  wood: ["#B57D55", "#6E4126", "#40220F"],
};

const GLASS = {
  clear: { tint: "#FFFFFF", alpha: 0.12, over: null },
  amber: { tint: "#B8691E", alpha: 0.28, over: ["#8A4A12", 0.32] },
  frost: { tint: "#FFFFFF", alpha: 0.42, over: ["#FFFFFF", 0.38] },
  smoke: { tint: "#2A2624", alpha: 0.35, over: ["#1E1B19", 0.38] },
};

function wavePath(y) {
  let d = `M-200 ${y}`;
  for (let x = -200; x < 400; x += 100) d += ` q25 -5 50 0 t50 0`;
  return d + " V320 H-200 Z";
}

/**
 * bottleSVG — returns an SVG string.
 * opts: shape, glass, cap, liquid (hex), level (0-1), label, labelStyle ('paper'|'engrave'), cls
 */
function bottleSVG(opts = {}) {
  const o = Object.assign({ shape: "facet", glass: "clear", cap: "gold", liquid: "#D2A46A", level: 0.7, label: "", cls: "" }, opts);
  const S = SHAPES[o.shape] || SHAPES.facet;
  const C = CAPS[o.cap] || CAPS.gold;
  const G = GLASS[o.glass] || GLASS.clear;
  const id = opts.id || nextId("b");
  const fillY = S.top + (300 - S.top) * (1 - o.level);
  const liqHi = shade(o.liquid, 0.35), liqLo = shade(o.liquid, -0.28);
  const capPaths = S.cap.map((d) => `<path d="${d}" fill="url(#${id}cap)"/>`).join("");
  const overlay = G.over ? `<path d="${S.body}" fill="${G.over[0]}" opacity="${G.over[1]}"/>` : "";
  let label = "";
  if (o.label) {
    const L = S.label;
    const txt = escapeXml(o.label).slice(0, 14);
    const fs = Math.min(15, (L.w * 1.7) / Math.max(4, txt.length));
    label = `<g class="b-label">
      <rect x="${100 - L.w / 2}" y="${L.y - L.h / 2}" width="${L.w}" height="${L.h}" rx="3" fill="#F7F1E8" opacity=".94"/>
      <rect x="${100 - L.w / 2 + 3}" y="${L.y - L.h / 2 + 3}" width="${L.w - 6}" height="${L.h - 6}" rx="2" fill="none" stroke="#B0743A" stroke-width=".8"/>
      <text x="100" y="${L.y + fs * 0.34}" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-style="italic" font-weight="600" font-size="${fs}" fill="#3A2414">${txt}</text>
    </g>`;
  }
  return `<svg class="bottle ${o.cls}" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="${id}cap" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="${C[0]}"/><stop offset=".5" stop-color="${C[1]}"/><stop offset="1" stop-color="${C[2]}"/>
      </linearGradient>
      <linearGradient id="${id}liq" x1="0" x2="0" y1="0" y2="1">
        <stop class="liq-hi" offset="0" stop-color="${liqHi}"/><stop class="liq-lo" offset="1" stop-color="${liqLo}"/>
      </linearGradient>
      <linearGradient id="${id}glass" x1="0" x2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".18" stop-color="${G.tint}" stop-opacity="${G.alpha}"/>
        <stop offset=".8" stop-color="${G.tint}" stop-opacity="${G.alpha}"/><stop offset="1" stop-color="#000" stop-opacity=".18"/>
      </linearGradient>
      <radialGradient id="${id}sh"><stop offset="0" stop-color="#000" stop-opacity=".28"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
      <clipPath id="${id}clip"><path d="${S.body}"/></clipPath>
    </defs>
    <ellipse cx="100" cy="303" rx="78" ry="9" fill="url(#${id}sh)"/>
    <path d="${S.neck}" fill="url(#${id}glass)" stroke="rgba(255,255,255,.5)" stroke-width="1"/>
    <path d="${S.body}" fill="url(#${id}glass)"/>
    <g clip-path="url(#${id}clip)">
      <g class="liquid" style="transform:translateY(${fillY}px)">
        <g class="wave"><path d="${wavePath(0)}" fill="url(#${id}liq)"/></g>
        <g class="wave wave--back"><path d="${wavePath(3)}" fill="${liqHi}" opacity=".35"/></g>
      </g>
      ${overlay}
      <path d="M66 ${S.top + 18} q-4 60 0 118" stroke="#fff" stroke-opacity=".55" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M78 ${S.top + 26} q-2 30 0 46" stroke="#fff" stroke-opacity=".35" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </g>
    ${S.facets ? `<path d="${S.facets}" stroke="#fff" stroke-opacity=".35" stroke-width="1" fill="none"/>` : ""}
    <path d="${S.body}" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="1.2"/>
    <path d="${S.body}" fill="none" stroke="rgba(40,24,10,.18)" stroke-width=".8"/>
    ${label}
    <g class="cap">${capPaths}
      <path d="${S.cap[0]}" fill="none" stroke="rgba(255,255,255,.35)" stroke-width=".8"/>
    </g>
  </svg>`;
}

/* ---------- gift box (viewBox 0 0 400 340) ---------- */
function boxSVG(opts = {}) {
  const o = Object.assign({ fill: "#EFE6D6", ink: "#8E5A28", pattern: "linen", label: "" }, opts);
  const id = opts.id || nextId("x");
  const top = shade(o.fill, 0.12), side = shade(o.fill, -0.22), front = o.fill;
  const patterns = {
    linen: `<pattern id="${id}p" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 3 H6 M3 0 V6" stroke="${o.ink}" stroke-opacity=".08" stroke-width=".6"/></pattern>`,
    fibre: `<pattern id="${id}p" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="4" cy="6" r=".9" fill="#3A2414" opacity=".25"/><circle cx="15" cy="16" r=".7" fill="#3A2414" opacity=".2"/><path d="M8 18 l5 -2" stroke="#fff" stroke-opacity=".25" stroke-width=".6"/></pattern>`,
    velvet: `<radialGradient id="${id}p" cx=".3" cy=".25" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#000" stop-opacity=".1"/></radialGradient>`,
    jaali: `<pattern id="${id}p" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M13 1 L25 13 L13 25 L1 13 Z" fill="none" stroke="${o.ink}" stroke-opacity=".55" stroke-width="1"/><circle cx="13" cy="13" r="3.2" fill="none" stroke="${o.ink}" stroke-opacity=".55" stroke-width="1"/></pattern>`,
    grain: `<pattern id="${id}p" width="120" height="14" patternUnits="userSpaceOnUse"><path d="M0 7 C30 2 60 12 120 7" stroke="#000" stroke-opacity=".18" fill="none" stroke-width="1"/><path d="M0 12 C40 9 80 14 120 11" stroke="#fff" stroke-opacity=".08" fill="none"/></pattern>`,
  };
  const txt = escapeXml(o.label || "").slice(0, 22);
  const word = LOGO.word;
  return `<svg class="giftbox" viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>${patterns[o.pattern] || patterns.linen}
      <linearGradient id="${id}f" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${shade(front, 0.05)}"/><stop offset="1" stop-color="${shade(front, -0.08)}"/></linearGradient>
    </defs>
    <ellipse cx="210" cy="326" rx="190" ry="12" fill="#000" opacity=".12"/>
    <polygon class="gb-top" points="40,120 92,80 372,80 320,120" fill="${top}"/>
    <polygon points="320,120 372,80 372,276 320,322" fill="${side}"/>
    <rect x="40" y="120" width="280" height="202" fill="url(#${id}f)"/>
    <rect x="40" y="120" width="280" height="202" fill="url(#${id}p)"/>
    <rect x="54" y="134" width="252" height="174" fill="none" stroke="${o.ink}" stroke-opacity=".7" stroke-width="1"/>
    <rect x="58" y="138" width="244" height="166" fill="none" stroke="${o.ink}" stroke-opacity=".35" stroke-width=".6"/>
    <g transform="translate(180 212) scale(.42) translate(-173 -29)" fill="${o.ink}"><path d="${word}"/></g>
    ${txt ? `<text x="180" y="262" text-anchor="middle" font-family="Jost, sans-serif" font-size="11" letter-spacing="3.5" fill="${o.ink}">${txt.toUpperCase()}</text>` : ""}
    <polygon points="40,120 92,80 372,80 320,120" fill="none" stroke="#fff" stroke-opacity=".25"/>
  </svg>`;
}


function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export { bottleSVG, boxSVG, shade };
