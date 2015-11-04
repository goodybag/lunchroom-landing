module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("div.container.page-nav-container", [ "\n\n  ", h("ul.page-nav", [ "\n    ", h("li.page-nav-item", [ "\n      ", h("a.page-nav-item-link", {"attributes":{"href":"/pages/menu"},"dataset":{"componentElm":"addItemsLink"}}, [ "<", " Back to menu" ]), "\n    " ]), "\n  " ]), "\n\n    " ]);
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