/**
 * @Author: zhilidali
 * @Description: modern style linter
 */

/** @type { import('stylelint').Configuration } */
const options = {
  defaultSeverity: 'warning',
  ignoreFiles: [],
  processors: [],
  plugins: [],
  extends: [
    '@epcor/stylelint-config',
    'stylelint-config-tailwindcss',
  ],
  rules: {},
};

module.exports = options;
