import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { artist, whatsappLink } from "@/lib/site-data";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Programs" },
  { id: "classes", label: "Classes" },
  { id: "gallery", label: "Gallery" },
  { id: "music", label: "Music" },
  // { id: "events", label: "Events" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    } else {
      window.location.hash = id;
    }
  }, []);

  // IntersectionObserver to highlight active nav link on scroll
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "classes",
      "gallery",
      "music",
      "events",
      "news",
      "book",
      "contact",
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (hashId) {
        const timer = setTimeout(() => {
          scrollToSection(hashId);
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollToSection]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "border-b border-transparent py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="group leading-none"
        >
          <span className="font-display text-2xl tracking-wide text-gold-gradient">
            Niranjana Rema
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Vocalist · Academy
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-primary ${isActive ? "text-primary font-medium" : "text-foreground/80"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour mode"
            className="rounded-full border border-border p-2 text-foreground/80 transition-colors hover:text-primary"
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(
                new CustomEvent("select-enquiry-mode", {
                  detail: { mode: "program" },
                })
              );
              scrollToSection("book");
            }}
            className="rounded-full border border-primary/60 px-5 py-2 text-[12px] uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Book Now
          </a>
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-sm uppercase tracking-[0.2em] transition-colors ${activeSection === item.id ? "text-primary font-medium" : "text-foreground/85"
                  }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(
                    new CustomEvent("select-enquiry-mode", {
                      detail: { mode: "program" },
                    })
                  );
                  scrollToSection("book");
                }}
                className="rounded-full bg-primary px-5 py-2 text-[12px] uppercase tracking-[0.2em] text-primary-foreground"
              >
                Book Now
              </a>
              <a
                href={whatsappLink(`Hi ${artist.name}, I'd like to know more.`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-2 text-[12px] uppercase tracking-[0.2em]"
              >
                WhatsApp
              </a>
              <button
                onClick={toggleTheme}
                aria-label="Toggle colour mode"
                className="rounded-full border border-border p-2 text-foreground/80"
              >
                {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
