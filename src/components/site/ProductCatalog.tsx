import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PRODUCTS, PRODUCT_CATEGORIES, type Product } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Reveal } from "./Section";
import { useQuote } from "./quote-context";

export function ProductCatalog() {
  const { openQuote, addItem, quoteItems } = useQuote();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [details, setDetails] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === "all" || p.categorySlug === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-center">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <CategoryChip active={category === "all"} onClick={() => setCategory("all")}>
            All
          </CategoryChip>
          {PRODUCT_CATEGORIES.map((c) => (
            <CategoryChip
              key={c.slug}
              active={category === c.slug}
              onClick={() => setCategory(c.slug)}
            >
              {c.name}
            </CategoryChip>
          ))}
        </div>
      </div>

      {quoteItems.length ? (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-primary/40 bg-surface px-4 py-3">
          <span className="text-sm font-medium">
            {quoteItems.length} product{quoteItems.length > 1 ? "s" : ""} in your quote list
          </span>
          <Button size="sm" onClick={() => openQuote()}>
            Request Quote for List
          </Button>
        </div>
      ) : null}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product, i) => (
          <Reveal key={product.id} delay={Math.min(i, 8) * 45}>
            <article className="flex h-full flex-col rounded-2xl surface-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <div className="grid aspect-[4/3] place-items-center rounded-xl bg-navy-deep grid-pattern">
                <Icon name="PackageCheck" className="h-10 w-10 text-primary/70" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <p className="min-w-0 text-xs tracking-[0.14em] text-primary uppercase">
                  {product.category}
                </p>
                <Badge variant="secondary" className="shrink-0 text-[0.65rem]">
                  {product.availability}
                </Badge>
              </div>
              <h3 className="mt-1.5 text-base font-bold">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button size="sm" variant="ghost" onClick={() => setDetails(product)}>
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => openQuote({ product: product.name })}
                >
                  Request Price
                </Button>
                <Button size="sm" onClick={() => addItem(product.name)}>
                  Add to Quote
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {!filtered.length ? (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No products match that search. Try another keyword or category.
        </p>
      ) : null}

      <Dialog open={!!details} onOpenChange={(v) => !v && setDetails(null)}>
        <DialogContent className="sm:max-w-lg">
          {details ? (
            <>
              <DialogHeader>
                <DialogTitle>{details.name}</DialogTitle>
                <DialogDescription>{details.category}</DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {details.description}
              </p>
              <dl className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-surface p-4 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground uppercase">Availability</dt>
                  <dd className="mt-1 font-medium">{details.availability}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground uppercase">Pricing</dt>
                  <dd className="mt-1 font-medium">Request current price</dd>
                </div>
              </dl>
              <p className="text-xs text-muted-foreground">
                Equipment prices change with supply and specification, so we quote current
                pricing on request.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => {
                    openQuote({ product: details.name });
                    setDetails(null);
                  }}
                >
                  Request Current Price
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    addItem(details.name);
                    setDetails(null);
                  }}
                >
                  Add to Quote
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-surface text-muted-foreground hover:border-primary/60 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
