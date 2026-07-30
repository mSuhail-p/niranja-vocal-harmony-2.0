import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { artist, whatsappLink } from "@/lib/site-data";

const field =
  "w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Tripunithura, Kochi — and online everywhere."
      />
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <a
              href={`tel:${artist.phone}`}
              className="glass lux-hover flex items-center gap-4 rounded-sm p-6"
            >
              <Phone className="size-5 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">Phone</span>
                <span className="text-lg">{artist.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={`mailto:${artist.email}`}
              className="glass lux-hover flex items-center gap-4 rounded-sm p-6"
            >
              <Mail className="size-5 text-primary" />
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">Email</span>
                <span className="block truncate text-lg">{artist.email}</span>
              </span>
            </a>
            <a
              href={whatsappLink("Hello! I'd like to enquire.")}
              target="_blank"
              rel="noreferrer"
              className="glass lux-hover flex items-center gap-4 rounded-sm p-6"
            >
              <MessageCircle className="size-5 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">WhatsApp</span>
                <span className="text-lg">Chat instantly</span>
              </span>
            </a>
            <div className="glass flex items-center gap-4 rounded-sm p-6">
              <MapPin className="size-5 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">Studio</span>
                <span className="text-lg">{artist.location}</span>
              </span>
            </div>
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Studio location in Tripunithura"
                loading="lazy"
                className="h-64 w-full"
                src="https://www.google.com/maps?q=Tripunithura,Kochi,Kerala&output=embed"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass grid gap-5 rounded-sm p-8"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thank you — your message is on its way.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Name
              <input required className={`mt-2 ${field}`} />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
              <input required type="email" className={`mt-2 ${field}`} />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Subject
              <input className={`mt-2 ${field}`} />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Message
              <textarea rows={6} required className={`mt-2 ${field}`} />
            </label>
            <button className="rounded-full bg-primary px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-primary-foreground shadow-lux">
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
