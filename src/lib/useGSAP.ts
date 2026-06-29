"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".slide-in-left").forEach((el) => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".slide-in-right").forEach((el) => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".scale-in").forEach((el) => {
        gsap.to(el, {
          opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
