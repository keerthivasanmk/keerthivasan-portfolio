/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.openai.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
