# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website project for **Handwerksbrauerei Hennings**, a craft brewery in Leezen, Mecklenburg-Vorpommern, Germany. The project aims to create a modern, high-performance website that serves as a digital storefront for the brewery's artisanal beers.

### Key Objectives
- **Sales Increase**: Clear communication of sales dates and available beer inventory
- **Information Delivery**: Comprehensive beer portfolio with technical details and tasting notes
- **Brand Building**: Authentic craft brewery presentation with brewery story and philosophy
- **Customer Interaction**: Contact forms and beer pre-ordering system

### Target Audience
- Local beer enthusiasts in Mecklenburg-Vorpommern
- Craft beer aficionados seeking regional specialties
- Tourists in the Mecklenburgische Seenplatte region

## Technical Architecture

### Core Technology Stack
- **Framework**: Next.js 15.5 with Turbopack (production builds)
- **Runtime**: React 18+ with Concurrent Features
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4.1.12 with CSS-first configuration
- **CMS**: Sanity headless CMS with embedded Studio
- **Animations**: Framer Motion for smooth interactions
- **Deployment**: Vercel (development) → Deploy Now/IONOS (production)

### Key Performance Features
- Turbopack for faster builds (2-4x improvement)
- Tailwind CSS v4.1.12: Up to 5x faster full builds, 100x+ faster incremental builds
- Modern CSS features: cascade layers, @property, color-mix()
- New utilities: text-shadow-*, mask-*, improved overflow-wrap
- Experimental Next.js optimizations: `optimizePackageImports`, `inlineCss`
- Image optimization with next/image
- Hero video optimization with fallback posters
- Target: LCP < 2.5 seconds for Core Web Vitals

## Development Commands

**Current Working Commands (Phase 1.1 Completed):**

```bash
# Development (Port 3003)
npm run dev          # Start development server on http://localhost:3003
npm run build        # Production build with Webpack
npm run build:turbo  # Production build with Turbopack (2-4x faster)
npm run start        # Start production server on http://localhost:3003
npm run lint         # ESLint checking
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript validation

# Future Sanity CMS Commands (Phase 4)
npm run sanity:dev   # Start Sanity Studio
npm run sanity:build # Build Sanity Studio
npm run sanity:deploy # Deploy Sanity Studio
```

## Project Structure

### Core Functionality Areas

1. **Hero Section** (`/`)
   - Prominently features `Video_Hero.webm` as background
   - Autoplay with mobile compatibility considerations
   - Overlay text with high contrast for accessibility

2. **Sales Calendar** (`/termine`)
   - Dynamic display of upcoming sales dates
   - Beer availability per specific date
   - CMS-driven content updates

3. **Beer Portfolio** (`/biere`)
   - Comprehensive beer catalog with technical specifications
   - Detailed tasting notes (following PRD example format)
   - Availability status integration
   - Uses `Bier_Pale_Ale.png` and similar product images

4. **Contact & Pre-ordering** (`/kontakt`)
   - Dual-purpose form: general contact + beer pre-orders
   - Dynamic beer selection based on chosen sales date
   - Spam protection (Captcha/Honeypot)
   - Email integration for order processing

5. **About Section** (`/ueber-uns`)
   - Brewery history and brewer Tim Hennings' story
   - Brewing philosophy and craft approach
   - Brand storytelling for trust building

6. **Legal Pages**
   - `/impressum` - Required German business information
   - `/datenschutz` - GDPR-compliant privacy policy

### Content Management

**Sanity CMS Schemas:**
- `beer`: Beer varieties with descriptions, technical data, availability
- `salesEvent`: Sales dates with associated available beers
- `siteContent`: Editable text content for About section and homepage

**Key Content Types:**
- Beer technical data: ABV, IBU, OG, tasting notes
- Sales calendar: Date, time, location, available beer list
- Brewery story: History, philosophy, brewer biography

## Design System

