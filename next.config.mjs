import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com',
      'plus.unsplash.com'
    ],
  },
}

const withNextIntl = createNextIntlPlugin('./lib/request.ts');
export default withNextIntl(nextConfig);
