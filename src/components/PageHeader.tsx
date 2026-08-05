import { images } from "@/lib/site-data";

export function PageHeader({
  eyebrow,
  title,
  image = images.field,
}: {
  eyebrow: string;
  title: string;
  image?: string;
}) {
  return (
    <header className="relative flex min-h-[52svh] items-end overflow-hidden">
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-1/2">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="size-full object-cover object-top lg:object-contain lg:object-right-bottom"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_10%,transparent_85%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_5%,transparent_70%)] lg:bg-[linear-gradient(to_right,var(--background),transparent_45%)]" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">{title}</h1>
        <div className="hairline mt-6 w-32" />
      </div>
    </header>
  );
}
