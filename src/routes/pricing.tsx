import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/Section";
import { CtaBand, FaqSection, PricingCards, ProcessTimeline } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "How We Charge — Transparent Project Pricing | Moving Link Technologies" },
      {
        name: "description",
        content:
          "Pricing based on scope of work, equipment, project size, installation complexity and location. Site assessment, installation, equipment supply, maintenance and complete projects.",
      },
      { property: "og:title", content: "How We Charge | Moving Link Technologies" },
      {
        property: "og:description",
        content:
          "Transparent, scope-based pricing for technology installation, equipment supply and support.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Charge"
        title="Transparent pricing, based on real scope."
        description="Every project is different. Our pricing is based on the scope of work, equipment required, project size, installation complexity, location and customer requirements."
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingCards />
          <p className="mt-10 rounded-xl border border-border bg-surface p-5 text-sm text-muted-foreground">
            We do not publish fixed prices for work we have not scoped. Figures shown as
            “Starting From”, “Custom Pricing” or “Request a Quote” are confirmed in writing
            after a site assessment.
          </p>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="What happens after you enquire." align="center" />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Pricing questions, answered." align="center" />
          <div className="mt-12">
            <FaqSection />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
