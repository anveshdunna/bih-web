/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Enable source maps in production
  productionBrowserSourceMaps: true,
};

export default nextConfig;
