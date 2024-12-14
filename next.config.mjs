import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '', // Leave empty unless a specific port is required
        pathname: '/**', // Match all paths
      },
    ],
  },
};

export default withNextVideo(nextConfig);