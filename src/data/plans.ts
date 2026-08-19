import heroMountain from "@/assets/hero-mountain-villa.jpg";
import heroCourtyard from "@/assets/hero-courtyard-house.jpg";
import heroCoastal from "@/assets/hero-coastal-residence.jpg";
import planHorizon from "@/assets/plan-horizon.jpg";
import planCasaLinear from "@/assets/plan-casa-linear.jpg";
import planCourtyard from "@/assets/plan-courtyard.jpg";
import planVillaNord from "@/assets/plan-villa-nord.jpg";
import planUrbanFrame from "@/assets/plan-urban-frame.jpg";
import planAtrium from "@/assets/plan-atrium.jpg";
import interiorMinimal from "@/assets/interior-minimal.jpg";

export interface Plan {
  id: string;
  slug: string;
  title: string;
  planId: string;
  category: string;
  style: string;
  description: string;
  price: number;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  garage: number;
  width: number;
  depth: number;
  featured: boolean;
  images: { src: string; alt: string; caption: string }[];
  specifications: { label: string; value: string }[];
  includedDocuments: string[];
}

const baseDocs = [
  "Architectural Floor Plans",
  "Dimensioned Layouts",
  "Elevation Drawings",
  "Roof Plan",
  "Door & Window Schedule",
  "Basic Building Sections",
  "PDF Drawing Set",
];

const spec = (p: Omit<Plan, "specifications" | "includedDocuments">): Plan => ({
  ...p,
  includedDocuments: baseDocs,
  specifications: [
    { label: "Total Area", value: `${p.squareFeet.toLocaleString()} ft²` },
    { label: "Footprint", value: `${p.width} ft × ${p.depth} ft` },
    { label: "Bedrooms", value: String(p.bedrooms) },
    { label: "Bathrooms", value: String(p.bathrooms) },
    { label: "Floors", value: String(p.floors) },
    { label: "Garage", value: `${p.garage}-car` },
    { label: "Structure", value: "Reinforced concrete frame" },
    { label: "Primary Materials", value: "Concrete, glass, oak, natural stone" },
    { label: "Roof", value: "Flat slab with concealed drainage" },
    { label: "Architectural Style", value: p.style },
  ],
});

const gallery = (main: string, name: string) => [
  { src: main, alt: `${name} exterior render`, caption: "Exterior — day" },
  { src: heroMountain, alt: `${name} evening view`, caption: "Exterior — night" },
  { src: interiorMinimal, alt: `${name} interior`, caption: "Interior perspective" },
  { src: heroCourtyard, alt: `${name} courtyard`, caption: "Site layout" },
];

