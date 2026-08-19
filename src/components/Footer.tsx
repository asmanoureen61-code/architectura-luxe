import { Link } from "@tanstack/react-router";
import { nav, site } from "@/data/site";

const support = [
  "FAQs",
  "Plan Licensing",
  "Plan Customization",
  "Privacy Policy",
  "Terms & Conditions",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display text-sm tracking-[0.24em]">{site.brandShort}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Contemporary architectural plans and custom design solutions for thoughtful modern
            spaces.
          </p>
        </div>
        <div>
          <p className="label-xs text-muted-foreground">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-xs text-muted-foreground">Support</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {support.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-xs text-muted-foreground">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 block text-sm underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{site.phone}</p>
          <p className="mt-2 max-w-[16rem] text-sm text-muted-foreground">{site.office}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="label-xs transition-opacity hover:opacity-60">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </p>
        <p>Architectural plans for modern living.</p>
      </div>
    </footer>
  );
}