import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

const title = "Contact — Start a Project or Plan Inquiry | Atelier Architecture";
const description =
  "Tell us about your site, plan or project. Purchase, customization, custom design, visualization and consultation inquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s Design Something Exceptional"
        subtitle="Have a project in mind or need help choosing the right building plan? Tell us about your vision and our team will get in touch."
      />
      <ContactSection />
      <FinalCTA />
    </>
  );
}