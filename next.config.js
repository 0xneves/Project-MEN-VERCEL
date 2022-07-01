require('dotenv').config();

const nextConfig = {
  poweredByHeader: false,
  purge: {
    content: [
      './src/types/**/*.{js,jsx,ts,tsx}',
      './src/templates/**/*.{js,jsx,ts,tsx}',
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    // These options are passed through directly to PurgeCSS
  },
  reactStrictMode: true,
  // trailingSlash: true,
  assetPrefix: './',
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  images: {
    loader: 'akamai',
    minimumCacheTTL: 60,
    path: '',
  },
  env: {
    CONTRACT: process.env.CONTRACT,
  },
};

module.exports = nextConfig;
