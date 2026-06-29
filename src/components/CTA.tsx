"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimations } from "@/lib/useGSAP";

export default function CTA() {
  const containerRef = useScrollAnimations();

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-rose to-accent-dark rounded-3xl overflow-hidden shadow-2xl shadow-rose/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="fade-up text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit fuer Ihren neuen Shih Tzu Welpen?
              </h2>
              <p className="fade-up text-white/80 text-lg mb-8 leading-relaxed">
                Unsere Welpen sind schnell vergeben! Senden Sie noch heute eine Anfrage
                und machen Sie den ersten Schritt zu Ihrem neuen Familienmitglied.
              </p>
              <div className="fade-up flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="bg-white text-rose px-8 py-4 rounded-full text-base font-semibold hover:bg-cream transition-all hover:shadow-lg text-center">
                  Jetzt bewerben
                </Link>
                <Link href="/welpen" className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:border-white/60 transition-all text-center">
                  Welpen ansehen
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block min-h-[400px]">
              <Image
                src="/puppies/Luciana/photo_5875461565706866452_x.jpg"
                alt="Gluecklicher Shih Tzu Welpe wartet auf eine Familie"
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rose/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
