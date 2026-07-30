import { useState } from "react";
import { Play, Pause, ExternalLink, Music2 } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { songs, streaming } from "@/lib/site-data";

const videos = [
  { id: "ZbZSe6N_BXs", title: "Chandrachooda — Ragamalika" },
  { id: "jNQXAC9IVRw", title: "Live in concert — Carnatic evening" },
  { id: "aqz-KE-bpKQ", title: "Studio session — devotional single" },
];

export function MusicPlayer() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <section id="music" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Music"
        title="Film songs, kritis and devotional singles."
        intro="A selected discography across Malayalam cinema and revitalised Carnatic compositions."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass sticky top-28 rounded-sm p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Now playing</p>
            <h3 className="mt-4 text-3xl leading-tight">{songs[active].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{songs[active].meta}</p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause" : "Play"}
                className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lux transition-transform hover:scale-105"
              >
                {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
              </button>
              <div className="flex h-10 flex-1 items-end gap-1" aria-hidden="true">
                {Array.from({ length: 40 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-full bg-primary/50"
                    style={{
                      height: `${20 + Math.abs(Math.sin(i * 0.7)) * 80}%`,
                      opacity: playing ? 1 : 0.35,
                      transition: `opacity .4s ${i * 12}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {streaming.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-sm border border-border px-4 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                >
                  {s.name}
                  <ExternalLink className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {songs.map((s, i) => (
            <button
              key={s.title}
              onClick={() => {
                setActive(i);
                setPlaying(true);
              }}
              className={`flex w-full items-center gap-4 px-2 py-4 text-left transition-colors hover:bg-card ${
                i === active ? "bg-card" : ""
              }`}
            >
              <Music2 className={`size-4 shrink-0 ${i === active ? "text-primary" : "text-muted-foreground"}`} />
              <span className="flex-1">
                <span className="block text-lg">{s.title}</span>
                <span className="block text-xs text-muted-foreground">{s.meta}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-primary">{s.tag}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {videos.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.08}>
            <div className="overflow-hidden rounded-sm border border-border">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allowFullScreen
                  className="size-full"
                />
              </div>
              <p className="p-4 text-sm text-muted-foreground">{v.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
