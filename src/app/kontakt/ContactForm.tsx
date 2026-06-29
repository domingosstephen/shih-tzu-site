"use client";

import { useState } from "react";
import { useScrollAnimations } from "@/lib/useGSAP";

export default function ContactForm() {
  const containerRef = useScrollAnimations();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div ref={containerRef}>
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="fade-up text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Kontakt</span> aufnehmen
          </h1>
          <p className="fade-up text-foreground/55 max-w-2xl mx-auto text-lg">
            Interessiert an einem unserer Shih Tzu Welpen? Fuellen Sie das Formular aus und wir melden uns innerhalb von 48 Stunden.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="fade-up space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Kontaktinformationen</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">E-Mail</p>
                        <p className="text-sm text-foreground/55">hufmannardine@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">WhatsApp</p>
                        <a href="https://wa.me/4915739205655" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/55 hover:text-rose transition-colors">+49 1573 9205655</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Erreichbarkeit</p>
                        <p className="text-sm text-foreground/55">Mo - Sa: 9:00 - 18:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-light/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-sm mb-2">Was Sie erwartet</h4>
                  <ul className="space-y-2 text-sm text-foreground/55">
                    {["Antwort innerhalb von 48 Stunden", "Videoanruf moeglich", "Keine Verpflichtung"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-rose mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="fade-up bg-rose-light rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-rose text-white flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Anfrage erhalten!</h3>
                  <p className="text-foreground/55">Vielen Dank fuer Ihr Interesse! Wir pruefen Ihre Anfrage und melden uns innerhalb von 48 Stunden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="fade-up space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vorname" className="block text-sm font-medium mb-2">Vorname *</label>
                      <input type="text" id="vorname" name="vorname" required className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-sm bg-background" />
                    </div>
                    <div>
                      <label htmlFor="nachname" className="block text-sm font-medium mb-2">Nachname *</label>
                      <input type="text" id="nachname" name="nachname" required className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-sm bg-background" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-sm bg-background" />
                  </div>

                  <div>
                    <label htmlFor="welpe" className="block text-sm font-medium mb-2">Interessiert an</label>
                    <select id="welpe" name="welpe" className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-sm bg-background">
                      <option value="">Welpe auswaehlen oder allgemeine Anfrage</option>
                      <option value="maggie">Maggie - Braun-Weiss Tricolor (699 EUR)</option>
                      <option value="lucky">Lucky - Braun-Weiss Tricolor (699 EUR)</option>
                      <option value="luciana">Luciana - Weiss & Gold (699 EUR)</option>
                      <option value="laura">Laura - Weiss-Braun Tricolor (699 EUR)</option>
                      <option value="jessica">Jessica - Gold & Weiss (699 EUR)</option>
                      <option value="warteliste">Warteliste (zukuenftiger Wurf)</option>
                      <option value="allgemein">Allgemeine Frage</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium mb-2">Erzaehlen Sie uns von sich *</label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      required
                      rows={4}
                      placeholder="Erzaehlen Sie uns ueber Ihr Zuhause, Ihre Familie, andere Haustiere und warum Sie sich fuer einen Shih Tzu interessieren..."
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all text-sm bg-background resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full bg-rose text-white py-4 rounded-full font-semibold hover:bg-accent-dark transition-all hover:shadow-xl hover:shadow-rose/20 text-base">
                    Anfrage senden
                  </button>

                  <p className="text-xs text-foreground/35 text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklaerung zu. Ihre Daten werden nicht weitergegeben.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
