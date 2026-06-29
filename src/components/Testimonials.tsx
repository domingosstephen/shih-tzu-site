"use client";

import Image from "next/image";
import { useScrollAnimations } from "@/lib/useGSAP";
import { useLocale } from "@/lib/LocaleContext";

const testimonials = {
  de: [
    { text: "Unser kleiner Shih Tzu hat so viel Freude in unser Zuhause gebracht. Das Team war waehrend des gesamten Prozesses unglaublich hilfsbereit und erkundigt sich immer noch, wie es unserem Welpen geht.", author: "Anna M.", location: "Muenchen", image: "/testimonials/person1.jpg" },
    { text: "Von dem Moment an, als wir unseren Welpen trafen, wussten wir, dass er etwas Besonderes ist. Die fruehe Sozialisierung zeigt sich wirklich. Er ist der sanfteste Hund, den wir je hatten.", author: "Sophie K.", location: "Berlin", image: "/testimonials/person2.jpg" },
    { text: "Ich hatte Bedenken wegen Allergien, aber das hypoallergene Fell unseres Shih Tzu war ein Gamechanger. Beste Entscheidung fuer unsere Familie!", author: "Maria L.", location: "Hamburg", image: "/testimonials/person3.jpg" },
    { text: "Der gesamte Kaufprozess war transparent und professionell. Unser Shih Tzu kam gesund, gluecklich und bestens sozialisiert bei uns an.", author: "Katja W.", location: "Koeln", image: "/testimonials/person4.jpg" },
  ],
  en: [
    { text: "Our little Shih Tzu has brought so much joy into our home. The team was incredibly helpful throughout the entire process and still checks in on how our puppy is doing.", author: "Anna M.", location: "Munich", image: "/testimonials/person1.jpg" },
    { text: "From the moment we met our puppy, we knew he was special. The early socialization really shows. He's the gentlest dog we've ever had.", author: "Sophie K.", location: "Berlin", image: "/testimonials/person2.jpg" },
    { text: "I was worried about allergies, but our Shih Tzu's hypoallergenic coat has been a game changer. Best decision for our family!", author: "Maria L.", location: "Hamburg", image: "/testimonials/person3.jpg" },
    { text: "The entire purchase process was transparent and professional. Our Shih Tzu arrived healthy, happy, and perfectly socialized.", author: "Katja W.", location: "Cologne", image: "/testimonials/person4.jpg" },
  ],
  es: [
    { text: "Nuestro pequeno Shih Tzu ha traido tanta alegria a nuestro hogar. El equipo fue increiblemente util durante todo el proceso y todavia pregunta como esta nuestro cachorro.", author: "Anna M.", location: "Munich", image: "/testimonials/person1.jpg" },
    { text: "Desde el momento en que conocimos a nuestro cachorro, supimos que era especial. La socializacion temprana realmente se nota. Es el perro mas dulce que hemos tenido.", author: "Sophie K.", location: "Berlin", image: "/testimonials/person2.jpg" },
    { text: "Me preocupaban las alergias, pero el pelaje hipoalergenico de nuestro Shih Tzu fue un cambio total. La mejor decision para nuestra familia!", author: "Maria L.", location: "Hamburgo", image: "/testimonials/person3.jpg" },
    { text: "Todo el proceso de compra fue transparente y profesional. Nuestro Shih Tzu llego sano, feliz y perfectamente socializado.", author: "Katja W.", location: "Colonia", image: "/testimonials/person4.jpg" },
  ],
};

export default function Testimonials() {
  const containerRef = useScrollAnimations();
  const { locale, t } = useLocale();
  const items = testimonials[locale] || testimonials.de;

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="fade-up inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            {t("testimonials.tag")}
          </span>
          <h2 className="fade-up text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("testimonials.title1")} <span className="text-gradient">{t("testimonials.title2")}</span> {t("testimonials.title3")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={item.author}
              className="fade-up bg-white rounded-2xl p-8 shadow-sm border border-warm-gray/20"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/65 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={item.image} alt={item.author} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.author}</p>
                  <p className="text-xs text-foreground/45">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
