import ContactForm from "@/components/ContactForm";
import { sanityClient } from "@/lib/sanity.client";
import { allBeersQuery, upcomingEventsQuery, siteQuery } from "@/lib/sanity.queries";

export const revalidate = 60;

export default async function Page() {
  let events: any[] = [];
  let beers: any[] = [];
  let site: any = null;
  try {
    [events, beers, site] = await Promise.all([
      sanityClient.fetch(upcomingEventsQuery),
      sanityClient.fetch(allBeersQuery),
      sanityClient.fetch(siteQuery)
    ]);
  } catch (_) {}

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Kontakt & Vorbestellung</h1>
        <p className="mt-2">Wähle einen kommenden Verkaufstermin und reserviere deine Wunschbiere – oder stell uns eine allgemeine Frage.</p>
      </div>
      <ContactForm events={events} beers={beers} toEmail={site?.contactEmail || process.env.CONTACT_TO_EMAIL} />
      {(!events?.length || !beers?.length) && (
        <p className="text-sm text-muted/80">Hinweis: Damit die Vorbestellung sinnvoll funktioniert, bitte Termine und Biere im Studio anlegen.</p>
      )}
    </div>
  );
}
