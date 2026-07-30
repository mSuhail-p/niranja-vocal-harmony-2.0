import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 sm:py-32">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="mt-14 divide-y divide-border border-y border-border">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-xl sm:text-2xl">{f.q}</span>
              {open === i ? (
                <Minus className="size-4 shrink-0 text-primary" />
              ) : (
                <Plus className="size-4 shrink-0 text-primary" />
              )}
            </button>
            <div
              className={`grid transition-all duration-500 ${
                open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-sm text-muted-foreground">{f.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
