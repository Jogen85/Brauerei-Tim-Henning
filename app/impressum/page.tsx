import { Metadata } from 'next'
import { BrewerySectionContainer } from '@/components/ui/BreweryContainer'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Handwerksbrauerei Hennings - Rechtliche Angaben und Kontaktinformationen',
  robots: 'index, follow',
}

export default function ImpressumPage() {
  return (
    <BrewerySectionContainer>
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brewery-dark-brown mb-4">
            Impressum
          </h1>
          <p className="text-lg text-brewery-brown-gray max-w-2xl mx-auto">
            Rechtliche Angaben gemäß § 5 TMG (Telemediengesetz)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Angaben zum Unternehmen
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6 space-y-3">
              <div>
                <dt className="text-sm font-semibold text-brewery-brown-gray uppercase tracking-wide mb-1">
                  Firmenname
                </dt>
                <dd className="text-lg text-brewery-dark-brown">
                  Handwerksbrauerei Hennings
                </dd>
              </div>
              
              <div>
                <dt className="text-sm font-semibold text-brewery-brown-gray uppercase tracking-wide mb-1">
                  Inhaber
                </dt>
                <dd className="text-lg text-brewery-dark-brown">
                  Tim Hennings
                </dd>
              </div>
              
              <div>
                <dt className="text-sm font-semibold text-brewery-brown-gray uppercase tracking-wide mb-1">
                  Anschrift
                </dt>
                <dd className="text-lg text-brewery-dark-brown">
                  Schloßstraße 1<br />
                  19067 Leezen<br />
                  Deutschland
                </dd>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Kontaktdaten
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <svg 
                  className="w-5 h-5 text-brewery-rust-red flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <div>
                  <dt className="text-sm font-semibold text-brewery-brown-gray">Telefon</dt>
                  <dd className="text-lg text-brewery-dark-brown">
                    <a 
                      href="tel:+4917423572812"
                      className="hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red rounded"
                    >
                      0174/2357281
                    </a>
                  </dd>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg 
                  className="w-5 h-5 text-brewery-rust-red flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <div>
                  <dt className="text-sm font-semibold text-brewery-brown-gray">E-Mail</dt>
                  <dd className="text-lg text-brewery-dark-brown">
                    <a 
                      href="mailto:info@brauerei-hennings.de"
                      className="hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red rounded"
                    >
                      info@brauerei-hennings.de
                    </a>
                  </dd>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg 
                  className="w-5 h-5 text-brewery-rust-red flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" 
                  />
                </svg>
                <div>
                  <dt className="text-sm font-semibold text-brewery-brown-gray">Website</dt>
                  <dd className="text-lg text-brewery-dark-brown">
                    www.brauerei-hennings.de
                  </dd>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Information */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Rechtliche Angaben
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6 space-y-4">
              <div>
                <dt className="text-sm font-semibold text-brewery-brown-gray uppercase tracking-wide mb-1">
                  Umsatzsteuer-Identifikationsnummer
                </dt>
                <dd className="text-lg text-brewery-dark-brown font-mono">
                  DE 283523697
                </dd>
                <dd className="text-sm text-brewery-brown-gray mt-1">
                  gemäß § 27 a Umsatzsteuergesetz
                </dd>
              </div>
              
              <div>
                <dt className="text-sm font-semibold text-brewery-brown-gray uppercase tracking-wide mb-1">
                  Rechtsform
                </dt>
                <dd className="text-lg text-brewery-dark-brown">
                  Einzelunternehmen
                </dd>
              </div>
              
              <div>
                <dt className="text-sm font-semibold text-brewery-brown-gray uppercase tracking-wide mb-1">
                  Zuständige Aufsichtsbehörde
                </dt>
                <dd className="text-lg text-brewery-dark-brown">
                  Landkreis Ludwigslust-Parchim<br />
                  Garnisonsstraße 1<br />
                  19288 Ludwigslust
                </dd>
              </div>
            </div>
          </section>

          {/* Responsible Content */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Verantwortlich für den Inhalt
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-lg text-brewery-dark-brown mb-2">
                Tim Hennings
              </p>
              <p className="text-brewery-brown-gray">
                Schloßstraße 1<br />
                19067 Leezen<br />
                Deutschland
              </p>
              <p className="text-sm text-brewery-brown-gray mt-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Haftungsausschluss
            </h2>
            <div className="space-y-6 text-brewery-brown-gray">
              <div>
                <h3 className="font-semibold text-brewery-dark-brown mb-2">Haftung für Inhalte</h3>
                <p className="leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-brewery-dark-brown mb-2">Haftung für Links</h3>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-brewery-dark-brown mb-2">Urheberrecht</h3>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-brewery-sand-beige-300">
            <p className="text-sm text-brewery-brown-gray">
              Stand: August 2025
            </p>
          </div>
        </div>
      </div>
    </BrewerySectionContainer>
  )
}