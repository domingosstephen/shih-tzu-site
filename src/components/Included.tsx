"use client";

import { useScrollAnimations } from "@/lib/useGSAP";

const items = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Impfungen aktuell", desc: "Alle Impfungen auf dem neuesten Stand" },
  { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Entwurmt", desc: "Vollstaendig entwurmt und parasitenbehandelt" },
  { icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", title: "Gechipt", desc: "Mikrochip zur Identifikation implantiert" },
  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Gesundheitszeugnis", desc: "Offizielles Gesundheitszeugnis vom Tierarzt" },
  { icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2", title: "Registrierung", desc: "Hunderegistrierung inklusive" },
  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Lebenslange Unterstuetzung", desc: "Wir stehen Ihnen immer zur Verfuegung" },
];

export default function Included() {
  const containerRef = useScrollAnimations();

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="fade-up inline-block text-rose font-semibold text-sm tracking-widest uppercase mb-3">
            Alles Inklusive
          </span>
          <h2 className="fade-up text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Was Sie <span className="text-gradient">erhalten</span>
          </h2>
          <p className="fade-up text-foreground/55 max-w-2xl mx-auto text-lg">
            Jeder Welpe kommt mit umfassender Gesundheitsversorgung und Dokumentation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="fade-up flex items-start gap-4 bg-cream rounded-2xl p-6 border border-warm-gray/20 hover:border-rose/20 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-rose-light flex items-center justify-center text-rose flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-foreground/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
