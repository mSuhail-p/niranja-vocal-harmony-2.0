import { MessageCircle } from "lucide-react";
import { artist, whatsappLink } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(`Hi ${artist.name}, I'd like to enquire about a booking / classes.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lux transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">WhatsApp</span>
    </a>
  );
}
