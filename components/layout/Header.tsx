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

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'bg-brewery-off-white/98 backdrop-blur-brewery shadow-brewery-card border-b border-brewery-sand-beige-200'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 rounded-lg"
                aria-label="Handwerksbrauerei Hennings - Zur Startseite"
              >
                <div className="relative w-10 h-10 lg:w-12 lg:h-12">
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
                      'font-bold text-lg lg:text-xl transition-all duration-500 ease-in-out',
                      isScrolled 
                        ? 'text-brewery-dark-brown transform scale-100' 
                        : 'text-brewery-sand-beige text-shadow-lg transform scale-105'
                    )}
                  >
                    Handwerksbrauerei
                  </div>
                  <div 
                    className={cn(
                      'text-sm lg:text-base font-medium transition-all duration-500 ease-in-out',
                      isScrolled 
                        ? 'text-brewery-rust-red' 
                        : 'text-brewery-sand-beige/95 text-shadow-sm'
                    )}
                  >
                    Hennings
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Hauptnavigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2 rounded-lg',
                    isActiveRoute(item.href)
                      ? isScrolled
                        ? 'text-brewery-rust-red font-semibold'
                        : 'text-brewery-sand-beige font-semibold text-shadow'
                      : isScrolled
                        ? 'text-brewery-brown-gray hover:text-brewery-rust-red hover:font-medium'
                        : 'text-brewery-sand-beige/85 hover:text-brewery-sand-beige text-shadow-sm hover:text-shadow'
                  )}
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActiveRoute(item.href) && (
                    <span
                      className={cn(
                        'absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 rounded-full transition-all duration-300 ease-in-out',
                        isScrolled 
                          ? 'bg-brewery-rust-red shadow-sm' 
                          : 'bg-brewery-sand-beige shadow-brewery-button'
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <BreweryButton
                size="sm"
                className="shadow-brewery-button"
                asChild
              >
                <Link href="/kontakt">Jetzt vorbestellen</Link>
              </BreweryButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={cn(
                'lg:hidden relative w-10 h-10 rounded-lg transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2',
                isScrolled
                  ? 'text-brewery-brown-gray hover:text-brewery-rust-red hover:bg-brewery-sand-beige-100'
                  : 'text-brewery-sand-beige hover:bg-white/10 drop-shadow-md'
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              </span>
              
              {/* Hamburger Icon with Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 relative">
                  <span
                    className={cn(
                      'absolute h-0.5 w-5 transform transition-all duration-300 ease-in-out',
                      isScrolled ? 'bg-brewery-brown-gray' : 'bg-brewery-sand-beige',
                      isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute h-0.5 w-5 transform transition-all duration-300 ease-in-out',
                      isScrolled ? 'bg-brewery-brown-gray' : 'bg-brewery-sand-beige',
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute h-0.5 w-5 transform transition-all duration-300 ease-in-out',
                      isScrolled ? 'bg-brewery-brown-gray' : 'bg-brewery-sand-beige',
                      isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                    )}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 transition-all duration-400 ease-in-out',
            'bg-brewery-off-white/98 backdrop-blur-brewery border-b border-brewery-sand-beige-200 shadow-brewery-card',
            isMenuOpen
              ? 'opacity-100 translate-y-0 visible max-h-screen'
              : 'opacity-0 -translate-y-4 invisible max-h-0'
          )}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out transform',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2',
                  'hover:scale-105 active:scale-95',
                  isActiveRoute(item.href)
                    ? 'bg-brewery-rust-red text-brewery-off-white shadow-brewery-button transform translate-x-1'
                    : 'text-brewery-brown-gray hover:bg-brewery-sand-beige-100 hover:text-brewery-rust-red hover:shadow-md'
                )}
                style={{
                  animationDelay: `${index * 75}ms`,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-in-out ${index * 75}ms`,
                }}
                aria-current={isActiveRoute(item.href) ? 'page' : undefined}
              >
                <span className="flex items-center gap-3">
                  {item.label}
                  {isActiveRoute(item.href) && (
                    <span
                      className="w-2 h-2 bg-brewery-off-white rounded-full animate-bounce-gentle"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-brewery-sand-beige-200">
              <BreweryButton
                size="lg"
                className="w-full shadow-brewery-button"
                asChild
              >
                <Link href="/kontakt">Jetzt vorbestellen</Link>
              </BreweryButton>
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