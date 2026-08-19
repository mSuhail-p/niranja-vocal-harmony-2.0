import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Clock, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { courses } from "@/lib/site-data";

export function Academy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

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

  // Keyboard arrows when the track has focus
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  // Trackpad / mouse-wheel horizontal scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const atStart = track.scrollLeft <= 1 && e.deltaY < 0;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    };
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || e.pointerType === "touch") return;
    drag.current = { down: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    track.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    if (drag.current.moved) scrollTo(active);
  };

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
            disabled={active === 0}
            onClick={() => step(-1)}
            className="rounded-full border border-border p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next course"
            disabled={active === courses.length - 1}
            onClick={() => step(1)}
            className="rounded-full border border-border p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(to_right,var(--background),transparent)] transition-opacity duration-500"
            style={{ opacity: active === 0 ? 0 : 1 }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(to_left,var(--background),transparent)] transition-opacity duration-500"
            style={{ opacity: active === courses.length - 1 ? 0 : 1 }}
          />

          <div
            ref={trackRef}
            role="group"
            aria-label="Course slider"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onScroll={onScroll}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="-mx-5 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth px-5 pb-4 outline-none [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          >
            {courses.map((c, i) => (
              <motion.article
                key={c.name}
                animate={{
                  opacity: active === i ? 1 : 0.45,
                  scale: active === i ? 1 : 0.93,
                  filter: active === i ? "blur(0px)" : "blur(1px)",
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (!drag.current.moved && active !== i) scrollTo(i);
                }}
                className="glass lux-hover flex w-[82%] shrink-0 snap-start flex-col rounded-sm p-6 will-change-transform sm:w-[46%] lg:w-[31%]"
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
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {courses.map((c, i) => (
            <button
              key={c.name}
              type="button"
              aria-label={`Go to ${c.name}`}
              onClick={() => scrollTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                active === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/50"
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
