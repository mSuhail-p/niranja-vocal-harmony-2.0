import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { events } from "@/lib/site-data";

export function Events() {
  return (
    <section id="events" className="bg-royal py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Upcoming events"
          title="Where to hear her next."
          intro="Concert calendar and tour dates. Booking availability for private engagements is confirmed on request."
        />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.06}>
              <div className="group flex flex-col gap-4 py-7 transition-colors hover:bg-card sm:flex-row sm:items-center sm:px-4">
                <div className="w-28 shrink-0">
                  <p className="font-display text-3xl text-gold-gradient">{e.date}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{e.year}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl">{e.title}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-3.5 text-primary" /> {e.venue}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-full border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {e.status}
                  </span>
                  <Link
                    to="/book"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary"
                  >
                    <CalendarDays className="size-3.5" /> Reserve
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
