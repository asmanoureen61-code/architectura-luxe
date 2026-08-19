import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function ServicesSection({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <section className="shell py-24 lg:py-32">
      <SectionHeader
        eyebrow="Services"
        title="Plans, Customization, and Custom Architecture"
        subtitle="Work with a finished plan, adapt one to your site, or commission a project designed entirely around you."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 0.08}>
            <article className="group flex h-full flex-col border border-border">
              <div className="aspect-[16/10] overflow-hidden bg-stone">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to={s.to}
                  className="label-xs mt-auto inline-flex items-center gap-2 pt-6"
                >
                  {s.cta}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}