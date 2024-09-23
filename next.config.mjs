/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/ui/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;