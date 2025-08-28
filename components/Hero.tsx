import { clsx } from "clsx";

export default function Hero({
  slogan,
  ctaLabel,
  ctaHref,
  videoUrl,
  posterUrl
}: {
  slogan?: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoUrl?: string;
  posterUrl?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-muted/30 bg-primary">
      <div className="relative aspect-[16/9]">
        {(videoUrl || "/api/hero-video") ? (
          <video
            className="h-full w-full object-cover"
            src={videoUrl || "/api/hero-video"}
            poster={posterUrl}
            autoPlay
            playsInline
            muted
            loop
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-200">
            <span className="text-neutral-600">Hero-Video folgt</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-10">
          <h1 className="text-sand text-2xl md:text-4xl font-semibold max-w-2xl">
            {slogan || "Handgebrautes Bier – Frisch. Lokal. Ehrlich."}
          </h1>
          <div className="mt-4">
            <a
              href={ctaHref || "/biere"}
              className={clsx(
                "inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper hover:opacity-90"
              )}
            >
              {ctaLabel || "Jetzt Biere entdecken"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
