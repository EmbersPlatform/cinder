import loader from "uce-loader";

loader({
  container: document.body,
  on(newTag) {
    if(!newTag.startsWith("cinder-")) return;
    const tagName = newTag.slice("cinder-".length);

    const js = document.createElement('script');
    js.type = "module";
    js.src = `/assets/js/components/${tagName}.js`;
    document.head.appendChild(js);
  }
});