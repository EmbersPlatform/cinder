import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import loader from "../../_snowpack/pkg/uce-loader.js";
import {store} from "../../_snowpack/pkg/@dorgandash/untitled.js";
import path from "../../_snowpack/pkg/path.js";

const html = document.documentElement;

export const environment = store({
  theme: html.dataset.colorMode
})

environment.map(({theme}) => {
  html.dataset.colorMode = theme;
})

window.toggle_theme = () => {
  const theme = environment().theme === "dark" ? "light" : "dark";
  environment.update({theme});
}

document.addEventListener("click", event => {
  if(event.target.matches("[theme-toggler]")) {
    toggle_theme();
  }
})

loader({
  container: document.body,
  on(newTag) {
    if(!newTag.startsWith("cinder-")) return;
    const tagName = newTag.slice("cinder-".length);

    const js = document.createElement('script');
    js.type = "module";
    js.src = path.join(__SNOWPACK_ENV__.SNOWPACK_PUBLIC_PATH_PREFIX, `/assets/js/components/${tagName}.js`);
    document.head.appendChild(js);
  }
});