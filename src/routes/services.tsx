import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/Section";
import { Icon } from "@/components/site/Icon";
import { CtaBand, ProcessTimeline } from "@/components/site/sections";
import { useQuote } from "@/components/site/quote-context";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fiber, CCTV, Networking & More | Moving Link Technologies" },
      {
        name: "description",
        content:
          "Fiber optic solutions, CCTV and surveillance, networking, access control, fire alarm systems, electrical services, website development and telephone systems.",
      },
      { property: "og:title", content: "Technology Services | Moving Link Technologies" },
      {
        property: "og:description",
        content:
          "Eight technology disciplines delivered, installed and supported by one engineering team.",
      },
    ],
  }),
  component: ServicesPage,
});

const QUOTE_NAME: Record<string, string> = {
  "fiber-optic": "Fiber Optic",
  cctv: "CCTV",
  networking: "Networking",
  "access-control": "Access Control",
  "fire-alarm": "Fire Alarm",
  electrical: "Electrical",
  "web-development": "Website Development",
  telephone: "Telephone System",
};

function ServicesPage() {
  const { openQuote } = useQuote();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.items.some((i) => i.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Technology services engineered for uptime."
        description="Search our full service catalogue, or request a quote for the exact combination your site needs."
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              aria-label="Search services"
              className="pl-9"
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {filtered.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <article
                  id={service.slug}
                  className="flex h-full flex-col rounded-2xl surface-panel p-8 transition-all duration-300 hover:glow-ring"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold">{service.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 grid flex-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full sm:w-auto"
                    onClick={() =>
                      openQuote({ service: QUOTE_NAME[service.slug] ?? "Other" })
                    }
                  >
                    {service.cta}
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>

          {!filtered.length ? (
            <p className="mt-16 text-center text-sm text-muted-foreground">
              No services match that search. Try a different keyword.
            </p>
          ) : null}
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="How a service engagement runs." align="center" />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
