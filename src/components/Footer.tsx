import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Spotify, Mail, Phone, MapPin } from "lucide-react";
import { artist, whatsappLink } from "@/lib/site-data";
import { Divider } from "@/components/ui-lux";

export function Footer() {
  return (
    <footer className="border-t border-border bg-royal">
      <Divider />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-gold-gradient">{artist.name}</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Carnatic and playback vocalist, and founder of a singing academy in Tripunithura teaching
            students on stage and online across the world.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { Icon: Spotify, href: "https://open.spotify.com/artist/0Dne0wWKxSCa9lHm8ymvsM", label: "Spotify" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border p-3 text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                aria-label={label}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Explore</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {[
              ["/about", "About"],
              ["/classes", "Singing Classes"],
              ["/gallery", "Gallery"],
              ["/music", "Music & Videos"],
              ["/events", "Events"],
              ["/book", "Book Now"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Newsletter</p>
          <p className="mt-5 text-sm text-muted-foreground">Concert dates and new releases, once a month.</p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-input bg-transparent px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-widest text-primary-foreground">
              Join
            </button>
          </form>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-primary" />
              <a href={`tel:${artist.phone}`}>{artist.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-3.5 text-primary" />
              <a href={`mailto:${artist.email}`}>{artist.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" />
              {artist.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {artist.name}. All rights reserved. ·{" "}
        <a href={whatsappLink("Hello!")} className="text-primary">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
