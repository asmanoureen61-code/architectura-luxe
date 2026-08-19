import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Plan } from "@/data/plans";

export function PlanCard({ plan }: { plan: Plan }) {
  const cover = plan.images[0]!;
  return (
    <Link
      to="/plans/$slug"
      params={{ slug: plan.slug }}
      className="group flex flex-col border border-arc-border-light bg-arc-card transition-all duration-500 hover:-translate-y-1.5 hover:border-arc-ink/45"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-arc-light">
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="label-xs absolute left-4 top-4 bg-arc-card/90 px-2.5 py-1.5 text-arc-ink">
          {plan.planId}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="label-xs text-arc-muted-dark">{plan.category}</p>
        <h3 className="mt-3 font-serif text-2xl leading-tight text-arc-ink transition-colors duration-300 group-hover:text-arc-accent">
          {plan.title}
        </h3>
        <dl className="mt-5 grid grid-cols-4 gap-2 border-y border-arc-border-light py-4 text-center">
          {[
            ["Beds", plan.bedrooms],
            ["Baths", plan.bathrooms],
            ["Floors", plan.floors],
            ["Area", `${(plan.squareFeet / 1000).toFixed(1)}k`],
          ].map(([label, value]) => (
            <div key={String(label)}>
              <dt className="label-xs text-arc-muted-dark">{label}</dt>
              <dd className="mt-1.5 text-sm text-arc-ink">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <p className="label-xs text-arc-muted-dark">From</p>
            <p className="mt-1 text-lg text-arc-ink">${plan.price.toLocaleString()}</p>
          </div>
          <span className="label-xs inline-flex items-center gap-2 text-arc-ink">
            View Plan
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}