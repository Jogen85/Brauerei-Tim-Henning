import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Handwerksbrauerei Hennings',
    default: 'Handwerksbrauerei Hennings - Craft Biere aus Leezen',
  },
  description: 'Handwerklich gebraute Biere aus Leezen, Mecklenburg-Vorpommern. Authentische Craft-Brauerei mit traditionellem Handwerk und kreativen Rezepten.',
  keywords: [
    'Brauerei',
    'Craft Beer',
    'Handwerk',
    'Leezen',
    'Mecklenburg-Vorpommern',
    'Tim Hennings',
    'Pale Ale',
    'Bier'
  ],
  authors: [{ name: 'Handwerksbrauerei Hennings' }],
  creator: 'Handwerksbrauerei Hennings',
  publisher: 'Handwerksbrauerei Hennings',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Handwerksbrauerei Hennings',
    title: 'Handwerksbrauerei Hennings - Craft Biere aus Leezen',
    description: 'Handwerklich gebraute Biere aus Leezen, Mecklenburg-Vorpommern',
    images: [
      {
        url: '/Logo.jpg',
        width: 800,
        height: 600,
        alt: 'Handwerksbrauerei Hennings Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handwerksbrauerei Hennings - Craft Biere aus Leezen',
    description: 'Handwerklich gebraute Biere aus Leezen, Mecklenburg-Vorpommern',
    images: ['/Logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://brauerei-hennings.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full">
      <body className="h-full antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        
        <div className="flex min-h-full flex-col">
          {/* Header will be added here */}
          
          <main id="main-content" className="flex-1">
            {children}
          </main>
          
          {/* Footer will be added here */}
        </div>
      </body>
    </html>
  );
}