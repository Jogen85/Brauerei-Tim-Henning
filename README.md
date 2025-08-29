# 🍺 Handwerksbrauerei Hennings - Moderne Website

> Eine hochmoderne, performante Website für die Craft-Brauerei Tim Hennings in Leezen, Mecklenburg-Vorpommern

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1.12-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Beta-red?style=flat-square)](https://turbo.build/)

---

## 📖 Projektübersicht

**Handwerksbrauerei Hennings** ist eine authentische Craft-Brauerei im Norden Deutschlands an der Mecklenburgischen Seenplatte. Seit 2012 braut Braumeister Tim Hennings mit viel Leidenschaft nach traditionellem Verfahren geschmacksintensive Biere in kleiner Auflage.

Diese Website dient als **digitales Schaufenster** der Brauerei und verbindet traditionelles Handwerk mit modernster Web-Technologie.

### 🎯 Projektziele

| Ziel | Beschreibung | Status |
|------|--------------|--------|
| **Umsatzsteigerung** | Klare Kommunikation von Verkaufsterminen und verfügbaren Bieren | 🚀 In Planung |
| **Informationsvermittlung** | Umfassende Darstellung der Biere mit technischen Details und Verkostungsnotizen | 🚀 In Planung |
| **Markenaufbau** | Authentische Präsentation als Craft-Brauerei mit Geschichte und Philosophie | 🚀 In Planung |
| **Kundeninteraktion** | Kontaktformular und Bier-Vorbestellsystem | 🚀 In Planung |

### 👥 Zielgruppe

- **Lokale Bierliebhaber** in Mecklenburg-Vorpommern
- **Craft-Beer-Enthusiasten** auf der Suche nach regionalen Spezialitäten
- **Touristen** der Mecklenburgischen Seenplatte
- **Stammkunden** für einfache Termininfo und Vorbestellungen

---

## 🚀 Technologie-Stack (State-of-the-Art 2025)

### Frontend-Framework
- **Next.js 15.5.2** mit App Router
  - **Turbopack**: 2-4x schnellere Builds (Beta Production-Support)
  - **React 18+ Concurrent Features**: Verbesserte UX durch Non-Blocking Rendering
  - **Experimentelle Features**: `optimizePackageImports` + `inlineCss` für beste Performance

### Styling & Design
- **Tailwind CSS v4.1.12** mit CSS-first Konfiguration
  - **Performance**: Bis zu 5x schnellere Builds, 100x+ schnellere inkrementelle Builds
  - **Moderne CSS-Features**: Cascade Layers, @property, color-mix()
  - **Neue Utilities**: text-shadow-*, mask-*, verbesserte overflow-wrap
  - **Brauerei-Farbpalette**: Authentische Farben basierend auf Logo-Analyse

### Entwicklungstools
- **TypeScript 5.9.2**: Vollständige Typsicherheit
- **ESLint 9.x**: Moderne Flat Config mit Next.js-optimierten Regeln
- **PostCSS**: Optimierte CSS-Verarbeitung für Tailwind v4

### Content Management (Geplant)
- **Sanity CMS**: Headless CMS für einfache Content-Verwaltung
- **GROQ**: Mächtige Query-Sprache für strukturierte Inhalte
- **Real-time Updates**: Live-Vorschau für Content-Änderungen

### Performance & SEO
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image Optimization**: Automatische WebP/AVIF-Konvertierung
- **Video Optimization**: Hero-Video mit Fallback-Strategien
- **Bundle Optimization**: Tree-shaking und Code-splitting

---

## 🏗️ Aktuelle Projektstruktur

```
Brauerei-Tim-Henning/
├── 📁 app/                      # Next.js App Router
│   ├── layout.tsx               # Root Layout + SEO + Accessibility
│   ├── page.tsx                 # Startseite mit Hero-Video
│   └── globals.css              # Tailwind Import + Brauerei CSS Variables
├── 📁 components/               # React Components (Ready für Phase 2)
├── 📁 lib/                      # Utility Functions (Ready für Phase 4)  
├── 📁 public/                   # Statische Assets
│   ├── Logo.jpg                 # Brauerei-Logo (Original)
│   ├── Bier_Pale_Ale.png        # Produktfoto Pale Ale
│   └── Video_Hero.webm          # Hero-Background-Video
├── 📁 types/                    # TypeScript Definitions (Ready für Phase 2)
├── ⚙️  eslint.config.mjs         # ESLint Flat Config (Modern)
├── ⚙️  next.config.mjs           # Next.js Config + Turbopack + Optimierungen
├── ⚙️  postcss.config.mjs        # PostCSS Config für Tailwind v4
├── ⚙️  tsconfig.json             # TypeScript Config + Path Aliases
├── 🔐 .env.local                # Environment Variables (Git-ignored)
├── 📄 .gitignore                # Comprehensive Ignore Patterns
├── 📦 package.json              # Dependencies + Scripts
├── 📚 CLAUDE.md                 # Technische Referenz für Entwicklung
└── 📖 README.md                 # Diese Datei
```

---

## ⚡ Performance-Benchmarks (Phase 1.1)

### Build-Performance

| Metric | Webpack Build | Turbopack Build | Development |
|--------|---------------|-----------------|-------------|
| **Compile Time** | 2.3s | 2.4s | Ready in 2.1s |
| **Disk Write** | ~200ms | 30ms ⚡ | N/A |
| **Bundle Size (Homepage)** | 5.44 kB | 5.38 kB | Hot Reload |
| **First Load JS** | 107 kB | 119 kB | Instant Updates |

### Qualitäts-Metriken

- ✅ **TypeScript**: 0 Type-Errors
- ✅ **ESLint**: 0 Linting-Errors  
- ✅ **Build Success Rate**: 100%
- ✅ **Port Conflicts**: Gelöst (Port 3003)
- ✅ **Browser Support**: Safari 16.4+, Chrome 111+, Firefox 128+

---

## 🛠️ Entwicklungsumgebung einrichten

### Voraussetzungen

- **Node.js**: Version 18.18 oder höher
- **npm**: Version 9.0 oder höher
- **Git**: Für Versionskontrolle

### Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/Jogen85/Brauerei-Tim-Henning.git
   cd Brauerei-Tim-Henning
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Development Server starten**
   ```bash
   npm run dev
   ```
   
   → Öffnet automatisch: `http://localhost:3003`

### Verfügbare Kommandos

| Kommando | Beschreibung | Verwendung |
|----------|--------------|------------|
| `npm run dev` | Development Server (Port 3003) | Tägliche Entwicklung |
| `npm run build` | Production Build (Webpack) | Standard Deployment |
| `npm run build:turbo` | Production Build (Turbopack) | Performance-optimiert |
| `npm run start` | Production Server (Port 3003) | Lokales Production-Testing |
| `npm run lint` | ESLint Code-Check | Code-Qualität |
| `npm run lint:fix` | ESLint Auto-Fix | Code-Cleanup |
| `npm run type-check` | TypeScript Validation | Type-Safety Check |

---

## 🎨 Design-System & Brauerei-Identität

### Farbpalette

Die Website verwendet eine authentische Farbpalette, die auf der Analyse des Brauerei-Logos basiert:

| Farbe | HEX | Verwendung | CSS Variable |
|-------|-----|------------|--------------|
| **Dunkelbraun** | `#3B1F16` | Haupthintergründe, Header | `--color-primary-dark-brown` |
| **Sandbeige** | `#D8C6B3` | Haupttext auf dunklem Grund | `--color-sand-beige` |
| **Rostrot** | `#8A4B2D` | Akzente, Buttons, Hover-States | `--color-rust-red` |
| **Altweiß** | `#F2EEE9` | Helle Hintergründe, Kontrast | `--color-off-white` |
| **Braun-Grau** | `#5F5047` | Sekundärer Text, Borders | `--color-brown-gray` |

**Optional**:
- **Hopfengrün**: `#6B7A4C` (Akzente für Hopfen-Bezug)
- **Malzgelb**: `#D3A95C` (Akzente für Malz/Gerste-Bezug)

### Typografie-Strategie

- **Headlines**: Markante Sans-Serif/Slab-Serif (kraftvoll, brauereigerecht)
- **Body Text**: Optimale Lesbarkeit mit WCAG AA/AAA Kontrastverhältnissen
- **Deutsche Sprache**: Vollständige Unterstützung für Umlaute und Sonderzeichen

### Responsive Design

- **Mobile-First**: Primärer Entwicklungsansatz
- **Breakpoints**: Tailwind-Standard mit projektspezifischen Anpassungen
- **Navigation**: Burger-Menu (mobile) → Horizontal-Menu (desktop)

---

## 🔧 Gelöste Herausforderungen & Lessons Learned

### ❌ Problem: Tailwind CSS v4.1.12 Integration

**Herausforderung**: Während der initialen Einrichtung trat der Fehler `"Missing field 'negated' on ScannerOptions.sources"` auf, der Build-Prozesse komplett blockierte.

**Root Cause**: 
- Versionsinkompatibilität zwischen `tailwindcss@4.1.12` und `@tailwindcss/postcss@4.0.0`
- Bekannter Bug in frühen Tailwind v4.0.x Versionen mit brüchigen Dependencies

**✅ Lösung**:
```bash
npm install @tailwindcss/postcss@latest
```

**Resultat**: Update auf `@tailwindcss/postcss@4.1.12` stellte Versionskonsistenz sicher.

**Research-Quellen**:
- GitHub Issue: [unovue/shadcn-vue#1146](https://github.com/unovue/shadcn-vue/issues/1146)
- Offizielle Tailwind v4 Dokumentation
- Community-Diskussionen zu Next.js 15.5 Kompatibilität

### 🎯 Best Practices etabliert

1. **Version-Kompatibilität**: 
   - Immer `npm list <package>` verwenden zur Dependency-Baum-Prüfung
   - PostCSS-Plugin-Versionen müssen mit Hauptpaket übereinstimmen

2. **ESLint Modern Config**:
   - Flat Config Format zwingend für ESLint 9.x mit Next.js 15.5
   - FlatCompat-Utility für Rückwärtskompatibilität mit Legacy-Configs

3. **Performance-Optimierung**:
   - ESM Module Format (`"type": "module"`) verbessert Kompatibilität
   - Asset-Platzierung in `/public` ermöglicht automatische Next.js-Optimierung

---

## 📊 Aktueller Entwicklungsstand

### ✅ Phase 1.1: Projekt-Setup & Grundstruktur (ABGESCHLOSSEN)

**Zeitrahmen**: 29. August 2025 (≈4 Stunden mit Problemlösung)

**Erreichte Meilensteine**:
- ✅ Next.js 15.5 mit TypeScript perfekt konfiguriert
- ✅ Tailwind CSS v4.1.12 erfolgreich integriert (nach Problemlösung)
- ✅ Turbopack Beta für Production Builds aktiviert
- ✅ ESLint moderne Flat Config implementiert
- ✅ Asset-Pipeline etabliert (Logo, Video, Produktbild)
- ✅ Performance-Benchmarks erreicht (< 2.5s Builds)
- ✅ Port-Konfiguration optimiert (3003)
- ✅ Entwicklungsumgebung vollständig funktionsfähig

**Deliverables**:
- Funktionierender Development Server
- Build-Prozesse (normal + Turbopack)
- Grundlegende Homepage mit Hero-Video
- Technische Dokumentation (CLAUDE.md + README.md)

### 🚀 Nächste Phasen (Geplant)

| Phase | Beschreibung | Geschätzte Dauer | Status |
|-------|--------------|------------------|---------|
| **1.2** | Asset-Optimierung & Design System Foundation | 1-2 Tage | 📋 Bereit |
| **2** | Core Layout & Navigation | 2-3 Tage | 📋 Bereit |
| **3** | Hero-Section & Startseite (vollständig) | 3-4 Tage | 📋 Bereit |
| **4** | Sanity CMS Integration | 3-4 Tage | 📋 Bereit |
| **5** | Bier-Portfolio & Produktseiten | 4-5 Tage | 📋 Bereit |

---

## 🌍 Deployment & Hosting

### Development Environment
- **Plattform**: Vercel (Continuous Deployment)
- **URL**: Automatische Preview-URLs bei jedem Git-Push
- **Features**: Lighthouse-Checks, Performance-Monitoring

### Production Environment (Geplant)
- **Plattform**: Deploy Now (IONOS) - Deutsche Server für DSGVO-Compliance
- **Domain**: Custom Domain der Brauerei
- **SSL**: Automatische HTTPS-Zertifikate
- **Monitoring**: Performance- und Uptime-Monitoring

---

## 📋 Qualitätssicherung & Standards

### Code-Qualität
- **TypeScript**: Strikte Typisierung für Fehlerreduktion
- **ESLint**: Automatische Code-Stil-Durchsetzung
- **Prettier**: Konsistente Code-Formatierung (geplant)

### Accessibility (WCAG AA)
- **Keyboard-Navigation**: Vollständige Tastatur-Unterstützung
- **Screen Reader**: ARIA-Labels und semantisches HTML
- **Color Contrast**: Minimum AA-Ratio, Ziel AAA
- **Reduced Motion**: Respektierung von Nutzer-Präferenzen

### Performance-Standards
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size**: Optimierung durch Tree-shaking
- **Image Optimization**: Automatische Format-Konvertierung
- **Caching**: Aggressive Caching-Strategien für statische Assets

### Security
- **Content Security Policy**: Strenge CSP-Header
- **HTTPS**: Erzwungene SSL-Verschlüsselung
- **Environment Variables**: Sichere Konfigurationsverwaltung
- **Dependency Updates**: Regelmäßige Sicherheitsupdates

---

## 🔮 Roadmap & Vision

### Kurzfristig (Q1 2025)
- [ ] **Website-Launch**: Vollständige Website mit allen Core-Features
- [ ] **CMS-Training**: Schulung des Brauerei-Teams
- [ ] **SEO-Optimierung**: Lokale Suchmaschinenoptimierung
- [ ] **Performance-Monitoring**: Einrichtung von Analytics

### Mittelfristig (Q2-Q3 2025)
- [ ] **E-Commerce**: Erweiterte Bestellfunktionen
- [ ] **Event-Management**: Veranstaltungskalender
- [ ] **Newsletter**: E-Mail-Marketing-Integration
- [ ] **Social Media**: Automatisierte Social-Media-Feeds

### Langfristig (Q4 2025+)
- [ ] **Mobile App**: PWA oder native App
- [ ] **Inventory Management**: Lagerbestandsverwaltung
- [ ] **Customer Portal**: Kundenkonto mit Bestellhistorie
- [ ] **Expansion**: Multi-Standort-Unterstützung

---

## 📞 Kontakt & Support

### Brauerei Information
- **Name**: Handwerksbrauerei Hennings
- **Braumeister**: Tim Hennings
- **Adresse**: Schloßstraße 1, 19067 Leezen, Mecklenburg-Vorpommern
- **Telefon**: 0174/2357281
- **E-Mail**: info@brauerei-hennings.de
- **USt-IdNr**: DE 283523697

### Entwickler-Kontakt
Für technische Fragen zum Website-Projekt:
- **Repository**: [GitHub - Brauerei-Tim-Henning](https://github.com/Jogen85/Brauerei-Tim-Henning)
- **Issues**: Verwenden Sie GitHub Issues für Bug-Reports und Feature-Requests
- **Dokumentation**: Siehe `CLAUDE.md` für technische Details

---

## 📜 Lizenz & Rechtliches

**Copyright © 2025 Handwerksbrauerei Hennings**

Dieses Projekt wurde entwickelt für die exklusive Nutzung durch die Handwerksbrauerei Hennings. Alle Rechte vorbehalten.

### DSGVO-Compliance
- Alle Datenverarbeitung erfolgt DSGVO-konform
- Server-Standort: Deutschland (IONOS)
- Datenschutzerklärung: Wird bei Website-Launch implementiert
- Cookie-Consent: Minimale Cookie-Nutzung geplant

### Credits
- **Framework**: Next.js Team
- **Styling**: Tailwind CSS Team  
- **Hosting Development**: Vercel
- **Hosting Production**: IONOS Deploy Now
- **Logo & Assets**: Handwerksbrauerei Hennings

---

## 🙏 Danksagungen

Ein besonderer Dank geht an:

- **Tim Hennings** für das Vertrauen in die Umsetzung seiner Vision
- **Die Craft-Beer-Community** für Inspiration und Authentizität
- **Open Source Community** für die fantastischen Tools und Frameworks
- **Next.js Team** für die kontinuierlichen Innovationen
- **Tailwind CSS Team** für das moderne Styling-Framework

---

*Letzte Aktualisierung: 29. August 2025*

**🍻 Prost! Auf ein erfolgreiches Projekt!**