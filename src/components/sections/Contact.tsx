import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { artist, whatsappLink } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Contact & location"
        title="Tripunithura, Kochi — and online everywhere."
        intro="Direct inquiries, studio location, and booking contacts."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${artist.phone}`}
              className="glass lux-hover flex flex-col justify-between rounded-sm p-6"
            >
              <Phone className="size-5 text-primary" />
              <div className="mt-4">
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Phone
                </span>
                <span className="mt-1 block text-base font-medium">{artist.phoneDisplay}</span>
              </div>
            </a>
            <a
              href={`mailto:${artist.email}`}
              className="glass lux-hover flex flex-col justify-between rounded-sm p-6"
            >
              <Mail className="size-5 text-primary" />
              <div className="mt-4 min-w-0">
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block truncate text-base font-medium">{artist.email}</span>
              </div>
            </a>
            <a
              href={whatsappLink("Hello! I'd like to enquire.")}
              target="_blank"
              rel="noreferrer"
              className="glass lux-hover flex flex-col justify-between rounded-sm p-6"
            >
              <MessageCircle className="size-5 text-primary" />
              <div className="mt-4">
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  WhatsApp
                </span>
                <span className="mt-1 block text-base font-medium">Chat instantly</span>
              </div>
            </a>
            <div className="glass flex flex-col justify-between rounded-sm p-6">
              <MapPin className="size-5 text-primary" />
              <div className="mt-4">
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Studio
                </span>
                <span className="mt-1 block text-base font-medium">{artist.location}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full min-h-[280px] overflow-hidden rounded-sm border border-border shadow-lux">
            <iframe
              title="Studio location in Tripunithura"
              loading="lazy"
              className="h-full min-h-[300px] w-full border-0"
              src="https://www.google.com/maps?q=Tripunithura,Kochi,Kerala&output=embed"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
