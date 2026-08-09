import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
