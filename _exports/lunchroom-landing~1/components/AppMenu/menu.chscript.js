module.exports = {
id: ":ff0747f7dda748355da134408ffb725baf4af851",
getLayout: function () {
return {
id: ":ff0747f7dda748355da134408ffb725baf4af851",
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.container.items-container", [ "\n\n  ", h("h1.menu-provider-name", [ h("span", {"dataset":{"componentProp":"restaurantTitle"}}, ch({"property":"restaurantTitle"}, function () { return [ "Dos Batos Wood Fired Tacos" ]; })), "\n    ", h("span.no-tip-note", [ "No tips. ", h("span.no-tip-note-flat", [ "Just a flat $2.99 fee" ]), " And no more fee" ]), "\n  " ]), "\n  ", h("div.tiles.item-tiles", {"dataset":{}}, ch({"section":"items"}, function () { return [ "\n      ", ch({"section":"items","view":"default"}, function () { return h("div.tile.item-tile", {"dataset":{"id":"\\{\\{id\\}\\}"}}, [ "\n        ", h("div.tile-cover", {"style":{"background-image":"url('{{photoUrl}}')"},"dataset":{"componentProp":"photoUrl","componentAction":"showDetails","id":"\\{\\{id\\}\\}","toggle":"modal","target":"#item-modal"},"attributes":{}}, ch({"property":"photoUrl","propertyTarget":"style/background-image"}, function () { return [ "\n          ", h("div.item-tile-quantity-wrapper", [ "\n            ", h("div.item-tile-quantity", {"dataset":{"componentProp":"quantity"}}, ch({"property":"quantity"}, function () { return ; })), "\n            in your cart\n          " ]), "\n        " ]; })), "\n        ", h("div.tile-info", [ "\n          ", h("h3.tile-title", {"dataset":{"componentProp":"title"}}, ch({"property":"title"}, function () { return [ "Pirata Dos Tacos" ]; })), "\n          ", h("ul.diet-tags", {"dataset":{}}, ch({"section":"diet-tags"}, function () { return [ "\n              ", ch({"section":"diet-tags","view":"default"}, function () { return h("li.diet-tag.diet-tag-gluten-free", {"dataset":{"tag":"\\{\\{tag\\}\\}"}}); }), "\n              ", "\n          " ]; })), "\n          ", h("div.item-price", {"dataset":{"componentProp":"price"}}, ch({"property":"price"}, function () { return [ "$10.90" ]; })), "\n          ", h("div.item-tile-actions", [ "\n            ", ch({"view":"orderable"}, function () { return h("button.btn.btn-default.btn-remove", {"dataset":{"id":"\\{\\{item_id\\}\\}","componentAction":"remove"}}, [ "-" ]); }), ch({"view":"orderable"}, function () { return h("button.btn.btn-default.btn-add", {"dataset":{"id":"\\{\\{item_id\\}\\}","componentAction":"add"}}, [ "Add" ]); }), "\n          " ]), "\n        " ]), "\n      " ]); }), "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n  " ]; })), "\n\n    " ]); });
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