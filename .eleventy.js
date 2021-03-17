const md = require("markdown-it");
const hljs = require('highlight.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  
  const markdown = md({
    html: true,
    breaks: false,
    linkify: true,
    highlight: function(str, lang, attrs) {
      if(lang == "html" && attrs == "live") {
        try {
          return `<pre style="display: none!important;"></pre>
          <cinder-live-html class="Box LiveCode">
            <div class="LiveCode-frame">
              <div class="pt-2 px-2 d-flex flex-justify-end">
                <button class="btn" data-action="toggle_theme">Theme</button>
              </div>
              <div class="LiveCode-frame-content p-3">${str}</div>
            </div>
            <textarea live-code-source class="d-none">${str}</textarea>
            <pre class="LiveCode-source hljs p-3"><code>` +
              hljs.highlight(lang, str, true).value +
              `<button class="LiveCode-copy-btn btn" data-action="copy_source">Copy</button>` +
            `</code></pre>
          </cinder-live-html>
          `;
        } catch (__) {}
      }

      return highlight(str, lang);
    }
  })

  eleventyConfig.setLibrary("md", markdown);

  return {
    pathPrefix: process.env.BASE_PATH || "/",
    dir: {
      input: "doc",
    }
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