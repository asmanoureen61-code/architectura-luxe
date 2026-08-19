import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const testimonials = [
  {
    quote:
      "The documentation was clear enough that our contractor priced the build without a single query.",
    name: "M. Ferreira",
    project: "Purchased Plan — Casa Linear",
    location: "Porto, Portugal",
  },
  {
    quote:
      "They adapted the courtyard plan to a difficult sloping site without losing what made it good.",
    name: "A. Rahman",
    project: "Plan Customization",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    quote:
      "Calm, precise, and genuinely interested in how we live. The house feels considered everywhere.",
    name: "S. Lindqvist",
    project: "Custom Residential Design",
    location: "Malmö, Sweden",
  },
];

export function Testimonials() {
  return (
    <section className="shell py-24 lg:py-32">
      <SectionHeader eyebrow="Clients" title="Built on Trust" />
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="border-t border-border pt-6">
              <blockquote className="font-serif text-lg leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="text-sm">{t.name}</p>
                <p className="label-xs mt-2 text-muted-foreground">{t.project}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.location}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}