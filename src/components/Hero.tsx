import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { heroSlides } from "@/data/plans";
import { FloorPlanGlyph } from "./FloorPlanGlyph";

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ["Architecture", "That Inspires.", "Spaces That", "Last."];

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index]!;
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 700], [1, 1.12]);
  const contentOpacity = useTransform(scrollY, [0, 420], [1, 0]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section className="relative h-[94vh] min-h-[640px] w-full overflow-hidden bg-ink text-white">
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.slug}
            src={slide.image}
            alt={`${slide.name} — ${slide.type}, evening architectural view`}
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.44) 45%, rgba(10,10,10,0.12) 80%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.66) 100%)" }}
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="shell relative flex h-full flex-col justify-end pb-10 pt-28 lg:justify-center lg:pb-40"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="label-xs text-white/60"
          >
            {slide.collection} · Plan {slide.planId}
          </motion.p>

          <h1 className="display mt-5 text-[clamp(2rem,4.2vw,4.2rem)] text-white">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.09, duration: 0.9, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease }}
            className="mt-6 max-w-[480px] text-base leading-relaxed text-white/80"
          >
            Premium architectural plans shaped around modern living, thoughtful proportion,
            functionality, and timeless design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8, ease }}
            className="mt-3 hidden max-w-[520px] text-sm leading-relaxed text-white/55 sm:block"
          >
            Explore professionally designed residences, villas, and contemporary building plans
            ready to become your next project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/plans"
              className="label-xs inline-flex items-center gap-3 bg-white px-7 py-4 text-ink transition-colors hover:bg-white/85"
            >
              Explore Building Plans
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact"
              className="label-xs hidden border border-white/60 px-7 py-4 text-white transition-colors hover:bg-white hover:text-ink sm:inline-block"
            >
              Start a Custom Project
            </Link>
          </motion.div>
        </div>

        {/* Specification panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease }}
          className="mt-10 hidden w-full max-w-[360px] border border-white/15 p-6 backdrop-blur-sm lg:absolute lg:top-32 lg:right-12 lg:mt-0 lg:block xl:right-[max(3rem,calc(50vw-44rem+3rem))]"
          style={{ backgroundColor: "rgba(15,15,15,0.88)" }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="label-xs text-white/45">Featured Plan</p>
              <p className="display mt-3 text-4xl text-white">
                {slide.squareFeet.toLocaleString()} ft²
              </p>
            </div>
            <FloorPlanGlyph className="h-16 w-20 text-white/40" />
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-white/12 pt-5 text-xs text-white/70">
            <div className="flex justify-between">
              <dt>Bedrooms</dt>
              <dd>{slide.bedrooms}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Bathrooms</dt>
              <dd>{slide.bathrooms}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Floors</dt>
              <dd>{slide.floors}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Garage</dt>
              <dd>{slide.garage}-car</dd>
            </div>
          </dl>
          <Link
            to="/plans/$slug"
            params={{ slug: slide.slug }}
            className="label-xs mt-5 inline-flex items-center gap-2 border-t border-white/12 pt-5 text-white transition-opacity hover:opacity-70"
          >
            View Plan
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Metadata + thumbnails */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="mt-8 flex flex-col items-start gap-6 lg:absolute lg:bottom-12 lg:right-12 lg:mt-0 lg:items-end xl:right-[max(3rem,calc(50vw-44rem+3rem))]"
        >
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4 lg:text-right">
            {[
              ["Type", slide.type],
              ["Style", slide.style],
              ["Collection", slide.collection],
              ["Plan ID", slide.planId],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="label-xs text-white/45">{label}</dt>
                <dd className="mt-1.5 text-sm text-white/90">{value}</dd>
              </div>
            ))}
          </dl>

        </motion.div>
      </motion.div>
    </section>
  );
}