import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { nav, site } from "@/data/site";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !overHero;
  const text = solid ? "text-foreground" : "text-white";

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className={`display text-sm tracking-[0.24em] ${text}`}>
            {site.brandShort}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`label-xs relative py-1 transition-opacity hover:opacity-60 ${text}`}
                activeProps={{ "aria-current": "page" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                <span className="after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search plans"
              className={`hidden h-9 w-9 items-center justify-center transition-opacity hover:opacity-60 sm:flex ${text}`}
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className={`hidden h-9 w-9 items-center justify-center transition-opacity hover:opacity-60 sm:flex ${text}`}
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <Link
              to="/plans"
              className={`label-xs hidden border px-5 py-3 transition-colors lg:inline-block ${
                solid
                  ? "border-ink bg-ink text-white hover:bg-accent hover:border-accent"
                  : "border-white/70 text-white hover:bg-white hover:text-ink"
              }`}
            >
              Explore Plans
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex h-10 w-10 items-center justify-center lg:hidden ${text}`}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink text-white lg:hidden"
          >
            <div className="shell flex h-[72px] items-center justify-between">
              <span className="display text-sm tracking-[0.24em]">{site.brandShort}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="shell mt-10 flex flex-col gap-6" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <Link to={item.to} className="display block text-4xl">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/plans"
                className="label-xs mt-6 border border-white px-6 py-4 text-center"
              >
                Explore Plans
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}