export const plans: Plan[] = [
  spec({
    id: "1",
    slug: "horizon-residence",
    title: "The Horizon Residence",
    planId: "AR-042",
    category: "Luxury Villas",
    style: "Contemporary",
    description:
      "A single-level residence organised along one long horizontal datum. Living volumes open fully to the landscape, while service and sleeping wings are held behind a solid stone spine for privacy and thermal mass.",
    price: 2450,
    squareFeet: 4200,
    bedrooms: 4,
    bathrooms: 4.5,
    floors: 2,
    garage: 2,
    width: 96,
    depth: 62,
    featured: true,
    images: gallery(planHorizon, "The Horizon Residence"),
  }),
  spec({
    id: "2",
    slug: "casa-linear",
    title: "Casa Linear",
    planId: "AR-018",
    category: "Modern Homes",
    style: "Minimalist",
    description:
      "A compact family house for narrow plots. A double-height entry draws light deep into the plan, and a rear garden façade of full-height glazing extends the living area outdoors.",
    price: 1280,
    squareFeet: 2450,
    bedrooms: 3,
    bathrooms: 2.5,
    floors: 2,
    garage: 1,
    width: 42,
    depth: 58,
    featured: true,
    images: gallery(planCasaLinear, "Casa Linear"),
  }),
  spec({
    id: "3",
    slug: "courtyard-house",
    title: "The Courtyard House",
    planId: "AR-027",
    category: "Courtyard Homes",
    style: "Contemporary",
    description:
      "Rooms are arranged around a planted central court that provides cross-ventilation, daylight and a quiet interior horizon independent of the surrounding context.",
    price: 1690,
    squareFeet: 3100,
    bedrooms: 4,
    bathrooms: 3,
    floors: 1,
    garage: 2,
    width: 78,
    depth: 70,
    featured: true,
    images: gallery(planCourtyard, "The Courtyard House"),
  }),
  spec({
    id: "4",
    slug: "villa-nord",
    title: "Villa Nord",
    planId: "AR-055",
    category: "Vacation Homes",
    style: "Nordic Modern",
    description:
      "A dark-clad retreat with a pitched structural section. Warm timber linings and a compact plan make it efficient to build and comfortable in cold climates.",
    price: 1120,
    squareFeet: 1980,
    bedrooms: 3,
    bathrooms: 2,
    floors: 1,
    garage: 1,
    width: 54,
    depth: 40,
    featured: true,
    images: gallery(planVillaNord, "Villa Nord"),
  }),
  spec({
    id: "5",
    slug: "urban-frame",
    title: "Urban Frame",
    planId: "AR-071",
    category: "Duplex",
    style: "Urban Contemporary",
    description:
      "An exposed concrete frame infilled with glazing and stone. Designed as a duplex or single residence with a ground-floor studio suited to live-work use.",
    price: 1980,
    squareFeet: 3600,
    bedrooms: 5,
    bathrooms: 4,
    floors: 3,
    garage: 1,
    width: 38,
    depth: 66,
    featured: true,
    images: gallery(planUrbanFrame, "Urban Frame"),
  }),
  spec({
    id: "6",
    slug: "atrium-residence",
    title: "The Atrium Residence",
    planId: "AR-090",
    category: "Luxury Villas",
    style: "Contemporary Classic",
    description:
      "A travertine-lined atrium organises circulation across two levels. Bedrooms occupy the quiet upper wing; living spaces open to a terrace and pool court.",
    price: 2890,
    squareFeet: 5100,
    bedrooms: 5,
    bathrooms: 5.5,
    floors: 2,
    garage: 3,
    width: 104,
    depth: 72,
    featured: true,
    images: gallery(planAtrium, "The Atrium Residence"),
  }),
  spec({
    id: "7",
    slug: "coastal-pavilion",
    title: "Coastal Pavilion",
    planId: "AR-103",
    category: "Residential",
    style: "Coastal Modern",
    description:
      "A cliff-edge pavilion with deep cantilevered slabs shading a continuous glass perimeter and an infinity terrace facing the water.",
    price: 3150,
    squareFeet: 4650,
    bedrooms: 4,
    bathrooms: 4,
    floors: 3,
    garage: 2,
    width: 88,
    depth: 58,
    featured: false,
    images: gallery(heroCoastal, "Coastal Pavilion"),
  }),
  spec({
    id: "8",
    slug: "atelier-small-house",
    title: "Atelier Small House",
    planId: "AR-112",
    category: "Small Homes",
    style: "Minimalist",
    description:
      "A disciplined 900 ft² plan with a full-height living volume, mezzanine sleeping deck and a covered outdoor room.",
    price: 640,
    squareFeet: 900,
    bedrooms: 1,
    bathrooms: 1,
    floors: 1,
    garage: 0,
    width: 26,
    depth: 34,
    featured: false,
    images: gallery(planCasaLinear, "Atelier Small House"),
  }),
  spec({
    id: "9",
    slug: "meridian-workspace",
    title: "Meridian Workspace",
    planId: "AR-124",
    category: "Commercial",
    style: "Commercial Contemporary",
    description:
      "A three-storey commercial block with a rational structural grid, generous floor plates and a stone-and-glass street elevation.",
    price: 4200,
    squareFeet: 9800,
    bedrooms: 0,
    bathrooms: 6,
    floors: 3,
    garage: 0,
    width: 120,
    depth: 84,
    featured: false,
    images: gallery(planUrbanFrame, "Meridian Workspace"),
  }),
];

export const planCategories = [
  "Residential",
  "Luxury Villas",
  "Modern Homes",
  "Duplex",
  "Commercial",
  "Small Homes",
  "Courtyard Homes",
  "Vacation Homes",
];

export const heroSlides = [
  {
    slug: "horizon-residence",
    name: "Mountain Villa",
    image: heroMountain,
    planId: "AR-042",
    type: "Luxury Residence",
    style: "Contemporary",
    collection: "Signature Series",
    squareFeet: 4200,
    bedrooms: 4,
    bathrooms: 4.5,
    floors: 2,
    garage: 2,
  },
  {
    slug: "courtyard-house",
    name: "Courtyard House",
    image: heroCourtyard,
    planId: "AR-027",
    type: "Private Residence",
    style: "Courtyard Modern",
    collection: "Atelier Series",
    squareFeet: 3100,
    bedrooms: 4,
    bathrooms: 3,
    floors: 1,
    garage: 2,
  },
  {
    slug: "coastal-pavilion",
    name: "Coastal Residence",
    image: heroCoastal,
    planId: "AR-103",
    type: "Cliffside Residence",
    style: "Coastal Modern",
    collection: "Horizon Series",
    squareFeet: 4650,
    bedrooms: 4,
    bathrooms: 4,
    floors: 3,
    garage: 2,
  },
];