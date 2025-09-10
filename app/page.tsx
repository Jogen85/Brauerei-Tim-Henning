import Image from 'next/image'
import BreweryImage from '@/components/ui/BreweryImage'
import BreweryButton from '@/components/ui/BreweryButton'
import ScrollReveal, { ParallaxScroll, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

export default function HomePage() {
  return (
    <>
      {/* Full-Screen Video Hero - TRUE IMMERSIVE EXPERIENCE */}
      <section 
        className="relative w-full h-screen overflow-hidden"
        aria-label="Hero-Bereich mit Video-Hintergrund"
        role="banner"
      >
        {/* Full-Screen Video Background - NO CONTAINER LIMITS */}
        <div className="absolute inset-0 w-screen h-screen z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.85) contrast(1.1) saturate(1.15)',
            }}
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            aria-label="Hintergrundvideo der Handwerksbrauerei Hennings - Braumeister Tim Hennings bei der Arbeit"
          >
            <source src="/Video_Hero.webm" type="video/webm" />
            {/* Fallback image */}
            <Image
              src="/hero-poster.jpg"
              alt="Handwerksbrauerei Hennings - Braumeister Tim Hennings bei der traditionellen Brauarbeit in Leezen"
              fill
              className="object-cover"
              priority
            />
          </video>
        </div>

        {/* Cinematic Overlay with Erdige Brauerei Colors */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(circle at center, transparent 0%, rgba(59, 31, 22, 0.3) 70%),
              linear-gradient(
                135deg,
                rgba(59, 31, 22, 0.4) 0%,
                rgba(138, 75, 45, 0.3) 30%,
                rgba(59, 31, 22, 0.5) 100%
              )
            `
          }}
        />

        {/* Hero Content - Kraftvolle Präsentation */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-shadow-xl leading-tight">
              <span className="block text-brewery-sand-beige drop-shadow-2xl">
                Handwerksbrauerei
              </span>
              <span className="block text-brewery-malt-yellow text-6xl md:text-8xl lg:text-9xl mt-2 drop-shadow-2xl">
                Hennings
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl lg:text-4xl mb-12 text-shadow-xl font-medium text-brewery-off-white leading-relaxed">
              <span className="italic text-brewery-sand-beige">&ldquo;Ehrlich gebrautes Bier&rdquo;</span><br />
              aus Leezen, Mecklenburg-Vorpommern
            </p>
            
            {/* Kraftvolle Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <BreweryButton 
                size="xl"
                className="shadow-brewery-button hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-lg px-8 py-4 bg-brewery-rust-red hover:bg-brewery-rust-red-700 border-2 border-brewery-rust-red-600"
                asChild
              >
                <a href="/biere">🍺 Biere entdecken</a>
              </BreweryButton>
              
              <BreweryButton 
                variant="outline" 
                size="xl"
                className="border-3 border-brewery-sand-beige text-brewery-sand-beige hover:bg-brewery-sand-beige hover:text-brewery-dark-brown text-lg px-8 py-4 backdrop-blur-sm bg-black/20 hover:bg-brewery-sand-beige/95 transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <a href="/termine">📅 Verkaufstermine</a>
              </BreweryButton>
            </div>
            
            {/* Authenticity Badge */}
            <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-brewery-dark-brown/80 backdrop-blur-md rounded-full border border-brewery-rust-red/50">
              <div className="w-3 h-3 bg-brewery-hop-green rounded-full animate-pulse"></div>
              <span className="text-brewery-sand-beige font-medium text-sm md:text-base">
                Seit 2012 • Handwerklich gebraut • Regional verwurzelt
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce-gentle">
            <span className="text-brewery-sand-beige text-sm font-medium tracking-wider uppercase">
              Entdecken
            </span>
            <div className="w-8 h-12 border-2 border-brewery-sand-beige rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brewery-sand-beige rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Sales Date Section - Intensiviertes Farbschema mit Scroll-Animationen */}
      <ScrollReveal direction="up" delay={0.2}>
        <section 
          className="py-20 bg-gradient-to-b from-brewery-sand-beige-100 via-brewery-off-white to-brewery-sand-beige-50 relative overflow-hidden"
          aria-labelledby="next-sales-heading"
        >
        {/* Erdige Hintergrund-Akzente */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-10 left-10 w-40 h-40 bg-brewery-rust-red rounded-full blur-3xl"
          />
          <div 
            className="absolute bottom-20 right-20 w-60 h-60 bg-brewery-dark-brown rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="scale" delay={0.4}>
            <h2 id="next-sales-heading" className="text-4xl md:text-6xl font-black text-brewery-dark-brown mb-12 text-shadow-sm relative z-10">
              <span className="block text-brewery-rust-red text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide">
                Nächster
              </span>
              Verkaufstermin
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-white via-brewery-off-white to-brewery-sand-beige-50 p-10 mb-10 rounded-2xl shadow-2xl border-3 border-brewery-rust-red/20 backdrop-blur-sm">
                <ScrollReveal direction="scale" delay={0.8}>
                  <div className="text-3xl md:text-4xl font-black text-brewery-rust-red mb-6 text-shadow-sm">
                    🗓️ Samstag, 14. September 2024
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="up" delay={1.0}>
                  <div className="text-xl md:text-2xl font-bold text-brewery-dark-brown mb-8 bg-brewery-malt-yellow/20 px-6 py-3 rounded-xl">
                    🕐 14:00 - 18:00 Uhr | 📍 Schloßstraße 1, 19067 Leezen
                  </div>
                </ScrollReveal>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.2}>
                  <StaggerItem>
                    <div className="bg-gradient-to-br from-brewery-hop-green/20 to-brewery-hop-green/10 rounded-2xl p-6 border-2 border-brewery-hop-green/30 hover:border-brewery-hop-green/50 transition-all duration-300">
                      <h3 className="font-black text-brewery-dark-brown mb-4 text-lg flex items-center gap-2">
                        🍺 <span>Verfügbar</span>
                      </h3>
                      <ul className="text-base text-brewery-brown-gray space-y-2 font-medium">
                        <li>• Hennings Pale Ale</li>
                        <li>• Helles Lagerbier</li>
                        <li>• IPA &ldquo;Hopfenbombe&rdquo;</li>
                      </ul>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="bg-gradient-to-br from-brewery-malt-yellow/20 to-brewery-malt-yellow/10 rounded-2xl p-6 border-2 border-brewery-malt-yellow/30 hover:border-brewery-malt-yellow/50 transition-all duration-300">
                      <h3 className="font-black text-brewery-dark-brown mb-4 text-lg flex items-center gap-2">
                        🥂 <span>Ausschank</span>
                      </h3>
                      <p className="text-base text-brewery-brown-gray font-medium">
                        Verkostung und Probieren vor Ort möglich
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="bg-gradient-to-br from-brewery-rust-red/20 to-brewery-rust-red/10 rounded-2xl p-6 border-2 border-brewery-rust-red/30 hover:border-brewery-rust-red/50 transition-all duration-300">
                      <h3 className="font-black text-brewery-dark-brown mb-4 text-lg flex items-center gap-2">
                        📝 <span>Vorbestellung</span>
                      </h3>
                      <p className="text-base text-brewery-brown-gray font-medium">
                        Biere reservieren per Kontaktformular
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
                </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={1.4}>
            <BreweryButton 
              size="xl" 
              className="shadow-brewery-button bg-brewery-rust-red hover:bg-brewery-rust-red-700 text-brewery-off-white font-bold border-2 border-brewery-malt-yellow/40 hover:border-brewery-malt-yellow transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/kontakt">🍺 Bier vorbestellen</a>
            </BreweryButton>
          </ScrollReveal>
        </div>
        </section>
      </ScrollReveal>

      {/* Featured Beer Section - Kraftvolle Erdige Farben mit Parallax */}
      <ParallaxScroll speed={0.3} offset={-100}>
        <section 
          className="py-20 bg-gradient-to-br from-brewery-dark-brown via-brewery-dark-brown-800 to-brewery-rust-red-900 relative overflow-hidden"
          aria-labelledby="beers-heading"
        >
        {/* Handwerks-Muster Hintergrund */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(211, 169, 92, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 75% 75%, rgba(138, 75, 45, 0.2) 0%, transparent 40%),
                linear-gradient(45deg, transparent 48%, rgba(216, 198, 179, 0.1) 49%, rgba(216, 198, 179, 0.1) 51%, transparent 52%)
              `,
              backgroundSize: '200px 200px, 150px 150px, 20px 20px'
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="text-center mb-16 relative z-10">
              <h2 id="beers-heading" className="text-5xl md:text-7xl font-black text-brewery-malt-yellow mb-4 text-shadow-2xl">
                <span className="block text-brewery-sand-beige text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide">
                  🍺 Handwerklich gebraut
                </span>
                Unsere Biere
              </h2>
              <p className="text-xl md:text-2xl text-brewery-sand-beige font-medium italic max-w-2xl mx-auto">
                &ldquo;Mit Leidenschaft und traditionellem Handwerk - ehrlich gebraute Biere von höchster Qualität&rdquo;
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.3}>
            {/* Featured Beer Card - Enhanced */}
            <StaggerItem direction="up">
              <article className="relative bg-gradient-to-br from-brewery-off-white via-brewery-sand-beige-50 to-brewery-off-white rounded-2xl overflow-hidden shadow-2xl border-3 border-brewery-malt-yellow/30 hover:border-brewery-malt-yellow/60 transform hover:scale-105 transition-all duration-500 group" role="article" aria-labelledby="pale-ale-title">
              <div className="aspect-brewery-card relative">
                <BreweryImage
                  src="/Bier_Pale_Ale.png"
                  alt="Hennings Pale Ale - Fruchtiges Craft-Bier mit 5,7% Vol., 42 IBU, goldene Farbe und amerikanischem Cascade-Hopfen mit Zitrusnoten"
                  aspectRatio="brewery-card"
                  priority
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Beer Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brewery-dark-brown/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 id="pale-ale-title" className="text-2xl font-black text-brewery-dark-brown mb-3 group-hover:text-brewery-rust-red transition-colors duration-300">
                  Hennings Pale Ale
                </h3>
                <div className="mb-6 bg-brewery-rust-red/10 px-4 py-2 rounded-xl">
                  <p className="text-brewery-rust-red text-base font-black flex items-center justify-center gap-2">
                    <span>5,7% Vol.</span> • <span>42 IBU</span> • <span>🍺 Obergärig</span>
                  </p>
                </div>
                <p className="text-brewery-brown-gray text-base leading-relaxed font-medium mb-6">
                  Fruchtiges Pale Ale mit deutlicher Zitrusnote durch amerikanischen 
                  Cascade-Hopfen. Karamellmalz verleiht dem Bier Körper und Balance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3" role="status" aria-live="polite">
                    <div className="w-3 h-3 bg-brewery-hop-green rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-sm text-brewery-hop-green font-bold uppercase tracking-wide">Aktuell verfügbar</span>
                  </div>
                  <div className="text-brewery-rust-red text-2xl group-hover:scale-125 transition-transform duration-300">
                    🍺
                  </div>
                </div>
              </div>
              </article>
            </StaggerItem>

            {/* Placeholder cards - Enhanced */}
            <StaggerItem direction="up">
              <div className="relative bg-gradient-to-br from-brewery-malt-yellow/20 via-brewery-sand-beige-50 to-brewery-malt-yellow/10 rounded-2xl overflow-hidden shadow-xl border-3 border-brewery-malt-yellow/40 hover:border-brewery-malt-yellow/70 transform hover:scale-105 transition-all duration-500 group" role="article" aria-label="Helles Lagerbier - Bald verfügbar">
              <div className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-20 h-20 bg-gradient-to-br from-brewery-malt-yellow/30 to-brewery-rust-red/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-3xl">🍺</div>
                </div>
                <div className="text-2xl font-black text-brewery-dark-brown mb-3 group-hover:text-brewery-rust-red transition-colors duration-300">
                  Helles Lagerbier
                </div>
                <div className="text-base font-bold text-brewery-brown-gray mb-4 bg-brewery-malt-yellow/20 px-4 py-2 rounded-xl">
                  Kommt bald
                </div>
                <div className="text-sm text-brewery-brown-gray/70 italic">
                  Untergärig • Süffig • Traditionell
                </div>
              </div>
            </div>
            </StaggerItem>

            <StaggerItem direction="up">
              <div className="relative bg-gradient-to-br from-brewery-hop-green/20 via-brewery-sand-beige-50 to-brewery-hop-green/10 rounded-2xl overflow-hidden shadow-xl border-3 border-brewery-hop-green/40 hover:border-brewery-hop-green/70 transform hover:scale-105 transition-all duration-500 group" role="article" aria-label="IPA Hopfenbombe - Bald verfügbar">
              <div className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-20 h-20 bg-gradient-to-br from-brewery-hop-green/30 to-brewery-rust-red/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-3xl">💥</div>
                </div>
                <div className="text-2xl font-black text-brewery-dark-brown mb-3 group-hover:text-brewery-rust-red transition-colors duration-300">
                  IPA &ldquo;Hopfenbombe&rdquo;
                </div>
                <div className="text-base font-bold text-brewery-brown-gray mb-4 bg-brewery-hop-green/20 px-4 py-2 rounded-xl">
                  Kommt bald
                </div>
                <div className="text-sm text-brewery-brown-gray/70 italic">
                  Obergärig • Hopfig • Explosiv
                </div>
              </div>
            </div>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal direction="scale" delay={0.8}>
            <div className="text-center mt-12">
              <BreweryButton 
                size="xl" 
                className="shadow-brewery-button bg-brewery-rust-red hover:bg-brewery-rust-red-700 text-brewery-off-white font-bold border-2 border-brewery-malt-yellow/40 hover:border-brewery-malt-yellow transform hover:scale-105 transition-all duration-300 text-xl px-10 py-5"
                asChild
              >
                <a href="/biere">🍺 Alle Biere ansehen</a>
              </BreweryButton>
            </div>
          </ScrollReveal>
        </div>
        </section>
      </ParallaxScroll>

      {/* About Preview Section - Maximum Visual Impact mit Parallax */}
      <ParallaxScroll speed={-0.2} offset={50}>
        <section 
          className="py-24 bg-gradient-to-b from-brewery-dark-brown via-brewery-rust-red-900 to-brewery-dark-brown-900 text-brewery-sand-beige relative overflow-hidden"
          aria-labelledby="about-heading"
        >
        {/* Handwerks-Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(211, 169, 92, 0.4) 0%, transparent 30%),
                radial-gradient(circle at 80% 70%, rgba(138, 75, 45, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 40% 80%, rgba(216, 198, 179, 0.2) 0%, transparent 35%),
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 35px,
                  rgba(216, 198, 179, 0.03) 35px,
                  rgba(216, 198, 179, 0.03) 70px
                )
              `,
            }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal direction="scale" delay={0.3}>
            <div className="mb-12">
              <h2 id="about-heading" className="text-5xl md:text-7xl font-black mb-6 text-shadow-2xl">
                <span className="block text-brewery-malt-yellow text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
                  👨‍🍳 Braumeister seit 2012
                </span>
                <span className="text-brewery-sand-beige">Tim Hennings</span>
              </h2>
              
              {/* Authenticity Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-brewery-rust-red/80 backdrop-blur-md rounded-full border-2 border-brewery-malt-yellow/50 mb-8">
                <div className="w-4 h-4 bg-brewery-malt-yellow rounded-full animate-pulse"></div>
                <span className="text-brewery-off-white font-bold text-lg">
                  Handwerksbrauerei • Leezen • Mecklenburg-Vorpommern
                </span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="bg-brewery-dark-brown/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-brewery-rust-red/30 shadow-2xl mb-10">
              <p className="text-xl md:text-3xl leading-relaxed font-medium text-brewery-sand-beige italic mb-6">
                &ldquo;Mit <span className="text-brewery-malt-yellow font-bold">Leidenschaft</span> und 
                <span className="text-brewery-malt-yellow font-bold"> traditionellem Handwerk</span> entstehen seit 2012 in Leezen 
                ehrliche Biere von höchster Qualität.&rdquo;
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-brewery-sand-beige/90">
                Jeder Sud wird mit ausgewählten Rohstoffen und viel Zeit gebraut. 
                Vom ersten Experiment in der Garage zur eigenen Brauerei - 
                <span className="text-brewery-malt-yellow font-semibold"> eine Reise der Leidenschaft.</span>
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={0.9}>
            <BreweryButton 
              variant="outline" 
              size="xl"
              className="border-3 border-brewery-malt-yellow text-brewery-malt-yellow hover:bg-brewery-malt-yellow hover:text-brewery-dark-brown text-xl px-10 py-5 font-black backdrop-blur-sm bg-brewery-dark-brown/30 hover:bg-brewery-malt-yellow/95 transition-all duration-400 transform hover:scale-105 shadow-2xl"
              asChild
            >
              <a href="/ueber-uns">🍺 Unsere Geschichte entdecken</a>
            </BreweryButton>
          </ScrollReveal>
        </div>
        </section>
      </ParallaxScroll>
    </>
  );
}