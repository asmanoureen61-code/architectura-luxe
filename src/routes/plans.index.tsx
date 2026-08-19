import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { plans, planCategories } from "@/data/plans";
import { PlanCard } from "@/components/PlanCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

const title = "Architectural Plans — House & Villa Designs | Atelier Architecture";
const description =
  "Browse professionally designed architectural plans for modern homes, luxury villas, duplexes and commercial spaces. Filter by area, bedrooms, floors and price.";

export const Route = createFileRoute("/plans/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PlansPage,
});

const sorts = [
  "Featured",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Area: Small to Large",
] as const;

function PlansPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [floors, setFloors] = useState(0);
  const [garage, setGarage] = useState(0);
  const [minArea, setMinArea] = useState(0);
  const [minWidth, setMinWidth] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState<(typeof sorts)[number]>("Featured");
  const [drawer, setDrawer] = useState(false);

  const results = useMemo(() => {
    const list = plans.filter(
      (p) =>
        (!category || p.category === category) &&
        p.bedrooms >= beds &&
        p.bathrooms >= baths &&
        p.floors >= floors &&
        p.garage >= garage &&
        p.squareFeet >= minArea &&
        p.width >= minWidth &&
        p.price <= maxPrice &&
        (p.title + p.category + p.style + p.planId).toLowerCase().includes(query.toLowerCase()),
    );
    const sorted = [...list];
    if (sort === "Price: Low to High") sorted.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") sorted.sort((a, b) => b.price - a.price);
    if (sort === "Area: Small to Large") sorted.sort((a, b) => a.squareFeet - b.squareFeet);
    if (sort === "Newest") sorted.sort((a, b) => Number(b.id) - Number(a.id));
    if (sort === "Featured") sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    return sorted;
  }, [query, category, beds, baths, floors, garage, minArea, minWidth, maxPrice, sort]);

  const reset = () => {
    setCategory(null);
    setBeds(0);
    setBaths(0);
    setFloors(0);
    setGarage(0);
    setMinArea(0);
    setMinWidth(0);
    setMaxPrice(5000);
  };

  const filters = (
    <div className="space-y-8">
      <div>
        <p className="label-xs text-muted-foreground">Category</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={`transition-opacity hover:opacity-60 ${category === null ? "" : "text-muted-foreground"}`}
            >
              All Plans
            </button>
          </li>
          {planCategories.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setCategory(c)}
                className={`transition-opacity hover:opacity-60 ${category === c ? "" : "text-muted-foreground"}`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {(
        [
          ["Bedrooms", beds, setBeds, 6],
          ["Bathrooms", baths, setBaths, 6],
          ["Floors", floors, setFloors, 3],
          ["Garage", garage, setGarage, 3],
        ] as const
      ).map(([label, value, set, max]) => (
        <div key={label}>
          <p className="label-xs text-muted-foreground">{label} (min)</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from({ length: max + 1 }, (_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => set(n)}
                className={`h-9 w-9 border text-xs transition-colors ${
                  value === n ? "border-foreground bg-ink text-white" : "border-border"
                }`}
              >
                {n === 0 ? "Any" : n}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div>
        <p className="label-xs text-muted-foreground">Building area — min {minArea.toLocaleString()} ft²</p>
        <input
          type="range"
          min={0}
          max={6000}
          step={250}
          value={minArea}
          aria-label="Minimum building area"
          onChange={(e) => setMinArea(Number(e.target.value))}
          className="mt-3 w-full accent-black"
        />
      </div>
      <div>
        <p className="label-xs text-muted-foreground">Lot width — min {minWidth} ft</p>
        <input
          type="range"
          min={0}
          max={120}
          step={2}
          value={minWidth}
          aria-label="Minimum lot width"
          onChange={(e) => setMinWidth(Number(e.target.value))}
          className="mt-3 w-full accent-black"
        />
      </div>
      <div>
        <p className="label-xs text-muted-foreground">Price — up to ${maxPrice.toLocaleString()}</p>
        <input
          type="range"
          min={500}
          max={5000}
          step={100}
          value={maxPrice}
          aria-label="Maximum price"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-3 w-full accent-black"
        />
      </div>

      <button type="button" onClick={reset} className="label-xs border-b border-foreground pb-1">
        Reset filters
      </button>
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow="Collection"
        title="Architectural Plans"
        subtitle="Professionally designed plans for modern homes, villas, and commercial spaces."
      />

      <div className="shell grid gap-12 py-16 lg:grid-cols-[260px_1fr] lg:py-24">
        <aside className="hidden lg:block">{filters}</aside>

        <div>
          <div className="flex flex-wrap items-center gap-3 border-b border-border pb-6">
            <div className="relative flex-1 min-w-[200px]">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                strokeWidth={1.5}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search plans, styles, plan IDs"
                aria-label="Search plans"
                className="w-full border border-border py-3 pl-10 pr-4 text-sm outline-none focus:border-foreground"
              />
            </div>
            <select
              value={sort}
              aria-label="Sort plans"
              onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
              className="border border-border px-4 py-3 text-sm outline-none focus:border-foreground"
            >
              {sorts.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="label-xs inline-flex items-center gap-2 border border-border px-4 py-3.5 lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
              Filters
            </button>
          </div>

          <p className="label-xs mt-6 text-muted-foreground">{results.length} plans</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((plan, i) => (
              <Reveal key={plan.id} delay={(i % 3) * 0.06}>
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>
          {results.length === 0 ? (
            <p className="mt-16 text-sm text-muted-foreground">
              No plans match these filters. Try widening the area or price range.
            </p>
          ) : null}
        </div>
      </div>

      {drawer ? (
        <div className="fixed inset-0 z-[70] flex lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawer(false)}
            className="flex-1 bg-ink/50"
          />
          <div className="w-[86%] max-w-sm overflow-y-auto bg-background p-6">
            <div className="flex items-center justify-between">
              <p className="label-xs">Filters</p>
              <button type="button" onClick={() => setDrawer(false)} aria-label="Close filters">
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-8">{filters}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}