/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.vogue.mx',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.getyourguide.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
