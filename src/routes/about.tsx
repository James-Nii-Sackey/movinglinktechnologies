import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Reveal } from "@/components/site/Section";
import { BrandStrip, CtaBand, StatsBar, WhyChooseUs } from "@/components/site/sections";
import { COMPANY, SECTORS } from "@/lib/site-data";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Moving Link Technologies" },
      {
        name: "description",
        content:
          "Moving Link Technologies designs, installs and maintains technology infrastructure for homes, offices, hotels, schools, institutions and commercial buildings.",
      },
      { property: "og:title", content: "About Moving Link Technologies" },
      {
        property: "og:description",
        content:
          "A technology and engineering solutions company delivering networking, security, fiber, electrical and communication systems.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Technology Solutions Built Around Your Needs."
        description={`${COMPANY.name} provides technology infrastructure, security, networking, electrical, communication, web development, installation, maintenance and equipment supply services.`}
      >
        <Button asChild size="lg">
          <Link to="/services">
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/projects">See Our Work</Link>
        </Button>
      </PageHero>

      <StatsBar />

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={aboutImg}
              alt="Technicians installing structured cabling in an office server room"
              loading="lazy"
              width={1200}
              height={912}
              className="rounded-3xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Who We Are"
              title="One accountable team for the whole technology stack."
              description="We handle design, supply, installation, configuration, testing, commissioning and long-term support — so you are not coordinating five different contractors on one site."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our technicians work across fiber optics, surveillance, networking, access
              control, fire detection, electrical systems, telephone systems and web
              development. Every deployment is documented, tested and handed over properly.
            </p>
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                We work with
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                {SECTORS.map((sector) => (
                  <li key={sector} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0">{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Us" title="Why Choose Moving Link Technologies?" align="center" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
          <div className="mt-14">
            <BrandStrip />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
