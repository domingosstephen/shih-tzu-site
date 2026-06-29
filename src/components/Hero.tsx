"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.3")
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(imageRef.current, { opacity: 0, scale: 0.85, rotate: 3 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.2 }, "-=1.2");
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-rose/8 blob blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 blob-2 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent-light/5 blob blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div ref={badgeRef} className="inline-flex items-center gap-2 bg-rose-light text-rose px-4 py-2 rounded-full text-sm font-medium mb-6 opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose" />
              </span>
              Jetzt Bewerben - Nur 5 Welpen verfuegbar
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 opacity-0">
              Ihr neuer{" "}
              <span className="text-gradient">Shih Tzu</span>{" "}
              Welpe wartet
            </h1>

            <p ref={subtitleRef} className="text-lg md:text-xl text-foreground/55 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0">
              Liebevoll aufgezogene, reinrassige Shih Tzu Welpen aus familiaerem Umfeld.
              Geimpft, gechipt und bereit fuer ihr neues Zuhause.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0">
              <Link
                href="/welpen"
                className="bg-rose text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-dark transition-all hover:shadow-xl hover:shadow-rose/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Welpen entdecken
              </Link>
              <Link
                href="/kontakt"
                className="border-2 border-foreground/12 text-foreground px-8 py-4 rounded-full text-base font-semibold hover:border-rose hover:text-rose transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </div>

            {/* Trust strip - NEW structural element */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { num: "100%", label: "Geimpft" },
                { num: "11", label: "Wochen alt" },
                { num: "699 EUR", label: "Pro Welpe" },
              ].map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <p className="text-xl font-bold text-rose">{item.num}</p>
                  <p className="text-xs text-foreground/45">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image - stacked card design (NEW) */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decorative card */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose/20 to-gold/20 rounded-3xl rotate-6 scale-95" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-rose/15 rounded-3xl -rotate-3 scale-98" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose/15">
                <div className="aspect-[4/3]">
                  <Image
                    src="/puppies/Jessica/photo_5875461565706866454_x.jpg"
                    alt="Wunderschoener Shih Tzu Welpe - gold-weiss"
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover"
                    preload
                  />
                </div>
                {/* Price badge overlay */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-xs text-foreground/50">Ab</p>
                  <p className="text-2xl font-bold text-rose">699 EUR</p>
                </div>
              </div>

              {/* Floating mini cards (NEW) */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl overflow-hidden shadow-xl border-3 border-white animate-float">
                <Image
                  src="/puppies/Maggie/photo_5875461565706866450_x.jpg"
                  alt="Shih Tzu Welpe Maggie"
                  fill
                  sizes="80px"
                  className="object-cover"
                  preload
                />
              </div>
              <div className="absolute -right-4 top-8 w-16 h-16 rounded-xl overflow-hidden shadow-xl border-2 border-white animate-float" style={{ animationDelay: "2s" }}>
                <Image
                  src="/puppies/Lucky/photo_5875461565706866451_x.jpg"
                  alt="Shih Tzu Welpe Lucky"
                  fill
                  sizes="64px"
                  className="object-cover"
                  preload
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/25">
        <span className="text-xs tracking-widest uppercase">Scrollen</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
