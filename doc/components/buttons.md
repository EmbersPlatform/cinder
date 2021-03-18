---
title: "Buttons"
tags: components
---

# Buttons

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

```html live
<button class="btn" type="button">Button</button>
```
Note: When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

```html live
<button class="btn mr-2" type="button">Button button</button>
<a class="btn" href="#url" role="button">Link button</a>
```

## Button Types

### Default
Use `.btn` for form actions and general page actions.

```html live
<button class="btn" type="button">Default</button>
```

### Primary

Primary buttons use the accent color and are used to indicate the primary action on a page. When you need your buttons to stand out, use `.btn.btn-primary`. You can use it with both button sizes—just add `.btn-primary`.

```html live
<button class="btn btn-primary" type="button">Primary</button>
```

## Button states

### Disabled

Disable `<button>` and `<a>` elements with the `aria-disabled="true"` attribute.

```html live
<button class="btn mr-2" type="button" aria-disabled="true">Disabled</button>
<button class="btn btn-primary mr-2" type="button" aria-disabled="true">Disabled</button>
<button class="btn btn-outline mr-2" type="button" aria-disabled="true">Disabled</button>
<button class="btn btn-danger" type="button" aria-disabled="true">Disabled</button>
```

## Button variations

### Sizes

```html live
<button class="mr-2 btn btn-sm" type="button">Small</button>
<button class="mr-2 btn" type="button">Normal</button>
<button class="mr-2 btn btn-large" type="button">Large</button>
```

### Block button
```html live
<button class="btn btn-block" type="button">Block</button>
```

## Button groups
```html live
<div class="BtnGroup">
  <button class="BtnGroup-item btn" type="button">Normal</button>
  <button class="BtnGroup-item btn btn-outline" type="button">Outline</button>
  <button class="BtnGroup-item btn btn-primary" type="button">Primary</button>
  <button class="BtnGroup-item btn btn-success" type="button">Success</button>
  <button class="BtnGroup-item btn btn-danger" type="button">Danger</button>
</div>
```