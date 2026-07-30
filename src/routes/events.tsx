import { createFileRoute } from "@tanstack/react-router";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "Upcoming Concerts & Tour Dates | Niranjana Rema";
const description =
  "Concert calendar, temple recitals and tour dates for Niranjana Rema, plus booking availability for weddings, corporate events and private shows.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.field },
      { name: "twitter:image", content: images.field },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="Concert calendar." image={images.field} />
      <Events />
      <Testimonials />
    </>
  );
}
