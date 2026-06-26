/** @type {import('next').NextConfig} */
const nextConfig = {
  // GSAP entrance timelines (gsap.from/fromTo) get stranded by StrictMode's
  // dev-only double-invoke + useGSAP auto-revert, leaving elements at opacity 0.
  // Disabling only affects dev; production builds never double-invoke.
  reactStrictMode: false,
  images: {
    domains: ['images.pexels.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;