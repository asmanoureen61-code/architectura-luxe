import { useState } from "react";
import { toast } from "sonner";
import { site } from "@/data/site";
import { Reveal } from "../Reveal";

const projectTypes = [
  "Purchase Existing Plan",
  "Customize Existing Plan",
  "New Residential Project",
  "Commercial Project",
  "Architectural Visualization",
  "Consultation",
  "Other",
];

const fieldClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground";

export function ContactSection({ defaultType }: { defaultType?: string }) {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Inquiry received", {
        description: `We'll reply from ${site.email} within two business days.`,
      });
    }, 700);
  };

  return (
    <section id="contact" className="shell py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="label-xs text-muted-foreground">Contact</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]">
            Let’s Design Something Exceptional
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Have a project in mind or need help choosing the right building plan? Tell us about your
            vision and our team will get in touch.
          </p>
          <dl className="mt-10 space-y-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="label-xs text-muted-foreground">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-xs text-muted-foreground">Phone</dt>
              <dd className="mt-2">{site.phone}</dd>
            </div>
            <div>
              <dt className="label-xs text-muted-foreground">Office</dt>
              <dd className="mt-2">{site.office}</dd>
            </div>
            <div>
              <dt className="label-xs text-muted-foreground">Social</dt>
              <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} className="label-xs hover:opacity-60">
                    {s.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="grid gap-6 border border-border p-6 sm:grid-cols-2 lg:p-10">
            <div>
              <label className="label-xs text-muted-foreground" htmlFor="name">
                Full Name
              </label>
              <input id="name" name="name" required className={fieldClass} />
            </div>
            <div>
              <label className="label-xs text-muted-foreground" htmlFor="email">
                Email Address
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label className="label-xs text-muted-foreground" htmlFor="phone">
                Phone Number
              </label>
              <input id="phone" name="phone" className={fieldClass} />
            </div>
            <div>
              <label className="label-xs text-muted-foreground" htmlFor="location">
                Location
              </label>
              <input id="location" name="location" className={fieldClass} />
            </div>
            <div>
              <label className="label-xs text-muted-foreground" htmlFor="projectType">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue={defaultType ?? projectTypes[0]}
                className={fieldClass}
              >
                {projectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-xs text-muted-foreground" htmlFor="budget">
                Estimated Budget
              </label>
              <input id="budget" name="budget" placeholder="e.g. $250,000" className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label className="label-xs text-muted-foreground" htmlFor="timeline">
                Project Timeline
              </label>
              <input id="timeline" name="timeline" placeholder="e.g. Start in Q2" className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label className="label-xs text-muted-foreground" htmlFor="message">
                Message / Project Details
              </label>
              <textarea id="message" name="message" rows={5} className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="label-xs w-full bg-ink px-8 py-4 text-white transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto"
              >
                {sending ? "Sending…" : "Send Project Inquiry"}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                This form is a front-end demonstration — inquiries are not yet delivered to an inbox.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}