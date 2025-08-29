// Base types for the brewery website
export interface BreweryBeer {
  id: string
  name: string
  style: string
  description: string
  shortDescription?: string
  alcoholContent: number // ABV percentage
  ibu?: number // International Bitterness Units
  originalGravity?: number // OG in °P (Plato)
  color?: string // SRM or EBC color description
  image?: string
  imageAlt?: string
  
  // Tasting notes
  appearance?: string
  aroma?: string
  flavor?: string
  finish?: string
  
  // Additional info
  hops?: string[]
  malts?: string[]
  yeast?: string
  servingTemperature?: number // in °C
  foodPairing?: string[]
  awards?: string[]
  
  // Availability
  isAvailable: boolean
  isSeasonal: boolean
  seasonalAvailability?: string // e.g., "Mai - August"
  
  // Metadata
  createdAt: Date
  updatedAt: Date
}

export interface BrewerySalesEvent {
  id: string
  title: string
  date: Date
  startTime: string // e.g., "14:00"
  endTime: string // e.g., "18:00"
  location: string
  locationAddress?: string
  description?: string
  
  // Available beers for this event
  availableBeers: string[] // Array of beer IDs
  
  // Event status
  isActive: boolean
  isCancelled: boolean
  soldOut: boolean
  
  // Additional info
  hasOnTapTasting: boolean
  acceptsPreOrders: boolean
  specialOffers?: string
  notes?: string
  
  // Metadata
  createdAt: Date
  updatedAt: Date
}

export interface BreweryContact {
  name: string
  email: string
  phone?: string
  message: string
  
  // Pre-order information
  isPreOrder: boolean
  salesEventId?: string
  orderedBeers?: BreweryBeerOrder[]
  
  // Preferences
  newsletter: boolean
  acceptsTerms: boolean
  
  // Metadata
  submittedAt: Date
  ipAddress?: string
  userAgent?: string
}

export interface BreweryBeerOrder {
  beerId: string
  beerName: string
  quantity: number
  unit: 'bottles' | 'liters' | 'cases'
  notes?: string
}

export interface BreweryContent {
  id: string
  type: 'page' | 'section' | 'announcement'
  slug: string
  title: string
  content: string
  excerpt?: string
  image?: string
  imageAlt?: string
  
  // SEO
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  
  // Status
  isPublished: boolean
  publishedAt?: Date
  
  // Content structure
  sections?: BreweryContentSection[]
  
  // Metadata
  createdAt: Date
  updatedAt: Date
  author: string
}

export interface BreweryContentSection {
  id: string
  type: 'text' | 'image' | 'gallery' | 'video' | 'quote' | 'list'
  title?: string
  content: string
  image?: string
  imageAlt?: string
  order: number
  
  // Section-specific props
  items?: string[] // for lists
  author?: string // for quotes
  videoUrl?: string // for videos
  images?: string[] // for galleries
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  isPreOrder: boolean
  salesEventId: string
  orderedBeers: BreweryBeerOrder[]
  newsletter: boolean
  acceptsTerms: boolean
}

export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  salesEventId?: string
  orderedBeers?: string
  acceptsTerms?: string
  general?: string
}

// API Response types
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Component prop types
export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  aspectRatio?: 'square' | 'video' | 'brewery-card' | 'brewery-hero' | 'brewery-logo' | 'brewery-product'
}

export interface VideoProps {
  src: string
  posterSrc: string
  alt: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  aspectRatio?: 'brewery-hero' | 'video' | 'square'
}

// Navigation types
export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
  isActive?: boolean
  isExternal?: boolean
  children?: NavigationItem[]
}

// Theme types
export type ThemeColor = 
  | 'brewery-dark-brown'
  | 'brewery-sand-beige' 
  | 'brewery-rust-red'
  | 'brewery-off-white'
  | 'brewery-brown-gray'
  | 'brewery-hop-green'
  | 'brewery-malt-yellow'

export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl'
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'

// Utility types
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = 
  Pick<T, Exclude<keyof T, Keys>> & 
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys]

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// Event types for analytics and tracking
export interface BreweryAnalyticsEvent {
  type: 'page_view' | 'button_click' | 'form_submit' | 'video_play' | 'image_load'
  page?: string
  element?: string
  value?: string | number
  metadata?: Record<string, any>
  timestamp: Date
  sessionId: string
  userId?: string
}

// Error types
export interface BreweryError {
  code: string
  message: string
  details?: any
  timestamp: Date
  userId?: string
  sessionId?: string
  url?: string
  userAgent?: string
}

// Configuration types
export interface BreweryConfig {
  site: {
    name: string
    description: string
    url: string
    logo: string
    favicon: string
    language: string
    locale: string
  }
  contact: {
    email: string
    phone: string
    address: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  social: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
  features: {
    newsletter: boolean
    preOrders: boolean
    eventCalendar: boolean
    blog: boolean
    gallery: boolean
  }
  seo: {
    defaultTitle: string
    defaultDescription: string
    keywords: string[]
    author: string
    twitterCard: string
    ogImage: string
  }
}