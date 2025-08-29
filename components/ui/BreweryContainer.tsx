'use client'

import { forwardRef, HTMLAttributes, ElementType } from 'react'
import { cn } from '@/lib/utils'

export interface BreweryContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'screen'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  centerContent?: boolean
  className?: string
  as?: ElementType
}

const BreweryContainer = forwardRef<HTMLDivElement, BreweryContainerProps>(
  (
    {
      className,
      size = 'lg',
      padding = 'md',
      centerContent = false,
      as: Component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'w-full mx-auto',
      centerContent && 'flex flex-col items-center justify-center',
    ].filter(Boolean).join(' ')

    const sizeClasses = {
      sm: 'max-w-2xl',        // 672px
      md: 'max-w-4xl',        // 896px  
      lg: 'max-w-6xl',        // 1152px
      xl: 'max-w-7xl',        // 1280px
      full: 'max-w-full',     // 100%
      screen: 'max-w-screen-2xl', // 1536px
    }

    const paddingClasses = {
      none: '',
      sm: 'px-4 py-2 sm:px-6 sm:py-3',
      md: 'px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8',
      lg: 'px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12',
      xl: 'px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16',
    }

    return (
      <Component
        className={cn(
          baseClasses,
          sizeClasses[size],
          paddingClasses[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

BreweryContainer.displayName = 'BreweryContainer'

// Specialized containers for common brewery website patterns
export const BreweryHeroContainer = forwardRef<HTMLDivElement, Omit<BreweryContainerProps, 'size' | 'padding'>>(
  ({ className, ...props }, ref) => (
    <BreweryContainer
      ref={ref}
      size="full"
      padding="none"
      className={cn('min-h-screen flex items-center justify-center', className)}
      {...props}
    />
  )
)

BreweryHeroContainer.displayName = 'BreweryHeroContainer'

export const BrewerySectionContainer = forwardRef<HTMLDivElement, Omit<BreweryContainerProps, 'size'>>(
  ({ className, padding = 'lg', ...props }, ref) => (
    <BreweryContainer
      ref={ref}
      size="xl"
      padding={padding}
      className={cn('py-16 sm:py-20 lg:py-24', className)}
      {...props}
    />
  )
)

BrewerySectionContainer.displayName = 'BrewerySectionContainer'

export const BreweryCardContainer = forwardRef<HTMLDivElement, Omit<BreweryContainerProps, 'padding'>>(
  ({ className, size = 'md', ...props }, ref) => (
    <BreweryContainer
      ref={ref}
      size={size}
      padding="md"
      className={cn('card-brewery', className)}
      {...props}
    />
  )
)

BreweryCardContainer.displayName = 'BreweryCardContainer'

export const BreweryGridContainer = forwardRef<HTMLDivElement, BreweryContainerProps & {
  columns?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}>(
  ({ className, columns = 3, gap = 'md', children, ...props }, ref) => {
    const columnClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
      12: 'grid-cols-12',
    }

    const gapClasses = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    }

    return (
      <BreweryContainer
        ref={ref}
        className={cn('grid', columnClasses[columns], gapClasses[gap], className)}
        {...props}
      >
        {children}
      </BreweryContainer>
    )
  }
)

BreweryGridContainer.displayName = 'BreweryGridContainer'

export default BreweryContainer