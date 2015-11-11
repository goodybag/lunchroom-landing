module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("section#section-lunchroom-header.page-section", [ "\n\n  ", h("div.lunchroom-header", [ "\n    ", h("div.container", [ "\n      ", h("div.modules", [ "\n        ", h("div.module", [ "\n          Deliver to: ", h("small", {"dataset":{"componentProp":"deliverTo"}}, ch({"property":"deliverTo"}, function () { return [ "Bazaarvoice" ]; })), "\n        " ]), "\n        ", h("div.module", [ "\n          Delivery Time: ", h("small", {"dataset":{"componentProp":"deliveryTime"}}, ch({"property":"deliveryTime"}, function () { return [ "12:00-12:30 PM" ]; })), "\n        " ]), "\n        ", h("div.module", [ "\n          Time left to order:\n          ", h("small.text-important", {"dataset":{"componentProp":"timeLeftToOrder"}}, ch({"property":"timeLeftToOrder"}, function () { return [ "1 hr 26min" ]; })), "\n        " ]), "\n        ", h("div.module.module-right.module-unpadded", [ "\n          ", h("a.btn.btn-primary", {"attributes":{"href":"checkout"},"dataset":{"componentElm":"checkoutButton"}}, [ "Checkout (", h("span", {"dataset":{"componentProp":"cartItemCount"}}, ch({"property":"cartItemCount"}, function () { return [ "1" ]; })), ")" ]), "\n        " ]), "\n      " ]), "\n      ", h("div.tabs", {"dataset":{}}, ch({"section":"tabs"}, function () { return [ "\n        ", ch({"section":"tabs","view":"active"}, function () { return h("a.active", {"attributes":{"href":"#"},"dataset":{}}, [ h("span", {"dataset":{"componentProp":"tabDay"}}, ch({"property":"tabDay"}, function () { return [ "Mon" ]; })), h("small", {"dataset":{"componentProp":"tabDate"}}, ch({"property":"tabDate"}, function () { return [ "Jan 26" ]; })) ]); }), "\n        ", ch({"section":"tabs","view":"default"}, function () { return h("a", {"attributes":{"href":"#"},"dataset":{}}, [ h("span", {"dataset":{"componentProp":"tabDay"}}, ch({"property":"tabDay"}, function () { return [ "Tues" ]; })), h("small", {"dataset":{"componentProp":"tabDate"}}, ch({"property":"tabDate"}, function () { return [ "Jan 27" ]; })) ]); }), "\n        ", "\n        ", "\n        ", "\n      " ]; })), "\n    " ]), "\n  " ]), "\n\n    " ]); });
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