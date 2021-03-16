---
title: "Menu"
tags: components
---

# Menu

{% example %}
<nav class="menu">
  <a href="/" class="menu-item">Home</a>
  <div class="menu-heading">Components</div>
  {%- for post in collections.components -%}
    <a href="{{ post.url }}" class="menu-item">{{ post.data.title }}</a>
  {%- endfor -%}
</nav>
{% endexample %}