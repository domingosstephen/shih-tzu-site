import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt - Shih Tzu Welpe anfragen",
  description: "Bereit fuer einen Shih Tzu Welpen? Fuellen Sie unser Anfrageformular aus oder kontaktieren Sie uns direkt. Wir antworten innerhalb von 48 Stunden.",
  alternates: { canonical: "https://shihtzuwelpen.com/kontakt" },
};

export default function KontaktPage() {
  return <ContactForm />;
}
