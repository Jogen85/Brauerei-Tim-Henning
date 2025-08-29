import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom Brauerei Color Palette
      colors: {
        'brewery': {
          'dark-brown': {
            50: 'color-mix(in srgb, #3B1F16 10%, white)',
            100: 'color-mix(in srgb, #3B1F16 20%, white)',
            200: 'color-mix(in srgb, #3B1F16 40%, white)',
            300: 'color-mix(in srgb, #3B1F16 60%, white)',
            400: 'color-mix(in srgb, #3B1F16 80%, white)',
            500: '#3B1F16',
            600: 'color-mix(in srgb, #3B1F16 80%, black)',
            700: 'color-mix(in srgb, #3B1F16 60%, black)',
            800: 'color-mix(in srgb, #3B1F16 40%, black)',
            900: 'color-mix(in srgb, #3B1F16 20%, black)',
            DEFAULT: '#3B1F16',
          },
          'sand-beige': {
            50: 'color-mix(in srgb, #D8C6B3 10%, white)',
            100: 'color-mix(in srgb, #D8C6B3 20%, white)',
            200: 'color-mix(in srgb, #D8C6B3 40%, white)',
            300: 'color-mix(in srgb, #D8C6B3 60%, white)',
            400: 'color-mix(in srgb, #D8C6B3 80%, white)',
            500: '#D8C6B3',
            600: 'color-mix(in srgb, #D8C6B3 80%, black)',
            700: 'color-mix(in srgb, #D8C6B3 60%, black)',
            800: 'color-mix(in srgb, #D8C6B3 40%, black)',
            900: 'color-mix(in srgb, #D8C6B3 20%, black)',
            DEFAULT: '#D8C6B3',
          },
          'rust-red': {
            50: 'color-mix(in srgb, #8A4B2D 10%, white)',
            100: 'color-mix(in srgb, #8A4B2D 20%, white)',
            200: 'color-mix(in srgb, #8A4B2D 40%, white)',
            300: 'color-mix(in srgb, #8A4B2D 60%, white)',
            400: 'color-mix(in srgb, #8A4B2D 80%, white)',
            500: '#8A4B2D',
            600: 'color-mix(in srgb, #8A4B2D 80%, black)',
            700: 'color-mix(in srgb, #8A4B2D 60%, black)',
            800: 'color-mix(in srgb, #8A4B2D 40%, black)',
            900: 'color-mix(in srgb, #8A4B2D 20%, black)',
            DEFAULT: '#8A4B2D',
          },
          'off-white': {
            50: '#FDFCFA',
            100: '#FAF8F5',
            200: '#F7F4F0',
            300: '#F2EEE9',
            400: '#EDE8E2',
            500: '#E8E2DB',
            600: '#D4CCC3',
            700: '#C0B6AB',
            800: '#AC9F93',
            900: '#98897B',
            DEFAULT: '#F2EEE9',
          },
          'brown-gray': {
            50: 'color-mix(in srgb, #5F5047 10%, white)',
            100: 'color-mix(in srgb, #5F5047 20%, white)',
            200: 'color-mix(in srgb, #5F5047 40%, white)',
            300: 'color-mix(in srgb, #5F5047 60%, white)',
            400: 'color-mix(in srgb, #5F5047 80%, white)',
            500: '#5F5047',
            600: 'color-mix(in srgb, #5F5047 80%, black)',
            700: 'color-mix(in srgb, #5F5047 60%, black)',
            800: 'color-mix(in srgb, #5F5047 40%, black)',
            900: 'color-mix(in srgb, #5F5047 20%, black)',
            DEFAULT: '#5F5047',
          },
          'hop-green': {
            50: 'color-mix(in srgb, #6B7A4C 10%, white)',
            100: 'color-mix(in srgb, #6B7A4C 20%, white)',
            200: 'color-mix(in srgb, #6B7A4C 40%, white)',
            300: 'color-mix(in srgb, #6B7A4C 60%, white)',
            400: 'color-mix(in srgb, #6B7A4C 80%, white)',
            500: '#6B7A4C',
            600: 'color-mix(in srgb, #6B7A4C 80%, black)',
            700: 'color-mix(in srgb, #6B7A4C 60%, black)',
            800: 'color-mix(in srgb, #6B7A4C 40%, black)',
            900: 'color-mix(in srgb, #6B7A4C 20%, black)',
            DEFAULT: '#6B7A4C',
          },
          'malt-yellow': {
            50: 'color-mix(in srgb, #D3A95C 10%, white)',
            100: 'color-mix(in srgb, #D3A95C 20%, white)',
            200: 'color-mix(in srgb, #D3A95C 40%, white)',
            300: 'color-mix(in srgb, #D3A95C 60%, white)',
            400: 'color-mix(in srgb, #D3A95C 80%, white)',
            500: '#D3A95C',
            600: 'color-mix(in srgb, #D3A95C 80%, black)',
            700: 'color-mix(in srgb, #D3A95C 60%, black)',
            800: 'color-mix(in srgb, #D3A95C 40%, black)',
            900: 'color-mix(in srgb, #D3A95C 20%, black)',
            DEFAULT: '#D3A95C',
          },
        },
      },
      
      // German-optimized typography
      fontFamily: {
        'sans': [
          'Inter Variable',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
        'serif': [
          'Crimson Pro Variable',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
        'mono': [
          'JetBrains Mono Variable',
          'Consolas',
          'Liberation Mono',
          'Menlo',
          'Courier',
          'monospace',
        ],
      },
      
      // Responsive breakpoints for brewery website
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Brewery-specific breakpoints
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptop-l': '1440px',
        'desktop': '1920px',
        'desktop-xl': '2560px',
      },
      
      // Container sizes optimized for brewery content
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1400px',
        },
      },
      
      // Enhanced spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Aspect ratios for brewery imagery
      aspectRatio: {
        'brewery-card': '4/5',
        'brewery-hero': '16/9',
        'brewery-logo': '5/1',
        'brewery-product': '3/4',
      },
      
      // Enhanced animation timings
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      // Custom animations for brewery website
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-0.5rem)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
      
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      
      // Enhanced shadows for depth
      boxShadow: {
        'brewery-card': '0 4px 6px -1px rgba(59, 31, 22, 0.1), 0 2px 4px -1px rgba(59, 31, 22, 0.06)',
        'brewery-card-hover': '0 20px 25px -5px rgba(59, 31, 22, 0.1), 0 10px 10px -5px rgba(59, 31, 22, 0.04)',
        'brewery-button': '0 4px 14px 0 rgba(138, 75, 45, 0.39)',
        'brewery-hero': 'inset 0 0 0 1000px rgba(59, 31, 22, 0.3)',
      },
      
      // Text shadows
      textShadow: {
        'sm': '1px 1px 2px rgba(59, 31, 22, 0.5)',
        'DEFAULT': '2px 2px 4px rgba(59, 31, 22, 0.5)',
        'lg': '3px 3px 6px rgba(59, 31, 22, 0.5)',
        'xl': '4px 4px 8px rgba(59, 31, 22, 0.5)',
      },
      
      // Backdrop filters
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Add custom utilities
    function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(59, 31, 22, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(59, 31, 22, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(59, 31, 22, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(59, 31, 22, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      })
    },
  ],
  // Enable future features
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config