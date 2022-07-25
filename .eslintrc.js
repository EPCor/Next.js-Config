/** @type { import('eslint').Linter.Config } */
const options = {
  root: true,
  /** @package @babel/eslint-parser */
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  // eslint-disable-next-line no-unused-vars
  /* global variables */
  globals: {
    Atomics: false,
    SharedArrayBuffer: false,
    App: true,
  },

  /* third-party plugins */
  plugins: [],
  /* Plugins may provide processors */
  processor: '',
  overrides: [],

  /* Adding Shared Settings */
  settings: {
    react: {
      version: 'detect',
      pragma: 'React',
    },
  },
  /* Extending Configuration */
  extends: [
    '@epcor/eslint-config',

    /**
     * @integration next
     * @package eslint-config-next
     */
    'next',
  ],
  rules: {
    // Disallow the use of console
    // "no-console": ["warn", { "allow": ["warn", "error", "log", "info"] }],
    'no-debugger': 'warn',

    /**
     * React
     */
    'react/prop-types': ['off'],
    'react/no-find-dom-node': ['off'],
    'react/jsx-closing-tag-location': ['warn'],
    'react/display-name': ['off'],
    'react/no-deprecated': ['warn'],
    'react/react-in-jsx-scope': ['off'],
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': ['error'],
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': ['warn'],
  },
};

module.exports = options;
