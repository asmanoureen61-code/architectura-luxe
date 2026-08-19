import { Reveal } from "../Reveal";

const stats = [
  { value: "50+", label: "Premium Building Plans" },
  { value: "100+", label: "Projects Designed" },
  { value: "10+", label: "Years of Experience" },
  { value: "Worldwide", label: "Client Reach" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-sand py-20">
      <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <p className="display text-[clamp(2.2rem,4vw,3.4rem)]">{s.value}</p>
            <p className="label-xs mt-3 text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
      <p className="shell mt-10 text-xs text-muted-foreground">
        Placeholder figures — replace with your studio’s actual numbers.
      </p>
    </section>
  );
}