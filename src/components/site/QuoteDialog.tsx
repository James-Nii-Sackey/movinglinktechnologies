import { useEffect, useState } from "react";
import { CheckCircle2, Paperclip, X } from "lucide-react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { QUOTE_SERVICE_OPTIONS, COMPANY } from "@/lib/site-data";
import { useQuote } from "./quote-context";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  location: z.string().trim().min(2, "Please enter the project location").max(160),
  services: z.array(z.string()).min(1, "Select at least one service"),
  description: z.string().trim().min(10, "Tell us a little about the project").max(2000),
  equipment: z.string().trim().max(1000).optional(),
  quantity: z.string().trim().max(10).optional(),
});

export function QuoteDialog() {
  const { open, closeQuote, presetServices, quoteItems, removeItem, clearItems } = useQuote();
  const [services, setServices] = useState<string[]>([]);
  const [files, setFiles] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setServices(presetServices);
      setSubmitted(false);
      setErrors({});
      setFiles([]);
    }
  }, [open, presetServices]);

  const toggleService = (name: string) =>
    setServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      fullName: String(fd.get("fullName") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      location: String(fd.get("location") ?? ""),
      services,
      description: String(fd.get("description") ?? ""),
      equipment: String(fd.get("equipment") ?? ""),
      quantity: String(fd.get("quantity") ?? ""),
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
    setSubmitted(true);
    clearItems();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && closeQuote()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-3xl">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-bold">Request received</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Thank you for contacting {COMPANY.name}. Your request has been received. Our
              technical team will review your requirements and contact you with a customized
              quotation.
            </p>
            <Button className="mt-8" onClick={closeQuote}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
              <DialogDescription>
                Share your project details and our technical team will prepare a customized
                quotation for you.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              <fieldset className="space-y-4">
                <legend className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  Customer Information
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="fullName" error={errors["fullName"]} required />
                  <Field label="Company Name" name="company" error={errors["company"]} />
                  <Field label="Phone Number" name="phone" type="tel" error={errors["phone"]} required />
                  <Field label="Email Address" name="email" type="email" error={errors["email"]} required />
                  <div className="sm:col-span-2">
                    <Field label="Project Location" name="location" error={errors["location"]} required />
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-4">
                <legend className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  Project Information
                </legend>
                <div>
                  <p className="mb-3 text-sm font-medium">What service do you need?</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {QUOTE_SERVICE_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm transition-colors hover:border-primary/60"
                      >
                        <Checkbox
                          checked={services.includes(option)}
                          onCheckedChange={() => toggleService(option)}
                        />
                        <span className="min-w-0 truncate">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors["services"] ? (
                    <p className="mt-2 text-sm text-destructive">{errors["services"]}</p>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="mt-2"
                  />
                  {errors["description"] ? (
                    <p className="mt-2 text-sm text-destructive">{errors["description"]}</p>
                  ) : null}
                </div>

                {quoteItems.length ? (
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <p className="text-sm font-medium">Products added to this quote</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {quoteItems.map((item) => (
                        <Badge key={item} variant="secondary" className="gap-1.5 py-1.5">
                          {item}
                          <button
                            type="button"
                            aria-label={`Remove ${item}`}
                            onClick={() => removeItem(item)}
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_140px]">
                  <div>
                    <Label htmlFor="equipment">Equipment Requirements</Label>
                    <Textarea
                      id="equipment"
                      name="equipment"
                      rows={3}
                      placeholder="e.g. 8 IP dome cameras, 1 NVR, 300m Cat6 cable"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min={1}
                      defaultValue={1}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="uploads">
                    Upload site photographs, building plans or project documents
                  </Label>
                  <label
                    htmlFor="uploads"
                    className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-surface px-4 py-5 text-sm text-muted-foreground transition-colors hover:border-primary/60"
                  >
                    <Paperclip className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 truncate">
                      {files.length ? files.join(", ") : "Choose files (PDF, images, drawings)"}
                    </span>
                  </label>
                  <input
                    id="uploads"
                    name="uploads"
                    type="file"
                    multiple
                    className="sr-only"
                    onChange={(e) =>
                      setFiles(Array.from(e.target.files ?? []).map((f) => f.name))
                    }
                  />
                </div>
              </fieldset>

              <Button type="submit" size="lg" className="w-full">
                Submit Quote Request
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </Label>
      <Input id={name} name={name} type={type} className="mt-2" />
      {error ? <p className="mt-1.5 text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
