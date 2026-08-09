import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY } from "@/lib/site-data";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICE_LINKS = [
  "Fiber Optic",
  "CCTV",
  "Networking",
  "Access Control",
  "Fire Alarm",
  "Electrical",
  "Website Development",
  "Telephone Systems",
];

const PRODUCT_LINKS = [
  "Routers",
  "Cameras",
  "TP-Link",
  "Starlink",
  "Network Equipment",
  "Security Equipment",
  "Communication Equipment",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${COMPANY.name} logo`}
                loading="lazy"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="font-display text-sm leading-tight font-bold">
                MOVING LINK
                <span className="block text-[0.62rem] tracking-[0.28em] text-primary uppercase">
                  Technologies
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Complete technology infrastructure solutions — networking, security, fiber,
              electrical and communication systems designed, installed, tested and supported.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((SocialIcon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links">
            {QUICK.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICE_LINKS.map((l) => (
              <li key={l}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {l}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Products">
            {PRODUCT_LINKS.map((l) => (
              <li key={l}>
                <Link to="/products" className="transition-colors hover:text-primary">
                  {l}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${COMPANY.phone}`} className="hover:text-primary">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="min-w-0 break-all hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                Chat on WhatsApp
              </a>
            </li>
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {COMPANY.name.toUpperCase()}. All Rights Reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.18em] text-foreground uppercase">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">{children}</ul>
    </div>
  );
}
