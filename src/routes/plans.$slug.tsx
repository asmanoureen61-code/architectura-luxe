import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Expand, X } from "lucide-react";
import { toast } from "sonner";
import { plans } from "@/data/plans";
import { FloorPlanGlyph } from "@/components/FloorPlanGlyph";
import { Reveal } from "@/components/Reveal";
import { PlanCard } from "@/components/PlanCard";

export const Route = createFileRoute("/plans/$slug")({
  loader: ({ params }) => {
    const plan = plans.find((p) => p.slug === params.slug);
    if (!plan) throw notFound();
    return { plan };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Plan unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { plan } = loaderData;
    const title = `${plan.title} — ${plan.squareFeet.toLocaleString()} ft² ${plan.category} Plan`;
    return {
      meta: [
        { title },
        { name: "description", content: plan.description },
        { property: "og:title", content: title },
        { property: "og:description", content: plan.description },
      ],
    };
  },
  component: PlanDetail,
});

const tabs = [
  "Overview",
  "Floor Plans",
  "Specifications",
  "What's Included",
  "Customization",
  "FAQs",
] as const;

const customizationOptions = [
  "Resize floor area",
  "Change room configuration",
  "Modify facade",
  "Add garage",
  "Change window placement",
  "Adjust floor count",
  "Site-specific modifications",
];

const faqs = [
  {
    q: "How is the plan delivered?",
    a: "As a PDF drawing set, issued by email after purchase is confirmed.",
  },
  {
    q: "Can the plan be built anywhere?",
    a: "Plans are drawn to a general standard and must be reviewed by a local engineer for code, climate and structural compliance.",
  },
  {
    q: "How many times can I build it?",
    a: "A standard licence covers a single construction. Multi-build licences are available on request.",
  },
  {
    q: "Do you offer refunds?",
    a: "Drawing sets are non-returnable once issued. We are happy to answer questions before purchase.",
  },
];

function PlanDetail() {
  const { plan } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  const [full, setFull] = useState(false);
  const currentImage = plan.images[active]!;
  const related = plans.filter((p) => p.slug !== plan.slug).slice(0, 3);

  return (
    <>
      <div className="shell pt-32 lg:pt-40">
        <Link to="/plans" className="label-xs inline-flex items-center gap-2 text-muted-foreground">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          All Plans
        </Link>
      </div>

      <section className="shell grid gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div>
          <div className="relative overflow-hidden bg-stone">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              width={1440}
              height={1080}
              className="aspect-[4/3] w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setFull(true)}
              aria-label="View image fullscreen"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-background/90"
            >
              <Expand className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <p className="label-xs absolute bottom-4 left-4 bg-background/90 px-3 py-2">
              {currentImage.caption}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {plan.images.map((img, i) => (
              <button
                key={img.caption}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${img.caption}`}
                className={`overflow-hidden border transition-colors ${
                  i === active ? "border-foreground" : "border-transparent opacity-65 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={320}
                  height={240}
                  className="aspect-[4/3] w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="label-xs text-muted-foreground">
            {plan.category} · {plan.planId}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
            {plan.title}
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

          <p className="mt-8 display text-4xl">${plan.price.toLocaleString()}</p>
          <p className="label-xs mt-2 text-muted-foreground">Single-build licence</p>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
            {[
              ["Area", `${plan.squareFeet.toLocaleString()} ft²`],
              ["Bedrooms", plan.bedrooms],
              ["Bathrooms", plan.bathrooms],
              ["Floors", plan.floors],
              ["Garage", `${plan.garage}-car`],
              ["Footprint", `${plan.width}×${plan.depth} ft`],
            ].map(([label, value]) => (
              <div key={String(label)} className="bg-background p-4">
                <dt className="label-xs text-muted-foreground">{label}</dt>
                <dd className="mt-2 text-sm">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={() =>
                toast("Checkout is not connected yet", {
                  description:
                    "Payments and downloads will be enabled once a payment provider is configured.",
                })
              }
              className="label-xs bg-ink px-8 py-4 text-white transition-colors hover:bg-accent"
            >
              Purchase This Plan
            </button>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                to="/contact"
                className="label-xs border border-foreground px-6 py-4 text-center transition-colors hover:bg-ink hover:text-white"
              >
                Request Customization
              </Link>
              <Link
                to="/contact"
                className="label-xs border border-border px-6 py-4 text-center text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                Ask an Architect
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="shell flex gap-8 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`label-xs whitespace-nowrap border-b-2 py-5 transition-colors ${
                tab === t ? "border-foreground" : "border-transparent text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        {tab === "Overview" ? (
          <div className="grid gap-12 lg:grid-cols-2">
            <p className="font-serif text-2xl leading-snug">{plan.description}</p>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                The plan is organised around clear circulation, controlled daylight and a rational
                structural grid, keeping construction straightforward without diluting the
                architecture.
              </p>
              <p>
                Material intent is {plan.style.toLowerCase()}: concrete and stone for mass, oak and
                glass for warmth and openness. Finishes can be substituted to suit local supply.
              </p>
            </div>
          </div>
        ) : null}

        {tab === "Floor Plans" ? (
          <div className="grid gap-10 lg:grid-cols-2">
            {Array.from({ length: plan.floors }, (_, i) => (
              <div key={i} className="border border-border p-8">
                <p className="label-xs text-muted-foreground">
                  Level {i + 1} — {Math.round(plan.squareFeet / plan.floors).toLocaleString()} ft²
                </p>
                <FloorPlanGlyph className="mt-6 h-56 w-full text-foreground/70" />
                <p className="mt-6 text-sm text-muted-foreground">
                  Dimensioned layout supplied at 1:100 in the PDF drawing set.
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {tab === "Specifications" ? (
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {plan.specifications.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 bg-background p-5 text-sm">
                <dt className="text-muted-foreground">{s.label}</dt>
                <dd className="text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {tab === "What's Included" ? (
          <div>
            <h2 className="font-serif text-3xl">What You Receive</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {plan.includedDocuments.map((d) => (
                <li key={d} className="flex items-start gap-3 border-t border-border pt-4 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-accent" strokeWidth={1.5} />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted-foreground">
              Actual documentation may vary depending on the selected plan and local building
              regulations.
            </p>
          </div>
        ) : null}

        {tab === "Customization" ? (
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl">Make It Yours</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Love the plan but need a different room layout, façade, dimensions, or material
                treatment? Our team can customize selected plans to match your site and lifestyle.
              </p>
              <Link
                to="/contact"
                className="label-xs mt-8 inline-flex items-center gap-2 bg-ink px-7 py-4 text-white transition-colors hover:bg-accent"
              >
                Request Plan Customization
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
            <ul className="grid gap-px border border-border bg-border">
              {customizationOptions.map((o) => (
                <li key={o} className="bg-background p-4 text-sm">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {tab === "FAQs" ? (
          <dl className="grid gap-8 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-border pt-5">
                <dt className="font-serif text-xl">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </section>

      <section className="shell pb-24">
        <h2 className="font-serif text-3xl">Related Plans</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {full ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-6">
          <button
            type="button"
            onClick={() => setFull(false)}
            aria-label="Close fullscreen image"
            className="absolute right-6 top-6 text-white"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}
    </>
  );
}