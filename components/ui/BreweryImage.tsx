'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface BreweryImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  aspectRatio?: 'brewery-card' | 'brewery-hero' | 'brewery-logo' | 'brewery-product' | 'square' | 'video'
  showLoadingShimmer?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
}

export default function BreweryImage({
  src,
  alt,
  aspectRatio = 'square',
  showLoadingShimmer = true,
  className,
  containerClassName,
  priority = false,
  ...props
}: BreweryImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClasses = {
    'brewery-card': 'aspect-brewery-card',
    'brewery-hero': 'aspect-brewery-hero',
    'brewery-logo': 'aspect-brewery-logo',
    'brewery-product': 'aspect-brewery-product',
    'square': 'aspect-square',
    'video': 'aspect-video',
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-brewery-off-white-100',
        aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Loading shimmer effect */}
      {isLoading && showLoadingShimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-brewery-off-white-200 via-brewery-sand-beige-100 to-brewery-off-white-200 animate-shimmer bg-[length:200%_100%]" />
      )}
      
      {/* Error fallback */}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-brewery-off-white-200">
          <div className="text-center text-brewery-brown-gray-600">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Bild konnte nicht geladen werden</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            'img-optimized transition-all duration-500',
            isLoading ? 'scale-110 opacity-0' : 'scale-100 opacity-100',
            className
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          {...props}
        />
      )}
      
      {/* Overlay for better text contrast on hero images */}
      {aspectRatio === 'brewery-hero' && (
        <div className="absolute inset-0 video-hero-overlay pointer-events-none" />
      )}
    </div>
  )
}