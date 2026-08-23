import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-lux";
import { artist, courses, whatsappLink } from "@/lib/site-data";

const eventTypes = [
  "Live Concert",
  "Wedding Performance",
  "Corporate Event",
  "Private Show",
  "Studio Recording",
  "Music Collaboration",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "Above ₹2,00,000",
];

const classModes = ["Online", "Offline (Tripunithura studio)"];

const field =
  "w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function Booking() {
  const [mode, setMode] = useState<"class" | "program">("program");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    // Class enrollment fields
    selectedCourse: courses[0]?.name || "Beginner Foundation",
    startDate: "",
    preferredMode: classModes[0],
    // Program/event booking fields
    date: "",
    type: eventTypes[0],
    budget: budgets[0],
    // Common
    message: "",
  });

  useEffect(() => {
    const handleSelectMode = (e: Event) => {
      const customEvent = e as CustomEvent<{ mode: "class" | "program"; course?: string }>;
      if (customEvent.detail?.mode) {
        setMode(customEvent.detail.mode);
      }
      if (customEvent.detail?.course) {
        setForm((prev) => ({ ...prev, selectedCourse: customEvent.detail.course! }));
      }
    };

    window.addEventListener("select-enquiry-mode", handleSelectMode);
    return () => window.removeEventListener("select-enquiry-mode", handleSelectMode);
  }, []);

  const isClassMode = mode === "class";

  const summary = isClassMode
    ? `Class Enrollment Enquiry
Enquiry Type: Class Enrollment
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Selected Course: ${form.selectedCourse}
Preferred Start Date: ${form.startDate || "Not specified"}
Preferred Mode: ${form.preferredMode}
Message: ${form.message || "None"}`
    : `Program/Event Booking Enquiry
Enquiry Type: Program/Event Booking
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Preferred Date: ${form.date || "Not specified"}
Event Type: ${form.type}
Budget Range: ${form.budget}
Message: ${form.message || "None"}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = isClassMode
      ? {
          enquiry_type: "Class Enrollment",
          name: form.name,
          email: form.email,
          phone: form.phone,
          selected_course: form.selectedCourse,
          preferred_start_date: form.startDate,
          preferred_mode: form.preferredMode,
          message: form.message,
          _subject: `New Class Enrollment (${form.selectedCourse}) from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }
      : {
          enquiry_type: "Program/Event Booking",
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
        };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${artist.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        toast.success(`Enquiry sent! The message was delivered to ${artist.email}.`);
        setForm((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          startDate: "",
          date: "",
          message: "",
        }));
        setSubmitting(false);
        return;
      }

      window.location.href = `mailto:${artist.email}?subject=${encodeURIComponent(
        payload._subject
      )}&body=${encodeURIComponent(summary)}`;
      toast.success("Opening your email application to send the enquiry.");
    } catch (err) {
      console.error("Form submit error:", err);
      window.location.href = `mailto:${artist.email}?subject=${encodeURIComponent(
        payload._subject
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
          eyebrow="Enquiry & Booking"
          title="Reserve a date or enroll in a batch."
          intro="Share a few details and you'll hear back within 24 hours, usually the same evening."
        />
        <Reveal className="mt-14">
          <form
            className="glass grid gap-5 rounded-sm p-8 sm:grid-cols-2 sm:p-10"
            onSubmit={handleSubmit}
          >
            {/* Mode selector tab */}
            <div className="sm:col-span-2 flex flex-col items-center justify-center gap-2 pb-2">
              <div className="inline-flex rounded-full border border-border/60 bg-background/60 p-1">
                <button
                  type="button"
                  onClick={() => setMode("class")}
                  className={`rounded-full px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                    isClassMode
                      ? "bg-primary text-primary-foreground shadow-lux"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Join a Class
                </button>
                <button
                  type="button"
                  onClick={() => setMode("program")}
                  className={`rounded-full px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                    !isClassMode
                      ? "bg-primary text-primary-foreground shadow-lux"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Book a Program
                </button>
              </div>
            </div>

            {/* Common fields */}
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

            {/* Class Enrollment Fields */}
            {isClassMode ? (
              <>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Selected Course
                  <select
                    required
                    className={`mt-2 ${field}`}
                    value={form.selectedCourse}
                    onChange={(e) => setForm({ ...form, selectedCourse: e.target.value })}
                  >
                    {courses.map((c) => (
                      <option key={c.name} value={c.name} className="bg-background text-foreground">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Preferred Start Date
                  <input
                    type="date"
                    required
                    className={`mt-2 ${field}`}
                    value={form.startDate}
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  />
                </label>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Preferred Mode
                  <select
                    className={`mt-2 ${field}`}
                    value={form.preferredMode}
                    onChange={(e) => setForm({ ...form, preferredMode: e.target.value })}
                  >
                    {classModes.map((m) => (
                      <option key={m} value={m} className="bg-background text-foreground">
                        {m}
                      </option>
                    ))}
                  </select>
                </label>
              </>
            ) : (
              /* Program/Event Booking Fields */
              <>
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
                      <option key={t} value={t} className="bg-background text-foreground">
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
                      <option key={b} value={b} className="bg-background text-foreground">
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </>
            )}

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
                {submitting
                  ? "Sending..."
                  : isClassMode
                  ? "Submit Enrollment"
                  : "Send enquiry"}
              </button>
              <a
                href={whatsappLink(summary)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="size-4" />{" "}
                {isClassMode ? "Enroll on WhatsApp" : "Book on WhatsApp"}
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

