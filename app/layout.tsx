import "./globals.css";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer />
      </head>
      <body className={`min-h-dvh bg-paper text-muted antialiased font-sans ${inter.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
