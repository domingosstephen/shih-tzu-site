"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimations } from "@/lib/useGSAP";
import { puppies } from "@/lib/puppies";

export default function PuppyShowcase() {
  const containerRef = useScrollAnimations();

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white" id="welpen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="fade-up inline-block text-rose font-semibold text-sm tracking-widest uppercase mb-3">
            Unsere Welpen
          </span>
          <h2 className="fade-up text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Lernen Sie unsere <span className="text-gradient">Shih Tzu</span> Welpen kennen
          </h2>
          <p className="fade-up text-foreground/55 max-w-2xl mx-auto text-lg">
            Jeder unserer Welpen wurde in unserer Familie mit viel Liebe, Sozialisierung
            und bester tieraerztlicher Versorgung aufgezogen.
          </p>
        </div>

        {/* Alternating layout - NEW structural improvement */}
        <div className="space-y-16">
          {puppies.map((puppy, i) => (
            <div
              key={puppy.slug}
              id={puppy.slug}
              className={`fade-up grid md:grid-cols-2 gap-8 lg:gap-14 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <div className="aspect-[4/3]">
                    <Image
                      src={puppy.photos[0]}
                      alt={`${puppy.name} - ${puppy.color} Shih Tzu Welpe zu verkaufen`}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <Link href="/kontakt" className="bg-white text-rose px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-rose hover:text-white transition-all">
                      Jetzt anfragen
                    </Link>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-rose text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      {puppy.status === "Verfuegbar" ? "Verfuegbar" : "Reserviert"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-rose text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                      {puppy.price} EUR
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-3xl font-bold mb-2">{puppy.name}</h3>
                <p className="text-rose font-semibold mb-4">{puppy.color} &middot; {puppy.gender} &middot; {puppy.age}</p>

                <p className="text-foreground/65 text-sm leading-relaxed mb-5">{puppy.description}</p>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {puppy.traits.map((trait) => (
                    <span key={trait} className="text-xs px-3 py-1.5 rounded-full bg-rose-light text-rose font-medium">
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Health badges - compact row */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {puppy.health.slice(0, 4).map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gold-light text-gold font-medium">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/welpen/${puppy.slug}`}
                    className="inline-flex items-center gap-2 bg-rose text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-rose/20"
                  >
                    Mehr erfahren
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href={`https://wa.me/4915739205655?text=Hallo!%20Ich%20interessiere%20mich%20fuer%20${encodeURIComponent(puppy.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full hover:bg-[#1ebe5d] transition-all flex-shrink-0"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2C6.485 2 2 6.485 2 12.05c0 1.867.487 3.619 1.338 5.142L2 22l4.948-1.297A10.02 10.02 0 0012.05 22C17.615 22 22 17.515 22 11.95 22 6.485 17.515 2 12.05 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
