/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized:false,
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
            hostname: '**.public.blob.vercel-storage.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.googleusercontent.com',
            port: '',
          },
          
        ],
      },
};

export default nextConfig;
