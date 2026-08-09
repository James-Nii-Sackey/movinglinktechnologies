import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Moving Link Technologies" },
      {
        name: "description",
        content:
          "Terms governing quotations, equipment supply, installation work and support provided by Moving Link Technologies.",
      },
      { property: "og:title", content: "Terms & Conditions | Moving Link Technologies" },
      {
        property: "og:description",
        content: "Quotation validity, equipment pricing, installation and support terms.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: January 2026" />
      <section className="section-y">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted-foreground sm:px-6 lg:px-8">
          <p>
            Quotations issued by {COMPANY.name} are based on the scope of work agreed at the time
            of assessment. Changes to scope, site conditions or equipment specification may
            change the final figure, and any change will be confirmed with you in writing.
          </p>
          <p>
            Equipment pricing reflects current supply costs and is valid for the period stated on
            the quotation. Availability is confirmed at the point of order.
          </p>
          <p>
            Installation work is carried out by our technicians to professional standards and is
            tested and commissioned before handover. Warranty terms for supplied equipment follow
            the manufacturer's terms.
          </p>
          <p>
            Maintenance and support arrangements are agreed separately and may be provided on a
            per-visit or contract basis.
          </p>
        </div>
      </section>
    </>
  );
}
