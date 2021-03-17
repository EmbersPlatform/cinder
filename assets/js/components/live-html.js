import { define, Component, html, css, store } from "../../../_snowpack/pkg/@dorgandash/untitled.js";
import { environment } from "../index.js";

const global_state = store({
  theme: environment().theme
})

environment.map(({theme}) => {
  global_state.update({theme});
})

define("cinder-live-html", class extends Component() {
  ready() {
    this.content = [].slice.call(this.children);
    this.useStore(global_state);
    this.frame = this.querySelector(".LiveCode-frame");
    this.frame.dataset.colorMode = document.documentElement.dataset.colorMode;
    this.frame.dataset.lightTheme = "light";
    this.frame.dataset.darkTheme = "dark";

    this.addEventListener("click", this);
  }

  update() {
    this.frame.dataset.colorMode = global_state().theme;
  }

  handle_click = (event) => {
    const action = event.target.dataset.action;
    if(action) this[action]();
  }

  toggle_theme = () => {
    if(global_state().theme === "light") {
      global_state.update({theme: "dark"});
    } else {
      global_state.update({theme: "light"});
    }
  }

  copy_source = () => {
    const source = this.querySelector('[live-code-source]');
    navigator.clipboard.writeText(source.value);
  }
})