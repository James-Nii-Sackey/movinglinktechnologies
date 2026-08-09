import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Reveal } from "@/components/site/Section";
import { ProductCatalog } from "@/components/site/ProductCatalog";
import { BrandStrip, CtaBand } from "@/components/site/sections";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Technology Products We Supply | Moving Link Technologies" },
      {
        name: "description",
        content:
          "Routers, switches, TP-Link devices, CCTV and IP cameras, NVR/DVR, fiber equipment, Starlink kits, biometric devices, IP phones and electrical materials.",
      },
      { property: "og:title", content: "Technology Product Catalogue" },
      {
        property: "og:description",
        content:
          "A professional technology catalogue — request current pricing on any product we supply.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Technology Products We Supply"
        description="Equipment prices move with supply and specification, so we quote current pricing on request. Add products to a quote list and send them all at once."
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductCatalog />
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Categories" title="What we stock and source." align="center" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-base font-bold">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cat.blurb}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {cat.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
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
