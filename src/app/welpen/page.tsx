import type { Metadata } from "next";
import PuppyShowcase from "@/components/PuppyShowcase";

export const metadata: Metadata = {
  title: "Shih Tzu Welpen zu verkaufen - Alle verfuegbaren Welpen",
  description: "Entdecken Sie unsere verfuegbaren Shih Tzu Welpen. Jeder Welpe ist geimpft, gechipt, entwurmt und kommt mit Gesundheitszeugnis. Ab 699 EUR.",
  alternates: { canonical: "https://shihtzuwelpen.com/welpen" },
};

export default function WelpenPage() {
  return <PuppyShowcase />;
}
