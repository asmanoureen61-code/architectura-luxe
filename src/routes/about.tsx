import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

const title = "About the Studio — Architecture With Purpose | Atelier Architecture";
const description =
  "We design architecture that balances form, function, proportion and enduring character — from ready-to-build plans to fully custom projects.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="About Us"
        subtitle="A design practice focused on proportion, materiality and spaces that age well."
      />
      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <FinalCTA />
    </>
  );
}