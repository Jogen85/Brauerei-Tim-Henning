import { sanityClient } from "@/lib/sanity.client";
import { upcomingEventsQuery } from "@/lib/sanity.queries";
import { EventList } from "@/components/EventList";

export const revalidate = 300;

export default async function Page() {
  let events: any[] = [];
  try {
    events = await sanityClient.fetch(upcomingEventsQuery);
  } catch (_) {}
  return (
    <div>
      <h1 className="text-2xl font-semibold">Verkaufstermine</h1>
      <div className="mt-6">
        <EventList events={events} />
        {!events?.length && (
          <p className="mt-2 text-sm text-muted/80">Noch keine Termine angelegt. Inhalte folgen.</p>
        )}
      </div>
    </div>
  );
}
