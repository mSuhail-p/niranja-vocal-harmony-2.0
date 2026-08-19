import { Newspaper, PlayCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { news, press } from "@/lib/site-data";

export function News() {
  return (
    <section id="news" className="bg-royal py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="In the news"
          title="Press & features."
          intro="Television features, interviews and release coverage on Niranjana Rema's music."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-10">
            {news.map((n) => (
              <Reveal key={n.id}>
                <article className="glass overflow-hidden rounded-2xl border border-border">
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${n.id}`}
                      title={n.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 size-full border-0"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                      <PlayCircle className="size-3.5" /> {n.outlet} · {n.date}
                    </p>
                    <h3 className="mt-3 font-display text-3xl">{n.title}</h3>
                    <p className="mt-3 text-muted-foreground">{n.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="divide-y divide-border border-y border-border">
              {press.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.06}>
                  <div className="py-6 transition-colors hover:bg-card sm:px-4">
                    <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary">
                      <Newspaper className="size-3.5" /> {p.outlet}
                    </p>
                    <h4 className="mt-2 text-xl">{p.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
