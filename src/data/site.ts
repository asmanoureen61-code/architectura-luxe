// Placeholder studio details — easy to replace.
export const site = {
  brand: "ATELIER ARCHITECTURE",
  brandShort: "ARC / FORM",
  email: "hello@yourarchitecturestudio.com",
  phone: "+1 (000) 000-0000",
  office: "Studio 04, 128 Meridian Avenue, Lisbon",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
  ],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Building Plans", to: "/plans" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;
