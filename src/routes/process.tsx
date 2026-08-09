import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/Section";
import { CtaBand, ProcessTimeline, WhyChooseUs } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Work Process — Consultation to Support | Moving Link Technologies" },
      {
        name: "description",
        content:
          "Consultation, site assessment, proposal and quotation, installation, testing and commissioning, then ongoing support and maintenance.",
      },
      { property: "og:title", content: "Our Work Process | Moving Link Technologies" },
      {
        property: "og:description",
        content: "Six clear stages from first call to after-sales support.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="Six stages, from first call to long-term support."
        description="A repeatable engineering process means fewer surprises, accurate quotations and systems that keep working after handover."
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProcessTimeline />
        </div>
      </section>
      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Us" title="What you get at every stage." align="center" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
