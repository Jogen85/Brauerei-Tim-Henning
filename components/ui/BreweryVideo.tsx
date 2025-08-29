'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import BreweryImage from './BreweryImage'

interface BreweryVideoProps {
  src: string
  posterSrc: string
  alt: string
  className?: string
  containerClassName?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  playsInline?: boolean
  priority?: boolean
  aspectRatio?: 'brewery-hero' | 'video' | 'square'
  onLoad?: () => void
  onError?: () => void
}

export default function BreweryVideo({
  src,
  posterSrc,
  alt,
  className,
  containerClassName,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  playsInline = true,
  priority = false,
  aspectRatio = 'brewery-hero',
  onLoad,
  onError,
}: BreweryVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const aspectRatioClasses = {
    'brewery-hero': 'aspect-brewery-hero',
    'video': 'aspect-video',
    'square': 'aspect-square',
  }

  // Intersection Observer for performance optimization (skip for priority videos)
  useEffect(() => {
    if (!videoRef.current) return

    // For priority videos (like hero), load immediately
    if (priority) {
      setShouldPlayVideo(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldPlayVideo) {
            setShouldPlayVideo(true)
          }
        })
      },
      {
        rootMargin: '100px', // Start loading when video is 100px away from viewport
        threshold: 0.1,
      }
    )

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [shouldPlayVideo, priority])

  // Handle video events
  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    onLoad?.()
  }

  const handleVideoError = () => {
    setHasError(true)
    setIsVideoLoaded(false)
    onError?.()
  }

  // Respect user's motion preferences
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const shouldAutoPlay = autoPlay && !prefersReducedMotion

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-brewery-dark-brown',
        aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Poster image (fallback and initial display) */}
      {(!isVideoLoaded || hasError) && (
        <BreweryImage
          src={posterSrc}
          alt={alt}
          aspectRatio={aspectRatio}
          priority={priority}
          className="absolute inset-0 z-10"
          containerClassName="absolute inset-0"
          showLoadingShimmer={!hasError}
        />
      )}

      {/* Video element */}
      {shouldPlayVideo && !hasError && (
        <video
          ref={videoRef}
          className={cn(
            'video-hero w-full h-full transition-opacity duration-700',
            isVideoLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          autoPlay={shouldAutoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          controls={controls}
          poster={posterSrc}
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          aria-label={alt}
        >
          <source src={src} type="video/webm" />
          <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
          
          {/* Fallback text for browsers that don't support video */}
          <p className="text-brewery-sand-beige p-4 text-center">
            Ihr Browser unterstützt keine Videowiedergabe.{' '}
            <a
              href={src}
              className="text-brewery-rust-red underline hover:text-brewery-rust-red-400 transition-colors"
            >
              Video direkt herunterladen
            </a>
          </p>
        </video>
      )}

      {/* Video overlay for better text contrast */}
      <div className="video-hero-overlay absolute inset-0 pointer-events-none" />

      {/* Loading indicator */}
      {shouldPlayVideo && !isVideoLoaded && !hasError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20">
          <div className="flex items-center gap-3 text-white">
            <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
            <span className="text-sm font-medium">Video wird geladen...</span>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-brewery-dark-brown/90">
          <div className="text-center text-brewery-sand-beige p-6">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-brewery-rust-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Video nicht verfügbar</h3>
            <p className="text-sm opacity-90">
              Das Video konnte nicht geladen werden. Versuchen Sie es später erneut.
            </p>
          </div>
        </div>
      )}

      {/* Accessibility: Pause button for users who prefer reduced motion */}
      {prefersReducedMotion && shouldAutoPlay && isVideoLoaded && (
        <button
          className="absolute top-4 right-4 z-30 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
          onClick={() => {
            if (videoRef.current) {
              if (videoRef.current.paused) {
                videoRef.current.play()
              } else {
                videoRef.current.pause()
              }
            }
          }}
          aria-label="Video pausieren/abspielen"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  )
}