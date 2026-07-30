import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import { artist, images } from "@/lib/site-data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={images.tanpuraBw}
          alt="Niranjana Rema performing with a tanpura"
          className="size-full object-cover object-[60%_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_8%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)]" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pt-28"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.42em] text-primary"
          >
            <Sparkles className="size-3.5" /> {artist.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[3.2rem] leading-[0.95] sm:text-7xl lg:text-8xl"
          >
            A voice shaped by <span className="text-gold-gradient italic">raga</span>, carried to the screen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-7 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            Malayalam playback singer, Carnatic vocalist and founder of a singing academy in
            Tripunithura — training voices on stage, in studio and online across the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/book"
              className="rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary-foreground shadow-lux transition-transform hover:scale-[1.03]"
            >
              Book Live Performance
            </Link>
            <Link
              to="/classes"
              className="rounded-full border border-primary/60 px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Join Singing Classes
            </Link>
            <Link
              to="/music"
              className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors hover:border-primary hover:text-primary"
            >
              <Play className="size-3.5" /> Watch Performances
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
