/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.vogue.mx',
            port: '',
          },
        ],
      },
};

export default nextConfig;
