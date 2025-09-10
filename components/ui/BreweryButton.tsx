'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface BreweryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
  loading?: boolean
  loadingText?: string
  className?: string
}

const BreweryButton = forwardRef<HTMLButtonElement, BreweryButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      loading = false,
      loadingText = 'Lädt...',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    const baseClasses = [
      // Base styling
      'inline-flex items-center justify-center gap-2',
      'font-semibold text-center',
      'border border-transparent',
      'transition-all duration-300 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brewery-rust-red focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'relative overflow-hidden',
      // Prevent text selection
      'select-none',
      // Ensure proper line height
      'leading-tight',
    ].join(' ')

    const variantClasses = {
      primary: [
        'bg-brewery-rust-red text-white',
        'border-brewery-rust-red',
        'hover:bg-brewery-rust-red-600 hover:border-brewery-rust-red-600',
        'hover:shadow-brewery-button hover:transform hover:-translate-y-1',
        'active:transform active:translate-y-0 active:shadow-none',
        'shadow-md transition-all duration-300 ease-in-out',
      ].join(' '),
      
      secondary: [
        'bg-brewery-dark-brown text-brewery-sand-beige',
        'border-brewery-dark-brown',
        'hover:bg-brewery-dark-brown-600 hover:border-brewery-dark-brown-600',
        'hover:shadow-lg hover:transform hover:-translate-y-0.5',
        'active:transform active:translate-y-0',
        'shadow-sm transition-all duration-300 ease-in-out',
      ].join(' '),
      
      outline: [
        'bg-transparent text-brewery-rust-red',
        'border-brewery-rust-red border-2',
        'hover:bg-brewery-rust-red hover:text-white',
        'hover:shadow-md hover:transform hover:-translate-y-0.5',
        'active:transform active:translate-y-0',
        'transition-all duration-300 ease-in-out',
      ].join(' '),
      
      ghost: [
        'bg-transparent text-brewery-rust-red',
        'border-transparent',
        'hover:bg-brewery-rust-red-50 hover:text-brewery-rust-red-700',
        'hover:shadow-sm',
        'active:bg-brewery-rust-red-100',
        'transition-all duration-300 ease-in-out',
      ].join(' '),
      
      link: [
        'bg-transparent text-brewery-rust-red',
        'border-transparent underline-offset-4',
        'hover:underline hover:text-brewery-rust-red-600',
        'active:text-brewery-rust-red-700',
        'shadow-none transition-all duration-300 ease-in-out',
      ].join(' '),
    }

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm rounded-md',
      md: 'h-10 px-4 py-2 text-base rounded-lg',
      lg: 'h-12 px-6 py-3 text-lg rounded-lg',
      xl: 'h-14 px-8 py-4 text-xl rounded-xl',
    }

    const isDisabled = disabled || loading

    // When using asChild, we need to wrap all content in a single container
    // to satisfy React.Children.only requirement
    const buttonContent = (
      <>
        {/* Shimmer effect for primary button */}
        {variant === 'primary' && (
          <span className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none">
            <span className="absolute inset-0 animate-shimmer" />
          </span>
        )}

        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Button content */}
        {loading ? loadingText : children}
      </>
    )

    return (
      <Comp
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {buttonContent}
      </Comp>
    )
  }
)

BreweryButton.displayName = 'BreweryButton'

export default BreweryButton