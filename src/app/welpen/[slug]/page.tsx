import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { puppies } from "@/lib/puppies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return puppies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);
  if (!puppy) return {};
  return {
    title: `${puppy.name} - ${puppy.color} Shih Tzu Welpe kaufen | ${puppy.price} EUR`,
    description: `${puppy.name} ist ein ${puppy.color} Shih Tzu Welpe, ${puppy.age} alt. Nur ${puppy.price} EUR. Vollstaendig geimpft, gechipt, entwurmt mit Gesundheitszeugnis. Jetzt anfragen!`,
    alternates: { canonical: `https://shihtzuwelpen.com/welpen/${puppy.slug}` },
    openGraph: {
      title: `${puppy.name} - ${puppy.color} Shih Tzu Welpe | ShihTzuWelpen.com`,
      description: `${puppy.name}, ${puppy.age} alt, ${puppy.price} EUR. Geimpft, gechipt, entwurmt. Jetzt anfragen!`,
      images: [{ url: puppy.photos[0], width: 1200, height: 630, alt: `${puppy.name} ${puppy.color} Shih Tzu Welpe` }],
    },
  };
}

export default async function PuppyPage({ params }: Props) {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);
  if (!puppy) notFound();

  const others = puppies.filter((p) => p.slug !== puppy.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${puppy.name} - ${puppy.color} Shih Tzu Welpe`,
    description: puppy.description,
    image: `https://shihtzuwelpen.com${puppy.photos[0]}`,
    offers: {
      "@type": "Offer",
      price: puppy.price,
      priceCurrency: "EUR",
      availability: puppy.status === "Verfuegbar" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      seller: { "@type": "Organization", name: "ShihTzuWelpen", url: "https://shihtzuwelpen.com" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://shihtzuwelpen.com" },
      { "@type": "ListItem", position: 2, name: "Unsere Welpen", item: "https://shihtzuwelpen.com/welpen" },
      { "@type": "ListItem", position: 3, name: puppy.name, item: `https://shihtzuwelpen.com/welpen/${puppy.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-foreground/50">
            <Link href="/" className="hover:text-rose transition-colors">Startseite</Link>
            <span>/</span>
            <Link href="/welpen" className="hover:text-rose transition-colors">Unsere Welpen</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{puppy.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose/10">
              <div className="aspect-[4/3]">
                <Image
                  src={puppy.photos[0]}
                  alt={`${puppy.name} - ${puppy.color} Shih Tzu Welpe kaufen`}
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className={`text-sm font-bold px-4 py-2 rounded-full shadow-lg ${puppy.status === "Verfuegbar" ? "bg-rose text-white" : "bg-gray-500 text-white"}`}>
                  {puppy.status === "Verfuegbar" ? "Verfuegbar" : "Reserviert"}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs text-foreground/50">Preis</p>
                <p className="text-3xl font-bold text-rose">{puppy.price} EUR</p>
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{puppy.name}</h1>
              <p className="text-rose font-semibold text-lg mb-6">{puppy.color} &middot; {puppy.gender} &middot; {puppy.age}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Alter", value: puppy.age },
                  { label: "Gewicht", value: puppy.weight },
                  { label: "Preis", value: `${puppy.price} EUR` },
                ].map((spec) => (
                  <div key={spec.label} className="bg-rose-light/50 rounded-xl p-3 text-center">
                    <p className="text-xs text-foreground/50 mb-1">{spec.label}</p>
                    <p className="font-bold text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-foreground/65 leading-relaxed mb-6">{puppy.description}</p>

              {/* Traits */}
              <div className="flex flex-wrap gap-2 mb-6">
                {puppy.traits.map((trait) => (
                  <span key={trait} className="text-xs px-3 py-1.5 rounded-full bg-rose-light text-rose font-medium">{trait}</span>
                ))}
              </div>

              {/* Health */}
              <div className="bg-white rounded-2xl p-5 mb-6 border border-warm-gray/20">
                <h2 className="font-bold text-sm mb-3">Gesundheitsversorgung inklusive</h2>
                <div className="grid grid-cols-2 gap-2">
                  {puppy.health.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                      <svg className="w-4 h-4 text-rose flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/4915739205655?text=Hallo!%20Ich%20interessiere%20mich%20fuer%20${encodeURIComponent(puppy.name)}%20(${encodeURIComponent(puppy.color)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-semibold hover:bg-[#1ebe5d] transition-all hover:shadow-lg text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2C6.485 2 2 6.485 2 12.05c0 1.867.487 3.619 1.338 5.142L2 22l4.948-1.297A10.02 10.02 0 0012.05 22C17.615 22 22 17.515 22 11.95 22 6.485 17.515 2 12.05 2z" />
                  </svg>
                  WhatsApp anfragen
                </a>
                <Link
                  href="/kontakt"
                  className="flex-1 flex items-center justify-center bg-rose text-white py-4 rounded-full font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-rose/20 text-sm"
                >
                  Formular ausfuellen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other puppies */}
      {others.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Weitere verfuegbare Shih Tzu Welpen</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link key={p.slug} href={`/welpen/${p.slug}`} className="group block bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.photos[0]}
                      alt={`${p.name} Shih Tzu Welpe kaufen`}
                      fill
                      sizes="(max-width: 768px) 90vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-rose text-sm font-bold px-3 py-1 rounded-full">
                      {p.price} EUR
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-foreground/55">{p.color} &middot; {p.gender}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
