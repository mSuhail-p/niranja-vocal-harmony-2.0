import { Reveal, SectionHeading } from "@/components/ui-lux";
import { images } from "@/lib/site-data";

const shots = [
  { src: images.tanpuraBw, alt: "Tanpura recital at a temple courtyard", span: "row-span-2" },
  { src: images.poster, alt: "Carnatic and light music class poster", span: "" },
  { src: images.blackDress, alt: "Backstage portrait before a concert", span: "" },
  { src: images.field, alt: "Portrait in a saree at sunset", span: "row-span-2" },
  { src: images.saree, alt: "Traditional silk saree portrait", span: "" },
  { src: images.portrait, alt: "Studio portrait of Niranjana Rema", span: "" },
  { src: images.candid, alt: "Candid off-stage moment", span: "" },
];

export function Gallery({ full = false }: { full?: boolean }) {
  return (
    <section id="gallery" className="bg-royal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Gallery"
          title="Concerts, studio sessions and quiet moments."
          intro={full ? undefined : "A glimpse of the stage, the studio and the students."}
        />
        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className={s.span}>
              <figure className="group relative h-full overflow-hidden rounded-sm border border-border">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-[linear-gradient(to_top,var(--background),transparent)] p-4 text-xs uppercase tracking-[0.2em] text-foreground transition-transform duration-500 group-hover:translate-y-0">
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
