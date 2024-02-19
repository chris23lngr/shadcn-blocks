/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'thispersondoesnotexist.com',
      },
    ],
  },
};

export default nextConfig;
