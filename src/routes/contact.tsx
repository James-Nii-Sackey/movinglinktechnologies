import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/site/sections";
import { SectionHeading } from "@/components/site/Section";
import { useQuote } from "@/components/site/quote-context";
import { COMPANY, QUOTE_SERVICE_OPTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Speak With Our Technical Team | Moving Link Technologies" },
      {
        name: "description",
        content:
          "Call, email or WhatsApp Moving Link Technologies. Send your project requirements and our technical team will respond with next steps.",
      },
      { property: "og:title", content: "Contact Moving Link Technologies" },
      {
        property: "og:description",
        content: "Have a project in mind? Speak with our technical team today.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Please tell us a little more").max(2000),
});

function ContactPage() {
  const { openQuote } = useQuote();
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service,
      message: String(fd.get("message") ?? ""),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    form.reset();
    setService("");
    toast.success("Message sent", {
      description: `Thank you for contacting ${COMPANY.name}. Our team will be in touch shortly.`,
    });
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Have a project in mind? Speak with our technical team today."
        description="Send us your requirements and we will advise on the right approach, equipment and timeline."
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <form onSubmit={onSubmit} noValidate className="rounded-2xl surface-panel p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" className="mt-2" />
                {errors["name"] ? (
                  <p className="mt-1.5 text-sm text-destructive">{errors["name"]}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" className="mt-2" />
                {errors["email"] ? (
                  <p className="mt-1.5 text-sm text-destructive">{errors["email"]}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" className="mt-2" />
                {errors["phone"] ? (
                  <p className="mt-1.5 text-sm text-destructive">{errors["phone"]}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="service">Service Required</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className="mt-2 w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {QUOTE_SERVICE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors["service"] ? (
                  <p className="mt-1.5 text-sm text-destructive">{errors["service"]}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} className="mt-2" />
                {errors["message"] ? (
                  <p className="mt-1.5 text-sm text-destructive">{errors["message"]}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="submit" size="lg">
                Send Message
              </Button>
              <Button type="button" size="lg" variant="outline" onClick={() => openQuote()}>
                Request a Quote
              </Button>
            </div>
          </form>

          <aside className="space-y-4">
            <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone" value={COMPANY.phone} href={`tel:${COMPANY.phone}`} />
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Office" value={COMPANY.address} />
            <ContactRow icon={<Clock className="h-5 w-5" />} label="Working hours" value={COMPANY.hours} />
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-primary/40 bg-surface p-5 text-sm font-semibold transition-colors hover:border-primary"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
              Chat with us on WhatsApp
            </a>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Accra,Ghana&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Before you get in touch." align="center" />
          <div className="mt-12">
            <FaqSection />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </span>
        <span className="block text-sm font-medium break-words">{value}</span>
      </span>
    </>
  );
  const cls = "flex items-center gap-4 rounded-2xl border border-border bg-surface p-5";
  return href ? (
    <a href={href} className={`${cls} transition-colors hover:border-primary/60`}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}