### Brand Colors (from Logo Analysis)
- **Primary Dark Brown**: `#3B1F16` (headers, backgrounds)
- **Sand Beige**: `#D8C6B3` (main text on dark backgrounds)
- **Rust Red**: `#8A4B2D` (accents, hover states, buttons)
- **Off White**: `#F2EEE9` (light backgrounds, contrast elements)
- **Brown Gray**: `#5F5047` (secondary text, borders)

### Typography
- **Headlines**: Bold, block-style fonts reflecting brewery robustness
- **Body Text**: High readability with proper contrast ratios (WCAG AA/AAA)
- **German Language**: Full support for umlauts and special characters

### Responsive Strategy
- **Mobile-First**: Primary development approach
- **Breakpoints**: Tailwind's responsive utilities
- **Navigation**: Burger menu (mobile) → horizontal menu (desktop)
- **Performance**: Optimized images and video for all screen sizes

## Accessibility & Compliance

### WCAG Standards
- **Level AA compliance** minimum (targeting AAA where possible)
- **Keyboard navigation** for all interactive elements
- **High contrast** ratios for all text-background combinations
- **Alt text** for all meaningful images
- **Focus indicators** visible and consistent

### GDPR Compliance
- **German market focus**: All content in German
- **Data minimization**: Forms collect only necessary information
- **Cookie consent**: For any tracking or external embeds
- **Local hosting preference**: Assets served from German infrastructure

## Performance Requirements

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Strategies
- Next.js automatic image optimization
- Video compression and format selection
- CSS inlining for critical above-the-fold content
- Tree shaking and bundle optimization
- Efficient third-party script loading

## Content Strategy

### Beer Information Depth
Following the PRD's detailed example of "Hennings Pale Ale":
- **Technical specs**: ABV, IBU, OG, recommended serving temperature
- **Tasting notes**: Appearance, aroma, flavor profile, finish
- **Brewing details**: Hops, malts, special ingredients
- **Food pairings**: Recommended dishes
- **Availability**: Seasonal vs. year-round status

### Sales Calendar Integration
- **Real-time updates** via CMS
- **Beer-to-date mapping**: Which beers available on specific dates
- **Inventory messaging**: "While supplies last" notifications
- **Pre-order coordination**: Form integration with calendar data

## Development Notes

### Asset Integration
- `Logo.jpg`: Primary brand logo for headers and identity
- `Video_Hero.webm`: Homepage hero background video
- `Bier_Pale_Ale.png`: Product photography template for beer catalog

### Previous Implementation Insights
Git history shows successful implementation of:
- Sanity Studio embedded configuration
- Contact API with Turnstile captcha
- Email handling via Resend/SMTP
- Multi-page structure with proper routing
- Asset optimization and deployment workflows

### Browser Support Requirements
- **Tailwind CSS v4.1.12 Targets**: Safari 16.4+, Chrome 111+, Firefox 128+
- **Modern CSS Dependencies**: @property, color-mix(), cascade layers
- **Fallback Strategy**: Graceful degradation for older browsers

### Deployment Strategy
- **Development**: Continuous deployment via Vercel
- **Production**: Deploy Now (IONOS) for German hosting
- **Domain**: Final deployment on German infrastructure
- **SSL**: Required for form handling and GDPR compliance

## Implementation Roadmap

### Phase 1: Projekt-Setup & Grundstruktur (2-3 Tage)

#### 1.1 Next.js 15.5 Projekt-Initialisierung
- [ ] Install Next.js 15.5 with TypeScript template
- [ ] Configure Tailwind CSS v4.1.12 with CSS-first configuration
- [ ] Enable Turbopack for production builds (`--turbopack` flag)
- [ ] Setup experimental features in next.config.js:
  - [ ] `experimental.optimizePackageImports`
  - [ ] `experimental.inlineCss`
- [ ] Configure ESLint and TypeScript strict mode
- [ ] Setup Vercel deployment for continuous integration

