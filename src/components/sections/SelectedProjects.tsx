import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function SelectedProjects() {
  const items = projects.slice(0, 4);
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="shell">
        <SectionHeader eyebrow="Portfolio" title="Selected Projects" />
        <div className="mt-16 grid gap-x-10 gap-y-20 lg:grid-cols-12">
          {items.map((project, i) => {
            const wide = i % 3 === 0;
            return (
              <Reveal
                key={project.slug}
                delay={0.05 * i}
                className={`${wide ? "lg:col-span-7" : "lg:col-span-5"} ${
                  i % 4 === 1 ? "lg:mt-24" : ""
                } ${i % 4 === 3 ? "lg:col-start-6" : ""}`}
              >
                <Link to="/projects" className="group block">
                  <div className="overflow-hidden bg-stone">
                    <img
                      src={project.image}
                      alt={`${project.title}, ${project.location}`}
                      loading="lazy"
                      width={1440}
                      height={1080}
                      className={`w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03] ${
                        wide ? "aspect-[16/10]" : "aspect-[4/5]"
                      }`}
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="label-xs text-muted-foreground">{project.index}</p>
                      <h3 className="mt-2 font-serif text-3xl">{project.title}</h3>
                      <p className="mt-3 max-w-md text-sm text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="label-xs text-muted-foreground">{project.category}</p>
                      <p className="mt-2 text-sm">{project.location}</p>
                      <p className="text-sm text-muted-foreground">{project.year}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}