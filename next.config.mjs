/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'a.storyblok.com',
        protocol: 'https',
      }
    ],
  },
}

export default nextConfig