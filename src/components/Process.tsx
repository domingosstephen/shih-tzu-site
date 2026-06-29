"use client";

import { useScrollAnimations } from "@/lib/useGSAP";

const steps = [
  { step: "01", title: "Welpe auswaehlen & bewerben", description: "Schauen Sie sich unsere verfuegbaren Welpen an und senden Sie uns eine Anfrage. Wir antworten innerhalb von 48 Stunden." },
  { step: "02", title: "Welpe reservieren", description: "Sichern Sie Ihren Wunschwelpen mit einer Anzahlung. Wir halten Sie mit Fotos und Updates auf dem Laufenden." },
  { step: "03", title: "Willkommen zu Hause", description: "Holen Sie Ihren Welpen mit allen Gesundheitsdokumenten, Impfpass und Registrierung ab." },
];

export default function Process() {
  const containerRef = useScrollAnimations();

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="fade-up inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Einfacher Ablauf
          </span>
          <h2 className="fade-up text-4xl md:text-5xl font-bold tracking-tight mb-4">
            So <span className="text-gradient">funktioniert&apos;s</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="fade-up flex items-start gap-6 bg-white rounded-2xl p-8 shadow-sm border border-warm-gray/20 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose to-accent-light text-white flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-md">
                {step.step}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
