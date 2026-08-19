import { Compass, Ruler, PencilLine, LifeBuoy } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const features = [
  {
    n: "01",
    icon: Compass,
    title: "Thoughtful Design",
    body: "Every space is carefully considered for aesthetics, circulation, comfort, and daily functionality.",
  },
  {
    n: "02",
    icon: Ruler,
    title: "Construction Ready",
    body: "Clear architectural documentation prepared for efficient project execution.",
  },
  {
    n: "03",
    icon: PencilLine,
    title: "Adaptable Plans",
    body: "Selected designs can be customized according to site, lifestyle, and local requirements.",
  },
  {
    n: "04",
    icon: LifeBuoy,
    title: "Professional Support",
    body: "Get guidance during plan selection and customization.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="shell py-24 lg:py-32">
      <SectionHeader
        eyebrow="Approach"
        title="Designed Beyond Appearance"
        subtitle="Great architecture balances beauty, function, proportion, movement, natural light, context, and practical construction."
      />
      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.n} delay={i * 0.07} className="bg-background">
            <div className="flex h-full flex-col p-8">
              <f.icon className="h-5 w-5 text-accent" strokeWidth={1.25} />
              <p className="label-xs mt-8 text-muted-foreground">{f.n}</p>
              <h3 className="mt-3 font-serif text-2xl">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}