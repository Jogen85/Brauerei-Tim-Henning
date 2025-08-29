import { Metadata } from 'next'
import { BrewerySectionContainer } from '@/components/ui/BreweryContainer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Handwerksbrauerei Hennings - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO',
  robots: 'index, follow',
}

export default function DatenschutzPage() {
  return (
    <BrewerySectionContainer>
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brewery-dark-brown mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-brewery-brown-gray max-w-3xl mx-auto">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß 
            Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Überblick
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung 
                informiert Sie darüber, wie wir mit Ihren personenbezogenen Daten umgehen, wenn Sie 
                unsere Website besuchen oder unsere Services nutzen.
              </p>
            </div>
          </section>

          {/* Responsible Party */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Verantwortlicher
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-brewery-dark-brown">
                  Handwerksbrauerei Hennings
                </p>
                <p className="text-brewery-brown-gray">
                  Tim Hennings<br />
                  Schloßstraße 1<br />
                  19067 Leezen<br />
                  Deutschland
                </p>
                <div className="pt-2 space-y-1">
                  <p className="text-brewery-brown-gray">
                    <span className="font-medium">Telefon:</span>{' '}
                    <a 
                      href="tel:+4917423572812"
                      className="hover:text-brewery-rust-red transition-colors"
                    >
                      0174/2357281
                    </a>
                  </p>
                  <p className="text-brewery-brown-gray">
                    <span className="font-medium">E-Mail:</span>{' '}
                    <a 
                      href="mailto:info@brauerei-hennings.de"
                      className="hover:text-brewery-rust-red transition-colors"
                    >
                      info@brauerei-hennings.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Ihre Rechte
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray mb-4 leading-relaxed">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="space-y-2 text-brewery-brown-gray">
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Recht auf Auskunft über Ihre bei uns gespeicherten Daten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Recht auf Berichtigung unrichtiger Daten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Recht auf Löschung Ihrer Daten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Recht auf Einschränkung der Datenverarbeitung
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Recht auf Datenübertragbarkeit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Widerspruchsrecht gegen die Datenverarbeitung
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brewery-rust-red font-medium">•</span>
                  Recht auf Beschwerde bei einer Aufsichtsbehörde
                </li>
              </ul>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Datenerhebung auf unserer Website
            </h2>
            <div className="space-y-6">
              {/* Server Log Files */}
              <div className="bg-brewery-off-white-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brewery-dark-brown mb-3">
                  Server-Log-Dateien
                </h3>
                <p className="text-brewery-brown-gray mb-3 leading-relaxed">
                  Beim Aufrufen unserer Website werden automatisch Informationen in Server-Log-Dateien 
                  gespeichert, die Ihr Browser übermittelt:
                </p>
                <ul className="space-y-1 text-brewery-brown-gray text-sm">
                  <li>• Browsertyp und Browserversion</li>
                  <li>• Verwendetes Betriebssystem</li>
                  <li>• Referrer URL (zuvor besuchte Seite)</li>
                  <li>• IP-Adresse des zugreifenden Rechners</li>
                  <li>• Uhrzeit der Serveranfrage</li>
                  <li>• HTTP-Statuscode</li>
                </ul>
                <p className="text-brewery-brown-gray mt-3 text-sm leading-relaxed">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                  <span className="font-medium">Speicherdauer:</span> 30 Tage<br />
                  <span className="font-medium">Zweck:</span> Technische Bereitstellung und Sicherheit der Website
                </p>
              </div>

              {/* Contact Forms */}
              <div className="bg-brewery-off-white-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brewery-dark-brown mb-3">
                  Kontaktformular und E-Mail-Kontakt
                </h3>
                <p className="text-brewery-brown-gray mb-3 leading-relaxed">
                  Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden folgende Daten 
                  von uns gespeichert:
                </p>
                <ul className="space-y-1 text-brewery-brown-gray text-sm">
                  <li>• Ihr Name</li>
                  <li>• Ihre E-Mail-Adresse</li>
                  <li>• Ihre Telefonnummer (optional)</li>
                  <li>• Ihre Nachricht</li>
                  <li>• Bei Vorbestellungen: gewünschte Biere und Mengen</li>
                  <li>• Zeitpunkt der Anfrage</li>
                </ul>
                <p className="text-brewery-brown-gray mt-3 text-sm leading-relaxed">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                  <span className="font-medium">Speicherdauer:</span> Bis zur Abwicklung Ihrer Anfrage, maximal 2 Jahre<br />
                  <span className="font-medium">Zweck:</span> Bearbeitung Ihrer Anfrage und Kundenkommunikation
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Cookies
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray mb-4 leading-relaxed">
                Unsere Website verwendet nur technisch notwendige Cookies. Diese sind erforderlich, 
                um die grundlegenden Funktionen der Website zu gewährleisten.
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-brewery-dark-brown">Technisch notwendige Cookies:</span>
                  <p className="text-brewery-brown-gray mt-1">
                    Speichern temporäre Sitzungsdaten und Präferenzen (z.B. Spracheinstellungen).
                    Diese Cookies werden automatisch gelöscht, wenn Sie Ihren Browser schließen.
                  </p>
                </div>
                <p className="text-brewery-brown-gray leading-relaxed">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                  <span className="font-medium">Zweck:</span> Technische Funktionsfähigkeit der Website
                </p>
              </div>
            </div>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Drittanbieter-Services
            </h2>
            <div className="space-y-6">
              {/* Hosting */}
              <div className="bg-brewery-off-white-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brewery-dark-brown mb-3">
                  Website-Hosting
                </h3>
                <p className="text-brewery-brown-gray mb-3 leading-relaxed">
                  Unsere Website wird bei deutschen Rechenzentren gehostet. Alle Server befinden sich 
                  in Deutschland und unterliegen deutschem Datenschutzrecht.
                </p>
                <p className="text-brewery-brown-gray text-sm leading-relaxed">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                  <span className="font-medium">Zweck:</span> Technische Bereitstellung der Website
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-brewery-off-white-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brewery-dark-brown mb-3">
                  Social Media Links
                </h3>
                <p className="text-brewery-brown-gray mb-3 leading-relaxed">
                  Unsere Website enthält Links zu unseren Social Media Profilen (Facebook, Instagram). 
                  Diese Links führen direkt zu den externen Plattformen. Es werden keine Daten an 
                  diese Plattformen übertragen, bis Sie aktiv auf die Links klicken.
                </p>
                <p className="text-brewery-brown-gray text-sm">
                  Nach dem Klick auf diese Links gelten die Datenschutzerklärungen der jeweiligen Plattformen.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Datensicherheit
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray leading-relaxed">
                Wir verwenden eine SSL-Verschlüsselung für alle Datenübertragungen zwischen Ihrem 
                Browser und unserer Website. Zusätzlich setzen wir technische und organisatorische 
                Maßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, 
                teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff 
                Dritter zu schützen.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Speicherdauer
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray leading-relaxed">
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung 
                der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. 
                Danach werden die Daten routinemäßig gelöscht, sofern sie nicht mehr zur 
                Vertragsdurchführung erforderlich sind.
              </p>
            </div>
          </section>

          {/* Contact for Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Kontakt in Datenschutzangelegenheiten
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray mb-4 leading-relaxed">
                Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte ausüben möchten, 
                kontaktieren Sie uns gerne:
              </p>
              <div className="space-y-2 text-brewery-brown-gray">
                <p>
                  <span className="font-medium">E-Mail:</span>{' '}
                  <a 
                    href="mailto:info@brauerei-hennings.de?subject=Datenschutz"
                    className="hover:text-brewery-rust-red transition-colors"
                  >
                    info@brauerei-hennings.de
                  </a>
                </p>
                <p>
                  <span className="font-medium">Telefon:</span>{' '}
                  <a 
                    href="tel:+4917423572812"
                    className="hover:text-brewery-rust-red transition-colors"
                  >
                    0174/2357281
                  </a>
                </p>
                <p className="mt-3">
                  <span className="font-medium">Postanschrift:</span><br />
                  Handwerksbrauerei Hennings<br />
                  Tim Hennings<br />
                  Schloßstraße 1<br />
                  19067 Leezen
                </p>
              </div>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Beschwerderecht
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray mb-4 leading-relaxed">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere 
                Verarbeitung personenbezogener Daten zu beschweren:
              </p>
              <div className="space-y-2 text-brewery-brown-gray">
                <p className="font-medium">Der Landesbeauftragte für Datenschutz und Informationsfreiheit Mecklenburg-Vorpommern</p>
                <p>
                  Lennéstraße 1<br />
                  19053 Schwerin<br />
                  Telefon: 0385/59494-0<br />
                  E-Mail: info@datenschutz-mv.de
                </p>
              </div>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-brewery-dark-brown mb-4 border-b border-brewery-sand-beige-300 pb-2">
              Änderungen der Datenschutzerklärung
            </h2>
            <div className="bg-brewery-off-white-100 rounded-lg p-6">
              <p className="text-brewery-brown-gray leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie 
                stets dem aktuellen Rechtsstand anzupassen oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen. Wir empfehlen Ihnen, diese Seite regelmäßig 
                zu besuchen, um sich über eventuelle Änderungen zu informieren.
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-brewery-sand-beige-300">
            <p className="text-sm text-brewery-brown-gray">
              Stand: August 2025
            </p>
            <p className="text-xs text-brewery-brown-gray mt-2">
              Diese Datenschutzerklärung wurde mit Sorgfalt erstellt. 
              Bei Rechtsfragen wenden Sie sich bitte an einen Fachanwalt.
            </p>
          </div>
        </div>
      </div>
    </BrewerySectionContainer>
  )
}