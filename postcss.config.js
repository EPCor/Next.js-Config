/*
 * @Author: zhilidali
 * @Description: PostCSS is a tool for transforming styles with JS plugins.
 */

module.exports = {
  plugins: [
    'stylelint',
    /** default configuration used by Next.js */
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
