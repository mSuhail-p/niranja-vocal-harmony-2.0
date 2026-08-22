import { Counter, Reveal, SectionHeading } from "@/components/ui-lux";
import { genres, images, stats } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-sm border border-border bg-card/40 p-2">
            <img
              src={images.saree}
              alt="Niranjana Rema in a traditional silk saree"
              className="max-h-[75vh] w-full object-contain"
            />
          </div>
          <div className="glass absolute -bottom-8 -right-2 hidden w-56 rounded-sm p-5 sm:block">
            <p className="font-display text-4xl text-gold-gradient">MA</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Music · Carnatic Vocal
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About the artist"
            title="Trained in tradition, at home on a film score."
          />
          <div className="mt-7 space-y-4 text-muted-foreground">
            <p>
              Niranjana Rema is an Indian playback and classical singer known for her soulful tracks
              in Malayalam cinema and her beautifully produced Carnatic and devotional singles. Her
              voice first reached a wide audience through <em>Chemrantham</em> in{" "}
              <em>The Great Indian Kitchen</em>, and later through <em>Poomale Pothiyamme</em> from{" "}
              <em>Chaaver</em> and <em>Pournami Chandrika</em> from <em>Freedom Fight</em>.
            </p>
            <p>
              Alongside cinema she has collaborated closely with music director Ratheesh Vega on a
              series of revitalised Carnatic compositions — Chandrachooda, Nagumomu, Samaja Vara
              Gamana and the Brindavani Thillana among them — bringing classical kritis to a
              contemporary listening audience.
            </p>
            <p>
              From her studio in Tripunithura she teaches Carnatic and light music to children and
              adults, in person and online, with a focus on sruthi, breath and honest musical
              expression.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {genres.map((g) => (
              <span
                key={g}
                className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-foreground/80"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-background">
            <div className="px-6 py-10 text-center">
              <p className="font-display text-5xl text-gold-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
