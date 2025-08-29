/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports for better bundle sizes
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      'date-fns',
      '@sanity/client',
      '@sanity/image-url'
    ],
    // Inline CSS for better performance (experimental)
    inlineCss: true,
  },

  // Turbopack configuration (modern way)
  turbopack: {
    rules: {
      // Support for video files
      '*.webm': {
        loaders: ['file-loader'],
        as: '*.webm'
      }
    }
  },

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Cache static assets
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|webm|mp4)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Webpack configuration for additional optimizations
  webpack: (config, { isServer }) => {
    // Add support for video files
    config.module.rules.push({
      test: /\.(webm|mp4)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // Enable strict mode
  reactStrictMode: true,

  // Environment variables available to the client
  env: {
    SITE_NAME: 'Handwerksbrauerei Hennings',
    SITE_DESCRIPTION: 'Handwerklich gebraute Biere aus Leezen, Mecklenburg-Vorpommern',
  },
};

export default nextConfig;