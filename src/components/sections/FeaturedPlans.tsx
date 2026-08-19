import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { plans } from "@/data/plans";
import { PlanCard } from "../PlanCard";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

export function FeaturedPlans() {
  const featured = plans.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="shell py-24 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Collection"
          title="Featured Architectural Plans"
          subtitle="Curated designs for contemporary living."
        />
        <Reveal delay={0.1}>
          <Link to="/plans" className="label-xs inline-flex items-center gap-2 border-b border-foreground pb-2">
            All Plans
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((plan, i) => (
          <Reveal key={plan.id} delay={(i % 3) * 0.08}>
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}