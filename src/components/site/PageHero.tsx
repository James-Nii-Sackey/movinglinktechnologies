import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy-deep">
      <div className="absolute inset-0 grid-pattern opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <span className="inline-flex items-center rounded-full border border-primary/40 bg-surface px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] font-bold text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
