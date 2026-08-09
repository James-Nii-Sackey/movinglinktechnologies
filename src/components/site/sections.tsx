import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "./Icon";
import { Counter, Reveal, SectionHeading } from "./Section";
import { useQuote } from "./quote-context";
import {
  BRANDS,
  FAQS,
  PRICING,
  PROCESS,
  PRODUCTS,
  PROJECTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  WHY_US,
  type Project,
} from "@/lib/site-data";
import cctvImg from "@/assets/project-cctv.jpg";
import fiberImg from "@/assets/project-fiber.jpg";
import hotelImg from "@/assets/project-hotel.jpg";

export const PROJECT_IMAGES: Record<Project["image"], string> = {
  cctv: cctvImg,
  fiber: fiberImg,
  hotel: hotelImg,
};

export function StatsBar() {
  return (
    <section className="border-y border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-10 sm:px-6 lg:grid-cols-5 lg:px-8">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="px-2 py-4 text-center lg:px-4">
            <div className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const { openQuote } = useQuote();
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {list.map((service, i) => (
        <Reveal key={service.slug} delay={i * 60}>
          <article className="group flex h-full flex-col rounded-2xl surface-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {service.items.slice(0, 5).map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openQuote({ service: quoteServiceFor(service.slug) })}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              {service.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function quoteServiceFor(slug: string) {
  const map: Record<string, string> = {
    "fiber-optic": "Fiber Optic",
    cctv: "CCTV",
    networking: "Networking",
    "access-control": "Access Control",
    "fire-alarm": "Fire Alarm",
    electrical: "Electrical",
    "web-development": "Website Development",
    telephone: "Telephone System",
  };
  return map[slug] ?? "Other";
}

export function ProjectsGrid({ limit }: { limit?: number }) {
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((project, i) => (
        <Reveal key={project.slug} delay={i * 70}>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl surface-panel transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={PROJECT_IMAGES[project.image]}
                alt={project.name}
                loading="lazy"
                width={1000}
                height={750}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {project.location}
              </p>
              <h3 className="mt-2 text-lg font-bold">{project.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <Badge key={s} variant="secondary" className="text-[0.7rem]">
                    {s}
                  </Badge>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function PricingCards() {
  const { openQuote } = useQuote();
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {PRICING.map((tier, i) => (
        <Reveal key={tier.title} delay={i * 70} className={tier.featured ? "xl:col-span-1" : ""}>
          <div
            className={`flex h-full flex-col rounded-2xl p-7 ${
              tier.featured
                ? "surface-panel glow-ring border-primary/40"
                : "surface-panel"
            }`}
          >
            {tier.featured ? (
              <Badge className="mb-4 w-fit">Most Requested</Badge>
            ) : null}
            <h3 className="text-lg font-bold">{tier.title}</h3>
            <p className="mt-4 font-display text-2xl font-bold text-gradient-brand">
              {tier.price}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{tier.note}</p>
            <ul className="mt-6 flex-1 space-y-2.5 text-sm text-muted-foreground">
              {tier.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              className="mt-7 w-full"
              variant={tier.featured ? "default" : "outline"}
              onClick={() => openQuote()}
            >
              {tier.cta}
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent lg:block"
        aria-hidden="true"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {PROCESS.map((step, i) => (
          <Reveal key={step.step} delay={i * 80}>
            <div className="relative flex gap-5 rounded-2xl surface-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary animate-pulse-line">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                  {step.step}
                </p>
                <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {WHY_US.map((item, i) => (
        <Reveal key={item.title} delay={i * 50}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50">
            <Icon name={item.icon} className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function BrandStrip() {
  return (
    <div className="rounded-2xl border border-border bg-surface px-6 py-8">
      <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Equipment we supply and work with
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="font-display text-lg font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            {brand}
          </span>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Brand names are shown to indicate equipment we supply and support. No official
        partnership or authorization is implied.
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={i * 80}>
          <figure className="flex h-full flex-col rounded-2xl surface-panel p-7">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display text-sm font-bold text-primary">
                {t.initials}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{t.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{t.company}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {FAQS.map((faq, i) => (
        <AccordionItem key={faq.q} value={`faq-${i}`}>
          <AccordionTrigger className="text-left text-base font-semibold">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FeaturedProducts() {
  const { openQuote, addItem } = useQuote();
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featured.map((product, i) => (
          <Reveal key={product.id} delay={i * 50}>
            <article className="flex h-full flex-col rounded-2xl surface-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <div className="grid aspect-[4/3] place-items-center rounded-xl bg-navy-deep grid-pattern">
                <Icon name="PackageCheck" className="h-10 w-10 text-primary/70" />
              </div>
              <p className="mt-4 text-xs tracking-[0.14em] text-primary uppercase">
                {product.category}
              </p>
              <h3 className="mt-1.5 text-base font-bold">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="sm" variant="outline" onClick={() => openQuote({ product: product.name })}>
                  Request Price
                </Button>
                <Button size="sm" variant="ghost" onClick={() => addItem(product.name)}>
                  Add to Quote
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild size="lg" variant="outline">
          <Link to="/products">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}

export function CtaBand() {
  const { openQuote } = useQuote();
  return (
    <section className="border-y border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl surface-panel grid-pattern p-8 lg:grid-cols-[1.6fr_auto] lg:p-12">
          <div className="min-w-0">
            <SectionHeading
              title="Have a project in mind? Let's scope it properly."
              description="Send us your requirements and our technical team will assess the site, recommend the right equipment and return a transparent quotation."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={() => openQuote()}>
              Request a Quote
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