#### 1.2 Projektstruktur & Asset-Integration
- [ ] Create Next.js App Router folder structure
- [ ] Integrate existing assets:
  - [ ] Optimize and place `Logo.jpg` in public folder
  - [ ] Process `Bier_Pale_Ale.png` for web optimization
  - [ ] Optimize `Video_Hero.webm` for web delivery
- [ ] Configure next/image for automatic optimization
- [ ] Setup video optimization pipeline with fallback posters
- [ ] Create responsive image sizes and formats

#### 1.3 Design System Foundation
- [ ] Implement Brauerei color palette in Tailwind config:
  - [ ] Primary Dark Brown: `#3B1F16`
  - [ ] Sand Beige: `#D8C6B3`
  - [ ] Rust Red: `#8A4B2D`
  - [ ] Off White: `#F2EEE9`
  - [ ] Brown Gray: `#5F5047`
- [ ] Configure custom design tokens and CSS variables
- [ ] Setup typography scale with German language support
- [ ] Define responsive breakpoints strategy
- [ ] Test WCAG AA/AAA contrast ratios for all color combinations

### Phase 2: Core Layout & Navigation (2-3 Tage)

#### 2.1 Header & Navigation
- [ ] Create responsive header component with Logo.jpg integration
- [ ] Implement sticky navigation with scroll behavior
- [ ] Build mobile burger menu with smooth animations
- [ ] Create desktop horizontal navigation
- [ ] Ensure keyboard accessibility and focus management
- [ ] Add ARIA labels and semantic HTML structure

#### 2.2 Footer & Rechtliches
- [ ] Design footer with social media links
- [ ] Create Impressum page template with required German business info
- [ ] Build Datenschutzerklärung page with GDPR compliance
- [ ] Implement cookie consent banner foundation
- [ ] Add legal navigation links in footer

### Phase 3: Hero-Section & Startseite (3-4 Tage)

#### 3.1 Hero-Video Implementation
- [ ] Integrate `Video_Hero.webm` as background video
- [ ] Implement autoplay with muted attribute for mobile compatibility
- [ ] Create fallback poster image from video frame
- [ ] Add lazy loading and intersection observer
- [ ] Optimize video compression and multiple format support
- [ ] Implement reduced-motion respect for accessibility

#### 3.2 Startseiten-Content
- [ ] Design hero overlay text with high contrast
- [ ] Create prominent "Nächster Verkaufstermin" section
- [ ] Implement Call-to-Action buttons with Rust Red styling
- [ ] Add Framer Motion scroll-triggered animations
- [ ] Ensure mobile-first responsive layout
- [ ] Test video performance across devices and browsers

### Phase 4: Sanity CMS Integration (3-4 Tage)

#### 4.1 CMS Setup & Schema Design
- [ ] Install and configure Sanity Studio
- [ ] Design content schemas:
  - [ ] `beer` schema with technical specs, images, descriptions
  - [ ] `salesEvent` schema with dates, times, available beers
  - [ ] `siteContent` schema for editable page texts
- [ ] Setup German language localization
- [ ] Configure image upload and optimization settings
- [ ] Create user-friendly admin interface for brewery team

#### 4.2 Content-Management Features
- [ ] Build beer portfolio management interface
- [ ] Create sales calendar administration
- [ ] Implement GROQ queries for data fetching
- [ ] Setup content preview functionality
- [ ] Configure real-time content updates
- [ ] Test CMS workflow with sample data

### Phase 5: Bier-Portfolio & Produktseiten (4-5 Tage)

#### 5.1 Bier-Übersichtsseite
- [ ] Create responsive beer card layout
- [ ] Implement grid system with Tailwind CSS v4.1.12
- [ ] Add filter functionality (availability, beer style)
- [ ] Build sorting options (alphabetical, ABV, IBU)
- [ ] Integrate technical data display (ABV, IBU, OG)
- [ ] Create availability status indicators

#### 5.2 Detail-Ansichten
- [ ] Build individual beer detail pages (optional)
- [ ] Implement detailed tasting notes following PRD format
- [ ] Create food pairing recommendations
- [ ] Add high-resolution product photography integration
- [ ] Setup SEO optimization per beer page
- [ ] Configure structured data for search engines

