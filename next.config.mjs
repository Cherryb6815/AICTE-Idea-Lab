/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization because it requires a server (standard HTML <img> tags are used instead)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
