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
        <p className={`label-xs ${invert ? "text-white/50" : "text-muted-foreground"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-tight ${
          align === "center" ? "mx-auto" : ""
        } ${invert ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-xl text-base ${align === "center" ? "mx-auto" : ""} ${
            invert ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}