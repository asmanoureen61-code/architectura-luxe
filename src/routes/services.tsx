import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";

const title = "Architecture Services — Plans, Customization & Custom Design | Atelier Architecture";
const description =
  "Ready-made building plans, plan customization, custom residential and commercial architecture, visualization and design consultation.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Services"
        subtitle="From a finished drawing set to a fully bespoke commission — six ways to work with the studio."
      />
      <ServicesSection />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}