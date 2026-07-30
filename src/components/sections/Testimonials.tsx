import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Testimonials"
        title="Students, organisers and collaborators."
        intro="Rated 4.9 out of 5 across Google reviews from students and event clients."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.09}>
            <figure className="glass lux-hover flex h-full flex-col rounded-sm p-8">
              <Quote className="size-6 text-primary" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-3.5 fill-primary text-primary" />
                ))}
              </div>
              <figcaption className="mt-4">
                <p className="text-sm">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
