import aboutStudio from "@/assets/about-studio.jpg";
import { Reveal } from "../Reveal";

export function AboutSection() {
  return (
    <section className="shell py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden bg-stone">
            <img
              src={aboutStudio}
              alt="Architecture studio with drafting table and physical models"
              loading="lazy"
              width={1440}
              height={1080}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label-xs text-muted-foreground">About the studio</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]">
            Architecture With Purpose
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              We create architecture that balances form, functionality, proportion, and enduring
              character.
            </p>
            <p>
              Our work focuses on contemporary spaces that respond thoughtfully to the way people
              live, work, and experience their environment.
            </p>
            <p>
              From ready-to-build architectural plans to completely custom projects, our goal is to
              make thoughtful design more accessible without compromising quality.
            </p>
          </div>
          <blockquote className="mt-10 border-l border-foreground/25 pl-6 font-serif text-xl leading-snug">
            “Good architecture should feel inevitable — as if the space could never have existed any
            other way.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}