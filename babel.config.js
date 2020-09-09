/** @type { import('@babel/core').TransformOptions } */
const options = {
  presets: [
    /**
     * next/babel preset
     * @see {@link https://github.com/vercel/next.js/blob/canary/packages/next/build/babel/preset.ts}
     */
    ['next/babel', {}],
  ],
  plugins: [],
};

module.exports = options;
