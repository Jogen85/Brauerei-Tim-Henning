import Image from 'next/image';

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
            poster="/Logo.jpg"
          >
            <source src="/Video_Hero.webm" type="video/webm" />
            {/* Fallback image */}
            <Image
              src="/Logo.jpg"
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
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
              Biere entdecken
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg">
              Nächste Verkaufstermine
            </button>
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
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
            Nächster Verkaufstermin
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
              Samstag, 14. September 2024
            </div>
            <div className="text-lg text-amber-700 mb-6">
              14:00 - 18:00 Uhr | Schloßstraße 1, 19067 Leezen
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-amber-100 rounded p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Verfügbar</h3>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Hennings Pale Ale</li>
                  <li>• Helles Lagerbier</li>
                  <li>• IPA &ldquo;Hopfenbombe&rdquo;</li>
                </ul>
              </div>
              <div className="bg-amber-100 rounded p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Ausschank</h3>
                <p className="text-sm text-amber-800">
                  Verkostung und Probieren vor Ort möglich
                </p>
              </div>
              <div className="bg-amber-100 rounded p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Vorbestellung</h3>
                <p className="text-sm text-amber-800">
                  Biere reservieren per Kontaktformular
                </p>
              </div>
            </div>
          </div>

          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
            Bier vorbestellen
          </button>
        </div>
      </section>

      {/* Featured Beer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Unsere Biere
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Beer Card */}
            <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/Bier_Pale_Ale.png"
                  alt="Hennings Pale Ale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  Hennings Pale Ale
                </h3>
                <p className="text-amber-700 text-sm mb-4">
                  5,7% Vol. • 42 IBU • Obergärig
                </p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Fruchtiges Pale Ale mit deutlicher Zitrusnote durch amerikanischen 
                  Cascade-Hopfen. Karamellmalz verleiht dem Bier Körper und Balance.
                </p>
                <div className="mt-4 text-xs text-amber-600">
                  ✓ Aktuell verfügbar
                </div>
              </div>
            </div>

            {/* Placeholder cards for other beers */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-lg font-semibold mb-2">Helles Lagerbier</div>
                <div className="text-sm">Details folgen</div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-lg font-semibold mb-2">IPA &ldquo;Hopfenbombe&rdquo;</div>
                <div className="text-sm">Details folgen</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
              Alle Biere ansehen
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Braumeister Tim Hennings
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Mit Leidenschaft und traditionellem Handwerk entstehen seit 2012 in Leezen 
            ehrliche Biere von höchster Qualität. Jeder Sud wird mit ausgewählten Rohstoffen 
            und viel Zeit gebraut.
          </p>
          <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Unsere Geschichte
          </button>
        </div>
      </section>
    </>
  );
}