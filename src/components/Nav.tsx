import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { artist, whatsappLink } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/classes", label: "Classes" },
  { to: "/gallery", label: "Gallery" },
  { to: "/music", label: "Music" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="group leading-none">
          <span className="font-display text-2xl tracking-wide text-gold-gradient">Niranjana Rema</span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Vocalist · Academy
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] uppercase tracking-[0.18em] transition-colors hover:text-primary ${
                path === l.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour mode"
            className="rounded-full border border-border p-2 text-foreground/80 transition-colors hover:text-primary"
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <Link
            to="/book"
            className="rounded-full border border-primary/60 px-5 py-2 text-[12px] uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Book Now
          </Link>
        </div>

        <button
          className="rounded-full border border-border p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass mt-3 border-t px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm uppercase tracking-[0.2em] text-foreground/85">
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Link
                to="/book"
                className="rounded-full bg-primary px-5 py-2 text-[12px] uppercase tracking-[0.2em] text-primary-foreground"
              >
                Book Now
              </Link>
              <a
                href={whatsappLink(`Hi ${artist.name}, I'd like to know more.`)}
                className="rounded-full border border-border px-5 py-2 text-[12px] uppercase tracking-[0.2em]"
              >
                WhatsApp
              </a>
              <button onClick={toggleTheme} aria-label="Toggle colour mode" className="rounded-full border border-border p-2">
                {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
