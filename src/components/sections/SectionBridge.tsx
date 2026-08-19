export function SectionBridge({
  from,
  to,
  label,
}: {
  from: string;
  to: string;
  label?: string;
}) {
  return (
    <div
      aria-hidden={label ? undefined : "true"}
      className="relative h-24 w-full lg:h-32"
      style={{ backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      {label ? (
        <div className="shell flex h-full items-center">
          <span className="label-xs text-arc-accent">{label}</span>
          <span className="ml-6 h-px flex-1 bg-current opacity-20" />
        </div>
      ) : null}
    </div>
  );
}