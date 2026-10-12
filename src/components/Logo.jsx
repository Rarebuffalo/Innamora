import { LOGO } from "../data/logo.js";

/* Amora wordmark traced from the original logo. The word inherits
   currentColor (white on dark areas); the tagline uses the gold accent. */
export default function Logo({ tagline = false, className = "", decorative = false }) {
  return (
    <svg className={`logo ${className}`} viewBox={tagline ? "-2 -2 350 87" : "-2 -2 350 62"} xmlns="http://www.w3.org/2000/svg"
      {...(decorative ? { "aria-hidden": "true", focusable: "false" } : { role: "img", "aria-label": "Amora — Innamora Fragrances & Aromatics" })}>
      <path className="lg-word" d={LOGO.word} />
      {tagline && <path className="lg-accent" d={LOGO.tag} />}
    </svg>
  );
}
