import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/lib/site-data";

const title = "Contact Niranjana Rema — Tripunithura, Kochi";
const description =
  "Call +91 89214 67689, email npushpamgathan@gmail.com or message on WhatsApp for performances and singing classes in Tripunithura and online.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: images.candid },
      { name: "twitter:image", content: images.candid },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Say hello." image={images.candid} />
      <Contact />
    </>
  );
}
