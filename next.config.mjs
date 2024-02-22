const mdx = await import('@next/mdx');

const withMDX = mdx.default();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['images.pexels.com'],
  },
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
