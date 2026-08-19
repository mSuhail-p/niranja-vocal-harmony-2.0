import { Award, Download } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { awards } from "@/lib/site-data";

export function Awards() {
  return (
    <section id="awards" className="bg-royal py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Awards & media"
          title="Recognition, press and appearances."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.07} className="bg-background">
              <div className="h-full p-8">
                <Award className="size-5 text-primary" />
                <h3 className="mt-5 text-xl leading-snug">{a.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{a.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="size-4" /> Request press kit
          </a>
        </Reveal>
      </div>
    </section>
  );
}
