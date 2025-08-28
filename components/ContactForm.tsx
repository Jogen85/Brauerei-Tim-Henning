"use client";
import { useMemo, useState } from "react";

type Beer = { _id: string; name: string; slug?: { current: string } };
type Event = { _id: string; title?: string; date: string; beers?: Beer[] };

export default function ContactForm({
  events,
  beers,
  toEmail
}: {
  events: Event[];
  beers: Beer[];
  toEmail?: string;
}) {
  const [mode, setMode] = useState<"contact" | "preorder">("preorder");
  const [selectedEvent, setSelectedEvent] = useState<string>(events?.[0]?._id || "");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const eventBeers = useMemo(() => {
    const ev = events.find((e) => e._id === selectedEvent);
    return ev?.beers?.length ? ev.beers : beers;
  }, [selectedEvent, events, beers]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const items = Object.entries(quantities)
      .filter(([, q]) => q && q > 0)
      .map(([beerId, qty]) => ({ beerId, qty }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          eventId: selectedEvent || null,
          items,
          toEmail,
          turnstileToken: (window as any).turnstile?.getResponse?.() || (data["cf-turnstile-response"] as string)
        })
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Fehler beim Versand");
      setMessage("Danke! Wir haben deine Anfrage erhalten.");
      (e.target as HTMLFormElement).reset();
      setQuantities({});
    } catch (err: any) {
      setMessage(err.message || "Fehler beim Versand");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input type="radio" name="mode" value="preorder" defaultChecked onChange={() => setMode("preorder")} />
          Vorbestellung
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="mode" value="contact" onChange={() => setMode("contact")} />
          Allgemeine Anfrage
        </label>
      </div>

      {mode === "preorder" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium">Verkaufstermin</label>
          <select
            className="w-full rounded border p-2"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            {events.map((ev) => (
              <option key={ev._id} value={ev._id}>
                {new Date(ev.date).toLocaleDateString("de-DE")}
                {ev.title ? ` – ${ev.title}` : ""}
              </option>
            ))}
          </select>
          <div className="rounded border p-3">
            <p className="text-sm font-medium">Biere & Mengen</p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {eventBeers?.map((b) => (
                <label key={b._id} className="flex items-center justify-between gap-2 rounded border p-2">
                  <span className="text-sm">{b.name}</span>
                  <input
                    type="number"
                    min={0}
                    max={24}
                    inputMode="numeric"
                    className="w-20 rounded border p-1 text-right"
                    value={quantities[b._id] || 0}
                    onChange={(e) => setQuantities((s) => ({ ...s, [b._id]: Number(e.target.value) }))}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">E-Mail</label>
          <input type="email" name="email" required className="mt-1 w-full rounded border p-2" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Telefon (optional)</label>
          <input name="phone" className="mt-1 w-full rounded border p-2" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Nachricht</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded border p-2" />
        </div>
      </div>

      <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}></div>

      <label className="flex items-center gap-2 text-sm">
        <input required type="checkbox" />
        Ich stimme der Verarbeitung gemäß Datenschutz zu.
      </label>

      <button
        disabled={submitting}
        className="inline-flex rounded bg-accent px-4 py-2 text-paper disabled:opacity-50"
      >
        {submitting ? "Senden…" : "Absenden"}
      </button>

      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
