import {
  Mic2,
  HeartHandshake,
  Building2,
  Home,
  Disc3,
  Users,
  Globe,
  School,
  AudioLines,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { services } from "@/lib/site-data";

const icons = [Mic2, HeartHandshake, Building2, Home, Disc3, Users, Globe, School, AudioLines];

export function Services() {
  return (
    <section id="services" className="bg-royal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="From temple courtyards to corporate stages."
          intro="Every engagement is scoped personally — repertoire, ensemble size and sound requirements planned with you."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className="bg-background">
                <div className="group h-full p-8 transition-colors hover:bg-card">
                  <Icon className="size-6 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="mt-6 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
