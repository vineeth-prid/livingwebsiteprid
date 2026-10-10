import type { Metadata } from "next";

// Single source of truth for site-wide facts (contact, nav, brand).
export const site = {
  name: "Living",
  legalName: "Living",
  parent: "The Prid",
  tagline: "Life Happens Here.",
  description:
    "Living manages property in India for NRI owners — sales, rentals and maintenance by one accountable team on the ground, and the Living app for the communities they live in.",
  url: "https://living.theprid.com",
  locale: "en_IN",
  phone: "+91 9344 36 7324",
  phoneRaw: "+919344367324",
  whatsapp: "919344367324",
  email: "talktous@theprid.com",
  address: {
    line: "Living, Kakkanad Head Office",
    city: "Ernakulam",
    region: "Kerala",
    country: "IN",
  },
  hours: "Mon – Sat · 9:30 to 6:30",
  // Kakkanad, Ernakulam approx.
  geo: { lat: 10.0159, lng: 76.3419 },
  sameAs: ["https://theprid.com"],
} as const;

// Per-page metadata: unique title + description, canonical, and matching OG.
// `metadataBase` in the root layout turns the relative paths into absolute URLs.
export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // Mirrors the rendered <title>, which the root `%s · Living` template builds.
    openGraph: { title: `${title} · ${site.name}`, description, url: path },
  };
}

/**
 * The primary navigation.
 *
 * `children` turns an item into a menu. Services has three distinct offers
 * that were only reachable by landing on the page and scrolling — naming them
 * in the nav is the difference between "they have services" and "they do the
 * thing I came for".
 *
 * The parent stays a real link in every case: a menu that cannot be clicked
 * strands anyone on a touch screen or a keyboard.
 */
export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Our services",
    href: "/services",
    children: [
      {
        label: "Property buying",
        href: "/services#buying",
        blurb: "The right property sourced, checked and registered for you.",
      },
      {
        label: "Sell your property",
        href: "/services#selling",
        blurb: "Exit when the time is right, handled end to end.",
      },
      {
        label: "Property management",
        href: "/services#property-care",
        blurb: "Rentals and maintenance — tenants, rent, repairs and bills.",
      },
      {
        label: "NRI concierge",
        href: "/services#nri",
        blurb: "One point of contact in India while you live abroad.",
      },
    ],
  },
  { label: "Platform", href: "/platform" },
  { label: "About Living", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavItem = (typeof nav)[number];

/**
 * Where this deployment's own admin lives.
 *
 * `site.url` is the public, canonical address and has to stay production —
 * canonical tags, OG images and JSON-LD all point there on purpose, from every
 * environment. A staff link is the opposite: it has to point at the server the
 * draft was actually created on. Sending a link to living.theprid.com for a draft
 * that only exists in staging is how a reviewer ends up looking at a listing
 * that isn't there.
 *
 * So set APP_BASE_URL per environment. Unset, this is production, which is what
 * it always was.
 */
const appBaseUrl = (): string =>
  (process.env.APP_BASE_URL ?? site.url).replace(/\/+$/, "");

/**
 * Where staff review a listing that is not on the website.
 *
 * Deliberately an admin path: a draft has no public URL and must not be given
 * one. Anything under /admin is behind the session check, so a link that
 * leaks goes to a login screen rather than to an unpublished listing.
 */
export const adminPropertyUrl = (id: string) =>
  `${appBaseUrl()}/admin/properties/${id}`;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
export const telLink = `tel:${site.phoneRaw}`;
export const mailLink = `mailto:${site.email}`;
