'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BreweryImage from '@/components/ui/BreweryImage'
import BreweryButton from '@/components/ui/BreweryButton'
import { cn } from '@/lib/utils'

interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
  isExternal?: boolean
  children?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Startseite',
    href: '/',
  },
  {
    id: 'beers',
    label: 'Unsere Biere',
    href: '/biere',
  },
  {
    id: 'events',
    label: 'Verkaufstermine',
    href: '/termine',
  },
  {
    id: 'about',
    label: 'Über uns',
    href: '/ueber-uns',
  },
  {
    id: 'contact',
    label: 'Kontakt',
    href: '/kontakt',
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll events for sticky header behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 50
      
      setIsScrolled(scrollPosition > threshold)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check initial scroll position
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle ESC key for closing mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Helper function to determine if a route is active
  const isActiveRoute = (href: string): boolean => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
          isScrolled
            ? 'bg-brewery-dark-brown/95 backdrop-blur-xl shadow-2xl border-b-2 border-brewery-rust-red/30'
            : 'bg-gradient-to-b from-brewery-dark-brown/60 via-brewery-dark-brown/40 to-transparent backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/"
                className="flex items-center space-x-3"
                aria-label="Zur Startseite der Handwerksbrauerei Hennings"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
                  <BreweryImage
                    src="/Logo.jpg"
                    alt="Handwerksbrauerei Hennings Logo"
                    aspectRatio="square"
                    priority
                    className="rounded-lg"
                  />
                </div>
                <div className="hidden sm:block">
                  <div 
                    className={cn(
                      'font-bold text-lg lg:text-2xl transition-all duration-700 ease-in-out',
                      isScrolled 
                        ? 'text-brewery-sand-beige transform scale-100' 
                        : 'text-brewery-sand-beige text-shadow-xl transform scale-110'
                    )}
                  >
                    Handwerksbrauerei
                  </div>
                  <div 
                    className={cn(
                      'text-sm lg:text-lg font-bold transition-all duration-700 ease-in-out tracking-wider',
                      isScrolled 
                        ? 'text-brewery-malt-yellow' 
                        : 'text-brewery-malt-yellow text-shadow-lg'
                    )}
                  >
                    HENNINGS
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Hauptnavigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-3 text-base font-bold transition-all duration-400 ease-in-out hover:scale-110 rounded-lg',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2',
                    'hover:bg-brewery-rust-red/20 hover:backdrop-blur-md border border-transparent hover:border-brewery-rust-red/40',
                    isActiveRoute(item.href)
                      ? 'text-brewery-malt-yellow font-black text-shadow-lg bg-brewery-rust-red/30 border-brewery-rust-red/50'
                      : 'text-brewery-sand-beige hover:text-brewery-malt-yellow text-shadow-sm hover:text-shadow-lg'
                  )}
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActiveRoute(item.href) && (
                    <span
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-brewery-malt-yellow rounded-full shadow-lg animate-pulse"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <BreweryButton
                size="md"
                className="shadow-brewery-button bg-brewery-rust-red hover:bg-brewery-rust-red-700 text-brewery-off-white font-bold border-2 border-brewery-malt-yellow/30 hover:border-brewery-malt-yellow/60 transition-all duration-300"
                asChild
              >
                <Link href="/kontakt">🍺 Vorbestellen</Link>
              </BreweryButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={cn(
                'lg:hidden relative w-12 h-12 rounded-xl transition-all duration-400',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-malt-yellow focus-visible:ring-offset-2',
                'border-2 border-brewery-rust-red/40 hover:border-brewery-malt-yellow/60',
                'bg-brewery-dark-brown/70 hover:bg-brewery-rust-red/80 backdrop-blur-md',
                'text-brewery-sand-beige hover:text-brewery-malt-yellow',
                'transform hover:scale-110 hover:rotate-90 transition-all duration-500 ease-in-out'
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              
              {/* Hamburger Icon with Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 relative">
                  <span
                    className={cn(
                      'absolute h-1 w-6 transform transition-all duration-400 ease-in-out rounded-full',
                      'bg-brewery-sand-beige',
                      isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute h-1 w-6 transform transition-all duration-400 ease-in-out rounded-full',
                      'bg-brewery-sand-beige',
                      isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute h-1 w-6 transform transition-all duration-400 ease-in-out rounded-full',
                      'bg-brewery-sand-beige',
                      isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    )}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Immersive */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden fixed inset-0 z-40 transition-all duration-600 ease-in-out',
            'bg-gradient-to-br from-brewery-dark-brown/98 via-brewery-rust-red/95 to-brewery-dark-brown/98',
            'backdrop-blur-2xl border-l-4 border-brewery-malt-yellow/50',
            isMenuOpen
              ? 'opacity-100 translate-x-0 visible'
              : 'opacity-0 translate-x-full invisible'
          )}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          {/* Background Video Overlay for Mobile Menu */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-brewery-dark-brown/90"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 20%, rgba(211, 169, 92, 0.2) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(138, 75, 45, 0.3) 0%, transparent 50%),
                  linear-gradient(135deg, transparent 0%, rgba(59, 31, 22, 0.8) 100%)
                `
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col h-full pt-24 px-8">
            {/* Mobile Menu Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-brewery-malt-yellow mb-2 text-shadow-xl">
                HENNINGS
              </h2>
              <p className="text-brewery-sand-beige text-lg font-medium italic">
                "Ehrlich gebrautes Bier"
              </p>
            </div>

            <div className="flex-1 space-y-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'block px-6 py-5 rounded-2xl text-2xl font-bold transition-all duration-500 ease-in-out transform',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-malt-yellow focus-visible:ring-offset-2',
                  'hover:scale-105 active:scale-95 border-2 border-transparent',
                  'backdrop-blur-md shadow-xl',
                  isActiveRoute(item.href)
                    ? 'bg-brewery-malt-yellow/20 text-brewery-malt-yellow border-brewery-malt-yellow/40 shadow-2xl transform translate-x-2'
                    : 'text-brewery-sand-beige hover:bg-brewery-rust-red/30 hover:text-brewery-malt-yellow hover:border-brewery-rust-red/40'
                )}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transform: isMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0.8)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 150}ms`,
                }}
                aria-current={isActiveRoute(item.href) ? 'page' : undefined}
              >
                <span className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActiveRoute(item.href) ? (
                    <span className="text-brewery-malt-yellow text-3xl">🍺</span>
                  ) : (
                    <span className="text-brewery-sand-beige text-xl opacity-70">→</span>
                  )}
                </span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-8 mt-auto pb-12">
              <BreweryButton
                size="xl"
                className="w-full shadow-2xl bg-brewery-rust-red hover:bg-brewery-rust-red-700 text-brewery-off-white font-black text-xl border-3 border-brewery-malt-yellow/40 hover:border-brewery-malt-yellow transform hover:scale-105 transition-all duration-400"
                asChild
              >
                <Link href="/kontakt">🍺 Jetzt vorbestellen</Link>
              </BreweryButton>
              
              {/* Mobile Menu Footer */}
              <div className="text-center mt-8">
                <p className="text-brewery-sand-beige/70 text-sm">
                  Seit 2012 • Handwerklich gebraut
                </p>
                <p className="text-brewery-sand-beige/70 text-sm">
                  Leezen, Mecklenburg-Vorpommern
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-brewery-dark-brown/50 backdrop-blur-sm z-40 transition-opacity duration-400 ease-in-out"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
          style={{
            opacity: isMenuOpen ? 1 : 0,
          }}
        />
      )}
    </>
  )
}