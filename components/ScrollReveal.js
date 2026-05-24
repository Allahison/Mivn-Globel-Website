"use client";
import { useEffect, useRef } from "react";

const initTransform = {
  up: "translate3d(0,38px,0)",
  left: "translate3d(-38px,0,0)",
  right: "translate3d(38px,0,0)",
  fade: "translate3d(0,0,0)",
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.12,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.transition = `opacity 0.72s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.72s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate3d(0,0,0)";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initTransform[direction] ?? initTransform.up,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
