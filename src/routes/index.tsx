import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Reveal } from "@/components/site/Section";
import {
  BrandStrip,
  CtaBand,
  FaqSection,
  FeaturedProducts,
  PricingCards,
  ProcessTimeline,
  ProjectsGrid,
  ServicesGrid,
  StatsBar,
  Testimonials,
  WhyChooseUs,
} from "@/components/site/sections";
import { useQuote } from "@/components/site/quote-context";
import { COMPANY, SECTORS } from "@/lib/site-data";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moving Link Technologies — Smart Technology Infrastructure" },
      {
        name: "description",
        content:
          "Fiber optic, CCTV, networking, access control, fire alarm, electrical and telephone solutions installed, tested and supported by Moving Link Technologies.",
      },
      {
        property: "og:title",
        content: "Moving Link Technologies — Smart Technology Infrastructure",
      },
      {
        property: "og:description",
        content:
          "Reliable technology solutions for connected, secure and smarter businesses across Ghana.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Fiber optic cabling, network racks and connected smart building infrastructure"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 grid-pattern opacity-60 animate-pulse-line" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-3xl animate-rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/80 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase backdrop-blur">
              {COMPANY.tagline}
            </span>
            <h1 className="mt-7 text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl">
              Connecting Businesses Through{" "}
              <span className="text-gradient-brand">Smart Technology.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {COMPANY.name.toUpperCase()} delivers reliable technology, security, networking,
              electrical and communication solutions designed to connect, protect and power
              modern businesses.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={() => openQuote()}>
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Technicians terminating structured network cabling in a server room"
                loading="lazy"
                width={1200}
                height={912}
                className="rounded-3xl border border-border object-cover"
              />
              <div className="absolute -right-3 -bottom-6 hidden rounded-2xl surface-panel px-6 py-5 sm:block">
                <p className="font-display text-2xl font-bold text-gradient-brand">10+</p>
                <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  Technology disciplines
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Us"
              title="Technology Solutions Built Around Your Needs."
              description="Moving Link Technologies provides technology infrastructure, security, networking, electrical, communication, web development, installation, maintenance and equipment supply services — designed, deployed and supported by one accountable team."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {SECTORS.map((sector) => (
                <li key={sector} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0">{sector}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" variant="outline" className="mt-9">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Complete technology services under one company."
            description="From fiber backbones to office phone systems — designed, installed, tested and maintained to a professional standard."
            align="center"
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Charge"
            title="Transparent pricing, based on real scope."
            description="Every project is different. Our pricing is based on the scope of work, equipment required, project size, installation complexity, location and customer requirements."
            align="center"
          />
          <div className="mt-14">
            <PricingCards />
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            title="Technology Products We Supply"
            description="Networking, surveillance, fiber, connectivity, access control, fire safety, communication and electrical equipment — quoted at current pricing."
            align="center"
          />
          <div className="mt-14">
            <FeaturedProducts />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Recent Projects"
            description="A selection of installations delivered for offices, hotels, institutions and commercial buildings."
            align="center"
          />
          <div className="mt-14">
            <ProjectsGrid limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How we handle every project."
            align="center"
          />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Choose Moving Link Technologies?"
            align="center"
          />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
          <div className="mt-14">
            <BrandStrip />
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our customers say."
            align="center"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
          />
          <div className="mt-12">
            <FaqSection />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
