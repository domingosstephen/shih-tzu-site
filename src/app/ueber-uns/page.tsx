import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Ueber uns - Unsere Zuchtphilosophie",
  description: "Erfahren Sie mehr ueber unsere Zuchtphilosophie und wie wir gesunde, gut sozialisierte Shih Tzu Welpen aufziehen.",
  alternates: { canonical: "https://shihtzuwelpen.com/ueber-uns" },
};

export default function UeberUnsPage() {
  return <AboutContent />;
}
