import { createFileRoute } from "@tanstack/react-router";
import { Academy } from "@/components/sections/Academy";
import { Services } from "@/components/sections/Services";
import { Faq } from "@/components/sections/Faq";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "Singing Classes in Tripunithura & Online | Niranjana Rema";
const description =
  "Carnatic and light music courses for kids and adults — beginner to advanced, weekend batches, one-to-one coaching and online classes worldwide. Enroll today.";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.poster },
      { name: "twitter:image", content: images.poster },
    ],
  }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Singing academy"
        title="Learn to sing, properly."
        image={images.poster}
      />
      <Academy />
      <Services />
      <Faq />
    </>
  );
}
