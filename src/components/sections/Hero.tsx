import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { artist, images } from "@/lib/site-data";

const slides = [
  { src: images.tanpuraBw, alt: "Niranjana Rema with a tanpura" },
  { src: images.saree, alt: "Niranjana Rema in a red and gold silk saree" },
  { src: images.portrait, alt: "Studio portrait of Niranjana Rema" },
  { src: images.field, alt: "Niranjana Rema outdoors, black and white portrait" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[56%]"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt}
            initial={{ opacity: 0, x: "12%", scale: 1.05 }}
            animate={{ opacity: 1, x: "0%", scale: 1 }}
            exit={{ opacity: 0, x: "-10%", scale: 1.02 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 size-full object-cover object-top lg:object-contain lg:object-right-bottom"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_4%,transparent_70%)] lg:bg-[linear-gradient(to_right,var(--background),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_45%)]" />
      </motion.div>

      <div className="absolute bottom-24 right-6 z-10 flex gap-2 lg:bottom-10">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="h-1 overflow-hidden rounded-full bg-border transition-all"
            style={{ width: i === index ? 42 : 16 }}
          >
            <motion.span
              key={`${i}-${index}`}
              className="block h-full bg-primary"
              initial={{ width: i === index ? "0%" : "0%" }}
              animate={{ width: i === index ? "100%" : "0%" }}
              transition={{ duration: i === index ? 4.2 : 0.3, ease: "linear" }}
            />
          </button>
        ))}
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pt-28"
      >
        <div className="max-w-2xl lg:max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.42em] text-primary"
          >
            <Sparkles className="size-3.5 animate-pulse" /> {artist.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[3.2rem] leading-[0.95] sm:text-7xl"
          >
            A voice shaped by{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-gold-gradient italic [background-size:200%_auto]"
            >
              raga
            </motion.span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-7 max-w-md text-base text-muted-foreground sm:text-lg"
          >
            Malayalam playback singer, Carnatic vocalist and vocal coach in Tripunithura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/book"
              className="rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary-foreground shadow-lux transition-transform hover:scale-[1.04]"
            >
              Book Performance
            </Link>
            <Link
              to="/classes"
              className="rounded-full border border-primary/60 px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Singing Classes
            </Link>
            <Link
              to="/music"
              className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors hover:border-primary hover:text-primary"
            >
              <Play className="size-3.5" /> Listen
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground sm:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
