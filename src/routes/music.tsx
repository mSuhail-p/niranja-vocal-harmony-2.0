import { createFileRoute } from "@tanstack/react-router";
import { MusicPlayer } from "@/components/sections/MusicPlayer";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "Music & Videos — Songs, Kritis and Singles | Niranjana Rema";
const description =
  "Listen to Poomale Pothiyamme, Chemrantham, Pournami Chandrika and Carnatic singles including Chandrachooda, Nagumomu and Brindavani Thillana.";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.tanpuraBw },
      { name: "twitter:image", content: images.tanpuraBw },
    ],
  }),
  component: MusicPage,
});

function MusicPage() {
  return (
    <>
      <PageHeader eyebrow="Music & videos" title="Listen and watch." image={images.tanpuraBw} />
      <MusicPlayer />
    </>
  );
}