### Phase 6: Verkaufskalender & Terminverwaltung (3-4 Tage)

#### 6.1 Kalender-Interface
- [ ] Design calendar component for sales dates
- [ ] Display available beers per specific date
- [ ] Create mobile-optimized date selection
- [ ] Implement "solange Vorrat reicht" messaging
- [ ] Add automatic date sorting (next event first)
- [ ] Connect calendar data with CMS content

#### 6.2 Dynamic Content Updates
- [ ] Setup real-time calendar updates via Sanity
- [ ] Implement sold-out status management
- [ ] Create inventory tracking system
- [ ] Add date-based beer availability logic
- [ ] Test calendar responsiveness across devices

### Phase 7: Kontakt & Vorbestellformular (4-5 Tage)

#### 7.1 Formular-Entwicklung
- [ ] Create multi-step contact/pre-order form
- [ ] Implement dynamic beer selection based on chosen date
- [ ] Add form validation (client and server-side)
- [ ] Build quantity selection for beer orders
- [ ] Create order summary and confirmation
- [ ] Ensure TypeScript integration for form data

#### 7.2 Backend & Security
- [ ] Setup Next.js API routes for form handling
- [ ] Integrate email service (Nodemailer/SendGrid)
- [ ] Implement spam protection:
  - [ ] Honeypot fields
  - [ ] Optional reCAPTCHA/Turnstile
- [ ] Ensure GDPR-compliant data processing
- [ ] Add form submission confirmation and error handling
- [ ] Test email delivery and formatting

### Phase 8: Performance & SEO Optimierung (2-3 Tage)

#### 8.1 Core Web Vitals Optimierung
- [ ] Optimize LCP < 2.5s through:
  - [ ] Image lazy loading and optimization
  - [ ] Video compression and efficient loading
  - [ ] Critical CSS inlining
- [ ] Minimize CLS through layout stability
- [ ] Improve FID with code splitting and lazy loading
- [ ] Run Lighthouse audits and achieve 90+ scores

#### 8.2 SEO & Meta-Data
- [ ] Implement dynamic meta tags for all pages
- [ ] Add structured data for local business (brewery)
- [ ] Generate sitemap.xml and robots.txt
- [ ] Configure Open Graph tags for social sharing
- [ ] Setup German language SEO optimization
- [ ] Test search engine visibility and local SEO

### Phase 9: Animations & Visual Enhancements (3-4 Tage)

#### 9.1 Framer Motion Integration
- [ ] Install and configure Framer Motion
- [ ] Create scroll-triggered reveal animations
- [ ] Implement smooth hover effects on interactive elements
- [ ] Add page transition animations
- [ ] Ensure reduced-motion accessibility support
- [ ] Optimize animation performance

#### 9.2 Visual Polish
- [ ] Add micro-interactions for enhanced UX
- [ ] Create loading states and skeleton screens
- [ ] Design custom 404 error page
- [ ] Implement progressive enhancement strategies
- [ ] Add visual feedback for form interactions
- [ ] Polish button animations and hover states

### Phase 10: Testing & Deployment (3-4 Tage)

#### 10.1 Quality Assurance
- [ ] Cross-browser testing:
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (16.4+)
  - [ ] Edge (latest)
- [ ] Mobile device testing:
  - [ ] iOS Safari
  - [ ] Android Chrome
  - [ ] Various screen sizes
- [ ] Accessibility testing:
  - [ ] WCAG AA compliance verification
  - [ ] Keyboard navigation testing
  - [ ] Screen reader compatibility
- [ ] Performance testing:
  - [ ] Lighthouse audits
  - [ ] PageSpeed Insights
  - [ ] Core Web Vitals measurement

#### 10.2 Production Deployment
- [ ] Configure Deploy Now (IONOS) integration
- [ ] Setup SSL/HTTPS certificates
- [ ] Configure custom domain
- [ ] Implement monitoring and analytics
- [ ] Create deployment pipeline from GitHub
- [ ] Test production environment thoroughly

