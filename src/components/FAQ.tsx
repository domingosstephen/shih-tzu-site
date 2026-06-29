"use client";

import { useState } from "react";
import { useScrollAnimations } from "@/lib/useGSAP";

const faqs = [
  { q: "Was ist ein Shih Tzu?", a: "Der Shih Tzu ist eine alte chinesische Hunderasse, die als 'Loewenhund' bekannt ist. Sie sind kleine, robuste Hunde mit einem langen, seidigen Fell und einem freundlichen, anhanglichen Wesen. Sie wurden urspruenglich als Palasthunde chinesischer Kaiser gezuechtet." },
  { q: "Sind Shih Tzus hypoallergen?", a: "Shih Tzus gelten als hypoallergene Rasse, da sie sehr wenig Haare verlieren. Ihr Fell aehnelt eher menschlichem Haar als typischem Hundefell, was sie ideal fuer Allergiker macht." },
  { q: "Wie gross werden Shih Tzus?", a: "Ausgewachsene Shih Tzus wiegen typischerweise 4-8 kg und erreichen eine Schulterhoehe von 20-28 cm. Sie sind kompakte, kleine Hunde, die perfekt fuer Wohnungen geeignet sind." },
  { q: "Was ist im Preis enthalten?", a: "Jeder Welpe kommt fuer 699 EUR mit aktuellen Impfungen, Entwurmung, Mikrochip, Gesundheitszeugnis vom Tierarzt, Hunderegistrierung und lebenslanger Zuechterunterstuetzung." },
  { q: "Wie laeuft der Kaufprozess ab?", a: "Senden Sie uns eine Anfrage ueber unser Kontaktformular. Nach Pruefung koennen Sie Ihren Wunschwelpen mit einer Anzahlung reservieren. Die Abholung erfolgt dann zum vereinbarten Termin." },
  { q: "Bieten Sie Lieferung an?", a: "Ja, wir bieten sowohl Abholung vor Ort als auch Lieferung an. Die Lieferkosten variieren je nach Entfernung. Kontaktieren Sie uns fuer ein individuelles Angebot." },
  { q: "Wie alt sind die Welpen bei Abgabe?", a: "Unsere Welpen sind derzeit 11 Wochen alt und bereit fuer ihr neues Zuhause. Sie sind vollstaendig geimpft, entwurmt, gechipt und tieraerztlich untersucht." },
  { q: "Wie ist die Lebenserwartung eines Shih Tzu?", a: "Shih Tzus haben eine Lebenserwartung von 10-16 Jahren. Mit guter Pflege, Ernaehrung und regelmaessigen Tierarztbesuchen koennen sie ein langes, gesundes Leben fuehren." },
];

export default function FAQ() {
  const containerRef = useScrollAnimations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="fade-up inline-block text-rose font-semibold text-sm tracking-widest uppercase mb-3">
            Haeufige Fragen
          </span>
          <h2 className="fade-up text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Haeufig gestellte <span className="text-gradient">Fragen</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="fade-up bg-cream rounded-xl border border-warm-gray/20 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-rose-light/30 transition-colors"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-rose flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ${openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <p className="px-5 pb-5 text-foreground/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
