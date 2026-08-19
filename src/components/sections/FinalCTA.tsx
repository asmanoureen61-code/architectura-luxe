import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
        stroke="currentColor"
        fill="none"
      >
        <path d="M0 320h1200M0 260h1200M120 0v400M980 0v400" />
        <path d="M300 320l120-140 120 140M420 180v140M660 320V150h180v170" />
      </svg>
      <div className="shell relative">
        <Reveal>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)]">
            Your Next Project Starts With a Plan.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65">
            Explore our architectural collection or work with us to develop a design tailored to
            your vision.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/plans"
              className="label-xs bg-white px-7 py-4 text-ink transition-colors hover:bg-white/85"
            >
              Browse Plans
            </Link>
            <Link
              to="/contact"
              className="label-xs border border-white/60 px-7 py-4 transition-colors hover:bg-white hover:text-ink"
            >
              Start Your Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}