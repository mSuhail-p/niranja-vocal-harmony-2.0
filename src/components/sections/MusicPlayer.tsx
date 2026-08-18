import { ExternalLink, Music2 } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { songs, streaming } from "@/lib/site-data";

const SPOTIFY_ARTIST_ID = "0Dne0wWKxSCa9lHm8ymvsM";

export function MusicPlayer() {
  return (
    <section id="music" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Music"
        title="Film songs, kritis and devotional singles."
        intro="Listen to the official releases — streaming straight from Niranjana Rema's Spotify artist page."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass sticky top-28 rounded-sm p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Listen now</p>

            <div className="mt-6 overflow-hidden rounded-xl">
              <iframe
                title="Niranjana Rema on Spotify"
                src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0&locale=en`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="w-full border-0"
              />
            </div>

            <a
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              Player not loading? Open in Spotify
            </a>


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
          {songs.map((s) => (
            <a
              key={s.title}
              href={`https://open.spotify.com/search/${encodeURIComponent(`${s.title} Niranjana Rema`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-4 px-2 py-4 text-left transition-colors hover:bg-card"
            >
              <Music2 className="size-4 shrink-0 text-muted-foreground" />
              <span className="flex-1">
                <span className="block text-lg">{s.title}</span>
                <span className="block text-xs text-muted-foreground">{s.meta}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-primary">{s.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
