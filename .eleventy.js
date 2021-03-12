module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./dist");
  eleventyConfig.addWatchTarget("./dist");
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: "docs"
    },
  };
}