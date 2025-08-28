import "../globals.css";
import type { ReactNode } from "react";
import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import logo from "../../Logo.jpg";

export const metadata = {
  title: "Brauerei – Handgebrautes Bier",
  description: "Offizielle Website: Biere, Verkaufstermine, Vorbestellung.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  style: ["normal"]
});

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Cloudflare Turnstile (for contact form) */}
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          defer
        />
      </head>
      <body className={`min-h-dvh bg-paper text-muted antialiased font-sans ${inter.variable} ${fraunces.variable}`}>
        <header className="border-b border-muted/30 bg-primary text-sand">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-6">
            <a href="/" className="flex items-center gap-2" aria-label="Startseite: Handwerksbrauerei Hennings">
              <Image src={logo} alt="Handwerksbrauerei Hennings" width={132} height={36} className="h-9 w-auto" />
            </a>
            <nav className="text-sm flex gap-4">
              <a className="hover:text-accent" href="/biere">Biere</a>
              <a className="hover:text-accent" href="/termine">Verkaufstermine</a>
              <a className="hover:text-accent" href="/kontakt">Kontakt</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mt-16 border-t border-muted/30 bg-primary text-sand">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex items-center justify-between">
            <p>© {new Date().getFullYear()} Brauerei</p>
            <nav className="flex gap-4">
              <a className="hover:text-accent" href="/impressum">Impressum</a>
              <a className="hover:text-accent" href="/datenschutz">Datenschutz</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
