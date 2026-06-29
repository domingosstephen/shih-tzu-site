"use client";

import { useScrollAnimations } from "@/lib/useGSAP";

const features = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Perfekte Familienhunde",
    description: "Shih Tzus sind bekannt fuer ihr sanftes, freundliches Wesen. Sie lieben Kinder und kommen gut mit anderen Haustieren zurecht.",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Ideal fuer Wohnungen",
    description: "Mit ihrer kompakten Groesse von 4-8 kg sind Shih Tzus perfekt fuer das Leben in der Wohnung geeignet. Sie brauchen keinen grossen Garten.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Wenig Haarausfall",
    description: "Shih Tzus verlieren kaum Haare, was sie ideal fuer Allergiker macht. Ihr seidiges Fell ist hypoallergen und pflegeleicht.",
  },
  {
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Lange Lebensdauer",
    description: "Mit 10-16 Jahren Lebenserwartung begleitet Sie Ihr Shih Tzu ueber viele wunderbare Jahre als treuer Gefaehrte.",
  },
];

export default function WhyShihTzu() {
  const containerRef = useScrollAnimations();

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="fade-up inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Die Rasse
          </span>
          <h2 className="fade-up text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Warum ein <span className="text-gradient">Shih Tzu</span>?
          </h2>
          <p className="fade-up text-foreground/55 max-w-2xl mx-auto text-lg">
            Der Shih Tzu ist seit Jahrhunderten als &bdquo;Loewenhund&rdquo; bekannt und war einst
            der Liebling chinesischer Kaiser. Heute ist er einer der beliebtesten Begleithunde weltweit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="fade-up bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-warm-gray/20 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-rose-light flex items-center justify-center text-rose flex-shrink-0 group-hover:bg-rose group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
