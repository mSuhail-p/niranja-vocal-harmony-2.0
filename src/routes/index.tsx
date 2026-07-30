import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Academy } from "@/components/sections/Academy";
import { Gallery } from "@/components/sections/Gallery";
import { MusicPlayer } from "@/components/sections/MusicPlayer";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Booking } from "@/components/sections/Booking";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { images } from "@/lib/site-data";

const title = "Niranjana Rema — Playback & Carnatic Singer, Vocal Coach";
const description =
  "Malayalam playback and Carnatic vocalist based in Tripunithura. Book live concerts, weddings and studio sessions, or join online and offline singing classes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.tanpuraBw },
      { name: "twitter:image", content: images.tanpuraBw },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Niranjana Rema",
          description,
          genre: ["Carnatic", "Playback", "Devotional", "Ghazal"],
          telephone: "+91 89214 67689",
          email: "npushpamgathan@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Tripunithura", addressRegion: "Kerala", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      
      <Hero />
      <About />
      <Services />
      <Academy />
      <Gallery />
      <MusicPlayer />
      <Events />
      <Testimonials />
      <Awards />
      <Booking />
      <Faq />
      <Contact />
    </>
  );
}
