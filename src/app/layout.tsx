import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/LocaleContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shihtzuwelpen.com"),
  title: {
    default: "Shih Tzu Welpen kaufen | ShihTzuWelpen.com",
    template: "%s | ShihTzuWelpen.com",
  },
  description:
    "Reinrassige Shih Tzu Welpen vom Zuechter kaufen. Geimpft, gechipt, entwurmt mit Gesundheitszeugnis. Liebevoll in der Familie aufgezogen. Jetzt verfuegbare Welpen ansehen.",
  keywords: [
    "Shih Tzu Welpen kaufen",
    "Shih Tzu Zuechter",
    "Shih Tzu Welpen",
    "Shih Tzu kaufen Deutschland",
    "Shih Tzu Welpen geimpft",
    "Shih Tzu Welpen guenstig",
    "reinrassige Shih Tzu",
    "Shih Tzu Hund",
    "kleine Hunde kaufen",
    "Familienhund kaufen",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "ShihTzuWelpen",
    title: "Shih Tzu Welpen kaufen | ShihTzuWelpen.com",
    description: "Reinrassige Shih Tzu Welpen. Geimpft, gechipt, entwurmt. Liebevoll aufgezogen. Ab 699 EUR.",
    images: [{ url: "/puppies/Jessica/photo_5875461565706866454_x.jpg", width: 1200, height: 630, alt: "Shih Tzu Welpen von ShihTzuWelpen.com" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shih Tzu Welpen kaufen | ShihTzuWelpen.com",
    description: "Reinrassige Shih Tzu Welpen. Geimpft, gechipt, entwurmt. Ab 699 EUR.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://shihtzuwelpen.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ShihTzuWelpen",
              description: "Zuechter reinrassiger Shih Tzu Welpen. Geimpft, gechipt, entwurmt mit Gesundheitszeugnis.",
              url: "https://shihtzuwelpen.com",
              email: "titanahuman@gmail.com",
              priceRange: "699 EUR",
              image: "https://shihtzuwelpen.com/puppies/Jessica/photo_5875461565706866454_x.jpg",
              openingHours: "Mo-Sa 09:00-18:00",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Was kostet ein Shih Tzu Welpe?", acceptedAnswer: { "@type": "Answer", text: "Unsere Shih Tzu Welpen kosten 699 EUR. Im Preis enthalten sind Impfungen, Entwurmung, Mikrochip, Gesundheitszeugnis und Hunderegistrierung." } },
                { "@type": "Question", name: "Sind Shih Tzus hypoallergen?", acceptedAnswer: { "@type": "Answer", text: "Ja, Shih Tzus gelten als hypoallergene Rasse, da sie sehr wenig Haare verlieren. Ideal fuer Allergiker." } },
                { "@type": "Question", name: "Wie gross werden Shih Tzus?", acceptedAnswer: { "@type": "Answer", text: "Ausgewachsene Shih Tzus wiegen 4-8 kg und erreichen eine Schulterhoehe von 20-28 cm." } },
                { "@type": "Question", name: "Wie alt sind die Welpen?", acceptedAnswer: { "@type": "Answer", text: "Unsere Welpen sind 11 Wochen alt, vollstaendig geimpft, entwurmt, gechipt und tieraerztlich untersucht." } },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
