import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeaturedPlans } from "@/components/sections/FeaturedPlans";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

const title = "Premium Architectural House Plans & Modern Building Designs | Atelier Architecture";
const description =
  "Explore premium residential and commercial architectural plans, modern house designs, luxury villas, and custom architecture services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedPlans />
      <SelectedProjects />
      <WhyChooseUs />
      <ProcessTimeline />
      <ServicesSection limit={3} />
      <AboutSection />
      <StatsSection />
      <Testimonials />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
