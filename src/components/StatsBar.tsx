"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "5", label: "Welpen verfuegbar" },
  { value: "11", suffix: " Wo.", label: "Alter der Welpen" },
  { value: "100", suffix: "%", label: "Geimpft & Gechipt" },
  { value: "699", prefix: "EUR ", label: "Preis pro Welpe" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: ref.current!, start: "top 90%", once: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative -mt-8 z-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-rose/8 border border-warm-gray/30 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center opacity-0">
              <p className="text-3xl md:text-4xl font-bold text-rose mb-1">
                {stat.prefix}{stat.value}{stat.suffix}
              </p>
              <p className="text-xs text-foreground/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
