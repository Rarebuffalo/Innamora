import { useEffect, useRef, useState, useCallback } from "react";
import ProductCard from "./ProductCard.jsx";
import Icon from "./Icon.jsx";

/* Auto-advancing product carousel (3.5 s) with arrows, dots, swipe and a
   pause control. Pauses on hover/focus and when the tab is hidden; starts
   paused for visitors who prefer reduced motion. */
const INTERVAL = 3500;
const perView = () => (typeof window === "undefined" ? 1 : innerWidth >= 1280 ? 4 : innerWidth >= 1000 ? 3 : innerWidth >= 640 ? 2 : 1);

export default function ProductCarousel({ items }) {
  const [per, setPer] = useState(1);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const touch = useRef(null);
  const max = Math.max(0, items.length - per);

  useEffect(() => {
    const onResize = () => setPer(perView());
    onResize();
    addEventListener("resize", onResize);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    return () => removeEventListener("resize", onResize);
  }, []);
  useEffect(() => setIndex((i) => Math.min(i, max)), [max]);

  const go = useCallback((i) => setIndex(i > max ? 0 : i < 0 ? max : i), [max]);

  useEffect(() => {
    if (!playing || hover) return;
    const t = setInterval(() => { if (!document.hidden) setIndex((i) => (i >= max ? 0 : i + 1)); }, INTERVAL);
    return () => clearInterval(t);
  }, [playing, hover, max]);

  const onTouchStart = (e) => (touch.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touch.current = null;
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Our products"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
      <div className="carousel__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="carousel__track" style={{ transform: `translateX(-${(index * 100) / per}%)` }} aria-live={playing && !hover ? "off" : "polite"}>
          {items.map((p, i) => (
            <div className="carousel__slide" key={p.slug} role="group" aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`} aria-hidden={i < index || i >= index + per ? "true" : undefined}
              inert={i < index || i >= index + per}>
              <ProductCard p={p} lazy={i >= 4} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__bar">
        <div className="carousel__dots">
          {Array.from({ length: max + 1 }, (_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} aria-current={i === index ? "true" : undefined} onClick={() => go(i)} />
          ))}
        </div>
        <div className="carousel__ctrls">
          <button className="carousel__btn carousel__btn--pause" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause automatic sliding" : "Play automatic sliding"}>
            <Icon name={playing ? "pause" : "play"} />
          </button>
          <button className="carousel__btn" onClick={() => go(index - 1)} aria-label="Previous products"><Icon name="left" /></button>
          <button className="carousel__btn" onClick={() => go(index + 1)} aria-label="Next products"><Icon name="arrow" /></button>
        </div>
      </div>
    </div>
  );
}
