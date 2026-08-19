import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Clock, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { courses } from "@/lib/site-data";

export function Academy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft + track.offsetLeft;
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - left);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const step = (dir: number) =>
    scrollTo(Math.min(courses.length - 1, Math.max(0, active + dir)));

  return (
    <section id="academy" className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Singing academy"
        title="Courses built around your voice."
        intro="Batches for kids, adults and serious performers — offline in Tripunithura and online worldwide."
      />

      <div className="mt-10">
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Previous course"
            onClick={() => step(-1)}
            className="rounded-full border border-border p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next course"
            onClick={() => step(1)}
            className="rounded-full border border-border p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {courses.map((c, i) => (
            <motion.article
              key={c.name}
              animate={{
                opacity: active === i ? 1 : 0.55,
                scale: active === i ? 1 : 0.96,
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="glass lux-hover flex w-[82%] shrink-0 snap-start flex-col rounded-sm p-6 sm:w-[46%] lg:w-[31%]"
            >
              <h3 className="text-xl">{c.name}</h3>
              <div className="mt-3 space-y-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
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
              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted-foreground">
                {c.syllabus.map((s) => (
                  <li key={s} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-6 rounded-full border border-primary/60 px-5 py-2.5 text-center text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Enroll Now
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {courses.map((c, i) => (
            <button
              key={c.name}
              type="button"
              aria-label={`Go to ${c.name}`}
              onClick={() => scrollTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                active === i ? "w-8 bg-primary" : "w-3 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <Reveal className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Fees are indicative — final schedule confirmed after a free trial class.
      </Reveal>
    </section>
  );
}
