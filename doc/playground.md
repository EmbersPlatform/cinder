---
title: "Playground"
layout: post
---

```html live
<article class="Post Box">
  <header class="d-flex flex-items-center pl-3 pr-2 pt-2">
    <div class="avatar-parent-child | d-inline-flex mr-2">
      <img class="avatar | circle" alt="dorgan" src="https://avatars.githubusercontent.com/u/6147776?s=60&v=4" width="32" height="32" />
    </div>
    <div class="d-flex flex-column flex-1">
      <address>
        <a class="Link Link--primary | text-bold no-underline">Dorgan</a>
        <a class="Link Link--secondary">@dorgan</a>
      </address>
      <time>
        <a class="Link Link--secondary | no-underline">5 minutes ago</a>
      </time>
    </div>
    <div class="d-flex flex-self-start">
      <button class="btn-link Link--secondary | px-2 py-1 no-underline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"></path></svg>
      </button>
      <details class="dropdown details-reset details-overlay d-inline-block">
        <summary class="btn-link Link--secondary | px-2 py-1 no-underline" aria-haspopup="true">
          <svg class="svgicon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </summary>

        <ul class="dropdown-menu dropdown-menu-sw">
          <li><a class="dropdown-item btn-link" href="#url">Dropdown item</a></li>
          <li><a class="dropdown-item btn-link" href="#url">Dropdown item</a></li>
          <li>
            <details class="details-reset details-overlay details-overlay-dark" href="#url">
              <summary class="dropdown-item btn-link color-text-danger">Delete post</summary>
              <article class="Box Box--overlay anim-fade-in fast">
                <div class="Box-header text-bold">Delete post</div>
                <div class="Box-body">Are you sure you want to delete this post?</div>
                <div class="Box-footer d-flex flex-row-reverse">
                  <button class="btn btn-danger">Delete post</button>
                </div>
              </article>
            </details>
          </li>
        </ul>
      </details>
    </div>
  </header>

  <section class="Prose | p-3">Hello world</section>

  <section class="Gallery mb-2">
    <div class="Gallery-items Gallery--3">
      <div class="Gallery-item"></div>
      <div class="Gallery-item"></div>
      <div class="Gallery-item"></div>
    </div>
  </section>

  <aside class="d-flex flex-items-center color-text-secondary px-3 pb-2">
    <button class="btn btn-sm | mr-2">🍆 5</button>
    <button class="btn btn-sm | mr-2">😂 2</button>
    <button class="btn btn-sm | mr-2">🔥 10</button>
    <div class="flex-1"></div>
    <span>3 comments, 1 time shared</span>
  </aside>
  <div class="d-flex px-2 pb-2">
    <button class="btn-link Link--secondary | px-2 py-1 no-underline">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path d="M8.456 14.494a.75.75 0 011.068.17 3.08 3.08 0 00.572.492A3.381 3.381 0 0012 15.72c.855 0 1.487-.283 1.904-.562a3.081 3.081 0 00.572-.492l.021-.026a.75.75 0 011.197.905l-.027.034c-.013.016-.03.038-.052.063-.044.05-.105.119-.184.198a4.569 4.569 0 01-.695.566A4.88 4.88 0 0112 17.22a4.88 4.88 0 01-2.736-.814 4.57 4.57 0 01-.695-.566 3.253 3.253 0 01-.236-.261c-.259-.332-.223-.824.123-1.084z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path><path d="M9 10.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM16.25 12a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path></svg>
    </button>
    <div class="flex-1"></div>
    <button class="btn-link Link--secondary | px-2 py-1 no-underline">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path></svg>
    </button>
    <button class="btn-link Link--secondary | px-2 py-1 no-underline">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M20 5.5a3.5 3.5 0 01-6.062 2.385l-5.112 3.021a3.497 3.497 0 010 2.188l5.112 3.021a3.5 3.5 0 11-.764 1.29l-5.112-3.02a3.5 3.5 0 110-4.77l5.112-3.021v.001A3.5 3.5 0 1120 5.5zm-1.5 0a2 2 0 11-4 0 2 2 0 014 0zM5.5 14a2 2 0 100-4 2 2 0 000 4zm13 4.5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    </button>
  </div>
  <div class="border-top color-bg-tertiary py-2 px-3 d-flex flex-items-center">
    <div class="avatar-parent-child | d-inline-flex mr-2">
      <img class="avatar avatar-4 | circle" alt="dorgan" src="https://avatars.githubusercontent.com/u/6147776?s=60&v=4" width="32" height="32" />
    </div>
    <button type="button" class="form-control width-full color-text-secondary text-left text-normal">Write a reply</button>
  </div>
</article>

<style>
details > .Box--overlay {
  position: fixed;
  margin: 10vh auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  max-height: 80vh;
  max-width: 90vw;
  width: 448px;
}
</style>
```