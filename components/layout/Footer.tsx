'use client'

import Link from 'next/link'
import BreweryImage from '@/components/ui/BreweryImage'
import { cn } from '@/lib/utils'

interface FooterLink {
  id: string
  label: string
  href: string
  isExternal?: boolean
}

interface FooterSection {
  id: string
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    links: [
      { id: 'home', label: 'Startseite', href: '/' },
      { id: 'beers', label: 'Unsere Biere', href: '/biere' },
      { id: 'events', label: 'Verkaufstermine', href: '/termine' },
      { id: 'about', label: 'Über uns', href: '/ueber-uns' },
      { id: 'contact', label: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    id: 'legal',
    title: 'Rechtliches',
    links: [
      { id: 'impressum', label: 'Impressum', href: '/impressum' },
      { id: 'privacy', label: 'Datenschutz', href: '/datenschutz' },
      { id: 'terms', label: 'AGB', href: '/agb' },
    ],
  },
  {
    id: 'social',
    title: 'Folgen Sie uns',
    links: [
      { 
        id: 'facebook', 
        label: 'Facebook', 
        href: 'https://facebook.com/brauerei-hennings',
        isExternal: true 
      },
      { 
        id: 'instagram', 
        label: 'Instagram', 
        href: 'https://instagram.com/brauerei_hennings',
        isExternal: true 
      },
    ],
  },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-brewery-dark-brown text-brewery-sand-beige">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded-lg"
              aria-label="Handwerksbrauerei Hennings - Zur Startseite"
            >
              <div className="relative w-12 h-12">
                <BreweryImage
                  src="/Logo.jpg"
                  alt="Handwerksbrauerei Hennings Logo"
                  aspectRatio="square"
                  className="rounded-lg"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-brewery-sand-beige">
                  Handwerksbrauerei
                </div>
                <div className="text-base font-medium text-brewery-rust-red">
                  Hennings
                </div>
              </div>
            </Link>
            
            <p className="mt-4 text-sm text-brewery-sand-beige/80 leading-relaxed">
              Seit 2012 brauen wir mit Leidenschaft und traditionellem Handwerk 
              ehrliche Biere von höchster Qualität in Leezen, Mecklenburg-Vorpommern.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-brewery-rust-red flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <address className="not-italic">
                  Schloßstraße 1, 19067 Leezen
                </address>
              </div>
              
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-brewery-rust-red flex-shrink-0" 
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
                <a 
                  href="tel:+4917423572812" 
                  className="hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded"
                >
                  0174/2357281
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-brewery-rust-red flex-shrink-0" 
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
                <a 
                  href="mailto:info@brauerei-hennings.de" 
                  className="hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded"
                >
                  info@brauerei-hennings.de
                </a>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.id}>
              <h3 className="font-semibold text-brewery-sand-beige mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.id}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'text-sm text-brewery-sand-beige/80 hover:text-brewery-rust-red transition-colors',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded',
                          'inline-flex items-center gap-1'
                        )}
                      >
                        {link.label}
                        <svg 
                          className="w-3 h-3" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                        <span className="sr-only">(öffnet in neuem Tab)</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-brewery-sand-beige/80 hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brewery-brown-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-brewery-sand-beige/60">
              <span>© {currentYear} Handwerksbrauerei Hennings.</span>
              <span className="ml-1">Alle Rechte vorbehalten.</span>
            </div>

            {/* USt-ID */}
            <div className="text-sm text-brewery-sand-beige/60">
              <span>USt-IdNr.: DE 283523697</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/brauerei-hennings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brewery-sand-beige/60 hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded-lg p-1"
                aria-label="Facebook (öffnet in neuem Tab)"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/brauerei_hennings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brewery-sand-beige/60 hover:text-brewery-rust-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 focus-visible:ring-offset-brewery-dark-brown rounded-lg p-1"
                aria-label="Instagram (öffnet in neuem Tab)"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.247 7.052 7.757 8.349 7.757s2.448.49 3.324 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.386 3.344c-.876.807-2.027 1.297-3.324 1.297zm7.958-5.541c0 .896-.49 1.617-1.09 1.617-.6 0-1.09-.721-1.09-1.617 0-.896.49-1.617 1.09-1.617.6 0 1.09.721 1.09 1.617z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}