export function EventList({ events }: { events: any[] }) {
  if (!events?.length) return <p>Aktuell keine kommenden Termine.</p>;
  return (
    <ul className="space-y-4">
      {events.map((ev) => (
        <li key={ev._id} className="rounded-lg border border-muted/30 bg-paper p-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-medium">
              {new Date(ev.date).toLocaleDateString("de-DE", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              })}
              {ev.title ? ` – ${ev.title}` : ""}
            </h3>
            {ev.status === "cancelled" && (
              <span className="rounded bg-accent px-2 py-1 text-xs text-paper">Abgesagt</span>
            )}
          </div>
          <div className="mt-1 text-sm text-neutral-700">
            {ev.timeFrom || ev.timeTo ? (
              <div>Uhrzeit: {ev.timeFrom || ""}{ev.timeTo ? `–${ev.timeTo}` : ""}</div>
            ) : null}
            {ev.location && (
              <div>
                Ort: {ev.location}
                {ev.mapsUrl && (
                  <>
                    {" "}
                    <a href={ev.mapsUrl} className="text-accent underline" target="_blank">Karte</a>
                  </>
                )}
              </div>
            )}
          </div>
          {ev?.beers?.length ? (
            <div className="mt-2 text-sm text-muted">
              Verfügbar: {ev.beers.map((b: any) => b.name).join(", ")}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
