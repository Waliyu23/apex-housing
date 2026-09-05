/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> ./out, deployable on any static host.
  output: 'export',
  // Emit relative asset URLs so the export also works from a sub-directory.
  assetPrefix: process.env.NEXT_PUBLIC_ABSOLUTE_ASSETS === '1' ? undefined : '.',
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
