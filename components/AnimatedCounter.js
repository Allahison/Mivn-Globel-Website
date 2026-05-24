"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, duration = 1800 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    // Parse e.g. "200+", "98%", "5+"
    const match = value.match(/^([\d.]+)([^0-9.]*)$/);
    if (!match) { setDisplay(value); return; }

    const num = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    const decimals = isDecimal ? (match[1].split(".")[1]?.length || 0) : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;
            setDisplay(
              (isDecimal ? current.toFixed(decimals) : Math.round(current)) + suffix
            );
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
