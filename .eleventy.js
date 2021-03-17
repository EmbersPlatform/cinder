const md = require("markdown-it");
const hljs = require('highlight.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./dist");
  eleventyConfig.addWatchTarget("./dist");
  eleventyConfig.addPassthroughCopy("./docs/assets");
  eleventyConfig.addWatchTarget("./docs/assets");
  eleventyConfig.setUseGitIgnore(false);
  
  const markdown = md({
    html: true,
    breaks: false,
    linkify: true,
    highlight: function(str, lang, attrs) {
      if(lang == "html" && attrs == "live") {
        try {
          return '<pre style="display: none!important;"></pre>' +
          '<cinder-live-html class="Box LiveCode">' +
            '<div live-canvas class="p-3">' + str + '</div>' +
            '<pre class="hljs p-3"><code>' +
              hljs.highlight(lang, str, true).value +
            '</code></pre>' +
          '</cinder-live-html>';
        } catch (__) {}
      }

      return highlight(str, lang);
    }
  })

  eleventyConfig.setLibrary("md", markdown);

  return {
    dir: {
      input: "docs"
    },
  };
}

function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return '<pre class="hljs"><code>' +
             hljs.highlight(lang, str, true).value +
             '</code></pre>';
    } catch (__) {}
  }

  return '<pre class="hljs"><code>' + md().utils.escapeHtml(str) + '</code></pre>';
}