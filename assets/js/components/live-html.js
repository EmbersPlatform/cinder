import { define, Component, html, css, ref, store } from "@dorgandash/untitled";

const global_state = store({
  theme: document.documentElement.dataset.colorMode
})

define("cinder-live-html", class extends Component() {
  connected() {
    this.content = [].slice.call(this.children);
    this.useStore(global_state);
    this.dataset.colorMode = document.documentElement.dataset.colorMode;
    this.dataset.lightTheme = "light";
    this.dataset.darkTheme = "dark";
  }

  update() {
    this.dataset.colorMode = global_state().theme;
  }

  render() {
    return html`
      <div class="pt-2 px-2 d-flex flex-justify-end">
        <button class="btn" onclick=${this.toggle_theme}>Theme</button>
      </div>
      ${this.content}
    `
  }

  toggle_theme = () => {
    if(global_state().theme === "light") {
      global_state.update({theme: "dark"});
    } else {
      global_state.update({theme: "light"});
    }
  }

  static css(self) {
    return css`
    ${self} {
      display: block;
    }
    `
  }
})