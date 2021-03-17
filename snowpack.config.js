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
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  packageOptions: {
    knownEntryPoints: ["uce-loader", "@dorgandash/untitled"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'build',
  },
};
