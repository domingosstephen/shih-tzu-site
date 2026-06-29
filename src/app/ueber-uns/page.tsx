import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Ueber uns - Unsere Zuchtphilosophie",
  description: "Erfahren Sie mehr ueber unsere Zuchtphilosophie und wie wir gesunde, gut sozialisierte Shih Tzu Welpen aufziehen.",
  alternates: { canonical: "https://shihtzuwelpen.com/ueber-uns" },
  openGraph: {
    title: "Ueber uns - Unsere Zuchtphilosophie | ShihTzuWelpen.com",
    description: "Erfahren Sie mehr ueber unsere Zuchtphilosophie und wie wir gesunde, gut sozialisierte Shih Tzu Welpen aufziehen.",
    images: [{ url: "/puppies/Jessica/photo_5875461565706866454_x.jpg", width: 1200, height: 630, alt: "Shih Tzu Welpen Zuechter" }],
  },
};

export default function UeberUnsPage() {
  return <AboutContent />;
}
