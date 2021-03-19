import loader from "uce-loader";
import {store} from "@dorgandash/untitled";
import path from "path";

const html = document.documentElement;

const toggler_icons = {
  light: `<svg aria-hidden="true" role="img" class="svgicon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"></path></svg>`,
  dark: `<svg aria-hidden="true" role="img" class="svgicon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom;"><path fill-rule="evenodd" d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"></path></svg>`
}

export const environment = store({
  theme: html.dataset.colorMode == "auto"
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
      ? "dark"
      : "light"
    : html.dataset.colorMode
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
    js.src = path.join(import.meta.env.SNOWPACK_PUBLIC_PATH_PREFIX, `/assets/js/components/${tagName}.js`);
    document.head.appendChild(js);
  }
});