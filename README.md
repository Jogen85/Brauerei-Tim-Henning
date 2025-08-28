# Brauerei-Website (Next.js 15.5 + Tailwind 4 + Sanity)

Modernes MVP gemäß PRD: Bier-Sortiment, Verkaufstermine, Kontakt/Vorbestellung, Hero-Video. Stack: Next.js 15.5 (App Router) + Tailwind CSS 4 + Sanity CMS, E-Mail via Resend (kostenlos, Domain-Verifizierung nötig) mit SMTP-Fallback, Anti-Spam via Cloudflare Turnstile. Entwicklung auf Vercel, später Deploy auf IONOS Deploy Now.

## Quickstart

1) Abhängigkeiten installieren (lokal):
   - Node 20+
   - `npm i`

2) Env-Datei anlegen:
   - `.env.local` anhand `.env.example` befüllen.

3) Sanity einrichten:
   - Sanity-Projekt erstellen, Dataset `production`.
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` setzen.
   - Eingebettetes Studio ist unter `/studio` verfügbar.

4) Dev starten:
   - `npm run dev`

## Env-Variablen
Siehe `.env.example` für alle benötigten Variablen (Sanity, E-Mail, Turnstile, Site-URL).

## Struktur

- `app/` – App Router Seiten und APIs
- `components/` – UI-Bausteine (Hero, Cards, Form)
- `lib/` – Sanity-Client, Queries, Utils
- `sanity/` – Schemas (Bier, Termin, Site)
- `sanity.config.ts` – Sanity Studio Konfiguration (eingebettet unter `/studio`)

## Revalidierung/Content-Update
- Seiten verwenden ISR (`revalidate`) – On-Demand Revalidate/Webhooks optional später.

## Formular & Anti-Spam
- `POST /api/contact` validiert Turnstile und sendet Mail (Resend, Fallback Nodemailer/SMTP). Kunde erhält Kopie.

## Sanity Studio (eingebettet)
- Aufruf: `http://localhost:3000/studio`
- Benötigt `NEXT_PUBLIC_SANITY_PROJECT_ID` und `NEXT_PUBLIC_SANITY_DATASET`
- Collections: Bier (`beer`), Verkaufstermin (`event`), Seitenkonfiguration (`site`)

## Deployment
- Entwicklung: Vercel (Preview Deployments, Edge/CDN)
- Produktion: IONOS Deploy Now (Node-App). Anleitung folgt im Projekt-Wiki.

## ToDo (später)
- Design-Feinschliff, Bild-/Video-Optimierung, Schema.org Markup (Event/LocalBusiness)
- On-Demand Revalidate (Sanity Webhook) und SEO
