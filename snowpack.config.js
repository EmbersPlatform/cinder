// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const path_prefix = process.env.PATH_PREFIX || "/";
process.env.SNOWPACK_PUBLIC_PATH_PREFIX = path_prefix;

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
        cmd: `eleventy --pathprefix=${path_prefix}`,
        watch: '$1 --watch',
      },
    ]
  ],
  devOptions: {
    /* ... */
  },
  packageOptions: {
    polyfillNode: true,
  },
  buildOptions: {
    out: 'docs',
  }
};
