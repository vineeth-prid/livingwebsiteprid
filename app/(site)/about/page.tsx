import type { Metadata } from "next";
import { Compass, Eye, Heart, Sparkles, Leaf, HandHeart, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta";
import { Reveal, Stagger, StaggerItem, ZoomImage } from "@/components/motion";
import { Eyebrow } from "@/components/ui";
import { JsonLd, breadcrumb } from "@/components/schema";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Living — property management for NRI owners, from The Prid",
  description:
    "Living began when The Prid's overseas clients asked us to look after their property in India. Today it is a dedicated practice for NRI owners — sales, rentals, maintenance and community support.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "2021",
    title: "The Prid is founded",
    body: "An AI-driven technology company delivering enterprise-grade digital, security and software solutions to institutions and businesses across India, the GCC and Singapore.",
  },
  {
    year: "Built on trust",
    title: "A loyal, global client network",
    body: "Years of delivering for institutions and enterprises — the Ministry of Defence, Oman among them — built a network that trusts us with what matters.",
  },
  {
    year: "A network abroad",
    title: "Homes and land back in India",
    body: "Many of those clients are NRIs — successful overseas, with property back home and no one on the ground they could rely on.",
  },
  {
    year: "Today",
    title: "Living is born",
    body: "They asked us to look after their property. Today that is a dedicated practice — portfolio management and community support, run for our network.",
  },
];

const values = [
  { icon: Leaf, title: "Calm", body: "We remove noise, not add it. Simplicity is our highest form of luxury." },
  { icon: Heart, title: "Warmth", body: "Every interaction is human first — considerate, patient, never transactional." },
  { icon: Sparkles, title: "Refinement", body: "Details are not decoration. They are how trust is quietly earned." },
  { icon: HandHeart, title: "Care", body: "We treat your home, your family and your time as if they were our own." },
];

const leadership = [
  { role: "Managing Director", note: "Setting the direction and holding the standard." },
  { role: "Head of Property", note: "Sales, valuation, and the homes we choose to represent." },
  { role: "Head of Platform", note: "The technology that keeps communities calm." },
  { role: "Head of NRI Concierge", note: "Care for homes and families from afar." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "About Living", path: "/about" },
        ])}
      />

      <PageHeader
        eyebrow="About Living"
        title="From our network, for our network."
        intro="Living began when The Prid's clients abroad asked us to look after their property in India. Today it manages every property an NRI family owns — like an investment."
        image={img.legacy}
        imageAlt="A warm, established home in India framed by greenery"
      />

      {/* MISSION / VISION */}
      <section className="bg-page section">
        <div className="shell grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-hero border border-hairline bg-surface p-10 shadow-soft md:p-12">
              <Compass className="h-8 w-8 text-pine-600" strokeWidth={1.4} />
              <p className="eyebrow mt-6">Our mission</p>
              <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
                Confident, hands-free ownership — from anywhere in the world.
              </h2>
              <p className="mt-5 leading-relaxed text-body">
                Every property in your portfolio — bought, sold, rented and
                maintained by one accountable team on the ground. One owner. One
                point of contact. Every property, managed as a portfolio.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-hero border border-hairline bg-surface p-10 shadow-soft md:p-12">
              <Eye className="h-8 w-8 text-pine-600" strokeWidth={1.4} />
              <p className="eyebrow mt-6">Our vision</p>
              <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
                One partner for every property they own.
              </h2>
              <p className="mt-5 leading-relaxed text-body">
                We don&rsquo;t chase buyers or tenants from the open market. We
                serve NRI families who already trust us — and keep every home
                they own in investment-grade condition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE / LEGACY */}
      <section className="overflow-hidden bg-surface section">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <Eyebrow>Where we come from</Eyebrow>
            <h2 className="mt-5 font-display text-ink display-lg">
              How Living was born.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14">
            <Stagger className="relative">
              <span className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline md:left-[7px]" />
              {timeline.map((t) => (
                <StaggerItem key={t.title}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    <span className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-clay-500 bg-page" />
                    <div>
                      <p className="mono text-sm text-clay-600">{t.year}</p>
                      <h3 className="mt-1 font-display text-2xl text-ink">
                        {t.title}
                      </h3>
                      <p className="mt-2 max-w-md leading-relaxed text-muted">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <ZoomImage
                src={img.city}
                alt="The Kochi skyline and backwaters at golden hour"
                className="aspect-[4/5] w-full rounded-media shadow-lift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-page section">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <Eyebrow>Our values</Eyebrow>
            <h2 className="mt-5 font-display text-ink display-lg">
              What we hold to, on every home.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-card border border-hairline bg-surface p-8 shadow-soft">
                  <v.icon className="h-7 w-7 text-clay-500" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-2xl text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-surface section">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-5 font-display text-ink display-lg">
              The people behind Living.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              A close team on the ground, backed by The Prid&rsquo;s 30+
              specialists, each looking after one part of your experience. Full
              profiles are available on request.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <StaggerItem key={l.role}>
                <div className="h-full rounded-card border border-hairline bg-page p-8 shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-50">
                    <ShieldCheck className="h-6 w-6 text-pine-600" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink">
                    {l.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {l.note}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY LIVING + FUTURE VISION */}
      <section className="bg-pine-50 section">
        <div className="shell grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Why Living</Eyebrow>
            <h2 className="mt-5 font-display text-ink display-lg">
              Because a property abroad deserves better than favours.
            </h2>
            <p className="mt-6 leading-relaxed text-body">
              You shouldn&rsquo;t have to rely on relatives, three brokers and a
              folder of paperwork to look after a home you can&rsquo;t visit.
              Living gives you one accountable team, run by people who already
              know you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Future vision</Eyebrow>
            <h2 className="mt-5 font-display text-ink display-lg">
              A single, intelligent home for living.
            </h2>
            <p className="mt-6 leading-relaxed text-body">
              We're building toward a future where an assistant understands your
              home, communities run themselves quietly, and everything from a
              first viewing to a decade of living feels like one seamless,
              premium experience.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Come say hello"
        title="We'd love to show you what Living feels like."
      />

      <section className="sr-only">
        <h2>About {site.name} by {site.parent}</h2>
        <p>{metadata.description as string}</p>
      </section>
    </>
  );
}
