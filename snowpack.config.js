// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    '_site': { url: '/' },
    'assets': { url: '/assets' },
    'dist': {url: '/dist', static: true, resolve: false}
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
        cmd: 'postcss src/index.scss src/**/index.scss --base src --dir dist --ext .css',
        watch: '$1 --watch'
      }
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ]
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'build',
  },
};
