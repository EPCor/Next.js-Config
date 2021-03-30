module.exports = {
  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  env: {},
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /**
     * Perform customizations to webpack config
     * example: config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
     */
    if (dev) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    return config;
  },
};
