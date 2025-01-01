/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
      },
    ],
  },
};

export default nextConfig;
