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
          <cinder-live-html class="Box LiveCode mb-2">
            <iframe class="LiveCode-frame" height="100"></iframe>
            <form action="#0" class="LiveCode-source">
              <button class="LiveCode-copy-btn btn" type="button" data-action="copy_source">Copy</button>
              <div class="LiveCode-editor">
                <textarea live-code-source>${str.trim()}</textarea>
                <pre><code></code></pre>
              </div>
            </form>
          </cinder-live-html>
          `;
        } catch (__) {}
      }

      /**
       * <pre class="LiveCode-source hljs p-3"><code>` +
              hljs.highlight(lang, str, true).value +
              `<button class="LiveCode-copy-btn btn" type="button" data-action="copy_source">Copy</button>` +
            `</code></pre>
       */

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