import { define, Component, store } from "@dorgandash/untitled";
import { environment } from "../index";
import hljs from "highlight.js";
import path from "path";

const shared_state = store({
  theme: environment().theme
})

environment.map(({theme}) => {
  shared_state.update({theme});
})

const styles = fetch(
    path.join(import.meta.env.SNOWPACK_PUBLIC_PATH_PREFIX, `/dist/index.css`)
  ).then(res => res.text());

const toggler_icons = {
  light: `<svg aria-hidden="true" role="img" class="svgicon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"></path></svg>`,
  dark: `<svg aria-hidden="true" role="img" class="svgicon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"></path></svg>`
}

define("cinder-live-html", class extends Component() {

   /** @type {HTMLIFrameElement} */
  frame;

  highlight_state = {
    t: null,
    v: null
  }

  async ready() {
    this.content = [].slice.call(this.children);
    this.textarea = this.querySelector('[live-code-source]');
    this.useStore(shared_state);

    this.state = this.useStore(store({
      source: this.textarea.value
    }))
    
    this.textarea.addEventListener("input", (event) => {
      this.state.update({source: event.currentTarget.value});
      this.highlight();
    })
    this.highlight();

    this.frame = this.querySelector(".LiveCode-frame");

    this.frame.contentWindow.toggle_theme = this.toggle_theme;

    const style = await styles;
    const theme = shared_state().theme;

    const content = `
    <head>
      <style>${style}</style>
      <style>
      body {
        overflow-y: hidden;
      }
      </style>
    </head>
    <body data-color-mode="${theme}" data-light-theme="light" data-dark-theme="dark">
      <div class="LiveCode-frame-content">
        <div class="pt-2 px-2 d-flex flex-justify-end">
          <button class="btn" theme-toggler type="button" onclick="toggle_theme();">${toggler_icons[theme]}</button>
        </div>
        <div id="frame-content" class="p-3">${this.state().source}</div>
      </div>
    </body>
    `;

    this.frame.contentWindow.document.open('text/html', 'replace');
    this.frame.contentWindow.document.write(content);
    this.frame.contentWindow.document.close();

    const resizeObserver = new ResizeObserver(_ => {
      this.frame.height = this.frame.contentWindow.document.querySelector(".LiveCode-frame-content").offsetHeight;      
    })

    this.frame.addEventListener("load", () => {
      this.frame_loaded = true;
      resizeObserver.observe(this.frame.contentWindow.document.querySelector(".LiveCode-frame-content"));
      this.frame.height = this.frame.contentWindow.document.querySelector(".LiveCode-frame-content").offsetHeight;
    })

    this.addEventListener("click", this);
  }

  update() {
    const theme = shared_state().theme;

    this.frame.contentDocument.body.dataset.colorMode = theme;
    if(this.frame_loaded) {
      const content_tag = this.frame.contentWindow.document.getElementById("frame-content");
      content_tag.innerHTML = this.state().source;

      this.frame.contentWindow.document.querySelector("[theme-toggler]").innerHTML = toggler_icons[theme];

      setTimeout(() => {
        this.frame.height = this.frame.contentWindow.document.querySelector(".LiveCode-frame-content").offsetHeight;
      })
    }
  }

  handle_click = (event) => {
    const action = event.target.dataset.action;
    if(action) this[action]();
  }

  toggle_theme = () => {
    if(shared_state().theme === "light") {
      shared_state.update({theme: "dark"});
    } else {
      shared_state.update({theme: "light"});
    }
  }

  copy_source = () => {
    const source = this.textarea;
    navigator.clipboard.writeText(source.value);
  }

  highlight = () => {
    const { nextElementSibling, parentNode, value } = this.textarea;
    parentNode.dataset.replicatedValue = value;
    this.highlight_state.v = value;
    if (!this.highlight_state.t)
      this.highlight_state.t = requestAnimationFrame(() => {
        const { value } = hljs.highlight("html", this.highlight_state.v);
        nextElementSibling.firstElementChild.innerHTML = value;
        this.highlight_state.t = 0;
      });
  }
})