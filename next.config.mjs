import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com',
      'plus.unsplash.com',
      'i.pinimg.com'
    ],
  },
  experimental: {
    // Improve build stability
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    // Better file system handling
    serverComponentsExternalPackages: [],
  },
  // Improve build performance
  swcMinify: true,
  // Better error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

const withNextIntl = createNextIntlPlugin('./lib/request.js');
export default withNextIntl(nextConfig);
