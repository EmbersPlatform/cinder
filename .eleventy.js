const md = require("markdown-it");
const hljs = require('highlight.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  
  const markdown = md({
    html: true,
    breaks: false,
    linkify: true,
    highlight: highlighter
  })
  .use(require('markdown-it-anchor'), {
    permalink: true,
    permalinkBefore: true,
    permalinkSpace: false,
    permalinkClass: "anchor",
    permalinkSymbol: `<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`
  });

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

function highlighter(str, lang, attrs) {
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