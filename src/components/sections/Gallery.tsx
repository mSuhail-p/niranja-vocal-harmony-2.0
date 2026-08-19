import { Reveal, SectionHeading } from "@/components/ui-lux";
import { images } from "@/lib/site-data";

const shots = [
  { src: images.tanpuraBw, alt: "Tanpura recital" },
  { src: images.poster, alt: "Music class poster" },
  { src: images.blackDress, alt: "Backstage portrait" },
  { src: images.field, alt: "Portrait at sunset" },
  { src: images.saree, alt: "Silk saree portrait" },
  { src: images.portrait, alt: "Studio portrait" },
  { src: images.candid, alt: "Candid off-stage moment" },
];

export function Gallery({ full = false }: { full?: boolean }) {
  return (
    <section id="gallery" className="bg-royal py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Gallery"
          title="Concerts, studio sessions and quiet moments."
          intro={full ? undefined : "A glimpse of the stage and the studio."}
        />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure className="group overflow-hidden rounded-sm border border-border bg-card/40 p-2 transition-transform duration-500 hover:-translate-y-1.5">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="max-h-[80vh] w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="px-1 pb-1 pt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
