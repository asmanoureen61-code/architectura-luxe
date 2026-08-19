import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className={`label-xs ${invert ? "text-arc-accent" : "text-arc-muted-dark"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tight ${
          align === "center" ? "mx-auto" : ""
        } ${invert ? "text-arc-on-dark" : "text-arc-ink"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-xl text-base ${align === "center" ? "mx-auto" : ""} ${
            invert ? "text-arc-muted-light" : "text-arc-muted-dark"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}