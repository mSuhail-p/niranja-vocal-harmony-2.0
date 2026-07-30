import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/sections/Gallery";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "Gallery — Concerts, Studio Sessions & Portraits | Niranjana Rema";
const description =
  "Photographs from concerts, temple recitals, studio sessions and student performances by singer and vocal coach Niranjana Rema.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.blackDress },
      { name: "twitter:image", content: images.blackDress },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Frames from the stage." image={images.blackDress} />
      <Gallery full />
    </>
  );
}
