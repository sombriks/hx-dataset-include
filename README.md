# [hx-dataset-include][repo]

[![npm](https://img.shields.io/npm/v/hx-dataset-include?style=plastic)](https://www.npmjs.com/package/hx-dataset-include)
[![MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Brutally simple [htmx extension][hx-ext] to make data-* html attributes
participate in the requests

## How to use

Just import the extension tag in your html:

```html
<script type="text/javascript" src="https://unpkg.com/htmx.org@2.0.0/dist/htmx.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/hx-dataset-include@0.0.1/lib/hx-dataset-include.js"></script>
```

Then enable it in the element doing the request:

```html
<!-- example: PUT task information when a custom event from alpinejs triggers 
 the request -->
<article class="message task"
         hx-ext="hx-dataset-include"
         id="task1"
         data-task="1"
         data-status="DOING"
         hx-put="/task/1"
         hx-trigger="put-task"
         draggable="true"
         @dragstart="e => e.dataTransfer.setData('text/plain', $el.id)"
         @update-status.window="e => {
            if(e.detail.taskEl == $el) { // needed to filter real target
                $el.dataset.status=e.detail.lane.dataset.status
                $dispatch('put-task', $el.dataset)
            }
         }">
  <!-- rest of the markup -->
```

## Motivation

In hypermedia systems, the markup IS the application state. It was true for the
html form element for ages and motivated the approach of include everything that
contains a value attribute in the htmx requests.

But sometimes there is no form, or it feels illegal to use a custom value
attribute.

The data-* attributes are perfectly legal and well documented. Also you can have
as many of them as you want in your html tag!

## Further reading

- Read the always good, enlightening, [HATEOAS Essay][hateoas].
- See other extensions for htmx [here][other].
- Checkout [Alpinejs][alpinejs], the extra spice for your hypermedia app.

[repo]: https://github.com/sombriks/hx-dataset-include
[hx-ext]: https://htmx.org/docs/#extensions
[hateoas]: https://htmx.org/essays/hateoas/
[other]: <https://github.com/bigskysoftware/htmx-extensions>
[alpinejs]: https://alpinejs.dev/
