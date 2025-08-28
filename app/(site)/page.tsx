import Hero from "@/components/Hero";
import { sanityClient } from "@/lib/sanity.client";
import { allBeersQuery, siteQuery, upcomingEventsQuery } from "@/lib/sanity.queries";
import { BeerCard } from "@/components/BeerCard";
import { EventList } from "@/components/EventList";

export const revalidate = 300;

export default async function Page() {
  let site: any = null;
  let beers: any[] = [];
  let events: any[] = [];
  try {
    [site, beers, events] = await Promise.all([
      sanityClient.fetch(siteQuery),
      sanityClient.fetch(allBeersQuery),
      sanityClient.fetch(upcomingEventsQuery)
    ]);
  } catch (_) {
    // Sanity not configured yet; show placeholders
  }

  return (
    <div className="space-y-10">
      <Hero
        slogan={site?.heroSlogan}
        ctaLabel={site?.heroCtaLabel}
        ctaHref={site?.heroCtaHref}
        videoUrl={site?.heroVideo?.url}
        posterUrl={site?.heroVideo?.poster}
      />

      <section>
        <h2 className="text-xl font-semibold">Nächster Verkaufstag</h2>
        <div className="mt-3">
          <EventList events={events?.slice(0, 1) || []} />
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Unsere Biere</h2>
          <a className="text-sm text-accent underline" href="/biere">Alle Biere</a>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(beers || []).slice(0, 6).map((b: any) => (
            <BeerCard beer={b} key={b._id} />
          ))}
          {!beers?.length && (
            <div className="text-sm text-muted/80">Noch keine Biere angelegt. Inhalte folgen.</div>
          )}
        </div>
      </section>
    </div>
  );
}
