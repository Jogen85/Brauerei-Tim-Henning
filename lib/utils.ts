import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string for German locale
 */
export function formatGermanDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Formats a time string for German locale
 */
export function formatGermanTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Formats a complete datetime for German locale
 */
export function formatGermanDateTime(date: Date | string): string {
  const formattedDate = formatGermanDate(date)
  const formattedTime = formatGermanTime(date)
  return `${formattedDate} um ${formattedTime} Uhr`
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Truncates text to a specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Slugify a string for URLs (German-friendly)
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Replace German umlauts
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    // Replace spaces and special characters with hyphens
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Validates German phone numbers
 */
export function isValidGermanPhoneNumber(phone: string): boolean {
  // Remove all non-digits and plus signs
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // German phone number patterns
  const patterns = [
    /^\+49[1-9]\d{8,11}$/, // International format
    /^0[1-9]\d{8,11}$/,    // National format
  ]
  
  return patterns.some(pattern => pattern.test(cleaned))
}

/**
 * Validates email addresses
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Generates a random ID string
 */
export function generateId(length: number = 8): string {
  return Math.random().toString(36).substring(2, length + 2)
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get contrast ratio between two colors (for accessibility)
 */
export function getContrastRatio(color1: string, color2: string): number {
  // Simple contrast ratio calculation
  // In a real implementation, you'd convert hex to RGB and calculate properly
  // This is a simplified version for demonstration
  const getLuminance = (color: string) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16) / 255
    const g = parseInt(hex.substr(2, 2), 16) / 255
    const b = parseInt(hex.substr(4, 2), 16) / 255
    
    const rsRGB = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
    const gsRGB = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
    const bsRGB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
    
    return 0.2126 * rsRGB + 0.7152 * gsRGB + 0.0722 * bsRGB
  }

  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function meetsWCAGContrast(
  color1: string, 
  color2: string, 
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  const ratio = getContrastRatio(color1, color2)
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7
}

/**
 * Format file size in human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Create a range of numbers
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

/**
 * Group array items by a key
 */
export function groupBy<T, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const group = String(item[key])
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {} as Record<string, T[]>)
}

/**
 * Remove duplicates from array
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Safely access nested object properties
 */
export function get<T>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue: T
): T {
  const keys = path.split('.')
  let result: unknown = obj
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key]
    } else {
      return defaultValue
    }
  }
  
  return result as T
}