import { useState } from "react";
import { toast } from "sonner";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { artist, whatsappLink } from "@/lib/site-data";

const eventTypes = [
  "Live Concert",
  "Wedding Performance",
  "Corporate Event",
  "Private Show",
  "Studio Recording",
  "Singing Class Enrollment",
];
const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "Above ₹2,00,000",
  "Class fees",
];

const field =
  "w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function Booking() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: eventTypes[0],
    budget: budgets[0],
    message: "",
  });

  const summary = `Booking enquiry
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Date: ${form.date}
Type: ${form.type}
Budget: ${form.budget}
Message: ${form.message}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Direct zero-config background email sending to artist.email
      const response = await fetch(`https://formsubmit.co/ajax/${artist.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          preferred_date: form.date,
          event_type: form.type,
          budget_range: form.budget,
          message: form.message,
          _subject: `New ${form.type} Enquiry from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        toast.success(`Enquiry sent! The message was delivered to ${artist.email}.`);
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          type: eventTypes[0],
          budget: budgets[0],
          message: "",
        });
        setSubmitting(false);
        return;
      }

      // If AJAX endpoint fails, fallback to mailto
      window.location.href = `mailto:${artist.email}?subject=${encodeURIComponent(
        `${form.type} enquiry — ${form.name}`,
      )}&body=${encodeURIComponent(summary)}`;
      toast.success("Opening your email application to send the enquiry.");
    } catch (err) {
      console.error("Form submit error:", err);
      window.location.href = `mailto:${artist.email}?subject=${encodeURIComponent(
        `${form.type} enquiry — ${form.name}`,
      )}&body=${encodeURIComponent(summary)}`;
      toast.success("Opening your email application to send the enquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" className="bg-royal py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Booking"
          title="Reserve a date or enroll in a batch."
          intro="Share a few details and you'll hear back within 24 hours, usually the same evening."
        />
        <Reveal className="mt-14">
          <form
            className="glass grid gap-5 rounded-sm p-8 sm:grid-cols-2 sm:p-10"
            onSubmit={handleSubmit}
          >
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Full name
              <input
                required
                className={`mt-2 ${field}`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
              <input
                required
                type="email"
                className={`mt-2 ${field}`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Phone / WhatsApp
              <input
                required
                className={`mt-2 ${field}`}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Preferred date
              <input
                type="date"
                required
                className={`mt-2 ${field}`}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Event type
              <select
                className={`mt-2 ${field}`}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                {eventTypes.map((t) => (
                  <option key={t} className="bg-background">
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Budget range
              <select
                className={`mt-2 ${field}`}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                {budgets.map((b) => (
                  <option key={b} className="bg-background">
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground sm:col-span-2">
              Message
              <textarea
                rows={4}
                className={`mt-2 ${field}`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button
                disabled={submitting}
                className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-primary-foreground shadow-lux disabled:opacity-50"
              >
                {submitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {submitting ? "Sending..." : "Send enquiry"}
              </button>
              <a
                href={whatsappLink(summary)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="size-4" /> Book on WhatsApp
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
