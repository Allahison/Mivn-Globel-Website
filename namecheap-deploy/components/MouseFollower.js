"use client";
import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const active = useRef(false);

  useEffect(() => {
    // Touch devices ke liye skip karo
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!active.current) {
        active.current = true;
        ring.current = { x: e.clientX, y: e.clientY };
        dotRef.current && (dotRef.current.style.opacity = "1");
        ringRef.current && (ringRef.current.style.opacity = "1");
      }
    };

    const onLeave = () => {
      dotRef.current && (dotRef.current.style.opacity = "0");
      ringRef.current && (ringRef.current.style.opacity = "0");
    };

    const onEnter = () => {
      dotRef.current && (dotRef.current.style.opacity = "1");
      ringRef.current && (ringRef.current.style.opacity = "1");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // rAF loop — sirf transform update, no layout reflow
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px,${mouse.current.y}px,0)`;
      }
      // Ring lerp — smooth lag effect
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px,${ring.current.y}px,0)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(99,102,241,0.55)",
          transform: "translate3d(-200px,-200px,0)",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Fast dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: -5,
          left: -5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#6366f1,#3b82f6)",
          boxShadow: "0 0 8px rgba(99,102,241,0.7)",
          transform: "translate3d(-200px,-200px,0)",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
