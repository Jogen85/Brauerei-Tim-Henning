import Image from "next/image";
import paleAleFallback from "../Bier_Pale_Ale.png";

export function BeerCard({ beer }: { beer: any }) {
  const fallbackForName = typeof beer?.name === "string" && beer.name.toLowerCase().includes("pale") ? (paleAleFallback as any) : null;
  const imageSrc = beer.image || fallbackForName;
  return (
    <a href={`/biere/${beer?.slug?.current || beer?.slug}`} className="group block rounded-lg border border-muted/30 overflow-hidden bg-paper">
      <div className="aspect-[4/3] bg-paper relative">
        {imageSrc ? (
          <Image src={imageSrc} alt={beer.name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
            Bild folgt
          </div>
        )}
        {beer.availableNow && (
          <span className="absolute left-2 top-2 rounded bg-hop px-2 py-1 text-xs text-paper">
            Jetzt erhältlich
          </span>
        )}
      </div>
      <div className="p-4 group-hover:border-accent">
        <h3 className="font-medium">{beer.name}</h3>
        <p className="text-sm text-muted/80 line-clamp-2">{beer.short}</p>
        <div className="mt-2 text-xs text-muted/70">
          {beer.style && <span>{beer.style}</span>} {beer.abv ? <span>• {beer.abv}%</span> : null}
        </div>
      </div>
    </a>
  );
}
