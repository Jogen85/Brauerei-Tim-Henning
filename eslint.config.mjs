import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configuration for Next.js with TypeScript
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript'
    ],
  }),
  
  // Custom rules for the brewery project
  {
    name: 'Brauerei Hennings Custom Rules',
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      // React specific rules
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Using TypeScript instead
      'react-hooks/exhaustive-deps': 'warn',
      
      // Next.js specific rules
      '@next/next/no-img-element': 'error', // Use next/image instead
      '@next/next/no-html-link-for-pages': 'error',
      
      // General code quality
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
    },
  },
  
  // Ignore patterns
  {
    name: 'Ignore Files',
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      '.vercel/**',
      'public/**',
      '*.config.js',
      '*.config.mjs',
      '.env*',
    ],
  },
];

export default eslintConfig;