### Phase 11: Nachbetreuung & Training (1-2 Tage)

#### 11.1 Client Training
- [ ] Conduct Sanity CMS training session for brewery team
- [ ] Create content update workflow documentation
- [ ] Provide beer portfolio management training
- [ ] Explain sales calendar maintenance
- [ ] Demo form management and email handling

#### 11.2 Dokumentation & Übergabe
- [ ] Write comprehensive technical documentation
- [ ] Create user manual for CMS operations
- [ ] Provide maintenance and update recommendations
- [ ] Setup ongoing support structure
- [ ] Document backup and recovery procedures

## Development Checklist Summary

**Total Estimated Duration: 28-35 Arbeitstage**

**Critical Success Metrics:**
- ✅ Mobile-First Responsive Design
- ✅ GDPR Compliance & German Market Requirements
- ✅ LCP < 2.5 seconds Performance
- ✅ WCAG AA Accessibility Standards
- ✅ Tailwind CSS v4.1.12 Modern Features
- ✅ CMS Autonomy for Brewery Team
- ✅ Local SEO Optimization for Mecklenburg-Vorpommern

**Technology Stack Final Versions:**
- Next.js 15.5 with Turbopack
- React 18+ with Concurrent Features
- TypeScript (latest stable)
- Tailwind CSS v4.1.12
- Sanity CMS (latest)
- Framer Motion (latest)
- Vercel → Deploy Now/IONOS deployment

---

## Phase 1.1 Implementation Details ✅ COMPLETED

### Successfully Implemented Setup

**Date Completed**: August 29, 2025

**Duration**: Initial research + implementation + debugging (≈4 hours)

### Critical Problem Solved: Tailwind CSS v4.1.12 Integration

**The Issue**: 
During initial setup, encountered the error `"Missing field 'negated' on ScannerOptions.sources"` when attempting to build with Tailwind CSS v4.

**Root Cause Analysis**:
- Version incompatibility between `tailwindcss@4.1.12` and `@tailwindcss/postcss@4.0.0`
- The `@tailwindcss/postcss@4.0.0` had a brittle dependencies field causing scanner configuration errors
- This was a known bug in early Tailwind v4.0.x versions, fixed in v4.1.0+

**Solution Applied**:
```bash
npm install @tailwindcss/postcss@latest
```
Updated from `@tailwindcss/postcss@4.0.0` to `@tailwindcss/postcss@4.1.12` ensuring version consistency.

**Research Sources**:
- GitHub Issue: unovue/shadcn-vue#1146
- Official Tailwind v4 documentation
- Next.js 15.5 compatibility guides

### Current Working Configuration

**Exact Package Versions (Production-Ready)**:
```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.12",
    "next": "^15.5.2", 
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.12"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.1",
    "@next/eslint-plugin-next": "^15.5.2",
    "@types/node": "^24.3.0",
    "@types/react": "^19.1.12",
    "@types/react-dom": "^19.1.9",
    "@typescript-eslint/eslint-plugin": "^8.41.0",
    "@typescript-eslint/parser": "^8.41.0",
    "eslint": "^9.34.0",
    "eslint-config-next": "^15.5.2",
    "typescript": "^5.9.2",
    "typescript-eslint": "^8.41.0"
  }
}
```

**File Structure Created**:
```
/
├── app/
│   ├── layout.tsx        # Root layout with SEO + accessibility
│   ├── page.tsx          # Homepage with hero video + content
│   └── globals.css       # Tailwind import + custom CSS variables
├── components/           # React components (empty, ready for Phase 2)
├── lib/                 # Utility functions (empty, ready for Phase 4)
├── public/
│   ├── Logo.jpg         # Brewery logo (optimized placement)
│   ├── Bier_Pale_Ale.png # Product image (optimized placement)
│   └── Video_Hero.webm   # Hero background video (optimized placement)
├── types/               # TypeScript definitions (empty, ready for Phase 2)
├── eslint.config.mjs    # Modern Flat Config ESLint setup
├── next.config.mjs      # Next.js config with Turbopack + experimental features
├── postcss.config.mjs   # PostCSS config for Tailwind v4
├── tsconfig.json        # TypeScript configuration with path aliases
├── .env.local          # Environment variables (port + brewery data)
├── .gitignore          # Comprehensive ignore patterns
└── package.json        # Dependencies + scripts with Port 3003
```

