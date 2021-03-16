const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./dist");
  eleventyConfig.addWatchTarget("./dist");
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPairedLiquidShortcode("example", function(content) {
    return content + "\n" +
      "```html" +
      content + "\n" +
      "```"
  });

  return {
    dir: {
      input: "docs"
    },
  };
}