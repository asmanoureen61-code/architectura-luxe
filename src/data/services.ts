import planHorizon from "@/assets/plan-horizon.jpg";
import planCourtyard from "@/assets/plan-courtyard.jpg";
import planAtrium from "@/assets/plan-atrium.jpg";
import urbanFrame from "@/assets/plan-urban-frame.jpg";
import interiorMinimal from "@/assets/interior-minimal.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

export const services = [
  {
    slug: "ready-made-plans",
    title: "Ready-Made Building Plans",
    body: "Premium pre-designed architectural plans, documented and ready to take to construction.",
    image: planHorizon,
    cta: "Browse Plans",
    to: "/plans" as const,
  },
  {
    slug: "plan-customization",
    title: "Plan Customization",
    body: "Modify an existing plan — area, layout, façade or specification — for your site and requirements.",
    image: planCourtyard,
    cta: "Request Customization",
    to: "/contact" as const,
  },
  {
    slug: "custom-residential",
    title: "Custom Residential Design",
    body: "Bespoke architecture designed from the ground up around context, orientation and daily life.",
    image: planAtrium,
    cta: "Start a Project",
    to: "/contact" as const,
  },
  {
    slug: "commercial-architecture",
    title: "Commercial Architecture",
    body: "Contemporary architectural concepts for workspaces, retail and hospitality environments.",
    image: urbanFrame,
    cta: "Discuss a Brief",
    to: "/contact" as const,
  },
  {
    slug: "visualization",
    title: "Architectural Visualization",
    body: "High-quality 3D renderings and visual presentations for approvals, marketing and review.",
    image: interiorMinimal,
    cta: "Request Visuals",
    to: "/contact" as const,
  },
  {
    slug: "consultation",
    title: "Design Consultation",
    body: "Professional guidance on feasibility, proportion and materiality before construction begins.",
    image: aboutStudio,
    cta: "Book a Consultation",
    to: "/contact" as const,
  },
];