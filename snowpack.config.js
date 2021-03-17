// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    '_site': { url: '/' },
    'assets': { url: '/assets' }
  },
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        input: ['.scss']
      }
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'build',
  },
};
