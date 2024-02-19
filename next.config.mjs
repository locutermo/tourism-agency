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
          {
            protocol: 'https',
            hostname: '1i5elpn4gcvm9tci.public.blob.vercel-storage.com',
            port: '',
          },
          
        ],
      },
};

export default nextConfig;
