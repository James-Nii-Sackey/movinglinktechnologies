import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/site-data";
import { PROJECT_IMAGES, CtaBand } from "@/components/site/sections";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} | Moving Link Technologies` },
        { name: "description", content: project.description.slice(0, 155) },
        { property: "og:title", content: project.name },
        { property: "og:description", content: project.description.slice(0, 155) },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={PROJECT_IMAGES[project.image]}
          alt={project.name}
          width={1000}
          height={750}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-bold text-balance sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {project.location}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div>
            <img
              src={PROJECT_IMAGES[project.image]}
              alt={`${project.name} installation`}
              loading="lazy"
              width={1000}
              height={750}
              className="rounded-3xl border border-border object-cover"
            />
            <h2 className="mt-10 text-2xl font-bold">Project overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl surface-panel p-6">
              <h3 className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                Services provided
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded-2xl surface-panel p-6">
              <h3 className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                Equipment used
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {project.equipment.map((e) => (
                  <li key={e} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg" className="w-full">
              <Link to="/contact">Discuss a similar project</Link>
            </Button>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
