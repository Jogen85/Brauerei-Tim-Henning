import { sanityClient } from "@/lib/sanity.client";
import { allBeersQuery } from "@/lib/sanity.queries";
import { BeerCard } from "@/components/BeerCard";

export const revalidate = 300;

export default async function Page() {
  let beers: any[] = [];
  try {
    beers = await sanityClient.fetch(allBeersQuery);
  } catch (_) {}
  return (
    <div>
      <h1 className="text-2xl font-semibold">Biere</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(beers || []).map((b: any) => (
          <BeerCard beer={b} key={b._id} />
        ))}
        {!beers?.length && (
          <p className="text-sm text-muted/80">Noch keine Biere angelegt. Inhalte folgen.</p>
        )}
      </div>
    </div>
  );
}
