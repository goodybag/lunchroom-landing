module.exports = {
id: ":5d311136c484d480b81d791241fe2b46a257c677",
getLayout: function () {
return {
id: ":5d311136c484d480b81d791241fe2b46a257c677",
buildVTree: function (h, ch) {
return ch({}, function () { return h("div#item-modal.modal.item-modal.fade", [ "\n\n  ", h("div.modal-dialog", [ "\n    ", h("div.close", [ "\n      ", h("span", {"attributes":{"aria-label":"Close"},"dataset":{"dismiss":"modal"}}, [ h("span", {"attributes":{"aria-hidden":"true"}}, [ "×" ]) ]), "\n    " ]), "\n    ", h("div.modal-content", [ "\n      ", h("div.modal-photo-wrapper", [ "\n        ", h("img.modal-photo", {"attributes":{"src":"{{modalPhotoUrl}}"},"dataset":{"componentProp":"modalPhotoUrl"}}, ch({"property":"modalPhotoUrl","propertyTarget":"src"}, function () { return ; })), "\n      " ]), "\n      ", h("div.modal-main-content", [ "\n        ", h("div.modal-main-content-body", [ "\n          ", h("h3.item-modal-title", [ h("span", {"dataset":{"componentProp":"title"}}, ch({"property":"title"}, function () { return [ "Fajita Torta" ]; })), "\n            ", h("span.item-modal-price", {"dataset":{"componentProp":"price"}}, ch({"property":"price"}, function () { return [ "$12.00" ]; })), "\n          " ]), "\n          ", h("p.item-modal-description", {"dataset":{"componentProp":"description"}}, ch({"property":"description"}, function () { return [ "Mexican sandwich with top sirloin steak, bell peppers, mushrooms, and onions. Topped with queso, avocado, tomatoes, and Mexican mayo dressing." ]; })), "\n          ", h("ul.diet-tags", {"dataset":{}}, ch({"section":"diet-tags"}, function () { return [ "\n            ", ch({"section":"diet-tags","view":"default"}, function () { return h("li.diet-tag.diet-tag-spicy", {"dataset":{}}); }), "\n          " ]; })), "\n        " ]), "\n        ", h("div.item-modal-actions", [ "\n          ", ch({"view":"orderable"}, function () { return h("button.btn.btn-primary.item-modal-save-btn", {"dataset":{"id":"\\{\\{item_id\\}\\}","componentAction":"add"}}, [ "Add to Order" ]); }), "\n        " ]), "\n      " ]), "\n    " ]), "\n  " ]), "\n\n    " ]); });
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