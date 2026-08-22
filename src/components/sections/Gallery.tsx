import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { images } from "@/lib/site-data";

const shots = [
  { src: images.portrait, alt: "Studio portrait" },
  { src: images.tanpuraBw, alt: "Tanpura recital" },
  { src: images.saree, alt: "Silk saree portrait" },
  { src: images.blackDress, alt: "Backstage portrait" },
  { src: images.field, alt: "Portrait at sunset" },
  { src: images.poster, alt: "Music class & concert poster" },
];

export function Gallery({ full = false }: { full?: boolean }) {
  const [activePhoto, setActivePhoto] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="bg-royal py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Gallery"
          title="Concerts, studio sessions and quiet moments."
          intro={full ? undefined : "A glimpse of the stage and the studio."}
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 3) * 0.08}>
              <figure
                onClick={() => setActivePhoto(s)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-sm border border-border bg-card/40 p-2 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 shadow-lux"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/40">
                  {/* Ambient background filling frame colors without zoom-cropping main photo */}
                  <img
                    src={s.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover blur-xl opacity-35 scale-110 pointer-events-none select-none"
                  />
                  {/* Full image uncropped with object-contain */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                      <ZoomIn className="size-3.5" /> View Photo
                    </span>
                  </div>
                </div>
                <figcaption className="flex items-center justify-between px-2 pb-1 pt-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{s.alt}</span>
                  <span className="text-[0.65rem] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Expand
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 rounded-full bg-card/80 p-2.5 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Close photo"
          >
            <X className="size-6" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-sm border border-border bg-card/90 p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[80vh] max-w-[85vw] rounded-sm object-contain"
            />
            <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {activePhoto.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
