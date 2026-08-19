import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

const title = "Architecture Projects — Residential, Villa & Commercial | Atelier Architecture";
const description =
  "A portfolio of completed and conceptual architecture projects: coastal residences, forest villas, courtyard houses and commercial interiors.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const list = filter ? projects.filter((p) => p.category === filter) : projects;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Built and conceptual work across residential, villa, commercial and interior architecture."
      />

      <div className="shell flex flex-wrap gap-x-6 gap-y-3 border-b border-border py-6">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`label-xs ${filter === null ? "" : "text-muted-foreground"}`}
        >
          All
        </button>
        {projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`label-xs ${filter === c ? "" : "text-muted-foreground"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="shell grid gap-16 py-16 lg:py-24">
        {list.map((project, i) => (
          <Reveal key={project.slug} delay={0.05 * (i % 3)}>
            <article className="group">
              <div className="overflow-hidden bg-stone">
                <img
                  src={project.image}
                  alt={`${project.title}, ${project.location}`}
                  loading="lazy"
                  width={1440}
                  height={1080}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="label-xs text-muted-foreground">{project.index}</p>
                  <h2 className="mt-2 font-serif text-3xl">{project.title}</h2>
                  <p className="mt-3 max-w-xl text-sm text-muted-foreground">{project.summary}</p>
                </div>
                <dl className="grid grid-cols-3 gap-8 text-sm sm:text-right">
                  <div>
                    <dt className="label-xs text-muted-foreground">Location</dt>
                    <dd className="mt-2">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="label-xs text-muted-foreground">Year</dt>
                    <dd className="mt-2">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="label-xs text-muted-foreground">Category</dt>
                    <dd className="mt-2">{project.category}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
        {list.length === 0 ? (
          <p className="text-sm text-muted-foreground">No projects in this category yet.</p>
        ) : null}
      </section>

      <FinalCTA />
    </>
  );
}