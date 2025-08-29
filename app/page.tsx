import Image from 'next/image'
import BreweryImage from '@/components/ui/BreweryImage'
import BreweryButton from '@/components/ui/BreweryButton'

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
          >
            <source src="/Video_Hero.webm" type="video/webm" />
            {/* Fallback image */}
            <Image
              src="/hero-poster.jpg"
              alt="Handwerksbrauerei Hennings"
              fill
              className="object-cover"
              priority
            />
          </video>
        </div>

        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Handwerksbrauerei Hennings
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Ehrlich gebrautes Bier aus Leezen, Mecklenburg-Vorpommern
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BreweryButton 
              size="lg"
              className="shadow-brewery-button"
            >
              Biere entdecken
            </BreweryButton>
            <BreweryButton 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brewery-dark-brown"
            >
              Nächste Verkaufstermine
            </BreweryButton>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Next Sales Date Section */}
      <section className="py-16 bg-brewery-off-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brewery-dark-brown mb-8">
            Nächster Verkaufstermin
          </h2>
          
          <div className="card-brewery bg-white p-8 mb-8">
            <div className="text-2xl md:text-3xl font-bold text-brewery-rust-red mb-4">
              Samstag, 14. September 2024
            </div>
            <div className="text-lg text-brewery-brown-gray mb-6">
              14:00 - 18:00 Uhr | Schloßstraße 1, 19067 Leezen
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brewery-sand-beige-100 rounded-lg p-4">
                <h3 className="font-semibold text-brewery-dark-brown mb-2">Verfügbar</h3>
                <ul className="text-sm text-brewery-brown-gray space-y-1">
                  <li>• Hennings Pale Ale</li>
                  <li>• Helles Lagerbier</li>
                  <li>• IPA &ldquo;Hopfenbombe&rdquo;</li>
                </ul>
              </div>
              <div className="bg-brewery-sand-beige-100 rounded-lg p-4">
                <h3 className="font-semibold text-brewery-dark-brown mb-2">Ausschank</h3>
                <p className="text-sm text-brewery-brown-gray">
                  Verkostung und Probieren vor Ort möglich
                </p>
              </div>
              <div className="bg-brewery-sand-beige-100 rounded-lg p-4">
                <h3 className="font-semibold text-brewery-dark-brown mb-2">Vorbestellung</h3>
                <p className="text-sm text-brewery-brown-gray">
                  Biere reservieren per Kontaktformular
                </p>
              </div>
            </div>
          </div>

          <BreweryButton size="lg" className="shadow-brewery-button">
            Bier vorbestellen
          </BreweryButton>
        </div>
      </section>

      {/* Featured Beer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brewery-dark-brown mb-12">
            Unsere Biere
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Beer Card */}
            <div className="card-brewery bg-brewery-off-white-50 overflow-hidden">
              <div className="aspect-brewery-card relative">
                <BreweryImage
                  src="/Bier_Pale_Ale.png"
                  alt="Hennings Pale Ale - Fruchtiges Pale Ale mit Zitrusnote"
                  aspectRatio="brewery-card"
                  priority
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brewery-dark-brown mb-2">
                  Hennings Pale Ale
                </h3>
                <p className="text-brewery-rust-red text-sm mb-4 font-medium">
                  5,7% Vol. • 42 IBU • Obergärig
                </p>
                <p className="text-brewery-brown-gray text-sm leading-relaxed">
                  Fruchtiges Pale Ale mit deutlicher Zitrusnote durch amerikanischen 
                  Cascade-Hopfen. Karamellmalz verleiht dem Bier Körper und Balance.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brewery-hop-green rounded-full"></div>
                  <span className="text-xs text-brewery-hop-green font-medium">Aktuell verfügbar</span>
                </div>
              </div>
            </div>

            {/* Placeholder cards for other beers */}
            <div className="card-brewery bg-brewery-sand-beige-50 p-6 flex items-center justify-center">
              <div className="text-center text-brewery-brown-gray">
                <div className="w-16 h-16 bg-brewery-sand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brewery-rust-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-lg font-semibold text-brewery-dark-brown mb-2">Helles Lagerbier</div>
                <div className="text-sm">Kommt bald</div>
              </div>
            </div>

            <div className="card-brewery bg-brewery-sand-beige-50 p-6 flex items-center justify-center">
              <div className="text-center text-brewery-brown-gray">
                <div className="w-16 h-16 bg-brewery-sand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brewery-rust-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-lg font-semibold text-brewery-dark-brown mb-2">IPA &ldquo;Hopfenbombe&rdquo;</div>
                <div className="text-sm">Kommt bald</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <BreweryButton size="lg" className="shadow-brewery-button">
              Alle Biere ansehen
            </BreweryButton>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-brewery-dark-brown text-brewery-sand-beige">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-shadow">
            Braumeister Tim Hennings
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
            Mit Leidenschaft und traditionellem Handwerk entstehen seit 2012 in Leezen 
            ehrliche Biere von höchster Qualität. Jeder Sud wird mit ausgewählten Rohstoffen 
            und viel Zeit gebraut.
          </p>
          <BreweryButton 
            variant="outline" 
            size="lg"
            className="border-2 border-brewery-sand-beige text-brewery-sand-beige hover:bg-brewery-sand-beige hover:text-brewery-dark-brown"
          >
            Unsere Geschichte
          </BreweryButton>
        </div>
      </section>
    </>
  );
}