import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

const steps = [
  { n: "01", title: "Explore", body: "Browse our curated collection of architectural plans." },
  {
    n: "02",
    title: "Select",
    body: "Choose the design that best matches your site, requirements, and lifestyle.",
  },
  {
    n: "03",
    title: "Customize",
    body: "Request changes to dimensions, layout, façade, or specifications.",
  },
  {
    n: "04",
    title: "Build",
    body: "Receive professional documentation and begin turning the concept into reality.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-stone py-24 lg:py-32">
      <div className="shell">
        <SectionHeader eyebrow="Process" title="From Plan to Place" />
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="border-t border-foreground/25 pt-6">
                <p className="display text-3xl text-foreground/25">{s.n}</p>
                <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}