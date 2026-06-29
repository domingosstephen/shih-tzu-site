import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shih Tzu Welpen kaufen: Der komplette Ratgeber 2026",
  description: "Alles was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen: Preis, Gesundheit, Pflege und wie Sie einen seriosen Zuechter erkennen. Ratgeber 2026.",
  alternates: { canonical: "https://shihtzuwelpen.com/blog/shih-tzu-welpen-kaufen-ratgeber" },
  openGraph: {
    title: "Shih Tzu Welpen kaufen: Der komplette Ratgeber 2026",
    description: "Alles was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen: Preis, Gesundheit, Pflege und wie Sie einen seriosen Zuechter erkennen.",
    images: [{ url: "/puppies/Jessica/photo_5875461565706866454_x.jpg", width: 1200, height: 630, alt: "Shih Tzu Welpen kaufen Ratgeber" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shih Tzu Welpen kaufen: Der komplette Ratgeber 2026",
  description: "Alles was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen.",
  image: "https://shihtzuwelpen.com/puppies/Jessica/photo_5875461565706866454_x.jpg",
  datePublished: "2026-06-29",
  dateModified: "2026-06-29",
  author: { "@type": "Organization", name: "ShihTzuWelpen", url: "https://shihtzuwelpen.com" },
  publisher: { "@type": "Organization", name: "ShihTzuWelpen", url: "https://shihtzuwelpen.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Was kostet ein Shih Tzu Welpe in Deutschland?", acceptedAnswer: { "@type": "Answer", text: "Ein reinrassiger Shih Tzu Welpe von einem seriosen Zuechter kostet in Deutschland zwischen 600 und 1.200 EUR. Bei ShihTzuWelpen.com kosten unsere Welpen 699 EUR inklusive aller Impfungen, Entwurmung, Mikrochip und Gesundheitszeugnis." } },
    { "@type": "Question", name: "Wie alt sollte ein Shih Tzu Welpe bei Abgabe sein?", acceptedAnswer: { "@type": "Answer", text: "Seriose Zuechter geben Welpen fruehestens mit 8 Wochen ab. Unsere Welpen sind bei Abgabe 11 Wochen alt und vollstaendig geimpft, entwurmt und gechipt." } },
    { "@type": "Question", name: "Sind Shih Tzus gut fuer Allergiker?", acceptedAnswer: { "@type": "Answer", text: "Ja, Shih Tzus gelten als hypoallergene Rasse. Ihr Fell aehnelt eher menschlichem Haar und sie verlieren kaum Haare, was sie ideal fuer viele Allergiker macht." } },
    { "@type": "Question", name: "Wie pflegeaufwaendig ist ein Shih Tzu?", acceptedAnswer: { "@type": "Answer", text: "Das lange Fell des Shih Tzu muss taeglich gebuerstet und alle 6-8 Wochen beim Hundescherer gepflegt werden. Viele Besitzer entscheiden sich fuer den kurzen Welpen-Schnitt fuer leichtere Pflege." } },
  ],
};

export default function BlogArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-12 hero-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-foreground/40 mb-8">
            <Link href="/" className="hover:text-rose transition-colors">Startseite</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-rose transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground/60">Ratgeber</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Kauf", "Ratgeber", "Gesundheit", "Pflege"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-rose-light text-rose font-medium">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Shih Tzu Welpen kaufen: Der komplette Ratgeber 2026
          </h1>
          <p className="text-foreground/55 text-lg leading-relaxed mb-6">
            Alles was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen: Preis, Gesundheit, Pflege und wie Sie einen seriosen Zuechter erkennen.
          </p>
          <div className="flex items-center gap-4 text-sm text-foreground/40">
            <span>29. Juni 2026</span>
            <span>&middot;</span>
            <span>8 Min. Lesezeit</span>
            <span>&middot;</span>
            <span>ShihTzuWelpen.com</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-6 -mt-4 mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
          <Image
            src="/puppies/Jessica/photo_5875461565706866454_x.jpg"
            alt="Shih Tzu Welpe kaufen - Jessica"
            fill
            sizes="(max-width: 768px) 90vw, 720px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none">

          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            Der Shih Tzu ist eine der beliebtesten Hunderassen in Deutschland. Mit seinem seidigen Fell, seinem freundlichen Wesen und seiner kompakten Groesse ist er der ideale Begleiter fuer Familien, Singles und Senioren gleichermassen. In diesem Ratgeber erfahren Sie alles, was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Was ist ein Shih Tzu?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Der Shih Tzu (chinesisch: &ldquo;Loewenhund&rdquo;) gehoert zu den aeltesten Hunderassen der Welt. Urspruenglich wurden Shih Tzus am kaiserlichen Hof Chinas gezuechtet und galten als heilige Hunde. Heute sind sie weltweit als liebevolle Familienhunde bekannt.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Ausgewachsene Shih Tzus wiegen zwischen 4 und 8 kg und erreichen eine Schulterhoehe von 20 bis 28 cm. Ihre Lebenserwartung betraegt 10 bis 16 Jahre &ndash; sie sind also ein langfristiger Begleiter.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Ist ein Shih Tzu der richtige Hund fuer mich?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Bevor Sie einen Shih Tzu Welpen kaufen, sollten Sie sich fragen, ob die Rasse zu Ihrem Lebensstil passt.
          </p>

          <div className="bg-rose-light/40 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-base mb-3">Fuer wen ist ein Shih Tzu ideal?</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              {[
                "Familien mit Kindern: Shih Tzus sind geduldig und sanft",
                "Wohnungsbesitzer: Kleine Groesse, kein grosser Garten noetig",
                "Allergiker: Shih Tzus gelten als hypoallergene Rasse",
                "Senioren: Ruhiges Temperament, anpassungsfaehig",
                "Erstmals-Hundebesitzer: Leicht erziehbar und unkompliziert",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-rose mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Was kostet ein Shih Tzu Welpe?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Ein serioser Zuechter verkauft reinrassige Shih Tzu Welpen fuer 600 bis 1.200 EUR. Guenstigere Angebote unter 400 EUR aus unsicheren Quellen sollten Sie meiden &ndash; diese Welpen kommen oft ohne Gesundheitsversorgung und aus Welpenfarmen.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Bei ShihTzuWelpen.com kosten unsere Welpen <strong>699 EUR</strong>. Im Preis enthalten sind alle Impfungen, Entwurmung, Mikrochip mit ISO-Norm, offizielles Gesundheitszeugnis vom Tierarzt, Hunderegistrierung und lebenslange Zuechterunterstuetzung.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Gesundheit: Was sollte ein Shih Tzu Welpe mitbringen?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Ein gesunder Shih Tzu Welpe sollte bei Abgabe folgendes mitbringen:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Impfungen", desc: "Gegen Staupe, Parvovirus, Hepatitis und Leptospirose. Erstimpfung um die 8. Woche, Wiederholung um die 12. Woche." },
              { title: "Entwurmung", desc: "Welpen werden alle 2-4 Wochen bis zur 12. Lebenswoche entwurmt." },
              { title: "Mikrochip", desc: "Seit 2011 fuer Reisen ins EU-Ausland Pflicht. ISO-Chip 15-stellig." },
              { title: "Gesundheitszeugnis", desc: "Ausgestellt von einem lizenzierten Tierarzt nach gruendlicher Untersuchung." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-warm-gray/20">
                <p className="font-bold text-sm mb-1">{item.title}</p>
                <p className="text-xs text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Shih Tzu Pflege: Das sollten Sie wissen</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Das lange, seidig glaenzende Fell des Shih Tzu ist sein Markenzeichen &ndash; erfordert aber regelmaessige Pflege:
          </p>
          <ul className="space-y-3 text-foreground/70 mb-6">
            {[
              "Taeglich buerstens: Verhindert Verfizlungen und haelt das Fell glaenzend",
              "Alle 6-8 Wochen scheren: Viele Besitzer entscheiden sich fuer den praktischen Welpen-Schnitt",
              "Augen taeglich reinigen: Shih Tzus neigen zu Augenausfluss",
              "Ohren woechentlich kontrollieren: Anfaellig fuer Entzuendungen",
              "Zaehne 2-3x woechentlich putzen: Kleinhunde neigen zu Zahnproblemen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <svg className="w-4 h-4 text-rose mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Wie erkenne ich einen seriosen Zuechter?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            In Deutschland gibt es viele Anbieter von Shih Tzu Welpen. Leider gibt es auch unseriose Zuechter und Welpenfarmen. Achten Sie auf folgende Punkte:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="font-bold text-sm text-red-700 mb-3">Warnsignale</h3>
              <ul className="space-y-2 text-xs text-red-600">
                {["Kein Besuch beim Zuechter moeglich", "Mutter des Welpen nicht vorhanden", "Abgabe unter 8 Wochen", "Keine Impfungen oder Dokumente", "Preise unter 400 EUR", "Viele verschiedene Rassen gleichzeitig"].map((w) => (
                  <li key={w} className="flex items-start gap-1.5"><span className="font-bold">✗</span> {w}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-bold text-sm text-green-700 mb-3">Gute Zeichen</h3>
              <ul className="space-y-2 text-xs text-green-700">
                {["Besuch beim Zuechter willkommen", "Mutter kann besichtigt werden", "Vollstaendige Gesundheitsdokumentation", "Zuechter stellt viele Fragen", "Welpen in Familienatmosphaere", "Lebenslange Unterstuetzung angeboten"].map((g) => (
                  <li key={g} className="flex items-start gap-1.5"><span className="font-bold">✓</span> {g}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Haeufig gestellte Fragen</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "Was kostet ein Shih Tzu Welpe in Deutschland?", a: "Ein reinrassiger Shih Tzu Welpe von einem seriosen Zuechter kostet zwischen 600 und 1.200 EUR. Bei ShihTzuWelpen.com kosten unsere Welpen 699 EUR inklusive aller Impfungen, Entwurmung, Mikrochip und Gesundheitszeugnis." },
              { q: "Wie alt sollte ein Welpe bei Abgabe sein?", a: "Seriose Zuechter geben Welpen fruehestens mit 8 Wochen ab. Unsere Welpen sind bei Abgabe 11 Wochen alt und vollstaendig versorgt." },
              { q: "Sind Shih Tzus gut fuer Allergiker?", a: "Ja, Shih Tzus gelten als hypoallergene Rasse. Ihr Fell aehnelt menschlichem Haar und sie verlieren kaum Haare." },
              { q: "Wie pflegeaufwaendig ist ein Shih Tzu?", a: "Das Fell muss taeglich gebuerstet und alle 6-8 Wochen beim Hundescherer gepflegt werden. Viele Besitzer entscheiden sich fuer den kurzen Welpen-Schnitt." },
            ].map((faq) => (
              <div key={faq.q} className="bg-cream rounded-xl p-5">
                <p className="font-bold text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-foreground/65">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-rose-light to-gold-light rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Unsere verfuegbaren Shih Tzu Welpen</h2>
            <p className="text-foreground/65 mb-6">5 reinrassige Welpen, 11 Wochen alt, vollstaendig geimpft und bereit fuer ihr neues Zuhause.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/welpen" className="bg-rose text-white px-8 py-3.5 rounded-full font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-rose/20 text-sm">
                Alle Welpen ansehen
              </Link>
              <Link href="/kontakt" className="border-2 border-foreground/15 text-foreground px-8 py-3.5 rounded-full font-semibold hover:border-rose hover:text-rose transition-all text-sm">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
