"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimations } from "@/lib/useGSAP";

export default function AboutContent() {
  const containerRef = useScrollAnimations();

  return (
    <div ref={containerRef}>
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="fade-up text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Ueber <span className="text-gradient">ShihTzuWelpen</span>
          </h1>
          <p className="fade-up text-foreground/55 max-w-2xl mx-auto text-lg">
            Wir sind eine Familie von Hundeliebhabern, die sich der Zucht gesunder, gluecklicher Shih Tzu Welpen verschrieben hat.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/puppies/Laura/photo_5875461565706866453_x.jpg" alt="Unsere Shih Tzu Familie" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
              </div>
            </div>
            <div className="slide-in-right">
              <span className="text-rose font-semibold text-sm tracking-widest uppercase mb-3 block">Unsere Geschichte</span>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Liebe trifft <span className="text-gradient">Erfahrung</span>
              </h2>
              <p className="text-foreground/65 mb-4 leading-relaxed">
                Bei ShihTzuWelpen glauben wir, dass jede Familie einen gesunden, gut sozialisierten Begleiter verdient. Als leidenschaftliche Hundeliebhaber und erfahrene Zuechter haben wir uns auf Shih Tzus spezialisiert, weil wir ueberzeugt sind, dass sie der perfekte Familienhund sind.
              </p>
              <p className="text-foreground/65 mb-4 leading-relaxed">
                Jeder Welpe wird in unserem Zuhause geboren und aufgezogen - nicht in einem Zwinger. Sie schlafen in unserem Wohnzimmer, spielen mit unseren Kindern und werden vom ersten Tag an mit Alltagsgeraeuschen und -situationen vertraut gemacht.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                Alle unsere Welpen erhalten umfassende tieraerztliche Versorgung, einschliesslich Impfungen, Entwurmung, Mikrochip und Gesundheitsuntersuchung. Die Gesundheit Ihres Welpen hat bei uns hoechste Prioritaet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="fade-up text-4xl font-bold tracking-tight mb-12 text-center">
            Unsere <span className="text-gradient">Werte</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Gesundheit zuerst", desc: "Umfassende tieraerztliche Versorgung, Impfungen und Gesundheitsuntersuchungen fuer jeden Welpen.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Familiaeere Aufzucht", desc: "Unsere Welpen wachsen in unserer Familie auf - mit Kindern, anderen Haustieren und taeglicher Bereicherung.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { title: "Lebenslange Begleitung", desc: "Unsere Beziehung endet nicht bei der Uebergabe. Wir bieten lebenslange Unterstuetzung und Beratung.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            ].map((value, i) => (
              <div key={value.title} className="fade-up bg-white rounded-2xl p-8 shadow-sm border border-warm-gray/20 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="fade-up text-3xl font-bold mb-4">Bereit fuer den naechsten Schritt?</h2>
          <p className="fade-up text-foreground/55 mb-8">Wir helfen Ihnen gerne, den perfekten Shih Tzu fuer Ihre Familie zu finden.</p>
          <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/welpen" className="bg-rose text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-all">Welpen ansehen</Link>
            <Link href="/kontakt" className="border-2 border-foreground/12 px-8 py-4 rounded-full font-semibold hover:border-rose hover:text-rose transition-all">Kontakt</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
