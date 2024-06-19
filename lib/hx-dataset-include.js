htmx.defineExtension('hx-dataset-include', {
  encodeParameters: function (xhr, parameters, elt) {
    Object
      .keys(elt.dataset)
      .forEach(k => parameters
        .append(k, elt.dataset[k]))
  }
})