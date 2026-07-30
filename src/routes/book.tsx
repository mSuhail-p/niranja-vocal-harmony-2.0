import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/sections/Booking";
import { Faq } from "@/components/sections/Faq";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "Book a Performance or Enroll in Classes | Niranjana Rema";
const description =
  "Send a booking enquiry for concerts, weddings, corporate events and studio sessions, or register for online and offline singing classes.";

export const Route = createFileRoute("/book")({
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
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHeader eyebrow="Book now" title="Reserve the date." image={images.saree} />
      <Booking />
      <Faq />
    </>
  );
}
