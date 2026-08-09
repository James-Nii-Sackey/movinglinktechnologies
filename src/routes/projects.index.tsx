import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand, ProjectsGrid } from "@/components/site/sections";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Our Recent Projects | Moving Link Technologies" },
      {
        name: "description",
        content:
          "CCTV installations, hotel network infrastructure, fiber deployments, access control, fire alarm systems, IP telephony and Starlink installations delivered across Ghana.",
      },
      { property: "og:title", content: "Project Portfolio | Moving Link Technologies" },
      {
        property: "og:description",
        content: "Completed technology installations for offices, hotels and institutions.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Recent Projects"
        description="Installations delivered for offices, hotels, institutions, commercial buildings and remote sites. Open any project for equipment and scope details."
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
