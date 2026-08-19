import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="border-b border-border bg-sand pb-16 pt-36 lg:pb-24 lg:pt-44">
      <div className="shell">
        <Reveal>
          <p className="label-xs text-muted-foreground">{eyebrow}</p>
          <h1 className="display mt-5 text-[clamp(2.4rem,6vw,5rem)]">{title}</h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}