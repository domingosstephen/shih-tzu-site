import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt - Shih Tzu Welpe anfragen",
  description: "Bereit fuer einen Shih Tzu Welpen? Fuellen Sie unser Anfrageformular aus oder kontaktieren Sie uns direkt. Wir antworten innerhalb von 48 Stunden.",
  alternates: { canonical: "https://shihtzuwelpen.com/kontakt" },
  openGraph: {
    title: "Kontakt - Shih Tzu Welpe anfragen | ShihTzuWelpen.com",
    description: "Bereit fuer einen Shih Tzu Welpen? Kontaktieren Sie uns — Antwort innerhalb von 48 Stunden.",
    images: [{ url: "/puppies/Jessica/photo_5875461565706866454_x.jpg", width: 1200, height: 630, alt: "Shih Tzu Welpen anfragen" }],
  },
};

export default function KontaktPage() {
  return <ContactForm />;
}
