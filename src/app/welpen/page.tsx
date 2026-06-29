import type { Metadata } from "next";
import PuppyShowcase from "@/components/PuppyShowcase";

export const metadata: Metadata = {
  title: "Shih Tzu Welpen zu verkaufen - Alle verfuegbaren Welpen",
  description: "Entdecken Sie unsere verfuegbaren Shih Tzu Welpen. Jeder Welpe ist geimpft, gechipt, entwurmt und kommt mit Gesundheitszeugnis. Ab 699 EUR.",
  alternates: { canonical: "https://shihtzuwelpen.com/welpen" },
  openGraph: {
    title: "Shih Tzu Welpen zu verkaufen - Alle verfuegbaren Welpen",
    description: "Entdecken Sie unsere verfuegbaren Shih Tzu Welpen. Geimpft, gechipt, entwurmt. Ab 699 EUR.",
    images: [{ url: "/puppies/Jessica/photo_5875461565706866454_x.jpg", width: 1200, height: 630, alt: "Shih Tzu Welpen verfuegbar" }],
  },
};

export default function WelpenPage() {
  return <PuppyShowcase />;
}
