export interface Puppy {
  name: string;
  slug: string;
  gender: "Weiblich" | "Maennlich";
  color: string;
  status: "Verfuegbar" | "Reserviert";
  price: number;
  weight: string;
  age: string;
  description: string;
  photos: string[];
  traits: string[];
  health: string[];
}

const healthInfo = [
  "Geimpft (aktuell)",
  "Entwurmt",
  "Gechipt",
  "Gesundheitszeugnis vorhanden",
  "Hunderegistrierung inklusive",
  "Tieraerztlich untersucht",
];

export const puppies: Puppy[] = [
  {
    name: "Maggie",
    slug: "maggie",
    gender: "Weiblich",
    color: "Braun-Weiss Tricolor",
    status: "Verfuegbar",
    price: 699,
    weight: "1,2 kg (erwartet 4-7 kg)",
    age: "11 Wochen",
    description: "Maggie ist ein bezauberndes Maedchen mit wunderschoenem dreifarbigem Fell in Braun, Weiss und Schwarz. Sie hat ein sanftes, liebevolles Wesen und liebt es, auf dem Schoss zu kuscheln. Maggie ist 11 Wochen alt, vollstaendig geimpft mit allen aktuellen Impfungen, entwurmt, gechipt und kommt mit einem Gesundheitszeugnis und Hunderegistrierung. Sie wurde tieraerztlich untersucht und ist bei bester Gesundheit.",
    photos: ["/puppies/Maggie/photo_5875461565706866450_x.jpg"],
    traits: ["Verschmust", "Sanft", "Familienfreundlich", "Verspielt"],
    health: healthInfo,
  },
  {
    name: "Lucky",
    slug: "lucky",
    gender: "Maennlich",
    color: "Braun-Weiss Tricolor",
    status: "Verfuegbar",
    price: 699,
    weight: "1,3 kg (erwartet 4-7 kg)",
    age: "11 Wochen",
    description: "Lucky macht seinem Namen alle Ehre - wer ihn bekommt, hat wirklich Glueck! Mit seinem charmanten Tricolor-Fell und seiner froehlichen Persoenlichkeit erobert er jedes Herz im Sturm. Lucky ist 11 Wochen alt, vollstaendig geimpft, entwurmt, gechipt und kommt mit Gesundheitszeugnis und Hunderegistrierung. Er wurde tieraerztlich untersucht und ist kerngesund.",
    photos: ["/puppies/Lucky/photo_5875461565706866451_x.jpg"],
    traits: ["Froehlich", "Charmant", "Neugierig", "Treu"],
    health: healthInfo,
  },
  {
    name: "Luciana",
    slug: "luciana",
    gender: "Weiblich",
    color: "Weiss & Gold",
    status: "Verfuegbar",
    price: 699,
    weight: "1,1 kg (erwartet 4-6 kg)",
    age: "11 Wochen",
    description: "Luciana ist eine elegante kleine Dame mit einem wunderschoenen weiss-goldenen Fell. Sie ist aufmerksam, klug und lernt schnell. Ihr ruhiges Temperament macht sie zur perfekten Begleiterin. Luciana ist 11 Wochen alt, vollstaendig geimpft, entwurmt, gechipt und kommt mit Gesundheitszeugnis und Hunderegistrierung. Sie wurde tieraerztlich untersucht und ist in ausgezeichneter Gesundheit.",
    photos: ["/puppies/Luciana/photo_5875461565706866452_x.jpg"],
    traits: ["Elegant", "Klug", "Ruhig", "Aufmerksam"],
    health: healthInfo,
  },
  {
    name: "Laura",
    slug: "laura",
    gender: "Weiblich",
    color: "Weiss-Braun Tricolor",
    status: "Verfuegbar",
    price: 699,
    weight: "1,2 kg (erwartet 4-7 kg)",
    age: "11 Wochen",
    description: "Laura ist ein liebenswertes Maedchen mit einem suessen Gesicht und weichem Tricolor-Fell. Sie ist verspielt, aber auch geduldig und kommt gut mit Kindern zurecht. Laura ist 11 Wochen alt, vollstaendig geimpft, entwurmt, gechipt und kommt mit Gesundheitszeugnis und Hunderegistrierung. Sie wurde tieraerztlich untersucht und ist bei bester Gesundheit.",
    photos: ["/puppies/Laura/photo_5875461565706866453_x.jpg"],
    traits: ["Liebenswert", "Geduldig", "Kinderfreundlich", "Anhaeglich"],
    health: healthInfo,
  },
  {
    name: "Jessica",
    slug: "jessica",
    gender: "Weiblich",
    color: "Gold & Weiss",
    status: "Verfuegbar",
    price: 699,
    weight: "1,4 kg (erwartet 5-8 kg)",
    age: "11 Wochen",
    description: "Jessica ist die Koenigin des Wurfes mit ihrem praechtigem gold-weissen Fell. Sie hat eine selbstbewusste, aber freundliche Art und liebt es, im Mittelpunkt zu stehen. Jessica ist 11 Wochen alt, vollstaendig geimpft, entwurmt, gechipt und kommt mit Gesundheitszeugnis und Hunderegistrierung. Sie wurde tieraerztlich untersucht und strotzt vor Gesundheit.",
    photos: ["/puppies/Jessica/photo_5875461565706866454_x.jpg"],
    traits: ["Selbstbewusst", "Freundlich", "Aktiv", "Intelligent"],
    health: healthInfo,
  },
];
