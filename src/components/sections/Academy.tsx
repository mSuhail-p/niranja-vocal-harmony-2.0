import { Link } from "@tanstack/react-router";
import { Check, Clock, IndianRupee } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { courses } from "@/lib/site-data";

export function Academy() {
  return (
    <section id="academy" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Singing academy"
        title="Courses built around your voice, not a syllabus."
        intro="Batches for kids, adults, working professionals and serious performers — offline in Tripunithura and online worldwide."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.08}>
            <article className="glass lux-hover flex h-full flex-col rounded-sm p-8">
              <h3 className="text-2xl">{c.name}</h3>
              <div className="mt-4 space-y-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Clock className="size-3.5 text-primary" /> {c.duration}
                </p>
                <p className="flex items-center gap-2">
                  <IndianRupee className="size-3.5 text-primary" /> {c.fee}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="size-3.5 text-primary" /> {c.timing}
                </p>
              </div>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {c.syllabus.map((s) => (
                  <li key={s} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-8 rounded-full border border-primary/60 px-6 py-3 text-center text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Enroll Now
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Fees shown are indicative — final schedule and pricing confirmed after a free trial class.
      </Reveal>
    </section>
  );
}
