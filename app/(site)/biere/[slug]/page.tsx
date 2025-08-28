import Image from "next/image";
import paleAleFallback from "../../../../Bier_Pale_Ale.png";
import { sanityClient } from "@/lib/sanity.client";
import { beerBySlugQuery, allBeersQuery } from "@/lib/sanity.queries";

export const revalidate = 300;

export async function generateStaticParams() {
  try {
    const beers = await sanityClient.fetch(allBeersQuery);
    return (beers || []).filter((b: any) => b?.slug?.current).map((b: any) => ({ slug: b.slug.current }));
  } catch (_) {
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  let beer: any = null;
  try {
    beer = await sanityClient.fetch(beerBySlugQuery, { slug: params.slug });
  } catch (_) {}
  if (!beer) return <div>Kein Bier gefunden oder Inhalte folgen.</div>;
  const fallbackForName = typeof beer?.name === "string" && beer.name.toLowerCase().includes("pale") ? (paleAleFallback as any) : null;
  const imageSrc = beer.image || fallbackForName;
  return (
    <article className="grid gap-6 md:grid-cols-2">
      <div className="relative aspect-[4/5] bg-paper rounded-lg overflow-hidden">
        {imageSrc ? (
          <Image src={imageSrc} alt={beer.name} fill className="object-cover" />
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{beer.name}</h1>
        <div className="mt-2 text-muted">
          {beer.style && <div>Stil: {beer.style}</div>}
          {beer.abv != null && <div>Alkohol: {beer.abv}%</div>}
          {beer.og != null && <div>Stammwürze: {beer.og}</div>}
          {beer.ibu != null && <div>IBU: {beer.ibu}</div>}
          {beer.special?.length ? <div>Besonderheiten: {beer.special.join(", ")}</div> : null}
          {beer.availableNow ? <div className="mt-2 inline-block rounded bg-hop px-2 py-1 text-xs text-paper">Jetzt erhältlich</div> : null}
        </div>
        {beer.short && <p className="mt-4">{beer.short}</p>}
        <div className="mt-6">
          <a href="/kontakt" className="rounded bg-accent px-4 py-2 text-paper">Vorbestellen / Kontakt</a>
        </div>
      </div>
    </article>
  );
}
