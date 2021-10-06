/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const nextConfig = {
  webpack: (config, options) => {
    return config
  },
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/kontakt": { page: "/kontakt" },
      "/o-firmie": { page: "/o-firmie" },
      "/oferta": { page: "/oferta" },
      "/realizacje": { page: "/realizacje" },
      "/wsparcie": { page: "/wsparcie" },
      "/wspolpraca": { page: "/wspolpraca" },
    }
  },
}

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
)

module.exports = config