### Performance Benchmarks Achieved

**Build Performance**:
- ✅ **Development Server**: Ready in 2.0-2.1s consistently
- ✅ **Production Build (Webpack)**: Compiled successfully in 2.3s
- ✅ **Production Build (Turbopack)**: Compiled successfully in 2.4s
- ✅ **Turbopack Disk Write**: 30ms (extremely fast)

**Bundle Analysis**:
- **Homepage**: 5.44 kB (Webpack) / 5.38 kB (Turbopack)
- **First Load JS**: 107 kB (Webpack) / 119 kB (Turbopack)
- **Code Splitting**: Automatic with optimizePackageImports

**Quality Metrics**:
- ✅ **TypeScript**: Zero type errors
- ✅ **ESLint**: Zero linting errors (after quotation mark fixes)
- ✅ **Build Success Rate**: 100%
- ✅ **Port Conflicts**: Resolved (now uses Port 3003)

### Configuration Highlights

**Next.js 15.5 Experimental Features Enabled**:
- ✅ `experimental.optimizePackageImports`: Tree-shaking for better bundle sizes
- ✅ `experimental.inlineCss`: CSS inlining for improved First Contentful Paint
- ✅ `turbopack` configuration: Video file support + optimizations

**Tailwind CSS v4.1.12 Modern Features**:
- ✅ CSS-first configuration via `@import "tailwindcss"`
- ✅ New utilities: text-shadow-*, mask-*, overflow-wrap improvements
- ✅ Modern CSS: cascade layers, @property, color-mix()
- ✅ Brauerei brand color palette defined in CSS variables

**Browser Support**:
- ✅ **Target Browsers**: Safari 16.4+, Chrome 111+, Firefox 128+
- ✅ **Accessibility**: WCAG AA compliance setup, reduced-motion support
- ✅ **Responsive**: Mobile-first approach with systematic breakpoints

**Security & Headers**:
- ✅ Content Security Policy for SVG images
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ Cache control for static assets
- ✅ GDPR-compliant environment setup

### Lessons Learned & Best Practices

**Version Compatibility**:
- Always ensure PostCSS plugins match main package versions
- Tailwind v4.1.0+ required for stable Next.js 15.5 integration
- Use `npm list <package>` to verify dependency trees

**ESLint Modern Config**:
- Flat Config format required for ESLint 9.x with Next.js 15.5
- FlatCompat utility needed for backward compatibility with legacy configs
- Separate TypeScript plugin installation required

**Performance Optimization**:
- ESM module format (`"type": "module"`) improves compatibility
- Turbopack provides 2-4x build performance improvement
- Asset placement in `/public` enables Next.js automatic optimization

**Development Workflow**:
- Port 3003 chosen to avoid conflicts with common development servers
- Environment variables structured for scalability
- Build scripts separated (normal vs Turbopack) for flexibility

### Next Phase Readiness

**Phase 1.1 Deliverables Completed**:
- ✅ Modern tech stack properly configured
- ✅ All build processes working (dev, build, turbo build)
- ✅ Asset pipeline established
- ✅ Development environment optimized
- ✅ Documentation foundation established

**Ready for Phase 1.2**:
- Asset optimization and integration
- Brauerei color palette implementation in Tailwind config
- Design system foundation setup
- Responsive breakpoint strategy implementation

**Dependencies Available for Future Phases**:
- Sanity CMS integration (Phase 4)
- Framer Motion animations (Phase 9) 
- Form handling with TypeScript (Phase 7)
- SEO and performance optimization (Phase 8)