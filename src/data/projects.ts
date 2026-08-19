import heroCoastal from "@/assets/hero-coastal-residence.jpg";
import forestVilla from "@/assets/project-forest-villa.jpg";
import courtyard from "@/assets/hero-courtyard-house.jpg";
import concreteHouse from "@/assets/project-concrete-house.jpg";
import interiorMinimal from "@/assets/interior-minimal.jpg";
import urbanFrame from "@/assets/plan-urban-frame.jpg";

export interface Project {
  index: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  summary: string;
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "coastal-residence",
    title: "Coastal Residence",
    location: "Algarve, Portugal",
    year: "2024",
    category: "Residential",
    image: heroCoastal,
    summary:
      "Three stacked slabs step with the cliff, holding shaded terraces between interior and horizon.",
  },
  {
    index: "02",
    slug: "forest-villa",
    title: "Forest Villa",
    location: "Trentino, Italy",
    year: "2023",
    category: "Villa",
    image: forestVilla,
    summary:
      "A dark timber volume set lightly among pines, with a warm, compact interior of oak and stone.",
  },
  {
    index: "03",
    slug: "urban-courtyard",
    title: "Urban Courtyard",
    location: "Seville, Spain",
    year: "2023",
    category: "Renovation",
    image: courtyard,
    summary:
      "An inward-facing house built around water and a single tree, insulated from a dense street edge.",
  },
  {
    index: "04",
    slug: "concrete-house",
    title: "Concrete House",
    location: "Kyoto, Japan",
    year: "2022",
    category: "Residential",
    image: concreteHouse,
    summary:
      "Board-formed concrete masses frame a sequence of shaded thresholds and controlled daylight.",
  },
  {
    index: "05",
    slug: "meridian-interior",
    title: "Meridian Interior",
    location: "Copenhagen, Denmark",
    year: "2022",
    category: "Interior",
    image: interiorMinimal,
    summary:
      "A restrained interior renovation in oak, plaster and polished concrete for a young family.",
  },
  {
    index: "06",
    slug: "frame-studio",
    title: "Frame Studio",
    location: "Rotterdam, Netherlands",
    year: "2021",
    category: "Commercial",
    image: urbanFrame,
    summary:
      "A workspace concept built on an exposed structural grid, adaptable across three floor plates.",
  },
];

export const projectCategories = [
  "Residential",
  "Villa",
  "Commercial",
  "Concept",
  "Interior",
  "Renovation",
];