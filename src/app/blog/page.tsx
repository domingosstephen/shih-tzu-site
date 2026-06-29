import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Ratgeber fuer Shih Tzu Besitzer",
  description: "Ratgeber und Tipps rund um den Shih Tzu: Kauf, Pflege, Gesundheit und mehr. Alles was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen.",
  alternates: { canonical: "https://shihtzuwelpen.com/blog" },
  openGraph: {
    title: "Blog - Ratgeber fuer Shih Tzu Besitzer | ShihTzuWelpen.com",
    description: "Ratgeber und Tipps rund um den Shih Tzu: Kauf, Pflege, Gesundheit und mehr.",
    images: [{ url: "/puppies/Jessica/photo_5875461565706866454_x.jpg", width: 1200, height: 630, alt: "Shih Tzu Ratgeber Blog" }],
  },
};

const articles = [
  {
    slug: "shih-tzu-welpen-kaufen-ratgeber",
    title: "Shih Tzu Welpen kaufen: Der komplette Ratgeber 2026",
    excerpt: "Alles was Sie wissen muessen, bevor Sie einen Shih Tzu Welpen kaufen: Preis, Gesundheit, Pflege, worauf Sie bei einem seriosen Zuechter achten sollten.",
    date: "29. Juni 2026",
    readTime: "8 Min. Lesezeit",
    tags: ["Kauf", "Ratgeber", "Gesundheit"],
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Shih Tzu <span className="text-gradient">Ratgeber</span>
          </h1>
          <p className="text-foreground/55 max-w-2xl mx-auto text-lg">
            Alles ueber Kauf, Pflege und Haltung von Shih Tzu Welpen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block bg-cream rounded-2xl p-8 hover:shadow-lg transition-all border border-warm-gray/20 hover:border-rose/20"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-rose-light text-rose font-medium">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-rose transition-colors">{article.title}</h2>
                <p className="text-foreground/60 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-foreground/40">
                  <span>{article.date}</span>
                  <span>&middot;</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
