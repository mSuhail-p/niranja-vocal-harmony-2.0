import { useEffect, useRef, useState } from "react";
import { AlertTriangle, ExternalLink, Music2 } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { songs, streaming } from "@/lib/site-data";

const SPOTIFY_ARTIST_ID = "0Dne0wWKxSCa9lHm8ymvsM";
const ARTIST_URL = `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`;
const EMBED_URL = `https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0&locale=en`;
const LOAD_TIMEOUT_MS = 8000;

export function MusicPlayer() {
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const loaded = useRef(false);

  useEffect(() => {
    if (status !== "loading") return;
    const timer = setTimeout(() => {
      if (loaded.current) return;
      setStatus("failed");
      setErrorMessage(
        `Spotify embed did not load within ${LOAD_TIMEOUT_MS / 1000}s (network timeout / connection blocked).`,
      );
    }, LOAD_TIMEOUT_MS);

    // Confirm Spotify's CDN is actually reachable and report the exact status.
    const controller = new AbortController();
    fetch(EMBED_URL, { mode: "no-cors", signal: controller.signal }).catch((err: unknown) => {
      if (loaded.current || controller.signal.aborted) return;
      setStatus("failed");
      setErrorMessage(
        `Could not reach open.spotify.com — ${err instanceof Error ? err.message : String(err)}`,
      );
    });

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [status]);

  const retry = () => {
    loaded.current = false;
    setErrorMessage("");
    setStatus("loading");
  };

  return (
    <section id="music" className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Music"
        title="Film songs, kritis and devotional singles."
        intro="Listen to the official releases — streaming straight from Niranjana Rema's Spotify artist page."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass sticky top-28 rounded-sm p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Listen now</p>

            {status === "failed" ? (
              <div className="mt-6 rounded-xl border border-destructive/40 bg-destructive/5 p-6 text-center">
                <AlertTriangle className="mx-auto size-6 text-destructive" />
                <p className="mt-3 text-sm">The Spotify player couldn't load here.</p>
                <p className="mt-2 break-words text-xs text-muted-foreground">{errorMessage}</p>
                <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                  <a
                    href={ARTIST_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Open in Spotify
                    <ExternalLink className="size-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={retry}
                    className="inline-flex items-center rounded-sm border border-border px-5 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative mt-6 overflow-hidden rounded-xl">
                <iframe
                  key={status}
                  title="Niranjana Rema on Spotify"
                  src={EMBED_URL}
                  width="100%"
                  height="420"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="w-full border-0"
                  onLoad={() => {
                    loaded.current = true;
                    setStatus("ready");
                  }}
                  onError={() => {
                    setStatus("failed");
                    setErrorMessage("The embed frame failed to load (blocked by the browser or network).");
                  }}
                />
              </div>
            )}

            {status !== "failed" && (
              <a
                href={ARTIST_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              >
                Player not loading? Open in Spotify
              </a>
            )}



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
