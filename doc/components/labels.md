---
title: Labels
---

Labels add metadata or indicate status of items and navigational elements. Three different types of labels are available: [Labels](#default-label-styles) for adding metadata and [Counters](#counters) for showing the count for a number of items.

## Labels

The base label component styles the text, adds padding and rounded corners, and a border. Labels come in various themes which apply different colors.

The base `Label` style does not apply a background color and only uses the default border:

```html live
<span class="Label">design</span>
```

### Label contrast

Use `Label--primary` to create a label with a stronger border. This label is also neutral in color, however, since its border is stronger it can stand out more compared to the default `Label`.

Use `Label--secondary` to create a label with a subtler text color. This label is neutral in color and can be used in contexts where all you need to communicate is metadata, or where you want a label to feel less prominent compared with labels with stronger colors.

```html live
<span class="Label">Default</span>
<span class="Label Label--primary ml-1">Primary</span>
<span class="Label Label--secondary ml-1">Secondary</span>
```

### Colored labels

Labels come in a few different functional classes. Use to communicate the content of the label, and ensure it's used consistently.

- `Label--info`
- `Label--success`
- `Label--warning`
- `Label--danger`

```html live
<span class="Label mr-1 Label--info">Info</span>
<span class="Label mr-1 Label--success">Success</span>
<span class="Label mr-1 Label--warning">Warning</span>
<span class="Label mr-1 Label--danger">Danger</span>
```

### Label sizes

If space allows, add the `Label--large` modidfier to add a bit more padding to lables.

```html live
<span class="Label Label--gray-darker mr-1">Default</span>
<span class="Label Label--large Label--gray-darker mr-1">Large</span>
```

### Inline labels

Sometimes when adding a label the line-height can be incrased. Or the parent element increases in height. If that is not desired, use the `Label--inline` modifier change to the `display` property to `inline`. The font-size also adapts.

```html live
<p class="col-4">
  Lorem Ipsum is simply <span class="Label Label--inline">dummy text</span> of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text.
</p>
```

## Counters

Use the `Counter` component to add a count to navigational elements and buttons. Counters come in 3 variations:

1. the default `Counter`,
2. the `Counter--primary` with a stronger background color
3. and `Counter--secondary` with a more subtler text color.

Note: When a counter is empty, its visibility will be hidden.

```html live
<span class="Counter mr-1">1</span>
<span class="Counter mr-1 Counter--primary">23</span>
<span class="Counter mr-1 Counter--secondary">456</span>
```

Use the `Counter` in navigation to indicate the number of items without the user having to click through or count the items, such as open issues in a GitHub repo. See more options in [navigation]({{"/components/navigation" | url }}).

```html live
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab" aria-current="page">Foo tab <span class="Counter">23</span></a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
```

You can also have icons and emoji in counters. Or use utilities for counters with different background colors.

```html live
<span class="Counter mr-1">1.5K</span>
<span class="Counter mr-1">
  <!-- <%= svgicon "comment" %> -->
  <svg class="svgicon svgicon-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z"></path></svg>
  10
</span>
<span class="Counter mr-1">👍 2</span>
<span class="Counter mr-1 bg-green text-white">22</span>
<span class="Counter mr-1 bg-red text-white">22</span>
<span class="Counter mr-1 bg-purple text-white">22</span>
```
