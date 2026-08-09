import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Moving Link Technologies" },
      {
        name: "description",
        content:
          "How Moving Link Technologies collects, uses and protects information submitted through quote requests and contact forms.",
      },
      { property: "og:title", content: "Privacy Policy | Moving Link Technologies" },
      {
        property: "og:description",
        content: "Our approach to handling customer and project information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026" />
      <section className="section-y">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted-foreground sm:px-6 lg:px-8">
          <p>
            {COMPANY.name} collects only the information you submit through our quote request
            and contact forms — your name, company, phone number, email address, project
            location and the project details you choose to share.
          </p>
          <p>
            This information is used solely to assess your requirements, prepare quotations and
            communicate with you about your project. We do not sell customer information.
          </p>
          <p>
            Documents you upload, such as site photographs and building plans, are treated as
            confidential project material and shared only with the technical team working on
            your enquiry.
          </p>
          <p>
            To request an update or deletion of your information, contact us at {COMPANY.email}.
          </p>
        </div>
      </section>
    </>
  );
}
