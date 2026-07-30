import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "About Niranjana Rema — Malayalam Playback & Carnatic Singer";
const description =
  "The musical journey of Niranjana Rema: Carnatic training, Malayalam film songs including Chemrantham and Poomale Pothiyamme, and a growing catalogue of classical singles.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.saree },
      { name: "twitter:image", content: images.saree },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="The artist" title="A life measured in ragas." image={images.portrait} />
      <About />
      <Awards />
    </>
  );
}
