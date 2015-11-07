module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.container", [ "\n\n  ", h("div.warning-section", [ "\n    ", h("img.warning-section-supporting-graphic", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~cupcake-shocked-9c195d3.png","alt":""}}), "\n    ", h("h2.warning-section-header", [ "You have nothing in your cart!" ]), "\n    ", h("p", [ h("a", {"attributes":{"href":"#"},"dataset":{"componentElm":"addItemsLink"}}, [ "Add items" ]) ]), "\n  " ]), "\n\n    " ]); });
}
};
},
getComponents: function () {
return {
  };
},
getScripts: function () {
var scripts = {};
return scripts;
}
};