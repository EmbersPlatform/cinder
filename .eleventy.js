const md = require("markdown-it");
const hljs = require('highlight.js');
const { html } = require('uhtml-ssr');

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
          return html`<pre style="display: none!important;"></pre>
          <cinder-live-html class="Box LiveCode">
            <div class="LiveCode-frame">
              <div class="pt-2 px-2 d-flex flex-justify-end">
                <button class="btn" data-action="toggle_theme">Theme</button>
              </div>
              <div class="LiveCode-frame-content p-3">${{html: str}}</div>
            </div>
            <pre class="LiveCode-source hljs p-3"><code>
              ${hljs.highlight(lang, str, true).value}
              <button class="LiveCode-copy-bntn btn" data-action="copy_source">Copy</button>
            </code></pre>
          </cinder-live-html>
          `;
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