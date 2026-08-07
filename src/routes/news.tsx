import { createFileRoute } from "@tanstack/react-router";
import { News } from "@/components/sections/News";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "News & Press Features | Niranjana Rema";
const description =
  "Television features, interviews and release coverage on Malayalam playback and Carnatic singer Niranjana Rema, including her MediaOne TV feature.";

export const Route = createFileRoute("/news")({
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
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="News" title="In the press." image={images.tanpuraBw} />
      <News />
    </>
  );
}
