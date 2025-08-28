/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['cdn.sanity.io'] },
  experimental: {
    // Adjust if needed; keeps us on stable features for now
  }
};

export default nextConfig;

