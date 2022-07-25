module.exports = {
  poweredByHeader: false,
  env: {},
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) =>
    /**
     * Perform customizations to webpack config
     * example: config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
     */
    // if (dev) {}

    config,
};
