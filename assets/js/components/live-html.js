import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import { define, Component, store } from "../../../_snowpack/pkg/@dorgandash/untitled.js";
import { environment } from "../index.js";
import hljs from "../../../_snowpack/pkg/highlightjs.js";
import path from "../../../_snowpack/pkg/path.js";

const shared_state = store({
  theme: environment().theme
})

environment.map(({theme}) => {
  shared_state.update({theme});
})

const styles = fetch(
    path.join(__SNOWPACK_ENV__.SNOWPACK_PUBLIC_PATH_PREFIX, `/dist/index.css`)
  ).then(res => res.text());

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

    this.textarea.addEventListener("input", this.update_highlight)
    this.highlight();

    this.frame = this.querySelector(".LiveCode-frame");

    this.frame.contentWindow.toggle_theme = this.toggle_theme;

    const style = await styles;
    const theme = shared_state().theme;

    const content = `
    <!DOCTYPE html>
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
        <div class="pt-2 px-2 d-flex flex-justify-end" style="z-index: 100; position: relative;">
          <button class="btn" theme-toggler type="button" onclick="toggle_theme();">${window.toggler_icons[theme]}</button>
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
    this.textarea.addEventListener("keydown", this);
  }

  update() {
    const theme = shared_state().theme;

    this.frame.contentDocument.body.dataset.colorMode = theme;
    if(this.frame_loaded) {
      const content_tag = this.frame.contentWindow.document.getElementById("frame-content");
      content_tag.innerHTML = this.state().source;

      this.frame.contentWindow.document.querySelector("[theme-toggler]").innerHTML = window.toggler_icons[theme];

      setTimeout(() => {
        this.frame.height = this.frame.contentWindow.document.querySelector(".LiveCode-frame-content").offsetHeight;
      })
    }
  }

  handle_click = (event) => {
    const action = event.target.dataset.action;
    if(action) this[action]();
  }

  handle_keydown = (event) => {
    if(event.currentTarget === this.textarea && event.key === "Tab") {
      event.preventDefault();
      this.insert_tab();
    }
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

  update_highlight = () => {
    this.state.update({source: this.textarea.value});
    this.highlight();
  }

  insert_tab = () => {
    const { textarea } = this;
    if (textarea.selectionStart || textarea.selectionStart == '0') {
      let selection_start = textarea.selectionStart;
      let selection_end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, selection_start)
        + "  "
        + textarea.value.substring(selection_end, textarea.value.length);
      textarea.selectionStart = selection_start + 2;
      textarea.selectionEnd = selection_start + 2;
    } else {
      textarea.value += "  ";
    }
    this.update_highlight();
  }
})